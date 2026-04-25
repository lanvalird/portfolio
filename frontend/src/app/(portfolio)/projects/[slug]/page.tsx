import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { GitBranchIcon, Link as LinkIcon } from "lucide-react";

import { useMDXComponents } from "@/mdx-components";

import { getProject } from "@/shared/lib/api";
import { evaluate } from "@mdx-js/mdx";
import { notFound } from "next/navigation";

import { humanizeDate } from "@/shared/lib/utils";
import * as runtime from "react/jsx-runtime";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Проект не найден",
      description: "Запрошенный проект не существует",
    };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.images.cover ? [project.images.cover] : [],
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return notFound();
  }

  const MDXContent = await evaluate(project.markdown, {
    ...runtime,
    useMDXComponents,
  }).then((mdxModule) => mdxModule.default);

  return (
    <article className="mx-auto my-o px-16 py-8 max-w-5xl">
      {project.images.cover && (
        <div className="fixed inset-0 -z-900 opacity-25">
          <Image src={project.images.cover} alt={project.name} fill />
        </div>
      )}
      <div className="relative">
        <h1 className="scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance">
          {project.name}
        </h1>
        <div className="absolute top-1 right-8">
          {project.urls.homepage && (
            <Button variant={"ghost"} asChild>
              <Link href={project.urls.homepage} target="_blank" rel="noopener noreferrer">
                <LinkIcon />
              </Link>
            </Button>
          )}
          {project.urls.github && (
            <Button variant={"ghost"} asChild>
              <Link href={project.urls.github} target="_blank" rel="noopener noreferrer">
                <GitBranchIcon />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <p className="text-muted-foreground text-xl text-center mb-6">{project.description}</p>

      <div className="flex w-full justify-center flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <MDXContent />

      <hr className="mt-8 mb-6" />

      <p className="text-muted-foreground text-base text-center mb-2">
        {humanizeDate(new Date(project.created))} — {humanizeDate(new Date(project.updated))}
      </p>
    </article>
  );
}

export const revalidate = 36000;

export { generateStaticParams } from "./_lib/utils";

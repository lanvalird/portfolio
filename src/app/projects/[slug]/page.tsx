import type { Project } from "@/shared/types";

import { Badge } from "@/shared/components/ui/badge";

import { Button } from "@/shared/components/ui/button";
import { GitBranchIcon, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { useMDXComponents } from "@/mdx-components";

import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getAllProjects(): Promise<Project[]> {
  const response = await fetch(`${process.env.API_URL}/projects`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    return [];
  }

  return await response.json();
}

async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${process.env.API_URL}/projects?slug=${slug}`, {
      cache: "force-cache",
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

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
    // @ts-expect-error
    useMDXComponents,
  }).then((mdxModule) => mdxModule.default);

  return (
    <main className="mx-auto my-o px-16 py-8 max-w-5xl relative">
      <h1 className="scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance">
        {project.name}
      </h1>
      <div className="absolute top-4 right-8">
        {project.urls.homepage && (
          <Button variant={"ghost"} asChild>
            <Link href={project.urls.homepage} target="_blank" rel="noopener noreferrer">
              <LinkIcon />
            </Link>
          </Button>
        )}
        {project.urls.github && (
          <Button variant={"ghost"} asChild>
            <Link href={project.urls.github || project.urls.github!} target="_blank" rel="noopener noreferrer">
              <GitBranchIcon />
            </Link>
          </Button>
        )}
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
    </main>
  );
}

function humanizeDate(date: Date) {
  function whenZero(num: number) {
    return num.toString().length === 2 ? num : `0${num}`;
  }
  const day = whenZero(date.getUTCDate());
  const month = whenZero(date.getUTCMonth() + 1);

  return `${day}.${month}.${date.getUTCFullYear()}`;
}

export const revalidate = 36000;

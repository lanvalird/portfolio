import type { Project } from "@/shared/types";

import { Badge } from "@/shared/components/ui/badge";
import { MDXContent } from "./_ui/mdx-content";

import { notFound } from "next/navigation";
import { Button } from "@/shared/components/ui/button";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

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
    title: `${project.name} • проект`,
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

  return (
    <main className="mx-auto my-o px-16 py-8 max-w-5xl">
      <h1 className="scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance">
        {project.name}{" "}
        {(project.urls.homepage || project.urls.github) && (
          <Button variant={"ghost"} asChild>
            <Link href={project.urls.homepage || project.urls.github!} target="_blank" rel="noopener noreferrer">
              <LinkIcon />
            </Link>
          </Button>
        )}
      </h1>

      <p className="text-muted-foreground text-xl text-center mb-6">{project.description}</p>

      <div className="flex w-full justify-center flex-wrap gap-2">
        {project?.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {project.markdown && <MDXContent mdx={project.markdown} />}
    </main>
  );
}
export const revalidate = 36000;

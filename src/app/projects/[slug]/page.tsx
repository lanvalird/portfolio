"use server";

import type { Project } from "@/shared/types";

import { Badge } from "@/shared/components/ui/badge";
import { MDXContent } from "./_ui/mdx-content";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project: Project | null = await fetch(
    `${process.env.API_URL}/projects/?slug=${slug}`
  )
    .then((res): Promise<Project> => res.json())
    .catch((r) => (console.log(r), null));

  if (!project) {
    return notFound();
  }

  return (
    <main className='mx-auto my-o px-16 py-8 max-w-5xl'>
      <h1 className='scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance'>
        {project.name}
      </h1>

      <p className='text-muted-foreground text-xl text-center mb-6'>
        {project.description}
      </p>

      <div className='flex w-full justify-center flex-wrap gap-2'>
        {project?.tags.map((tag) => (
          <Badge key={tag} variant='outline'>
            {tag}
          </Badge>
        ))}
      </div>

      {project.markdown && <MDXContent mdx={project.markdown} />}
    </main>
  );
}

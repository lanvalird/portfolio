"use client";

import type { Project } from "@/shared/types";

import { useMDXComponents } from "@/mdx-components";
import { use, useEffect, useState } from "react";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { MDXClient } from "next-mdx-remote-client";
import Link from "next/link";

import {
  type SerializeResult,
  serialize,
} from "next-mdx-remote-client/serialize";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params);

  const [project, setProject] = useState<Project | null>(null);
  const [mdxSource, setMdxSource] = useState<SerializeResult | null>(null);

  const components = useMDXComponents();

  useEffect(() => {
    fetch(`/api/projects/?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [slug]);

  useEffect(() => {
    const render = async () => {
      if (!(project && project.markdown)) return;
      if (project.markdown === "") return;

      const mdxSource: SerializeResult = await serialize({
        source: project.markdown,
      });
      return setMdxSource(mdxSource);
    };

    render();
  }, [project, project?.markdown]);

  if (mdxSource && "error" in mdxSource) {
    return (
      <main className="flex flex-col gap-12 py-16 px-4 justify-center items-center aspect-square min-h-screen mx-auto my-0">
        <h1 className="scroll-m-20 text-[12rem] font-semibold tracking-tight">
          Ошибка {mdxSource.error.name}: {mdxSource.error.message}
        </h1>

        <Button className="px-16 py-4" variant={"ghost"} asChild>
          <Link href={"/"}>Быстро домой!</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto my-o px-16 py-8 max-w-5xl">
      <h1 className="scroll-m-20 my-8 text-center text-4xl font-extrabold tracking-tight text-balance">
        {project?.name || "загружаемый"}
      </h1>

      <p className="text-muted-foreground text-xl text-center mb-6">
        {project?.description || "Данные этого материала подгружаются"}
      </p>

      <div className="flex w-full justify-center flex-wrap gap-2">
        {project?.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {mdxSource?.compiledSource && (
        <MDXClient {...mdxSource} components={components} />
      )}
    </main>
  );
}

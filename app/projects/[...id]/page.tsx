import { notFound } from "next/navigation";

import Link from "next/link";

import projects from "../_db/projects";

export function generateStaticParams() {
  return [{ id: ["farysd"] }, { id: ["farysd", "bot"] }];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  const { default: Project } = await import(
    `@/content/projects/${id.join("/")}.mdx`
  );

  return (
    <main className="max-w-[1270px] flex flex-col gap-4 pt-8 px-16 min-h-screen mx-auto my-0 text-base font-normal">
      <Project />
    </main>
  );
}

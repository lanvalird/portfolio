import type { Metadata } from "next/types";

import projects from "../_db/projects";

type LayoutProps = {
  params: Promise<{ id: string[] }>;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.id === slug);

  if (!project) return {};

  return {
    title: project.name,
    description: `Описание проекта: ${project.description}`,
  };
}

export async function generateStaticParams() {
  return projects.map(({ id }) => ({
    id: id.split("/"),
  }));
}

export default function ProjectLayout({ children }: LayoutProps) {
  return children;
}

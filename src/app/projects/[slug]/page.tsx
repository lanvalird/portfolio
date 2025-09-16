"use client";

import type { Project } from "@/shared/types";

import { use, useEffect, useState } from "react";

export default function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(`/api/projects/?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  useEffect(() => {
    console.log(slug, project);
  }, [project]);

  return (
    <main className='grid grid-cols-1 justify-start sm:grid-cols-3 gap-12 p-8'>
      {project?.name || "Loading..."}
    </main>
  );
}

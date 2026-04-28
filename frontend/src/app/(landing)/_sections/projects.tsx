import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import { Project } from "@/shared/types";
import Image from "next/image";

import { getAllProjects } from "@/shared/lib/api";

export async function HomeProjectsSection() {
  const projects = await getAllProjects();

  return (
    <section className={"min-h-screen flex flex-col p-4 sm:grid lg:grid-cols-2 items-stretch gap-4 lg:gap-10"}>
      <h2 className={"text-4xl text-center col-span-full"}>Welcome to my general projects</h2>

      {projects.slice(0, 6).map((project) => (
        <Slot key={project.id} project={project} />
      ))}

      <Button variant={"ghost"} className={"w-full bg-card max-w-4xl justify-self-center col-span-full"} asChild>
        <Link href={"/projects"}>See all</Link>
      </Button>
    </section>
  );
}

function Slot({ project }: { project: Project }) {
  const logotype = project.images.logotype;
  const cover = project.images.cover;
  return (
    <div className="relative w-full h-min py-2 px-3 content-center rounded-xl bg-card">
      <div className="absolute -z-1 -left-4 -top-4 inline-block aspect-square w-12 h-auto sm:w-auto sm:h-34 rounded-lg overflow-clip bg-secondary/80" />
      <div className="flex flex-col gap-2">
        <div className="relative inline-block aspect-square w-auto h-12 sm:w-auto sm:h-34 rounded-lg overflow-clip bg-secondary/80">
          {cover && (
            <Image
              src={cover}
              alt={`Cover of project "${project.name}"`}
              height={144}
              width={432}
              className="absolute w-full h-full object-cover"
            />
          )}
          {logotype && (
            <Image
              src={logotype}
              alt={`Logotype of project "${project.name}"`}
              height={160}
              width={160}
              className="absolute h-full w-auto"
            />
          )}
        </div>
        <div className="flex w-full gap-2 items-center text-xl font-medium">
          <h3 className={"w-full line-clamp-1"}>{project.name}</h3>
          <span className="inline-block aspect-square w-auto h-2 rounded-full bg-current" />
          <span>{new Date(project.created).getFullYear()}</span>
        </div>
        <p className="line-clamp-2 h-min-max">{project.description}</p>
        <Button variant="ghost" asChild>
          <Link href={`/projects/${project.slug}`}>projects → {project.slug}</Link>
        </Button>
      </div>
    </div>
  );
}

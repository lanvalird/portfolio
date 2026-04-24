import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import { Project } from "@/shared/types";
import Image from "next/image";

import { getAllProjects } from "@/shared/lib/api";

export async function HomeProjectsSection() {
  const projects = await getAllProjects();

  return (
    <section className={"h-screen flex flex-col p-4 sm:grid lg:grid-cols-2 items-stretch gap-4 lg:gap-10"}>
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
  return (
    <div className={"w-full h-min py-2 px-3 flex gap-4 content-center rounded-xl bg-card"}>
      <div className="inline-block aspect-square w-auto h-34 rounded-lg overflow-clip bg-secondary/80">
        {logotype && <Image src={logotype} width={320} height={320} alt={`Logotype of project "${project.name}"`} />}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-2 items-center text-xl font-medium">
          <h3 className={"w-full line-clamp-1"}>{project.name}</h3>
          <span className="inline-block aspect-square w-auto h-2 rounded-full bg-current" />
          <span>{new Date(project.created).getFullYear()}</span>
        </div>
        <p className="line-clamp-2 h-min-max">{project.description}</p>
        <Button variant="ghost">
          <Link href={`/projects/${project.slug}`}>See more</Link>
        </Button>
      </div>
    </div>
  );
}

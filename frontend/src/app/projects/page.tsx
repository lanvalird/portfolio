import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ReloadButton } from "./_ui/reload-button";

import { getAllProjects } from "@/shared/lib/api";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="grid grid-cols-1 justify-start text-center sm:grid-cols-2 lg:grid-cols-3 gap-12 p-8">
      {projects.length === 0 && (
        <>
          Нет доступных проектов
          <ReloadButton />
        </>
      )}

      {projects.map((project) => (
        <Card
          key={project.slug}
          className="overflow-hidden"
          style={{
            background:
              "radial-gradient(closest-corner at 50% 2em, color-mix(in oklab,var(--primary)40%,transparent), transparent 30%",
          }}
        >
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <div className="flex w-full flex-wrap justify-center mt-4 -mb-2 gap-2">
              {project?.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="h-full relative">
            <CardDescription>{project.description}</CardDescription>
            {project.images.cover && (
              <Image
                src={project.images.cover}
                alt={project.name}
                width={400}
                height={225}
                className="absolute inset-0 -z-900 aspect-video cover opacity-25 mt-4 bg-cover bg-center"
              />
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"secondary"} asChild>
              <Link href={`/projects/${project.slug}`}>Посмотрим!</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Проекты",
    description: "Проекты Валентина (lanvalird) Бёрда",
  };
}

export const revalidate = 36000;

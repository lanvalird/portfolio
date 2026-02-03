import type { Project } from "@/shared/types";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";

async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/projects`, {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="grid grid-cols-1 justify-start sm:grid-cols-2 md:grid-cols-3 gap-12 p-8">
      {projects.length === 0 && "Нет доступных проектов"}

      {projects.map((project) => (
        <Card key={project.slug}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <div className="flex w-full flex-wrap mt-4 -mb-2 gap-2">
              {project?.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="h-full">
            {project.images.cover && (
              <Image
                src={project.images.cover}
                alt={project.name}
                width={400}
                height={225}
                className="aspect-video cover mb-4 bg-cover bg-center rounded-lg overflow-hidden"
              />
            )}
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"secondary"} asChild>
              <Link href={`/projects/${project.slug}`}>Посмотрим!</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: "Проекты",
    description: "Проекты Валентина (lanvalird) Бёрда",
  };
}

export const revalidate = 36000;

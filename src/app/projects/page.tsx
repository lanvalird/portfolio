"use client";

import type { Project } from "@/shared/types";

import { useEffect, useState } from "react";

import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setIsError(true));
  }, []);

  return (
    <main className="grid grid-cols-1 justify-start sm:grid-cols-3 gap-12 p-8">
      {isError && "Ошибка вытягивания данных с сервера"}

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
                alt={""}
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

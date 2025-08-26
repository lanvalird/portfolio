"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { pages as projects } from './_config';

export default function ProjectsPage() {
  return (
    <main className="grid grid-cols-1 justify-start sm:grid-cols-3 gap-12 p-8">
      {projects.map((project) => (
        <Card key={project}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
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

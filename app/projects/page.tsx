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

const projects = [
  "farysd",
  "kristy",
  "ferisian-book",
  "teams",
  "personal-lottop",
];

export default function ProjectsPage() {
  return (
    <main className="grid grid-cols-1 justify-start sm:grid-cols-3 gap-12 p-8">
      {projects.map((project) => (
        <Card key={project}>
          <CardHeader>
            <CardTitle>{project}</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <CardDescription>{project}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"secondary"} asChild>
              <Link href={`/projects/${project.id}`}>Посмотрим!</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}

import type { Metadata } from "next/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import projects from "./_db/projects";

export const metadata: Metadata = {
  title: "Проекты",
};

export default function ProjectPage() {
  return (
    <main className='grid grid-cols-1 justify-start sm:grid-cols-3 gap-12 p-8'>
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}

import { InformationCard } from "@/shared/components/information-card";
import { ReloadButton } from "./_ui/reload-button";

import { getAllProjects } from "@/shared/lib/api";

export const revalidate = 10_800; // 3 hours

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
        <InformationCard
          key={project.id}
          title={project.name}
          content={project.description}
          badges={project.tags}
          backgroundImageSrc={project.images.cover}
          backgroundImageAlt={`Cover image of ${project.name}`}
          link={`/projects/${project.slug}`}
        />
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

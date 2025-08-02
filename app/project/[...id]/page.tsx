import { notFound } from "next/navigation";

import Link from "next/link";

import projects from "../_db/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id.join("/"));

  if (!project) {
    notFound();
  }

  return (
    <main className='max-w-[1270px] flex flex-col gap-4 pt-8 px-16 min-h-screen mx-auto my-0 text-base font-normal'>
      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>
        {project.name}
      </h1>

      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        {project.description}
      </p>

      {project.requirements && (
        <>
          <h2 className='scroll-m-20 border-b mt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Требования к проекту
          </h2>

          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            {project.requirements.map((requrement, index) => (
              <li key={index}>{requrement}</li>
            ))}
          </ul>
        </>
      )}

      {project.subprojects && (
        <>
          <h2 className='scroll-m-20 border-b mt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Вложенные проекты
          </h2>

          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            {project.subprojects.map((subproject) => (
              <li key={subproject}>
                <Link href={`/project/${subproject}`}>{subproject}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

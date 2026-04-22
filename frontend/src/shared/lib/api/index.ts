import type { Project } from "@/shared/types";

const REVALIDATE_TIME_IN_SECONDS = 3 * 60 * 60;

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${process.env.API_URL}/projects?slug=${slug}`, {
      cache: "force-cache",
      next: {
        tags: [`projects__${slug}`],
        revalidate: REVALIDATE_TIME_IN_SECONDS,
      },
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/projects`, {
      cache: "force-cache",
      next: {
        tags: [`projects`],
        revalidate: REVALIDATE_TIME_IN_SECONDS,
      },
    });
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

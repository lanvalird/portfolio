import type { Project } from "@/shared/types";

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${process.env.API_URL}/projects?slug=${slug}`, {
      cache: "force-cache",
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
    });
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

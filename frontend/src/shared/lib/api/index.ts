import type { Project, Team } from "@/shared/types";

import {
  BACKEND_URL,
  REVALIDATE_TIME_FOR_PROJECTS_IN_SECONDS,
  REVALIDATE_TIME_FOR_TEAMS_IN_SECONDS,
  TAGS_PROJECT_BY_SLUG,
  TAGS_PROJECTS,
  TAGS_TEAM_BY_SLUG,
  TAGS_TEAMS,
} from "../constants";

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${BACKEND_URL}/projects?slug=${slug}`, {
      cache: "force-cache",
      next: {
        tags: [TAGS_PROJECTS, TAGS_PROJECT_BY_SLUG.replaceAll("{slug}", slug)],
        revalidate: REVALIDATE_TIME_FOR_PROJECTS_IN_SECONDS,
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
    const response = await fetch(`${BACKEND_URL}/projects`, {
      cache: "force-cache",
      next: {
        tags: [TAGS_PROJECTS],
        revalidate: REVALIDATE_TIME_FOR_PROJECTS_IN_SECONDS,
      },
    });
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

export async function getTeam(slug: string): Promise<Team | null> {
  try {
    const response = await fetch(`${BACKEND_URL}/teams?slug=${slug}`, {
      cache: "force-cache",
      next: {
        tags: [TAGS_TEAMS, TAGS_TEAM_BY_SLUG.replaceAll("{slug}", slug)],
        revalidate: REVALIDATE_TIME_FOR_TEAMS_IN_SECONDS,
      },
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export async function getAllTeams(): Promise<Team[]> {
  try {
    const response = await fetch(`${BACKEND_URL}/teams`, {
      cache: "force-cache",
      next: {
        tags: [TAGS_TEAMS],
        revalidate: REVALIDATE_TIME_FOR_TEAMS_IN_SECONDS,
      },
    });
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

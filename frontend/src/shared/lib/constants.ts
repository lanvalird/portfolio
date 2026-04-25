// FETCH AND API

export const BACKEND_URL = process.env.API_URL;

export const DEFAULT_REVALIDATE_TIME_IN_SECONDS = 3 * 60 * 60;

export const REVALIDATE_TIME_FOR_PROJECTS_IN_SECONDS = DEFAULT_REVALIDATE_TIME_IN_SECONDS;
export const REVALIDATE_TIME_FOR_TEAMS_IN_SECONDS = DEFAULT_REVALIDATE_TIME_IN_SECONDS;
export const REVALIDATE_TIME_FOR_SKILLS_IN_SECONDS = DEFAULT_REVALIDATE_TIME_IN_SECONDS;

export const TAGS_PROJECTS = "projects";
export const TAGS_PROJECT_BY_SLUG = "projects__{slug}";
export const TAGS_TEAMS = "teams";
export const TAGS_TEAM_BY_SLUG = "teams__{slug}";
export const TAGS_SKILLS = "skills";
export const TAGS_SKILLS_BY_CATEGORY = "skills__{category}";

// COMPONENTS

export const HEADER_NAVIGATION_LINKS = ["/projects", "/skills", "/teams", "/links"];

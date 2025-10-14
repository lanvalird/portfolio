import type { Skill } from "./types";

export enum DEVELOPMENT_TYPE {
  FULLSTACK = "Fullstack",
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  NATIVE = "Native",
  MOBILE = "Mobile",
}

export function addCategoryForEach(list: Skill[], category: string) {
  return list.map((element) => ({
    ...element,
    categories: [category, ...element.categories],
  }));
}

export function addNeededCategoriesForEach(list: Skill[], categories: string[]) {
  categories.forEach((category) => (list = addCategoryForEach(list, category)));

  return list;
}

export function addDevelopmentCategoryForEach(list: Skill[], category: DEVELOPMENT_TYPE) {
  return addCategoryForEach(list, category);
}

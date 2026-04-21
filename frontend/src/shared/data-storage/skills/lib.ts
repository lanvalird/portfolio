import type { Skill } from "./types";

// biome-ignore lint/suspicious/noConstEnum: code optimization
export const enum DEVELOPMENT_TYPE {
  FULLSTACK = "Fullstack",
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  NATIVE = "Native",
  MOBILE = "Mobile",
}

export function addCategoryForEach<T extends string>(list: Skill[], category: T): Skill[] {
  const newList: Skill[] = [...list];

  return newList.map((element) => ({
    ...element,
    categories: [category, ...element.categories],
  }));
}

export function addCategoriesForEach<T extends string>(list: Skill[], categories: T[]): Skill[] {
  let newList = [...list];

  categories.forEach((category) => {
    newList = addCategoryForEach<T>(newList, category);
  });

  return newList;
}

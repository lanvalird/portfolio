import type { Skill } from "../types";

import { DEVELOPMENT_TYPE, addDevelopmentCategoryForEach } from "../lib";

export const onlyFullstack: Skill[] = addDevelopmentCategoryForEach(
  [
    {
      name: "Zod",
      categories: ["Data Validation"],
      description: "Библиотека для валидации данных через схему на TypeScript (Node.js)",
    },
  ],
  DEVELOPMENT_TYPE.FULLSTACK,
);

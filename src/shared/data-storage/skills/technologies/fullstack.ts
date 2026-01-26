import type { Skill } from "../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../lib";
import { onlyRepository } from "./only";

export const onlyFullstack: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "Zod",
      categories: ["Data Validation"],
      description: "Библиотека для валидации данных через схему на TypeScript (Node.js)",
    },
    {
      name: "Nginx",
      categories: ["Server"],
      description: "Nginx",
    },
    ...onlyRepository,
  ],
  DEVELOPMENT_TYPE.FULLSTACK,
);

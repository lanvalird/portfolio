import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../../lib";

export const onlyBackend: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "PHP",
      categories: [],
      description: "С него я начинал свой путь, но сейчас вряд ли что-то напишу на нём",
    },
    {
      name: "Go",
      categories: [],
      description: "Практиковался с ним",
    },
    {
      name: "Python",
      categories: [],
      description: "Знаю совсем базовые вещи, так как не в приоритете",
    },
  ],
  DEVELOPMENT_TYPE.BACKEND,
);

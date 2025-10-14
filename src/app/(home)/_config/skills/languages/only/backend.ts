import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addDevelopmentCategoryForEach } from "../../lib";

export const onlyBackend: Skill[] = addDevelopmentCategoryForEach(
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

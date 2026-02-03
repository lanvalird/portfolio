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
      name: "Rust",
      categories: [DEVELOPMENT_TYPE.NATIVE],
      description: "Высокопроизводительный и типобезопасный язык программирования",
    },
    {
      name: "Go",
      categories: [],
      description: "Практиковался с ним",
    },
    {
      name: "Python",
      categories: [],
      description: "Использую для скриптов, автоматизации и небольших бэкенд-проектов (FastAPI)",
    },
  ],
  DEVELOPMENT_TYPE.BACKEND,
);

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
      name: "Prettier",
      categories: ["Code Quality", "Formatter"],
      description: "Был основным форматером долгое время",
    },
    {
      name: "ESLint",
      categories: ["Code Quality"],
      description: "Основной линтер для JavaScript/TypeScript проектов",
    },
    {
      name: "Biome",
      categories: ["Code Quality", "Formatter"],
      description: "Использую как замену Prettier + ESLint. Быстрый и удобный",
    },

    {
      name: "Nginx",
      categories: ["Server"],
      description: "Nginx",
    },
    {
      name: "Docker Compose",
      categories: ["Container", "DevOps"],
      description: "Оркестрация многоконтейнерных приложений",
    },
    {
      name: "GitHub Actions",
      categories: ["CI/CD", "DevOps"],
      description: "Пайплайны для автоматизации",
    },

    {
      name: "Vercel",
      categories: ["Hosting", "Frontend"],
      description: "Деплой Next.js и статических сайтов",
    },
    {
      name: "Netlify",
      categories: ["Hosting", "Frontend"],
      description: "Альтернативный хостинг для фронтенда",
    },

    {
      name: "Vitest",
      categories: ["Unit Testing"],
      description: "Любимый тест-раннер для JS/TS проектов. Быстрый и с отличной поддержкой TypeScript",
    },
    {
      name: "Jest",
      categories: ["Unit Testing"],
      description: "Использую в проектах, где уже настроен Jest или требуется специфичная функциональность",
    },

    ...onlyRepository,
  ],
  DEVELOPMENT_TYPE.FULLSTACK,
);

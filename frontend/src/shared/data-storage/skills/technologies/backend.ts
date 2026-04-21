import type { Skill } from "../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../lib";

export const onlyBackend: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    // Kotlin && Java
    {
      name: "Ktor",
      categories: [DEVELOPMENT_TYPE.NATIVE],
      description: "Фреймворк для создания бэкенд-приложений на Kotlin",
    },
    {
      name: "Spring Boot",
      categories: [],
      description:
        "Фреймворк для создания серьёзных бэкенд-сервисов и приложений в общем на Java. Есть базовое понимание",
    },

    // Python
    {
      name: "FastAPI",
      categories: [],
      description: "Фреймворк для создания быстрого бэкенда (Python)",
    },

    // Node.js
    {
      name: "Express.js",
      categories: [],
      description: "Лёгкий фреймворк для создания бэкенда на Node.js",
    },
    {
      name: "Nest.js",
      categories: [],
      description: "Тот самый серьёзный бэкенд на Node.js...",
    },

    // ORMs
    {
      name: "TypeORM",
      categories: ["ORM"],
      description: "ORM для работа на Node.js",
    },
    {
      name: "Prisma",
      categories: ["ORM"],
      description: "ORM для работа на Node.js",
    },

    // Discord APIs
    {
      name: "discord.js",
      categories: ["Bot", "API"],
      description: "Библиотека на Node.js для работы с Discord API",
    },
    {
      name: "JDA (Java Discord API)",
      categories: ["Bot", "API"],
      description: "Библиотека на Java для работы с Discord API",
    },
    {
      name: "discord.py",
      categories: ["Bot", "API"],
      description: "Библиотека на Python для работы с Discord API",
    },

    //
    {
      name: "Auth.js (NextAuth.js)",
      categories: [],
      description: "Фреймворк для аунтефикации и авторизации",
    },
    {
      name: "Supabase",
      categories: [],
      description: "Готовое решение для бэкенда проекта с базой данных на PostgreSQL",
    },

    // Databases
    {
      name: "PostgreSQL",
      categories: ["Database", "SQL"],
      description: "Основная реляционная БД для продакшена",
    },
    {
      name: "MySQL",
      categories: ["Database", "SQL"],
      description: "Для legacy-проектов и простых задач",
    },
    {
      name: "SQLite",
      categories: ["Database", "SQL", "Embedded"],
      description: "Лёгкая embedded-БД для локальных приложений",
    },
  ],
  DEVELOPMENT_TYPE.BACKEND,
);

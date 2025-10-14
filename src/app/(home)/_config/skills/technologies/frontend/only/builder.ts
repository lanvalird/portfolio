import type { Skill } from "../../../types";

import { addCategoryForEach } from "../../../lib";

export const onlyBuilder: Skill[] = addCategoryForEach(
  [
    {
      name: "Next.js",
      categories: [],
      description: "Серверно-клиентский фреймворк на базе React",
    },
    {
      name: "Astro",
      categories: [],
      description: "Content-driven framework. Поддерживает файлы формата .astro, .jsx, .vue и тд",
    },
    {
      name: "Nuxt",
      categories: [],
      description: "Серверно-клиентский фреймворк на базе Vue",
    },
    {
      name: "Vite",
      categories: [],
      description: "Сборщик JavaScript-кода в один или более бандлов",
    },
    {
      name: "Webpack",
      categories: [],
      description: "Сборщик JavaScript-кода в один или более бандлов",
    },
    {
      name: "Rsbuild",
      categories: [],
      description: "Сборщик JavaScript-кода в один или более бандлов, написанный на Rust",
    },
    {
      name: "Rspack",
      categories: [],
      description: "Сборщик JavaScript-кода в один или более бандлов, написанный на Rust",
    },
    {
      name: "Rslib",
      categories: [],
      description: "Библиотека, используемая в Rspack и Rslib, написанный на Rust",
    },
  ],
  "Builder",
);

import type { Skill } from "../types";

import { DEVELOPMENT_TYPE, addDevelopmentCategoryForEach } from "../lib";

export const onlyFrontend: Skill[] = addDevelopmentCategoryForEach(
  [
    // App Frameworks or Libraries, or Builders
    {
      name: "Next.js",
      categories: ["Builder"],
      description: "Серверно-клиентский фреймворк на базе React",
    },
    {
      name: "Astro",
      categories: ["Builder"],
      description: "Content-driven framework. Поддерживает файлы формата .astro, .jsx, .vue и тд",
    },
    {
      name: "React",
      categories: [],
      description: "Клиентская библиотека для создания интерфейсов",
    },
    {
      name: "Preact",
      categories: [],
      description: "Легковесная и быстрая альтернатива React",
    },
    {
      name: "Nuxt",
      categories: ["App Builder"],
      description: "Серверно-клиентский фреймворк на базе Vue",
    },
    {
      name: "Vue",
      categories: [],
      description: "Клиентская библиотека для создания интерфейсов",
    },

    // Bundlers
    {
      name: "Vite",
      categories: ["Builder"],
      description: "Сборщик JavaScript-кода в один или более бандлов",
    },
    {
      name: "Webpack",
      categories: ["Builder"],
      description: "Сборщик JavaScript-кода в один или более бандлов",
    },
    {
      name: "Rsbuild",
      categories: ["Builder"],
      description: "Сборщик JavaScript-кода в один или более бандлов, написанный на Rust",
    },
    {
      name: "Rspack",
      categories: ["Builder"],
      description: "Сборщик JavaScript-кода в один или более бандлов, написанный на Rust",
    },
    {
      name: "Rslib",
      categories: ["Builder"],
      description: "Библиотека, используемая в Rspack и Rslib, написанный на Rust",
    },

    // CSS
    {
      name: "TailwindCSS",
      categories: ["Styling"],
      description: "Фреймворк для стилизации компонентов",
    },
    {
      name: "Boostrap 4&5",
      categories: ["Styling"],
      description: "Фреймворк для стилизации компонентов",
    },

    // React UI Frameworks
    {
      name: "React Bootstrap",
      categories: ["Styling"],
      description: "Фреймворк для создания приложений на основе React+Boostrap",
    },
    {
      name: "Material UI (MUI)",
      categories: ["Styling"],
      description: "Фреймворк на основе метадологии Materail Design",
    },
    {
      name: "Ant Design",
      categories: ["Styling"],
      description: "Фреймворк на базе React",
    },
    {
      name: "Chakra UI",
      categories: ["Styling"],
      description: "Фреймворк на базе React",
    },
    {
      name: "HeroUI (NextUI)",
      categories: ["Styling"],
      description: "Фреймворк на базе React",
    },
    {
      name: "Radix UI",
      categories: ["Styling"],
      description: "Нестилизованная библиотека компонентов для создания своего собственного UI",
    },

    // Documentations
    {
      name: "Nextra",
      categories: ["Documantation"],
      description: "Решение под Next.js для разработки документации",
    },
    {
      name: "Fumadocs",
      categories: ["Documantation"],
      description: "Решение под Next.js для разработки документации",
    },
    {
      name: "Docusaurus",
      categories: ["Documantation"],
      description: "Решение под React для разработки документации",
    },
    {
      name: "Starlight (@astrojs/starlight)",
      categories: ["Documantation"],
      description: "Решение под Astro для разработки документации",
    },

    //
    {
      name: "shadcn/ui",
      categories: ["Styling"],
      description: "Технология создания интерфейсов",
    },
    {
      name: "clsx",
      categories: ["Styling"],
      description: "Пакет для работы с CSS-классами внутри className атрибута (React/JSX)",
    },
  ],
  DEVELOPMENT_TYPE.FRONTEND,
);

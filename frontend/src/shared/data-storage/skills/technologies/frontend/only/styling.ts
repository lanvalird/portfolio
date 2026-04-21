import type { Skill } from "../../../types";

import { addCategoryForEach } from "../../../lib";

const uiFrameworksAndLibs: Skill[] = addCategoryForEach(
  [
    {
      name: "Boostrap 4&5",
      categories: [],
      description: "UI-фреймворк для стилизации компонентов",
    },
    {
      name: "React Bootstrap",
      categories: [],
      description: "UI-фреймворк для создания приложений на основе React+Boostrap",
    },
    {
      name: "Material UI (MUI)",
      categories: [],
      description: "UI-фреймворк на основе метадологии Materail Design",
    },
    {
      name: "Ant Design",
      categories: [],
      description: "UI-фреймворк на базе React",
    },
    {
      name: "Chakra UI",
      categories: [],
      description: "UI-фреймворк на базе React",
    },
    {
      name: "HeroUI (NextUI)",
      categories: [],
      description: "UI-фреймворк на базе React",
    },
    {
      name: "Radix UI",
      categories: [],
      description: "Нестилизованная библиотека компонентов для создания своего собственного UI",
    },
  ],
  "UI Framework",
);

export const onlyStyling: Skill[] = addCategoryForEach(
  [
    {
      name: "TailwindCSS",
      categories: [],
      description: "Фреймворк для стилизации компонентов",
    },
    ...uiFrameworksAndLibs,
    {
      name: "shadcn/ui",
      categories: [],
      description: "Технология создания интерфейсов",
    },
    {
      name: "clsx",
      categories: [],
      description: "Пакет для работы с CSS-классами внутри className атрибута (React/JSX)",
    },
  ],
  "Styling",
);

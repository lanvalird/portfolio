import type { Skill } from "../../../types";

import { addCategoryForEach } from "../../../lib";

export const onlyDocumentation: Skill[] = addCategoryForEach(
  [
    {
      name: "Nextra",
      categories: [],
      description: "Решение под Next.js для разработки документации",
    },
    {
      name: "Fumadocs",
      categories: [],
      description: "Решение под Next.js для разработки документации",
    },
    {
      name: "Docusaurus",
      categories: [],
      description: "Решение под React для разработки документации",
    },
    {
      name: "Starlight (@astrojs/starlight)",
      categories: [],
      description: "Решение под Astro для разработки документации",
    },
  ],
  "Documantation",
);

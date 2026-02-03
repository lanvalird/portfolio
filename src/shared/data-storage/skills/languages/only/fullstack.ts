import type { Skill } from "../../types";

import { addCategoryForEach, DEVELOPMENT_TYPE } from "../../lib";

export const onlyFullstack: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "JavaScript",
      categories: [],
      description: "Главный язык для веба :p",
    },
    {
      name: "JavaScript/TypeScript",
      categories: [],
      description: "Любимый язык для веб-разработки",
    },
  ],
  DEVELOPMENT_TYPE.FULLSTACK,
);

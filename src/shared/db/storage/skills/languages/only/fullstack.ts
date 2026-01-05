import type { Skill } from "../../types";

import { addCategoryForEach, DEVELOPMENT_TYPE } from "../../lib";

export const onlyFullstack: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "JS/TypeScript",
      categories: [],
      description: "Главные языки для веба :p",
    },
  ],
  DEVELOPMENT_TYPE.FULLSTACK,
);

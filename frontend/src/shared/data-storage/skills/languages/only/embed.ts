import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../../lib";

export const onlyEmbed: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "Lua",
      categories: [],
      description: "Язык, с которым приходилось ранее работать",
    },
  ],
  DEVELOPMENT_TYPE.NATIVE,
);

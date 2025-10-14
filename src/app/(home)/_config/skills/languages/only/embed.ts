import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addDevelopmentCategoryForEach } from "../../lib";

export const onlyEmbed: Skill[] = addDevelopmentCategoryForEach(
  [
    {
      name: "Lua",
      categories: [],
      description: "Язык, с которым приходилось ранее работать",
    },
  ],
  DEVELOPMENT_TYPE.NATIVE,
);

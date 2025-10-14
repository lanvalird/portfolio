import type { Skill } from "../../../types";

import { HOBBY_TYPE, PROGRAMM_TYPE } from "../../";
import { addCategoryForEach } from "../../../lib";

import { onlyIde, onlyGameDevelopment } from "./only";

export const onlyProgramming: Skill[] = addCategoryForEach(
  [
    {
      name: "Docker Desktop",
      categories: [PROGRAMM_TYPE.DEVELOPMENT_TOOLS],
      description: "Для разработки под/с Docker",
    },

    ...onlyIde,
    ...onlyGameDevelopment,
  ],
  HOBBY_TYPE.PROGRAMMING,
);

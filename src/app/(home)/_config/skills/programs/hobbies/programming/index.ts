import type { Skill } from "../../../types";

import { addCategoryForEach } from "../../../lib";
import { PROGRAMM_TYPE, HOBBY_TYPE } from "../../enums";

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

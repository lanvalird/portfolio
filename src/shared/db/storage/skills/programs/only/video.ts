import type { Skill } from "../../types";

import { PROGRAMM_TYPE } from "../enums";
import { addCategoryForEach } from "../../lib";

export const onlyVideo: Skill[] = addCategoryForEach(
  [
    {
      name: "Windows Film Maker",
      categories: [],
      description: "Старенькая программа, даже не уверен, что название правильно написал",
    },
    {
      name: "Movavi Video Editor",
      categories: [],
      description: "Мяу?",
    },
    {
      name: "Adobe Premiere Pro",
      categories: [],
      description: "Профессиональная программа для монтажа, и пожалуй любимая из всех возможных",
    },

    {
      name: "Adobe After Effects",
      categories: [],
      description: "Профессиональная программа для работы с видео и эффектами",
    },
  ],
  PROGRAMM_TYPE.VIDEO,
);

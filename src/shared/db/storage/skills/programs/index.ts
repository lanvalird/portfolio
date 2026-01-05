import type { Skill } from "../types";

import { HOBBY_TYPE, PROGRAMM_TYPE } from "./enums";

import { onlyModelling, onlyMusic, onlyProgramming } from "./hobbies";
import { onlyDocuments, onlyVideo } from "./only";

export const programs: Skill[] = [
  // Design
  {
    name: "Figma",
    categories: [HOBBY_TYPE.DESIGN, PROGRAMM_TYPE.SITES],
    description: "Программа для составления пользовательских интерфейсов",
  },
  {
    name: "Adode Photoshop",
    categories: [HOBBY_TYPE.DESIGN, HOBBY_TYPE.PHOTOGRAPHY],
    description: "Фотошоп есть фотошоп. Сейчас использую Krita",
  },
  {
    name: "Krita",
    categories: [HOBBY_TYPE.ART],
    description: "Программа для рисования и, пожалуй, любимая",
  },
  {
    name: "Gimp",
    categories: [HOBBY_TYPE.DESIGN, HOBBY_TYPE.PHOTOGRAPHY, HOBBY_TYPE.ART],
    description: "Программа для редактирования изображений",
  },

  ...onlyDocuments,
  ...onlyModelling,
  ...onlyMusic,
  ...onlyVideo,

  // Video Record and Streaming
  {
    name: "OBS",
    categories: [PROGRAMM_TYPE.VIDEO, PROGRAMM_TYPE.STREAMING],
    description: "Программа для записи видео",
  },
  {
    name: "Twitch Studio",
    categories: [PROGRAMM_TYPE.STREAMING],
    description: "Программа для транслирования прямиком на платформу Twitch",
  },

  // Subtitles
  {
    name: "Aegisub",
    categories: [PROGRAMM_TYPE.SUBTITLES],
    description: "Программа для редактирования субтитров",
  },
  {
    name: "Subtitle Edit",
    categories: [PROGRAMM_TYPE.SUBTITLES],
    description: "Альтернативная для меня программа для работы с субтитрами",
  },

  ...onlyProgramming,
];

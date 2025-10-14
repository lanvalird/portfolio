import type { Skill } from "../types";

import { onlyModelling, onlyMusic, onlyProgramming } from "./hobbies";
import { onlyDocuments, onlyVideo } from "./only";

export enum HOBBY_TYPE {
  DESIGN = "Design",
  PROGRAMMING = "Programming",
  PHOTOGRAPHY = "Photography",
  ART = "Art",
  MUSIC = "Music",
  MODELING = "Modeling",
}

export enum PROGRAMM_TYPE {
  SITES = "Sites",
  DOCUMENTS = "Documents",
  DAW = "DAW",
  VIDEO = "Video",
  STREAMING = "Streaming",
  SUBTITLES = "Subtitles",
  IDE = "IDE",
  GAME_ENGINE = "Game Engine",
  DEVELOPMENT_TOOLS = "Development Tools",
}

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

import type { Skill } from "../types";

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
    description: "Программа для составления пользовательских интерфейсов"
  },
  {
    name: "Adode Photoshop",
    categories: [HOBBY_TYPE.DESIGN, HOBBY_TYPE.PHOTOGRAPHY],
    description: "Фотошоп есть фотошоп. Сейчас использую Krita"
  },
  {
    name: "Krita",
    categories: [HOBBY_TYPE.ART],
    description: "Программа для рисования и, пожалуй, любимая"
  },
  {
    name: "Gimp",
    categories: [HOBBY_TYPE.DESIGN, HOBBY_TYPE.PHOTOGRAPHY, HOBBY_TYPE.ART],
    description: "Программа для редактирования изображений"
  },

  // Text
  {
    name: "Obsidian",
    categories: [PROGRAMM_TYPE.DOCUMENTS],
    description: "Программа для работы с Markdown (и не только)"
  },
  {
    name: "Notion",
    categories: ["Text Editor", PROGRAMM_TYPE.DOCUMENTS],
    description: "Слова излишни."
  },
  {
    name: "Anytype",
    categories: [PROGRAMM_TYPE.DOCUMENTS],
    description: "В поисках альтернативы Notion наткнулся на это. Использую его"
  },
  {
    name: "LibreOffice",
    categories: [PROGRAMM_TYPE.DOCUMENTS],
    description: "Для работы выбрал его, хотя ранее пробовал и Google Documents, и Microsoft Office, и OpenOffice"
  },

  // Modeling
  {
    name: "Blender",
    categories: [HOBBY_TYPE.MODELING],
    description: "Программа для моделирования"
  },
  {
    name: "Blockbench",
    categories: [HOBBY_TYPE.MODELING],
    description: "Программа для моделирования специально под Minecraft"
  },
  {
    name: "Spline (spline.design)",
    categories: [HOBBY_TYPE.MODELING],
    description: "Программа для моделирования в вебе"
  },

  // Music and Vocal
  {
    name: "FL Studio",
    categories: [PROGRAMM_TYPE.DAW, HOBBY_TYPE.MUSIC],
    description: "DAW для работы... Точнее для хобби :>"
  },
  {
    name: "Reaper",
    categories: [PROGRAMM_TYPE.DAW, HOBBY_TYPE.MUSIC, "Vocal"],
    description: "DAW для хобби, обработки и сведения звука"
  },
  {
    name: "Audacity",
    categories: [PROGRAMM_TYPE.DAW, HOBBY_TYPE.MUSIC, "Vocal"],
    description: "В основе своей обрабатываю вокал сначала тут, потом в Reaper..."
  },

  // Video
  {
    name: "Windows Film Maker",
    categories: [PROGRAMM_TYPE.VIDEO],
    description: "Старенькая программа, даже не уверен, что название правильно написал"
  },
  {
    name: "Movavi Video Editor",
    categories: [PROGRAMM_TYPE.VIDEO],
    description: "Мяу?"
  },
  {
    name: "Adobe Premiere Pro",
    categories: [PROGRAMM_TYPE.VIDEO],
    description: "Профессиональная программа для монтажа, и пожалуй любимая из всех возможных"
  },

  {
    name: "Adobe After Effects",
    categories: [PROGRAMM_TYPE.VIDEO],
    description: "Профессиональная программа для работы с видео и эффектами"
  },

  // Video Record and Streaming
  {
    name: "OBS",
    categories: [PROGRAMM_TYPE.VIDEO, PROGRAMM_TYPE.STREAMING],
    description: "Программа для записи видео"
  },
  {
    name: "Twitch Studio",
    categories: [PROGRAMM_TYPE.STREAMING],
    description: "Программа для транслирования прямиком на платформу Twitch"
  },

  // Subtitles
  {
    name: "Aegisub",
    categories: [PROGRAMM_TYPE.SUBTITLES],
    description: "Программа для редактирования субтитров"
  },
  {
    name: "Subtitle Edit",
    categories: [PROGRAMM_TYPE.SUBTITLES],
    description: "Альтернативная для меня программа для работы с субтитрами"
  },
];

import type { Skill } from "../../../types";

import { HOBBY_TYPE, PROGRAMM_TYPE } from "../../";

export const porgrammingPrograms: Skill[] = [
  {
    name: "Docker Desktop",
    categories: [HOBBY_TYPE.PROGRAMMING, PROGRAMM_TYPE.DEVELOPMENT_TOOLS],
    description: "Для разработки под/с Docker"
  },
  {
    name: "IntelliJ IDEA (Community Edition)",
    categories: [HOBBY_TYPE.PROGRAMMING, PROGRAMM_TYPE.IDE],
    description: "IDE от JetBrains. Использую под Java и Kotlin"
  },
  {
    name: "Visual Studio (Community)",
    categories: [HOBBY_TYPE.PROGRAMMING, PROGRAMM_TYPE.IDE],
    description: "IDE от Microsoft. Использую, как альтернативную IDE под Node (JS/TS), C/C++, C# и других подобных"
  },
  {
    name: "VS Code",
    categories: [HOBBY_TYPE.PROGRAMMING, PROGRAMM_TYPE.IDE],
    description: "Этот редактор кода я долгое время использовал для работы, но сейчас предпочитаю Visual Studio"
  },
  {
    name: "Sublime Text",
    categories: [HOBBY_TYPE.PROGRAMMING, PROGRAMM_TYPE.IDE],
    description: "Давайте забудем..."
  },
  {
    name: "Atom (редактор кода)",
    categories: [HOBBY_TYPE.PROGRAMMING, PROGRAMM_TYPE.IDE],
    description: "Ранее, до использования VS Code, работал с ним"
  },

  // Game Engines
  {
    name: "Godot",
    categories: [HOBBY_TYPE.PROGRAMMING, "Game Development", PROGRAMM_TYPE.GAME_ENGINE, PROGRAMM_TYPE.DEVELOPMENT_TOOLS],
    description: "Godot есть Godot >_>"
  },
  {
    name: "Roblox Studio",
    categories: [HOBBY_TYPE.PROGRAMMING, "Game Development", PROGRAMM_TYPE.GAME_ENGINE, PROGRAMM_TYPE.DEVELOPMENT_TOOLS],
    description: "А вы помните, когда он был в бете?"
  },
  {
    name: "Unity",
    categories: [HOBBY_TYPE.PROGRAMMING, "Game Development", PROGRAMM_TYPE.GAME_ENGINE, PROGRAMM_TYPE.DEVELOPMENT_TOOLS],
    description: "Полноценно не работал, но понимание есть"
  }]
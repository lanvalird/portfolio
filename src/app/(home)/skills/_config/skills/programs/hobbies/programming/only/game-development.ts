import type { Skill } from "../../../../types";

import { PROGRAMM_TYPE } from "../../../enums";
import { addCategoryForEach, addCategoriesForEach } from "../../../../lib";

const gameEngines: Skill[] = addCategoriesForEach(
  [
    {
      name: "Godot",
      categories: [],
      description: "Godot есть Godot >_>",
    },
    {
      name: "Roblox Studio",
      categories: [],
      description: "А вы помните, когда он был в бете?",
    },
    {
      name: "Unity",
      categories: [],
      description: "Полноценно не работал, но понимание есть",
    },
  ],
  [PROGRAMM_TYPE.GAME_ENGINE, PROGRAMM_TYPE.DEVELOPMENT_TOOLS],
);

export const onlyGameDevelopment: Skill[] = addCategoryForEach([...gameEngines], "Game Development");

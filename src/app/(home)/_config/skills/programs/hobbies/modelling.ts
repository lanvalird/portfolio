import type { Skill } from "../../types";

import { HOBBY_TYPE } from "..";
import { addCategoryForEach } from "../../lib";

export const onlyModelling: Skill[] = addCategoryForEach([{
  name: "Blender",
  categories: [],
  description: "Программа для моделирования"
},
  {
    name: "Blockbench",
    categories: [],
    description: "Программа для моделирования специально под Minecraft"
  },
  {
    name: "Spline (spline.design)",
    categories: [],
    description: "Программа для моделирования в вебе"
  },], HOBBY_TYPE.MODELING)
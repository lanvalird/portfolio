import type { Skill } from "../../types";

import { addDevelopmentCategoryForEach, DEVELOPMENT_TYPE } from "../../lib";

export const onlyFullstack: Skill[] = addDevelopmentCategoryForEach([{
  name: "JS/TypeScript",
  categories: [],
  description: "Главные языки для веба :p"
}], DEVELOPMENT_TYPE.FULLSTACK);

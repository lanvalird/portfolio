import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addNeededCategoriesForEach } from "../../lib";


export const crossFullstackAndNativeAndMobile: Skill[] = addNeededCategoriesForEach([{
  name: "Java",
  categories: [],
  description: "Знаю, но предпочитаю Kotlin"
},
{
  name: "Kotlin",
  categories: [],
  description: "Пока что мой любимый язык программирования"
},
{
  name: "C#",
  categories: ["Game Development"],
  description: "Работал с ним, но знаю только на совсем базовом уровне"
}], [
  DEVELOPMENT_TYPE.FULLSTACK,
  DEVELOPMENT_TYPE.NATIVE,
  DEVELOPMENT_TYPE.MOBILE
]);
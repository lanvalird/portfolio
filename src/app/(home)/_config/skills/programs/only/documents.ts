import type { Skill } from "../../types";

import { PROGRAMM_TYPE } from "..";
import { addCategoryForEach } from "../../lib";

export const onlyDocuments: Skill[] = addCategoryForEach([{
  name: "Obsidian",
  categories: [],
  description: "Программа для работы с Markdown (и не только)"
},
{
  name: "Notion",
  categories: ["Text Editor"],
  description: "Слова излишни."
},
{
  name: "Anytype",
  categories: [],
  description: "В поисках альтернативы Notion наткнулся на это. Использую его"
},
{
  name: "LibreOffice",
  categories: [],
  description: "Для работы выбрал его, хотя ранее пробовал и Google Documents, и Microsoft Office, и OpenOffice"
}], PROGRAMM_TYPE.DOCUMENTS)
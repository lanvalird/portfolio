import type { Skill } from "../../../../types";

import { PROGRAMM_TYPE } from "../../../enums";
import { addCategoryForEach } from "../../../../lib";

export const onlyIde: Skill[] = addCategoryForEach(
  [
    {
      name: "IntelliJ IDEA (Community Edition)",
      categories: [],
      description: "IDE от JetBrains. Использую под Java и Kotlin",
    },
    {
      name: "Visual Studio (Community)",
      categories: [],
      description: "IDE от Microsoft. Использую, как альтернативную IDE под Node (JS/TS), C/C++, C# и других подобных",
    },
    {
      name: "VS Code",
      categories: [],
      description: "Этот редактор кода я долгое время использовал для работы, но сейчас предпочитаю Visual Studio",
    },
    {
      name: "Sublime Text",
      categories: [],
      description: "Давайте забудем...",
    },
    {
      name: "Atom (редактор кода)",
      categories: [],
      description: "Ранее, до использования VS Code, работал с ним",
    },
  ],
  PROGRAMM_TYPE.IDE,
);

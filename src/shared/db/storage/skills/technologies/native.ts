import { Skill } from "../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../lib";

export const onlyNative: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "Electron JS",
      categories: [DEVELOPMENT_TYPE.FRONTEND],
      description: "Фреймворк для создания нативных приложений через JS (или TS)",
    },
    {
      name: "Kotlin Multiplatform",
      categories: [DEVELOPMENT_TYPE.MOBILE],
      description: "Фреймворк для создания кроссплатформенных приложений на Kotlin",
    },
  ],
  DEVELOPMENT_TYPE.NATIVE,
);

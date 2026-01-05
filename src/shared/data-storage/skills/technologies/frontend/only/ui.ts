import type { Skill } from "../../../types";

import { addCategoryForEach, DEVELOPMENT_TYPE } from "../../../lib";

export const onlyUi: Skill[] = addCategoryForEach(
  [
    {
      name: "React",
      categories: [],
      description: "Клиентская библиотека для создания интерфейсов",
    },
    {
      name: "Preact",
      categories: [],
      description: "Легковесная и быстрая альтернатива React",
    },
    {
      name: "Vue",
      categories: [],
      description: "Фреймворк для создания интерфейсов",
    },
    {
      name: "Slint",
      categories: [DEVELOPMENT_TYPE.NATIVE],
      description: "Декларативный подход к созданию интерфейсов на C/C++/Rust и тд",
    },
  ],
  "UI",
);

import type { Skill } from "../../../types";

import { addCategoryForEach } from "../../../lib";

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
  ],
  "UI",
);

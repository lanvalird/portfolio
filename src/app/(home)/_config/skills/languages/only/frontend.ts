import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addDevelopmentCategoryForEach } from "../../lib";

export const onlyFrontend: Skill[] = addDevelopmentCategoryForEach(
  [
    {
      name: "HTML",
      categories: [],
      description: "Гипертекствовый язык разметки... Основан на XML...Что ещё можно написать?",
    },
    {
      name: "CSS",
      categories: [],
      description: 'Каскадная таблица стилей... Базовый синтаксис точно знаю, дальше, смотря что считать "не базовым"',
    },
  ],
  DEVELOPMENT_TYPE.FRONTEND,
);

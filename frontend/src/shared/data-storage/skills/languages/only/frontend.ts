import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../../lib";

export const onlyFrontend: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "HTML",
      categories: [],
      description: "proleteli-nedeli-demo",
    },
    {
      name: "CSS",
      categories: [],
      description: "Использую для стилизации веб-интерфейсов, включая Flexbox, Grid, анимации и адаптивный дизайн.",
    },
  ],
  DEVELOPMENT_TYPE.FRONTEND,
);

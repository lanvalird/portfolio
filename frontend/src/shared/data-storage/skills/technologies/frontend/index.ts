import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../../lib";
import { onlyBuilder, onlyDocumentation, onlyStyling, onlyUi } from "./only";

export const onlyFrontend: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    ...onlyUi,
    ...onlyBuilder,
    ...onlyStyling,
    ...onlyDocumentation,
    {
      name: "Storybook",
      description: "Разработка и UI/UX-тестирование",
      categories: ["Documantation", "UI"],
    },
  ],
  DEVELOPMENT_TYPE.FRONTEND,
);

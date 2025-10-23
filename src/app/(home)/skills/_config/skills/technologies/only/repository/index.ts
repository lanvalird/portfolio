import type { Skill } from "../../../types";

import { addCategoryForEach } from "../../../lib";
import { onlyPackageManager } from "./package-manager";

export const onlyRepository: Skill[] = addCategoryForEach(
  [
    {
      name: "Git",
      categories: ["VCS"],
      description: "Ну это же база, ребят!",
    },
    {
      name: "Nx",
      categories: [],
      description:
        "Технология для управления монорепозиториями на Node.js (хотя в данный момент, вроде, поддерживает также Gradle)",
    },
    ...onlyPackageManager,
  ],
  "Repository",
);

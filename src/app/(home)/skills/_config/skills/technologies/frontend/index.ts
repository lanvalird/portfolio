import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addCategoryForEach, addDevelopmentCategoryForEach } from "../../lib";
import { onlyBuilder, onlyDocumentation, onlyStyling, onlyUi } from "./only";

export const onlyFrontend: Skill[] = addDevelopmentCategoryForEach(
  [...onlyUi, ...onlyBuilder, ...onlyStyling, ...onlyDocumentation],
  DEVELOPMENT_TYPE.FRONTEND,
);

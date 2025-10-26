import type { Skill } from "../../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../../lib";
import { onlyBuilder, onlyDocumentation, onlyStyling, onlyUi } from "./only";

export const onlyFrontend: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [...onlyUi, ...onlyBuilder, ...onlyStyling, ...onlyDocumentation],
  DEVELOPMENT_TYPE.FRONTEND,
);

import type { Skill } from "./types";

import { languages } from "./languages";
import {
  onlyBackend,
  onlyFrontend,
  onlyFullstack,
  onlyMobile,
  onlyNative
} from "./technologies";

export const skills: Skill[] = [
  ...onlyFullstack,

  ...onlyFrontend,
  ...onlyBackend,

  ...onlyNative,
  ...onlyMobile,

  ...languages,
];

import { Skill } from "./types";

import { languages } from "./languages";
import {
  onlyBackend,
  onlyFrontend,
  onlyMobile,
  onlyNative
} from "./technologies";

export const skills: Skill[] = [
  ...onlyFrontend,
  ...onlyBackend,
  ...onlyNative,
  ...onlyMobile,

  ...languages
];

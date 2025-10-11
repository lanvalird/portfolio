import type { Skill } from "../types"

import { addCategoryForEach } from "../lib"

import { onlyFullstack, onlyFrontend, onlyBackend } from "./only"
import { crossFullstackAndMobile } from "./cross/fullstack-mobile";

export const languages: Skill[] = addCategoryForEach([
  ...onlyFullstack,
  ...onlyFrontend,
  ...onlyBackend,

  ...crossFullstackAndMobile,
], "Language");

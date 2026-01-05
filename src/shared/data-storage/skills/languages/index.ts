import type { Skill } from "../types";

import { addCategoryForEach } from "../lib";

import { onlyFullstack, onlyFrontend, onlyBackend, onlyEmbed } from "./only";
import { crossFullstackAndNativeAndMobile } from "./cross/fullstack-native-mobile";

export const languages: Skill[] = addCategoryForEach(
  [
    ...onlyFullstack,
    ...onlyFrontend,
    ...onlyBackend,

    ...onlyEmbed,

    ...crossFullstackAndNativeAndMobile,
  ],
  "Language",
);

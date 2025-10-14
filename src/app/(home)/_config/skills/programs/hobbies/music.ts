import type { Skill } from "../../types";

import { PROGRAMM_TYPE, HOBBY_TYPE } from "..";
import { addNeededCategoriesForEach } from "../../lib";

export const onlyMusic: Skill[] = addNeededCategoriesForEach([{
  name: "FL Studio",
  categories: [],
  description: "DAW для работы... Точнее для хобби :>"
},
{
  name: "Reaper",
  categories: ["Vocal"],
  description: "DAW для хобби, обработки и сведения звука"
},
{
  name: "Audacity",
  categories: ["Vocal"],
  description: "В основе своей обрабатываю вокал сначала тут, потом в Reaper..."
},], [PROGRAMM_TYPE.DAW, HOBBY_TYPE.MUSIC])
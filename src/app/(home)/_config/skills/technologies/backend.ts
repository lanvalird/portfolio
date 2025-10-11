import type { Skill } from "../types";

import { DEVELOPMENT_TYPE, addDevelopmentCategoryForEach } from "../lib";

export const onlyBackend: Skill[] = addDevelopmentCategoryForEach([
  {
    name: "Ktor",
    categories: [DEVELOPMENT_TYPE.NATIVE],
    description: "Фреймворк для создания бэкенд-приложений"
  },
  {
    name: "Spring Boot",
    categories: [],
    description: "Фреймворк для создания серьёзных бэкенд-сервисов и приложений в общем. Есть базовое понимание"
  }
], DEVELOPMENT_TYPE.BACKEND);

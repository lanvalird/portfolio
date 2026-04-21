import type { Skill } from "../../../types";

import { addCategoryForEach } from "../../../lib";

export const onlyPackageManager: Skill[] = addCategoryForEach(
  [
    {
      name: "NPM",
      categories: [],
      description: "Node Package Manager, yeah!",
    },
    {
      name: "pnpm",
      categories: [],
      description:
        "Performant NPM. Также работал с монорепозиториями с ним." +
        "Использую, как основной менеджер пакетов за счёт его скорости и бережному отношению к моему диску :)",
    },
    {
      name: "Yarn",
      categories: [],
      description:
        "Да-да, его тоже использовал... И старую версию, и новую, которую ещё не надо глобально устанавливать. Динозавры тут?",
    },
    {
      name: "Bun",
      categories: [],
      description: "Очередная альтернатива NPM, но мне понравилась: быстро и есть версия под Windows",
    },
    {
      name: "Maven",
      categories: [],
      description: "Это же классика, когда ты разрабатываешь на Java, да?",
    },
    {
      name: "Gradle",
      categories: [],
      description:
        "Использую чаще Maven... Даже не знаю, чем он мне полюбился, но собирает проекты он будты бы быстрее...",
    },
    {
      name: "Cargo",
      categories: [],
      description: "Пакетный менеджер в экосистеме Rust",
    },
    {
      name: "pip",
      categories: [],
      description: "Пакетный менеджер в экосистеме Python",
    },
    {
      name: "uv",
      categories: [],
      description: "Один из вариантов альтернативного пакетного менеджера для Python от сообщества",
    },
  ],
  "Package Manager",
);

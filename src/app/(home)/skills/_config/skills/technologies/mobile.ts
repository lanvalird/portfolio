import { Skill } from "../types";

import { DEVELOPMENT_TYPE, addCategoryForEach } from "../lib";

export const onlyMobile: Skill[] = addCategoryForEach<DEVELOPMENT_TYPE>(
  [
    {
      name: "Expo",
      categories: [DEVELOPMENT_TYPE.FRONTEND],
      description: "Фреймворк для создания нативных приложений на Android и IOS с React Native",
    },
    {
      name: "React Native",
      categories: [DEVELOPMENT_TYPE.FRONTEND],
      description: "React, но для натива :)",
    },
  ],
  DEVELOPMENT_TYPE.MOBILE,
);

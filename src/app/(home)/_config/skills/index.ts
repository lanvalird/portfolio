import { Skill } from "./types";

import { languages } from "./languages";

export const skills: Skill[] = [{
    name: "Next.js",
    categories: ["Frontend", "Backend", "Fullstack"],
    description: "Серверно-клиентский фреймворк на базе React"
},
{
    name: "React",
    categories: ["Frontend"],
    description: "Клиентская библиотека для создания интерфейсов"
},

...languages
];

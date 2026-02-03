import { Project } from "@/shared/types";

export const projects: Project[] = [
  {
    id: "d4ed74b8-3ba3-4cc7-86f3-f256d38fb909",
    slug: "farysd",
    name: "FarySD",
    status: "published",
    markdown:
      "## История" +
      "\n\n" +
      "Сервер _(или проект)_ был создан ещё в 2021 году. " +
      "Одна из первых версий была основана на [Minecraft](https://minecraft.net/) " +
      "_(1.16.5)_ и [Spigot](https://spigotmc.org/) _(1.16.5)_. С тех пор много " +
      "воды утекло, вроде как, но с 2025 года проект начал новую жизнь, а его " +
      "разработка продолжится вовсе к 2027 году _(по личным причинам его автора, " +
      "то есть меня)_." +
      "\n\n" +
      "## Первоначальная идея" +
      "\n\n" +
      "Задумка заключалась в том, чтобы предоставить некоторому количеству людей " +
      "место, где они смогут спокойно отдохнуть не думая о повседневных заботах, " +
      "а также познакомиться с новыми людьми, в дальнейшем подружиться. " +
      "\n\n" +
      "## Настоящее" +
      "\n\n" +
      "В настоящем _(2025 год)_ проект стремится достичь концепции, где люди в " +
      "симуляции, а всё, что можно было бы обозвать магией в обычной Fantasy RPG," +
      "в мире Фейри основано на психологии и управлении эмоциями, духовное. Тем" +
      "самым мы совмещаем нереальное с реальными примерами из жизни: тем ниже " +
      "рассудок, тем хуже ты кастуешь заклинания и слаб перед врагами, а тем " +
      "выше — тем сильнее твои навыки." +
      "\n\n" +
      "## Роль в экосистеме" +
      "\n\n" +
      "FarySD является центральным проектом в экосистеме **MiraCommunity** - дружественном пространстве для творческих людей из моего близкого круга общения. Здесь каждый может развивать свои идеи, находить единомышленников и чувствовать себя частью чего-то большего.",
    description:
      "Некоммерческий проект, созданный для улучшения коммуникативных навыков " +
      "между участниками, где каждый откроет себя по-новому. Ядро экосистемы MiraCommunity.",
    urls: {
      homepage: "https://fary.lanvalird.ru",
      github: "https://github.com/MiraZT",
    },
    images: {
      logotype: "https://fary.lanvalird.ru/logo.png",
    },
    tags: ["minecraft", "games", "web", "java", "kotlin", "nelovy", "mirazt", "mira", "community", "lanvalird"],
    linked: ["2cda95fe-1768-4fea-95a7-b4547faa36d3"],
    updated: "2025-09-16T00:00:00.000Z",
    created: "2022-07-15T00:00:00.000Z",
  },
  {
    id: "2cda95fe-1768-4fea-95a7-b4547faa36d3",
    slug: "nelovy",
    name: "Nelovy",
    status: "published",
    markdown: "",
    description:
      "Минимальная сборка Minecraft сервера под нужды FarySD. Разработана как часть экосистемы Mira для обеспечения стабильной основы проектов сообщества.",
    urls: {
      github: "https://github.com/MiraZT/fary-nelovy-comment-system",
    },
    images: {},
    tags: ["minecraft", "games", "java", "kotlin", "nelovy", "mirazt", "mira", "lanvalird"],
    linked: ["d4ed74b8-3ba3-4cc7-86f3-f256d38fb909"],
    updated: "2025-09-16T00:00:00.000Z",
    created: "2024-06-01T00:00:00.000Z",
  },
  {
    id: "56248886-a6e4-41fd-938f-72bf5fb0229b",
    slug: "arch-fail",
    name: "Frontend Architecture in LAF (FAiL)",
    status: "published",
    markdown: "",
    description: "Переосмысление Feature-Sliced Design под Next.js App Router и нужды команды Lazy-And-Focused.",
    urls: {
      homepage: "https://docs.laf-team.ru/architectures/fail",
      github: "https://github.com/Lazy-And-Focused/docs/blob/main/content/architectures/fail",
    },
    images: {},
    tags: ["web", "typescript", "architecture"],
    linked: [],
    updated: "2025-09-18T00:00:00.000Z",
    created: "2025-09-18T00:00:00.000Z",
  },
  {
    id: "32879c8b-33c1-412c-ad10-b5d5417f62e7",
    slug: "lottop-site",
    name: "Сайт для LotTop'а",
    status: "published",
    markdown:
      "## Предыстория" +
      "\n\n" +
      "Начиналось всё с того, что мы познакомились с LotTop'ом, потом основали " +
      "LAF, совместно с FOCKUSTY..." +
      "\n\n" +
      "## И создание" +
      "\n\n" +
      "И вот часть команды решила сделать подарок для LotTop'а _(я дизайн сайта, " +
      "а FOCKUSTY вёрстку)_. Вот и вся история!",
    description: "Подарок в виде простенького дизайна сайта для моего знакомого",
    urls: {
      homepage: "https://lottophello.github.io/lottop_info/",
    },
    images: {},
    tags: ["web", "personal", "collaboration"],
    linked: [],
    updated: "2025-09-17T00:00:00.000Z",
    created: "2024-07-01T00:00:00.000Z",
  },
  {
    id: "cd7fb8ab-a1db-46fc-8843-5f3148a0da87",
    slug: "mira-community",
    name: "MiraCommunity",
    status: "published",
    markdown:
      "## О проекте" +
      "\n\n" +
      "Mira — это творческая экосистема, созданная для объединения и поддержки проектов людей из вашего близкого круга общения. " +
      "Её можно описать как дружественное пространство, где каждый участник может развивать свои идеи, находить единомышленников и чувствовать себя частью чего-то большего." +
      "\n\n" +
      "## Структура экосистемы" +
      "\n\n" +
      "Mira представляет собой сеть взаимного вдохновения, а не жёсткую иерархию. Включает в себя:" +
      "\n\n" +
      "- **FarySD** — ламповое Minecraft-сообщество, центральный проект" +
      "\n- **Nelovy** — минималистичная серверная сборка" +
      "\n- **Diject** — творческий фандабб-проект по озвучке аниме" +
      "\n- **Blurple World** — фан-проект о лоре маленьких зверьков" +
      "\n- **ModSD** — Minecraft-проект с модами (вдохновлён FarySD)" +
      "\n- **Neshy** — фан-проект, сохраняющий атмосферу старого FarySD" +
      "\n\n" +
      "## Цель" +
      "\n\n" +
      "Объединить творческих людей, дать им возможность реализоваться в своих проектах, не оставаясь в одиночестве.",
    description:
      "Дружественная творческая экосистема для объединения проектов близкого круга общения. Место, где идеи становятся реальностью.",
    urls: {},
    images: {},
    tags: ["community", "ecosystem", "creative", "collaboration", "mira", "lanvalird"],
    linked: ["d4ed74b8-3ba3-4cc7-86f3-f256d38fb909", "2cda95fe-1768-4fea-95a7-b4547faa36d3"],
    updated: "2025-09-20T00:00:00.000Z",
    created: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "abcbc82a-65ac-4f2a-ae67-2834e80b06fa",
    slug: "diject",
    name: "Diject",
    status: "published",
    markdown:
      "## О проекте" +
      "\n\n" +
      "Творческий фандабб-проект по озвучке аниме, объединяющий участников экосистемы Mira. " +
      "Совместная работа над переводом и озвучкой позволяет участникам развивать творческие навыки и укреплять связи внутри сообщества." +
      "\n\n" +
      "## Участники" +
      "\n\n" +
      "Проект объединяет: lanvalird, Roblayzi, FOCKUSTY, Idler23 и KoshechkaKosha.",
    description: "Фандабб-проект по озвучке аниме. Творческая коллаборация участников экосистемы Mira.",
    urls: {},
    images: {},
    tags: ["anime", "voiceover", "creative", "translation", "mira", "collaboration"],
    linked: ["cd7fb8ab-a1db-46fc-8843-5f3148a0da87"],
    updated: "2025-09-19T00:00:00.000Z",
    created: "2023-03-15T00:00:00.000Z",
  },
  {
    id: "dd958ecc-1e27-401f-a939-7e8998a88e5e",
    slug: "blurple-world",
    name: "Blurple World",
    status: "published",
    markdown:
      "## О проекте" +
      "\n\n" +
      "Фан-проект от lanvalird, рассказывающий о лоре маленьких зверьков — блюрплах. " +
      "Акцент делается на RPG-механики и развитие собственной вселенной." +
      "\n\n" +
      "## Особенности" +
      "\n\n" +
      "Проект демонстрирует творческое разнообразие экосистемы Mira, где наряду с техническими проектами развиваются и нарративные вселенные.",
    description: "Фан-проект о лоре блюрплах с RPG-элементами. Часть творческого направления экосистемы Mira.",
    urls: {},
    images: {},
    tags: ["lore", "rpg", "creative", "writing", "mira", "lanvalird"],
    linked: ["cd7fb8ab-a1db-46fc-8843-5f3148a0da87", "d4ed74b8-3ba3-4cc7-86f3-f256d38fb909"],
    updated: "2025-09-18T00:00:00.000Z",
    created: "2024-02-14T00:00:00.000Z",
  },
];

export default projects;

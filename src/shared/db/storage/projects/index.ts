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
      "Сервер _(или проект)_ был создан ещё в 2022 году. " +
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
      "выше — тем сильнее твои навыки.",
    description:
      "Некоммерческий проект, созданный для улучшения коммуникативных навыков " +
      "между участниками, где каждый откроет себя по-новому",
    urls: {
      homepage: "https://fary.lanvalird.ru",
      github: "https://github.com/MiraZT",
    },
    images: {
      logotype: "https://fary.lanvalird.ru/logo.png",
    },
    tags: ["minecraft", "games", "web", "java", "kotlin", "nelovy", "mirazt"],
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
    description: "Минимальная сборка Minecraft сервера под нужды FarySD",
    urls: {
      github: "https://github.com/MiraZT/fary-nelovy-comment-system",
    },
    images: {},
    tags: ["minecraft", "games", "java", "kotlin", "nelovy", "mirazt"],
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
    description: "Переосмысление Feature-Sliced Design под Next.js App Router и " + "нужды команды Lazy-And-Focused",
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
    tags: ["web", "personal"],
    linked: [],
    updated: "2025-09-17T00:00:00.000Z",
    created: "2024-07-01T00:00:00.000Z",
  },
];

export default projects;

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
      "то есть меня)_.",
    description:
      "Некоммерческий проект, созданный для улучшения коммуникативных навыков между участниками, где каждый откроет себя по-новому",
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
];

export default projects;

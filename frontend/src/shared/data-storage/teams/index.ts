import type { Team } from "@/shared/types";

export const teams: Team[] = [
  {
    id: "bdc9cc52-81d9-4b44-a90d-0edd153cd319",
    slug: "farysd",
    name: "FarySD (Фейри)",
    description:
      "Управление и организация рабочих процессов, ведение блога, разработка fullstack-приложений с нуля",
    job: {
      join: "2021-07-15T04:00:00.000Z",
      hire: undefined,
    },
    roles: ["CEO", "Designer", "Programmer", "Writer"],
    urls: {},
    images: {
      logotype: "https://fary.lanvalird.ru/logo.png",
    },
    linked: [],
    updated: "2025-09-16T00:00:00.000Z",
    created: "2022-07-15T00:00:00.000Z",
  },
  {
    id: "4dccac98-a527-40f0-beb9-ccc1f06f7afc",
    slug: "lazy-and-focused",
    name: "Lazy And Focused",
    description:
      "Управление и помощь в разработке архитектуры, интегрирование современного стека и оптимизация процессов команды",
    job: {
      join: "2024-01-05T04:00:00.000Z",
      hire: undefined,
    },
    roles: ["Team Leader", "Frontend Developer", "Designer", "Writer"],
    urls: {},
    images: {
      logotype: "https://www.laf-team.ru/images/logo.png",
    },
    linked: [],
    updated: "2025-09-16T00:00:00.000Z",
    created: "2022-07-15T00:00:00.000Z",
  },
];

export default teams;

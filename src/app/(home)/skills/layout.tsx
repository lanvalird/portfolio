import type { Metadata } from "next";

import { skills } from "@/shared/data-storage/skills";

export const metadata: Metadata = {
  title: "Мои навыки",
  description: `Страница, описывающая все (${skills.length}) навыки Валентина Бёрда.`,
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

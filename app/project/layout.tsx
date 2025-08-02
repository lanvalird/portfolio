import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s • проект",
    default: "Проекты",
  },
  description: "Проекты Валентина (lanvalird) Бёрда",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

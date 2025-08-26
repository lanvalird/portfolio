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
  return (
    <main className="max-w-4xl mx-auto my-0 mt-16 px-8">
      {children}
    </main>
)}

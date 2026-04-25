import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s • команда",
    default: "Команды, в которых я участвовал",
  },
  description: "Команды, в которых я (lanvalird) принял участие.",
};

export default function TeamsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

import { ThemeProvider } from "@/shared/components/theme-provider";

import "./globals.css";
import { AppHeader } from "@/widgets/app-header";

export const metadata: Metadata = {
  title: {
    template: "%s • lanvalird",
    default: "◊ Valentin (lanvalird) Bird ◊",
  },
  description: "Персональный сайт Валентина Бёрда (lanvalird) - Fullstack разработчика",
  keywords: ["web developer", "fullstack", "фронтенд", "бэкенд", "программирование"],
  openGraph: {
    title: "Валентин Бёрд | Web Developer",
    description:
      "Персональный сайт Валентина Бёрда (lanvalird) - Fullstack разработчика. Основатель проекта FarySD, участник Lazy And Focused.",
    type: "website",
    images: ["https://github.com/lanvalird.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AppHeader />
          <main className="max-w-[1270px] mx-auto my-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

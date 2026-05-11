import type { Metadata } from "next";

import { ThemeProvider } from "@/shared/components/theme-provider";

import { AppHeader } from "@/widgets/app-header";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
} from "@lanvalird/lxv-ui";
import { GlassWaterIcon } from "lucide-react";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s • lanvalird",
    default: "◊ Valentin (lanvalird) Bird ◊",
  },
  description:
    "Персональный сайт Валентина Бёрда (lanvalird) - Fullstack разработчика",
  keywords: [
    "web developer",
    "fullstack",
    "фронтенд",
    "frontend",
    "бэкенд",
    "backend",
    "программирование",
    "кодинг",
    "разработка сайтов",
    "разработчик",
  ],
  openGraph: {
    title: "Валентин Бёрд | Web Developer",
    description:
      "Персональный сайт Валентина Бёрда (lanvalird) - Fullstack разработчика. Основатель проекта FarySD, участник Lazy And Focused.",
    type: "website",
    images: ["https://github.com/lanvalird.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-1000 bg-linear-to-b from-background to-secondary/20" />
          <Item variant="muted" className="rounded-none justify-center">
            <ItemMedia variant="icon">
              <GlassWaterIcon />
            </ItemMedia>
            <ItemContent className="max-w-max">
              <ItemDescription>
                Чудесный день! <Link href={"/links"}>Не так ли это?</Link>
              </ItemDescription>
            </ItemContent>
          </Item>
          <AppHeader />
          <main className="max-w-7xl mx-auto my-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

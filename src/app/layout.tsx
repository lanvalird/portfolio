import type { Metadata } from "next";

import { ThemeProvider } from "@/shared/components/theme-provider";

import "./globals.css";
import { AppHeader } from "@/widgets/app-header";

export const metadata: Metadata = {
  title: {
    template: "%s • lanvalird",
    default: "◊ Valentin (lanvalird) Bird ◊",
  },
  description: "Персональный сайт автора. Я фронтенд-разработчик, веб-дизайнер и основатель проекта «FarySD».",
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

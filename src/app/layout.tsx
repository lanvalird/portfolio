import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/shared/components/theme-provider";

export const metadata: Metadata = {
  title: {
    template: "%s • lanvalird",
    default: "◊ Valentin (lanvalird) Bird ◊",
  },
  description:
    "Персональный сайт автора. Я фронтенд-разработчик, веб-дизайнер и основатель проекта «FarySD».",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="ru" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

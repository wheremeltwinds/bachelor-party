import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Последний вечер свободы / Секретное приглашение",
  description: "Секретная миссия перед семейной жизнью. Доступ только для жениха.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}

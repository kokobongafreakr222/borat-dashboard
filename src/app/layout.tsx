import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Borat Dashboard",
  description: "Дашборд для отслеживания проектов и метрик",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mi aplicación con Next.JS",
  description: "Aplicacion desarrollada por Noemi Pastrana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
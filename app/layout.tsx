import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monitor Cordoba — Noticias en tiempo real",
  description: "Dashboard de noticias de Cordoba y sus municipios, actualizado automáticamente cada 30 minutos.",
  openGraph: {
    title: "Monitor Cordoba",
    description: "Noticias de Cordoba y sus municipios en tiempo real",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

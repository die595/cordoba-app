// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DATACORE | Monitor de Seguridad Córdoba",
  description: "Análisis inteligente de seguridad y alertas en tiempo real.",
  // Aquí ocurre la magia para WhatsApp
  openGraph: {
    title: "DATACORE - Seguridad Córdoba",
    description: "Sistema de monitoreo y análisis preventivo del departamento de Córdoba.",
    url: "https://cordoba-app-ws6q.vercel.app/",
    siteName: "DATACORE",
    images: [
      {
        url: "https://cordoba-app-ws6q.vercel.app/logo.png", // Usa la URL de producción
        width: 1200,
        height: 630,
        alt: "Logo de DATACORE Monitor de Seguridad",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
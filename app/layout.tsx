// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // <--- ESTA LÍNEA ES VITAL PARA EL DISEÑO

export const metadata: Metadata = {
  title: "DATACORE | Monitor de Seguridad Córdoba",
  description: "Análisis inteligente de seguridad y alertas en tiempo real.",
  openGraph: {
    title: "DATACORE - Seguridad Córdoba",
    description: "Sistema de monitoreo y análisis preventivo del departamento de Córdoba.",
    url: "https://cordoba-app-ws6q.vercel.app/",
    siteName: "DATACORE",
    images: [
      {
        url: "https://cordoba-app-ws6q.vercel.app/logo-share.png",
        width: 1200,
        height: 630,
        alt: "Logo de DATACORE Monitor de Seguridad",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

// Next.js NECESITA que el Layout envuelva el contenido en html y body
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
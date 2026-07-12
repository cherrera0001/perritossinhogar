import type React from "react"
import type { Metadata } from "next"
import { Nunito, Inter } from "next/font/google"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://perritossinhogar.cl"),
  title: {
    default: "Perritos Sin Hogar: Adopta, Dona y Cambia Vidas | Rescate Animal Chile",
    template: "%s | Perritos Sin Hogar",
  },
  description:
    "Adopta un perrito rescatado en Chile. Proceso 100% online, transparente y acompañado. Dona desde $5.000.",
  keywords: [
    "adopción perros chile",
    "adoptar perro santiago",
    "rescate animal chile",
    "perritos en adopción",
    "donar rescate de perros chile",
  ],
  alternates: { canonical: "https://perritossinhogar.cl" },
  openGraph: {
    title: "Perritos Sin Hogar: Adopta, Dona y Cambia Vidas",
    description: "Adopta un perrito rescatado en Chile. Rescate real, sin intermediarios.",
    url: "https://perritossinhogar.cl",
    siteName: "Perritos Sin Hogar",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Perritos Sin Hogar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perritos Sin Hogar: Adopta, Dona y Cambia Vidas",
    description: "Rescatamos perros y los conectamos con familias en Chile.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL">
      <body
        className={`${nunito.variable} ${inter.variable} font-body antialiased bg-gray-50`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-green focus:text-white focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Perritos Sin Hogar",
  description: "Rescatamos perros y los conectamos con familias",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL">
      <body className={`font-sans antialiased`}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}

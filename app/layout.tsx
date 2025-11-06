import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://perritossinhogar.cl'),
  title: {
    default: "Perritos Sin Hogar",
    template: "%s | Perritos Sin Hogar"
  },
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
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}

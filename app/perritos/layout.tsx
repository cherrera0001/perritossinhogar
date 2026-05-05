import type React from "react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function PerritosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

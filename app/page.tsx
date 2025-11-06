import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { CredibilityBar } from "@/components/landing/credibility-bar"
import { Mission } from "@/components/landing/mission"
import { Impact } from "@/components/landing/impact"
import { Testimonial } from "@/components/landing/testimonial"
import { HowToHelp } from "@/components/landing/how-to-help"
import { Stories } from "@/components/landing/stories"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Adopta, dona y cambia vidas",
  description:
    "Rescatamos perros y los conectamos con familias. Dona por WhatsApp (+56955338899) o escríbenos a hola@perritossinhogar.cl.",
  keywords: ["adopción perros", "rescate animal", "donaciones", "perros Chile", "adoptar mascota"],
  openGraph: {
    title: "Perritos Sin Hogar: adopta, dona y cambia vidas",
    description:
      "Rescatamos perros y los conectamos con familias. Dona por WhatsApp (+56955338899) o escríbenos a hola@perritossinhogar.cl.",
    url: "https://perritossinhogar.cl",
    siteName: "Perritos Sin Hogar",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perritos Sin Hogar - Rescate y adopción responsable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perritos Sin Hogar: adopta, dona y cambia vidas",
    description: "Rescatamos perros y los conectamos con familias.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
        <Mission />
        <Impact />
        <Testimonial />
        <HowToHelp />
        <Stories />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

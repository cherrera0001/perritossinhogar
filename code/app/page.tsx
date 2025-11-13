import type { Metadata } from "next"
import Script from "next/script"
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
import { SectionTracker } from "@/components/landing/section-tracker"
import { MobileStickyCTA } from "@/components/landing/mobile-sticky-cta"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Perritos Sin Hogar",
  url: "https://perritossinhogar.cl",
  logo: "https://perritossinhogar.cl/placeholder-logo.svg",
  description: "Rescatamos perros abandonados y los conectamos con familias responsables en Chile",
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+56-9-5533-8899",
    contactType: "Customer Service",
    areaServed: "CL",
    availableLanguage: ["es"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "CL",
  },
} as const

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Perritos Sin Hogar",
  url: "https://perritossinhogar.cl",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://perritossinhogar.cl/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
} as const

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo funciona el proceso de adopción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso incluye una entrevista, visita al hogar y período de prueba. Nos aseguramos de que tanto el perrito como la familia sean compatibles.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se usan las donaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las donaciones se usan para alimento, atención veterinaria, esterilización, vacunas y cuidados básicos de los perritos rescatados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo ser voluntario sin experiencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, te capacitamos en todo lo necesario. Necesitamos ayuda en rescates, eventos de adopción, transporte y difusión en redes sociales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta adoptar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La adopción tiene un costo simbólico que cubre parte de los gastos veterinarios. Todos los perritos están esterilizados, vacunados y desparasitados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen seguimiento después de la adopción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, hacemos seguimiento periódico para asegurarnos de que todo vaya bien y ofrecemos apoyo continuo a las familias adoptantes.",
      },
    },
  ],
} as const

export const metadata: Metadata = {
  title: "Perritos Sin Hogar: adopta, dona y cambia vidas",
  description:
    "Rescatamos perros y los conectamos con familias. Dona por WhatsApp (+56955338899) o escríbenos a hola@perritossinhogar.cl.",
  keywords: ["adopción perros", "rescate animal", "donaciones", "perros Chile", "adoptar mascota"],
  alternates: {
    canonical: "https://perritossinhogar.cl",
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Perritos Sin Hogar" }],
}

export default function Home() {
  return (
    <>
      <Script id="ld-json-organization" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="ld-json-website" type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="ld-json-faq" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <div className="min-h-screen">
        <SectionTracker />
        <Header />
        <main id="main-content">
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
        <MobileStickyCTA />
      </div>
    </>
  )
}

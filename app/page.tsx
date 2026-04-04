import Script from "next/script"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { CredibilityBar } from "@/components/landing/credibility-bar"
import { PetsPreview } from "@/components/landing/pets-preview"
import { AdoptionProcess } from "@/components/landing/adoption-process"
import { AdoptionForm } from "@/components/landing/adoption-form"
import { Mission } from "@/components/landing/mission"
import { Impact } from "@/components/landing/impact"
import { DonationCTA } from "@/components/landing/donation-cta"
import { Testimonial } from "@/components/landing/testimonial"
import { HowToHelp } from "@/components/landing/how-to-help"
import { Stories } from "@/components/landing/stories"
import { Transparency } from "@/components/landing/transparency"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { MobileStickyCTA } from "@/components/landing/mobile-sticky-cta"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Perritos Sin Hogar",
  url: "https://perritossinhogar.cl",
  logo: "https://perritossinhogar.cl/logo.png",
  description:
    "Rescatamos perros abandonados y los conectamos con familias responsables en Chile",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona el proceso de adopcion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso incluye una entrevista, visita al hogar y periodo de prueba. Nos aseguramos de que tanto el perrito como la familia sean compatibles.",
      },
    },
    {
      "@type": "Question",
      name: "En que se usan las donaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las donaciones se usan para alimento, atencion veterinaria, esterilizacion, vacunas y cuidados basicos de los perritos rescatados.",
      },
    },
    {
      "@type": "Question",
      name: "Puedo ser voluntario sin experiencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, te capacitamos en todo lo necesario. Necesitamos ayuda en rescates, eventos de adopcion, transporte y difusion en redes sociales.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto cuesta adoptar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La adopcion tiene un costo simbolico que cubre parte de los gastos veterinarios. Todos los perritos estan esterilizados, vacunados y desparasitados.",
      },
    },
    {
      "@type": "Question",
      name: "Hacen seguimiento despues de la adopcion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, hacemos seguimiento periodico para asegurarnos de que todo vaya bien y ofrecemos apoyo continuo a las familias adoptantes.",
      },
    },
  ],
} as const

export default function Home() {
  return (
    <>
      <Script id="ld-json-organization" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="ld-json-faq" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <CredibilityBar />
          <PetsPreview />
          <AdoptionProcess />
          <AdoptionForm />
          <Mission />
          <Impact />
          <DonationCTA />
          <Stories />
          <Testimonial />
          <Transparency />
          <HowToHelp />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </>
  )
}

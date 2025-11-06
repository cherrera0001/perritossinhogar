"use client"

import { Heart, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import Image from "next/image"

export function Hero() {
  const handleWhatsAppClick = () => {
    trackEvent("cta_whatsapp_click", { section: "hero", label: "Quiero ayudar ahora" })
  }

  const handleEmailClick = () => {
    trackEvent("cta_email_click", { section: "hero" })
  }

  return (
    <section className="bg-gradient-to-r from-brand-green to-brand-violet text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              Dales un hogar: adopta o ayuda hoy
            </h2>
            <p className="text-xl md:text-2xl text-pretty leading-relaxed">
              Tu donación o adopción cambia la vida de perros rescatados en Chile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-brand-yellow hover:bg-brand-yellow-dark text-gray-900 font-semibold min-h-[48px] shadow-lg hover:shadow-xl transition-all focus:ring-4 focus:ring-brand-yellow/50"
                onClick={handleWhatsAppClick}
              >
                <a
                  href="https://wa.me/56955338899?text=Quiero%20ayudar%20a%20Perritos%20Sin%20Hogar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp para ayudar"
                >
                  <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
                  Quiero ayudar ahora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 text-brand-green border-2 border-white font-semibold min-h-[48px] focus:ring-4 focus:ring-white/50"
                onClick={handleEmailClick}
              >
                <a
                  href="mailto:hola@perritossinhogar.cl?subject=Quiero%20ayudar&body=Hola,%20me%20interesa%20apoyar%20a%20Perritos%20Sin%20Hogar"
                  aria-label="Contactar por correo electrónico"
                >
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Conocer más
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/perro-rescatado-feliz-buscando-familia.jpg"
              alt="Perro rescatado feliz buscando familia"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

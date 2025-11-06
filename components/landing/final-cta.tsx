"use client"

import { Heart, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    trackEvent("cta_whatsapp_click", { section: "final-cta", label: "Donar por WhatsApp" })
  }

  const handleEmailClick = () => {
    trackEvent("cta_email_click", { section: "final-cta" })
  }

  return (
    <section id="donar" className="py-16 md:py-24 bg-brand-green text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">¿Listo para cambiar una vida?</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          Cada aporte, grande o pequeño, nos ayuda a seguir rescatando perritos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-brand-yellow hover:bg-brand-yellow-dark text-gray-900 font-semibold min-h-[48px] shadow-lg hover:shadow-xl transition-all focus:ring-4 focus:ring-brand-yellow/50"
            onClick={handleWhatsAppClick}
          >
            <a
              href="https://wa.me/56955338899?text=Hola,%20quiero%20apoyar%20a%20Perritos%20Sin%20Hogar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donar por WhatsApp"
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
              Donar por WhatsApp
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
              href="mailto:hola@perritossinhogar.cl?subject=Quiero%20apoyar%20a%20Perritos%20Sin%20Hogar&body=Hola,%20me%20interesa%20apoyar%20a%20Perritos%20Sin%20Hogar"
              aria-label="Contactar por correo electrónico"
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              Contactar por correo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

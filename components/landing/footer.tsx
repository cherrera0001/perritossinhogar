"use client"

import { Heart, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function Footer() {
  const handleWhatsAppClick = () => {
    trackEvent("cta_whatsapp_click", { section: "footer", label: "WhatsApp" })
  }

  const handleEmailClick = () => {
    trackEvent("cta_email_click", { section: "footer" })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="text-brand-green w-6 h-6" aria-hidden="true" />
              <h2 className="text-xl font-bold">Perritos Sin Hogar</h2>
            </div>
            <p className="text-gray-400 max-w-md text-pretty">
              Rescatando, rehabilitando y encontrando hogar para perritos abandonados en Chile.
            </p>
            <p className="text-gray-400 mt-4">
              <a
                href="https://perritossinhogar.cl"
                className="hover:text-brand-green transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
              >
                perritossinhogar.cl
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-gray-400 text-sm">Contáctanos</p>
            <div className="flex gap-4">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white min-h-[44px] focus:ring-4 focus:ring-green-600/30"
                onClick={handleWhatsAppClick}
              >
                <a
                  href="https://wa.me/56955338899?text=Hola,%20quiero%20apoyar%20a%20Perritos%20Sin%20Hogar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700 min-h-[44px] focus:ring-4 focus:ring-gray-700/30"
                onClick={handleEmailClick}
              >
                <a
                  href="mailto:hola@perritossinhogar.cl?subject=Contacto"
                  aria-label="Contactar por correo electrónico"
                >
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Correo
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Perritos Sin Hogar. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Somos una organización sin fines de lucro. Contenido informativo.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function Header() {
  const handleDonateClick = () => {
    trackEvent("cta_whatsapp_click", { section: "header", label: "Donar" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="text-brand-green w-6 h-6" aria-hidden="true" />
          <h1 className="text-xl font-semibold text-gray-900">Perritos Sin Hogar</h1>
        </div>
        <nav aria-label="Navegación principal" role="navigation">
          <ul className="flex items-center gap-6">
            <li className="hidden md:block">
              <a
                href="#mision"
                className="text-gray-700 hover:text-brand-green transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 rounded-sm"
              >
                Misión
              </a>
            </li>
            <li className="hidden md:block">
              <a
                href="#ayuda"
                className="text-gray-700 hover:text-brand-green transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 rounded-sm"
              >
                Cómo ayudar
              </a>
            </li>
            <li className="hidden md:block">
              <a
                href="#testimonios"
                className="text-gray-700 hover:text-brand-green transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 rounded-sm"
              >
                Testimonios
              </a>
            </li>
            <li>
              <Button
                asChild
                className="bg-brand-green hover:bg-brand-green-dark text-white min-h-[44px] min-w-[44px] focus:ring-4 focus:ring-brand-green/30"
                onClick={handleDonateClick}
              >
                <a
                  href="https://wa.me/56955338899?text=Quiero%20ayudar%20a%20Perritos%20Sin%20Hogar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donar por WhatsApp"
                >
                  Donar
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

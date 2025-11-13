"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function MobileStickyCTA() {
  const handleClick = () => {
    trackEvent("cta_whatsapp_click", {
      section: "sticky-mobile",
      label: "Donar ahora",
    })
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-3xl">
        <Button
          asChild
          size="lg"
          className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold min-h-[48px] focus:ring-4 focus:ring-brand-green/30"
          onClick={handleClick}
        >
          <a
            href="https://wa.me/56955338899?text=Quiero%20ayudar%20a%20Perritos%20Sin%20Hogar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donar por WhatsApp"
          >
            <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
            Donar ahora
          </a>
        </Button>
      </div>
    </div>
  )
}


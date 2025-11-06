"use client"

import { Heart, DollarSign, HandHeart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const ways = [
  {
    icon: Heart,
    title: "Adoptar",
    description: "Dale un hogar permanente a un perrito rescatado.",
    cta: "Quiero adoptar",
    href: "https://wa.me/56955338899?text=Hola,%20quiero%20adoptar%20un%20perrito",
  },
  {
    icon: DollarSign,
    title: "Donar",
    description: "Ayuda con alimento, atención veterinaria y refugio.",
    cta: "Quiero donar",
    href: "https://wa.me/56955338899?text=Hola,%20quiero%20hacer%20una%20donación",
  },
  {
    icon: HandHeart,
    title: "Ser voluntario",
    description: "Únete a nuestro equipo y ayuda en rescates y eventos.",
    cta: "Quiero ser voluntario",
    href: "mailto:hola@perritossinhogar.cl?subject=Quiero%20ser%20voluntario",
  },
]

export function HowToHelp() {
  const handleCTAClick = (title: string, href: string) => {
    const isWhatsApp = href.includes("wa.me")
    trackEvent(isWhatsApp ? "cta_whatsapp_click" : "cta_email_click", {
      section: "how-to-help",
      label: title,
    })
  }

  return (
    <section id="ayuda" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 text-balance">
          Cómo puedes ayudar
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <div className="bg-brand-violet/10 text-brand-violet p-3 rounded-full w-max">
                  <way.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{way.title}</h3>
                <p className="text-gray-700 leading-relaxed text-pretty flex-grow">{way.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white min-h-[44px] focus:ring-4 focus:ring-brand-green/30 bg-transparent"
                  onClick={() => handleCTAClick(way.title, way.href)}
                >
                  <a
                    href={way.href}
                    target={way.href.includes("wa.me") ? "_blank" : undefined}
                    rel={way.href.includes("wa.me") ? "noopener noreferrer" : undefined}
                    aria-label={`${way.cta} - ${way.description}`}
                  >
                    {way.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

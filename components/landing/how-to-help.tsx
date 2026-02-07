"use client"

import { DollarSign, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const ways = [
  {
    icon: DollarSign,
    title: "Donar",
    description: "Tu donación ayuda a cubrir alimento, atención veterinaria y cuidados básicos.",
    cta: "Donar ahora",
    href: "https://wa.me/56955338899?text=Quiero%20donar%20a%20Perritos%20Sin%20Hogar",
    iconClass: "bg-brand-green/10 text-brand-green",
    buttonClass: "bg-brand-green hover:bg-brand-green-dark text-white",
    focusClass: "focus:ring-brand-green/30",
  },
  {
    icon: Heart,
    title: "Adoptar",
    description: "Dales un hogar permanente. Todos nuestros perritos están esterilizados y vacunados.",
    cta: "Ver perritos",
    href: "https://wa.me/56955338899?text=Quiero%20adoptar%20un%20perrito",
    iconClass: "bg-brand-violet/10 text-brand-violet",
    buttonClass: "bg-brand-violet hover:bg-brand-violet-dark text-white",
    focusClass: "focus:ring-brand-violet/30",
  },
  {
    icon: Users,
    title: "Ser voluntario",
    description: "Únete a nuestro equipo. Necesitamos ayuda en rescates, eventos y difusión.",
    cta: "Ser voluntario",
    href: "mailto:hola@perritossinhogar.cl?subject=Quiero%20ser%20voluntario",
    iconClass: "bg-brand-yellow/10 text-brand-yellow-dark",
    buttonClass: "bg-brand-yellow hover:bg-brand-yellow-dark text-gray-900",
    focusClass: "focus:ring-brand-yellow/50",
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
    <section id="ayuda" className="py-16 md:py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 text-balance">
          Cómo puedes ayudar
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <div className={`${way.iconClass} p-4 rounded-full w-16 h-16 mx-auto sm:mx-0 flex items-center justify-center`} aria-hidden="true">
                  <way.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{way.title}</h3>
                <p className="text-gray-700 leading-relaxed text-pretty flex-grow">{way.description}</p>
                <Button
                  asChild
                  className={`w-full min-h-[44px] focus:ring-4 ${way.focusClass} ${way.buttonClass}`}
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

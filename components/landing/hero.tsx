"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function Hero() {
  const handleDonateClick = () => {
    trackEvent("cta_whatsapp_click", {
      section: "hero",
      variant: "B3-primary",
      amount: 5000,
      element: "a",
      text: "Donar $5.000 ahora",
    })
  }

  const handleStoriesClick = () => {
    trackEvent("cta_navigation_click", {
      section: "hero",
      variant: "B3-secondary",
      destination: "historias",
      element: "a",
      text: "Ver perritos disponibles",
    })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-green to-brand-violet text-white py-16 md:py-24 scroll-mt-24">
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" aria-hidden="true" />
              15 perritos rescatados este mes necesitan hogar
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight" data-variant="B3">
              Cambia una vida en 2 minutos
            </h1>

            <p className="text-xl md:text-2xl text-pretty leading-relaxed">
              <strong className="text-brand-yellow">Dona $5.000</strong> y alimenta a un perrito por 30 días.
              <br />
              <strong className="text-brand-yellow">Adopta</strong> y gana un compañero leal para siempre.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-yellow" aria-hidden="true" />
                <span>
                  <strong>4.9/5</strong> confianza
                </span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/30" aria-hidden="true" />
              <div>
                <strong>150 familias</strong> felices en 2024
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-brand-yellow hover:bg-brand-yellow-dark text-gray-900 font-bold min-h-[60px] shadow-2xl hover:shadow-xl transition-all focus:ring-4 focus:ring-brand-yellow/50"
                onClick={handleDonateClick}
              >
                <a
                  href="https://wa.me/56955338899?text=Quiero%20donar%20$5000%20para%20alimentar%20un%20perrito"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donar 5.000 pesos chilenos por WhatsApp para alimentar un perrito por 30 días"
                  data-variant="B3-primary"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6" aria-hidden="true" />
                    <div className="text-left">
                      <div className="leading-tight">Donar $5.000 ahora</div>
                      <div className="text-xs font-normal opacity-80">Por WhatsApp en 1 minuto</div>
                    </div>
                  </div>
                </a>
              </Button>

              <Link
                href="#historias"
                onClick={handleStoriesClick}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 text-white font-semibold px-6 py-4 rounded-lg transition-all min-h-[60px] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Ver historias de perritos disponibles para adopción"
                data-variant="B3-secondary"
              >
                Ver perritos disponibles <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/perro-rescatado-feliz-buscando-familia.jpg"
              alt="Perro rescatado feliz buscando una familia amorosa en Chile"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

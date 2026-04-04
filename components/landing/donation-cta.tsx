"use client"

import { useState } from "react"
import { Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const amounts = [
  { value: 5000, label: "$5.000", impact: "Comida por 30 días" },
  { value: 10000, label: "$10.000", impact: "Vacuna completa" },
  { value: 20000, label: "$20.000", impact: "Desparasitación + vitaminas" },
  { value: 50000, label: "$50.000", impact: "Esterilización completa" },
]

export function DonationCTA() {
  const [selected, setSelected] = useState(5000)

  const handleDonate = () => {
    trackEvent("cta_whatsapp_click", {
      section: "donation-cta",
      amount: selected,
    })
  }

  const current = amounts.find((a) => a.value === selected)

  return (
    <section className="py-16 md:py-20 bg-brand-green-light scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-balance">
              Tu aporte llega directo al plato
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-pretty">
              Sin intermediarios. Cada peso se registra y se publica.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {amounts.map((amount) => (
              <button
                key={amount.value}
                onClick={() => setSelected(amount.value)}
                className={`rounded-xl p-4 text-center transition-all border-2 ${
                  selected === amount.value
                    ? "border-brand-green bg-white shadow-md"
                    : "border-gray-200 bg-white/50 hover:border-gray-300"
                }`}
              >
                <p className="text-xl font-heading font-bold text-gray-900">
                  {amount.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">{amount.impact}</p>
              </button>
            ))}
          </div>

          {current && (
            <p className="text-brand-green font-semibold">
              Con {current.label} cubres: {current.impact.toLowerCase()}
            </p>
          )}

          <Button
            asChild
            size="lg"
            className="bg-brand-yellow hover:bg-brand-yellow-dark text-gray-900 font-bold min-h-[56px] px-10 shadow-lg hover:shadow-xl transition-all focus:ring-4 focus:ring-brand-yellow/50"
            onClick={handleDonate}
          >
            <a
              href={`https://wa.me/56955338899?text=Quiero%20donar%20${current?.label?.replace("$", "%24")}%20a%20Perritos%20Sin%20Hogar`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Donar ${current?.label} por WhatsApp`}
            >
              <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
              Donar {current?.label} ahora
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="h-4 w-4" aria-hidden="true" />
            <span>Donación segura por WhatsApp. Pronto: pago online.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

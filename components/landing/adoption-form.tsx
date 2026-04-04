"use client"

import { useState } from "react"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// URL del Google Form - reemplazar con el form real del cliente
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/FORM_ID/viewform"
const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"

export function AdoptionForm() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="formulario" className="py-16 md:py-20 bg-brand-green-light scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-green mb-4">
            <FileText className="h-4 w-4" />
            Formulario de adopción
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-balance">
            ¿Quieres adoptar un perrito?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Completa el formulario en 5 minutos. Te contactamos en 24-48 horas para coordinar
            una visita.
          </p>
        </div>

        {!showForm ? (
          <div className="max-w-md mx-auto text-center space-y-4">
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green-dark text-white font-bold min-h-[56px] px-10 shadow-lg hover:shadow-xl transition-all focus:ring-4 focus:ring-brand-green/30"
              onClick={() => setShowForm(true)}
            >
              <FileText className="mr-2 h-5 w-5" />
              Abrir formulario de adopción
            </Button>
            <p className="text-sm text-gray-500">
              O si prefieres,{" "}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:text-brand-green-dark underline inline-flex items-center gap-1"
              >
                ábrelo en una pestaña nueva <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                width="100%"
                height="800"
                className="border-0"
                title="Formulario de adopción - Perritos Sin Hogar"
                loading="lazy"
              >
                Cargando formulario...
              </iframe>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Cerrar formulario
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

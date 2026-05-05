"use client"

import { useState } from "react"
import { FileText, ExternalLink, MessageCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ADOPTION_FORM, CONTACTS, isFormConfigured, buildFormUrl } from "@/lib/contact"
import { trackEvent } from "@/lib/analytics"

function trackFormEvent(event: "adoption_form_open" | "adoption_form_open_new_tab") {
  trackEvent(event, { dog_slug: "", dog_name: "", source: "home" })
}

export function AdoptionForm() {
  const [showForm, setShowForm] = useState(false)
  const formOk = isFormConfigured()
  const viewUrl = buildFormUrl(ADOPTION_FORM.viewUrl, { source: "home" })
  const embedUrl = buildFormUrl(ADOPTION_FORM.embedUrl, { source: "home" })

  return (
    <section id="formulario" className="py-16 md:py-20 bg-brand-green-light scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-full text-sm font-semibold text-brand-green mb-4">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Formulario de adopción
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-balance">
            ¿Quieres adoptar un perrito?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Completa el formulario en 5 minutos. Te contactamos en 24–48 horas para coordinar
            una visita.
          </p>
        </div>

        {formOk ? (
          !showForm ? (
            <div className="max-w-md mx-auto text-center space-y-4">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-bold min-h-[56px] px-10 shadow-lg hover:shadow-xl transition-all focus:ring-4 focus:ring-brand-green/30"
                onClick={() => {
                  setShowForm(true)
                  trackFormEvent("adoption_form_open")
                }}
              >
                <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
                Abrir formulario de adopción
              </Button>
              <p className="text-sm text-gray-500">
                O si prefieres,{" "}
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackFormEvent("adoption_form_open_new_tab")}
                  className="text-brand-green hover:text-brand-green-dark underline inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1 rounded-sm"
                  aria-label="Abrir formulario de adopción en una pestaña nueva"
                >
                  ábrelo en una pestaña nueva{" "}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="800"
                  className="border-0"
                  title="Formulario de adopción - Perritos Sin Hogar"
                  loading="lazy"
                />
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-sm text-gray-500 hover:text-gray-700 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1 rounded-sm"
                >
                  Cerrar formulario
                </button>
              </div>
            </div>
          )
        ) : (
          /* Fallback: FORM_ID aún no configurado */
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-start gap-3 rounded-xl bg-yellow-50 border border-yellow-200 p-4">
              <AlertCircle
                className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm text-yellow-800">
                El formulario no está disponible en este momento. Contáctanos directamente por
                WhatsApp o teléfono — respondemos el mismo día.
              </p>
            </div>
            <a
              href={`https://wa.me/${CONTACTS.whatsappAdopciones.number}?text=${encodeURIComponent("Hola! Me interesa adoptar un perrito 🐾 ¿Cómo es el proceso?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand-green text-white font-bold py-3 px-6 hover:bg-brand-green-dark transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30 min-h-[52px] text-base"
              aria-label="Contactar por WhatsApp para adoptar"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

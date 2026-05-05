"use client"

import { MessageCircle, Phone, ChevronDown } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CONTACTS, buildWhatsAppUrl } from "@/lib/contact"
import { trackEvent } from "@/lib/analytics"

type Channel = "wa_adopciones" | "wa_rescates" | "call"
type PageType = "list" | "detail"

interface AdoptaCTAProps {
  petName: string
  petSlug?: string
  variant?: "inline" | "sticky"
  pageType?: PageType
}

function trackContactClick(petSlug: string, channel: Channel, pageType: PageType) {
  trackEvent("contact_click", { dog_slug: petSlug, channel, page_type: pageType })
}

// Selector de canal WhatsApp — abre popover con 2 opciones
function WhatsAppSelector({
  petName,
  petSlug,
  pageType,
  fullWidth = false,
}: {
  petName: string
  petSlug: string
  pageType: PageType
  fullWidth?: boolean
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex items-center justify-center gap-2 rounded-lg bg-brand-green text-white font-bold py-3 px-6 hover:bg-brand-green-dark transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30 min-h-[52px] text-base ${
            fullWidth ? "w-full" : ""
          }`}
          aria-label={`Solicitar adopción de ${petName} por WhatsApp — elegir canal`}
          aria-haspopup="true"
        >
          <MessageCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span>Adoptar a {petName}</span>
          <ChevronDown className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2" align="center">
        <p className="text-xs text-gray-500 font-medium px-2 pt-1 pb-2">
          Elige cómo contactarnos:
        </p>
        <div className="flex flex-col gap-1">
          <a
            href={buildWhatsAppUrl(CONTACTS.whatsappAdopciones.number, petName)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick(petSlug, "wa_adopciones", pageType)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-green-50 text-gray-800 hover:text-brand-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            <MessageCircle className="h-4 w-4 text-brand-green flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold leading-tight">
                {CONTACTS.whatsappAdopciones.label}
              </p>
              <p className="text-xs text-gray-400">{CONTACTS.whatsappAdopciones.display}</p>
            </div>
          </a>
          <a
            href={buildWhatsAppUrl(CONTACTS.whatsappRescates.number, petName)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick(petSlug, "wa_rescates", pageType)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-green-50 text-gray-800 hover:text-brand-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            <MessageCircle className="h-4 w-4 text-brand-green flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold leading-tight">
                {CONTACTS.whatsappRescates.label}
              </p>
              <p className="text-xs text-gray-400">{CONTACTS.whatsappRescates.display}</p>
            </div>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function AdoptaCTA({
  petName,
  petSlug = "",
  variant = "inline",
  pageType = "detail",
}: AdoptaCTAProps) {
  const slug = petSlug || petName.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-")

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-gray-200 shadow-lg md:hidden">
        <div className="flex gap-2">
          <WhatsAppSelector
            petName={petName}
            petSlug={slug}
            pageType={pageType}
            fullWidth
          />
          <a
            href={CONTACTS.telefonoLlamadas.href}
            onClick={() => trackContactClick(slug, "call", pageType)}
            className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-brand-green text-brand-green font-bold py-3 px-4 hover:bg-green-50 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30 min-h-[52px] shrink-0"
            aria-label={`Llamar al ${CONTACTS.telefonoLlamadas.display}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-brand-green-light border border-green-200 p-6 space-y-4">
      <div>
        <p className="text-lg font-heading font-bold text-gray-900">
          ¿{petName} es para ti?
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Escríbenos por WhatsApp y te contamos el proceso de adopción paso a paso.
        </p>
      </div>

      {/* CTA principal */}
      <WhatsAppSelector petName={petName} petSlug={slug} pageType={pageType} fullWidth />

      {/* CTA secundario */}
      <a
        href={CONTACTS.telefonoLlamadas.href}
        onClick={() => trackContactClick(slug, "call", pageType)}
        className="flex items-center justify-center gap-2 w-full text-sm text-brand-green font-semibold hover:text-brand-green-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1 rounded-sm py-1"
        aria-label={`Llamar al ${CONTACTS.telefonoLlamadas.display}`}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        ¿Prefieres llamar? {CONTACTS.telefonoLlamadas.display}
      </a>

      <p className="text-xs text-center text-gray-500">
        Todos los perritos tienen atención veterinaria y seguimiento post-adopción.
      </p>
    </div>
  )
}

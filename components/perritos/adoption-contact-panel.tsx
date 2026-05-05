"use client"

import { FileText, ExternalLink, MessageCircle, ChevronDown, AlertCircle } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  CONTACTS,
  ADOPTION_FORM,
  buildWhatsAppUrl,
  buildFormUrl,
  isFormConfigured,
  type FormSource,
} from "@/lib/contact"
import { trackEvent } from "@/lib/analytics"

// ─── Tracking ─────────────────────────────────────────────────────────────────

type TrackFormEvent = "adoption_form_open" | "adoption_form_open_new_tab"

function trackForm(event: TrackFormEvent, slug: string, name: string, source: FormSource) {
  trackEvent(event, { dog_slug: slug, dog_name: name, source })
}

function trackWa(
  slug: string,
  name: string,
  source: FormSource,
  channel: "wa_adopciones" | "wa_rescates"
) {
  trackEvent("adoption_whatsapp_click", { dog_slug: slug, dog_name: name, source, channel })
}

// ─── Sub-componente: selector de canal WhatsApp ────────────────────────────────

function WhatsAppPopover({
  petName,
  petSlug,
  source,
  outline = false,
  fullWidth = false,
}: {
  petName: string
  petSlug: string
  source: FormSource
  outline?: boolean
  fullWidth?: boolean
}) {
  const base = outline
    ? "border-2 border-brand-green text-brand-green hover:bg-green-50"
    : "bg-brand-green text-white hover:bg-brand-green-dark"

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={`flex items-center justify-center gap-2 rounded-lg font-bold py-3 px-6 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30 min-h-[52px] text-base ${base} ${fullWidth ? "w-full" : ""}`}
          aria-label={`Contactar por WhatsApp para adoptar a ${petName} — elegir canal`}
          aria-haspopup="true"
        >
          <MessageCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span>Contactar por WhatsApp</span>
          <ChevronDown className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2" align="center">
        <p className="text-xs text-gray-500 font-medium px-2 pt-1 pb-2">Elige el canal:</p>
        <div className="flex flex-col gap-1">
          {(
            [
              { key: "whatsappAdopciones", channel: "wa_adopciones" },
              { key: "whatsappRescates", channel: "wa_rescates" },
            ] as const
          ).map(({ key, channel }) => (
            <a
              key={key}
              href={buildWhatsAppUrl(CONTACTS[key].number, petName)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWa(petSlug, petName, source, channel)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-green-50 text-gray-800 hover:text-brand-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <MessageCircle className="h-4 w-4 text-brand-green flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold leading-tight">{CONTACTS[key].label}</p>
                <p className="text-xs text-gray-400">{CONTACTS[key].display}</p>
              </div>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

// ─── Componente principal ──────────────────────────────────────────────────────

export interface AdoptionContactPanelProps {
  petName?: string
  petSlug?: string
  source?: FormSource
  /** full = sección completa con texto; compact = solo botones */
  variant?: "full" | "compact"
}

export function AdoptionContactPanel({
  petName = "un perrito",
  petSlug = "",
  source = "detail",
  variant = "full",
}: AdoptionContactPanelProps) {
  const formOk = isFormConfigured()
  const formUrl = formOk
    ? buildFormUrl(ADOPTION_FORM.viewUrl, { dogSlug: petSlug, dogName: petName, source })
    : ""

  // ── Variante compacta (para cards del home) ──────────────────────────────────
  if (variant === "compact") {
    return (
      <div className="flex flex-col gap-2">
        {formOk ? (
          <a
            href={formUrl}
            onClick={() => trackForm("adoption_form_open", petSlug, petName, source)}
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand-green text-white font-bold py-2.5 px-4 hover:bg-brand-green-dark transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30 min-h-[44px] text-sm"
            aria-label={`Abrir formulario de adopción para ${petName}`}
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Formulario de adopción
          </a>
        ) : null}
        <WhatsAppPopover petName={petName} petSlug={petSlug} source={source} outline={formOk} fullWidth />
      </div>
    )
  }

  // ── Variante completa (para página de detalle) ────────────────────────────────
  return (
    <div className="rounded-2xl bg-brand-green-light border border-green-200 p-6 space-y-4">
      <div>
        <p className="text-lg font-heading font-bold text-gray-900">
          ¿Quieres adoptar a {petName}?
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Completa el formulario en 5 minutos. Te contactamos en 24–48 horas para coordinar
          una visita.
        </p>
      </div>

      {formOk ? (
        <>
          {/* Primario: formulario misma pestaña */}
          <a
            href={formUrl}
            onClick={() => trackForm("adoption_form_open", petSlug, petName, source)}
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-brand-green text-white font-bold py-3 px-6 hover:bg-brand-green-dark transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30 min-h-[52px] text-base"
            aria-label={`Abrir formulario de adopción para ${petName}`}
          >
            <FileText className="h-5 w-5" aria-hidden="true" />
            Abrir formulario de adopción
          </a>

          {/* Secundario: WhatsApp */}
          <WhatsAppPopover
            petName={petName}
            petSlug={petSlug}
            source={source}
            outline
            fullWidth
          />

          {/* Terciario: nueva pestaña */}
          <p className="text-xs text-center text-gray-500">
            O si prefieres,{" "}
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackForm("adoption_form_open_new_tab", petSlug, petName, source)}
              className="inline-flex items-center gap-0.5 text-brand-green hover:text-brand-green-dark underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1 rounded-sm"
              aria-label="Abrir formulario de adopción en nueva pestaña"
            >
              ábrelo en una pestaña nueva
              <ExternalLink className="h-3 w-3 ml-0.5" aria-hidden="true" />
            </a>
          </p>
        </>
      ) : (
        /* Fallback: FORM_ID no configurado */
        <>
          <div className="flex items-start gap-2 rounded-lg bg-yellow-50 border border-yellow-200 p-3">
            <AlertCircle
              className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0"
              aria-hidden="true"
            />
            <p className="text-sm text-yellow-800">
              Formulario temporalmente no disponible. Contáctanos directamente por WhatsApp.
            </p>
          </div>
          <WhatsAppPopover petName={petName} petSlug={petSlug} source={source} fullWidth />
        </>
      )}
    </div>
  )
}

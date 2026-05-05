// ─── Fuente única de verdad para contactos y formulario ───────────────────────
// Para cambiar números o la URL del formulario: solo editar este archivo.

export const CONTACTS = {
  whatsappAdopciones: {
    label: "WhatsApp Adopciones",
    number: "56979404540",
    display: "+56 9 7940 4540",
  },
  whatsappRescates: {
    label: "WhatsApp Rescates",
    number: "56955338899",
    display: "+56 9 5533 8899",
  },
  telefonoLlamadas: {
    label: "+56 9 7940 4540",
    href: "tel:+56979404540",
    display: "+56 9 7940 4540",
  },
} as const

// ─── Formulario de adopción ────────────────────────────────────────────────────
// Reemplazar FORM_ID con el ID real del Google Form.
// Mientras contenga "FORM_ID", los componentes muestran un fallback elegante.
export const ADOPTION_FORM = {
  viewUrl: "https://docs.google.com/forms/d/e/FORM_ID/viewform",
  embedUrl: "https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true",
} as const

const PLACEHOLDER = "FORM_ID"

export function isFormConfigured(): boolean {
  return !ADOPTION_FORM.viewUrl.includes(PLACEHOLDER)
}

export type FormSource = "home" | "list" | "detail"

export function buildFormUrl(
  base: string,
  params?: { dogSlug?: string; dogName?: string; source?: FormSource }
): string {
  if (!params) return base
  try {
    const url = new URL(base)
    if (params.dogSlug) url.searchParams.set("dog_slug", params.dogSlug)
    if (params.dogName) url.searchParams.set("dog_name", params.dogName)
    if (params.source) url.searchParams.set("source", params.source)
    return url.toString()
  } catch {
    return base
  }
}

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
export function buildWhatsAppUrl(number: string, petName: string): string {
  const msg = encodeURIComponent(
    `Hola! Me interesa adoptar a ${petName} 🐾 ¿Cómo es el proceso?`
  )
  return `https://wa.me/${number}?text=${msg}`
}

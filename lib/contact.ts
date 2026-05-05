// Fuente única de verdad para contactos de adopción.
// Para cambiar números: solo editar este archivo, nada más.

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

export function buildWhatsAppUrl(number: string, petName: string): string {
  const msg = encodeURIComponent(
    `Hola! Me interesa adoptar a ${petName} 🐾 ¿Cómo es el proceso?`
  )
  return `https://wa.me/${number}?text=${msg}`
}

"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { trackEvent } from "@/lib/analytics"

const faqs = [
  {
    question: "¿Cómo puedo adoptar un perrito?",
    answer:
      "Contáctanos por WhatsApp o correo. Te haremos algunas preguntas para conocerte mejor y asegurarnos de que sea una buena conexión. Luego coordinamos una visita para que conozcas a los perritos disponibles.",
  },
  {
    question: "¿Cuánto cuesta adoptar?",
    answer:
      "La adopción es gratuita. Solo pedimos un compromiso de cuidado responsable. Los perritos ya vienen esterilizados, vacunados y desparasitados.",
  },
  {
    question: "¿Cómo se usan las donaciones?",
    answer:
      "Cada donación se destina a alimento, atención veterinaria, medicamentos y refugio temporal para los perritos rescatados. Compartimos reportes periódicos de nuestro trabajo.",
  },
  {
    question: "¿Puedo ser voluntario sin experiencia?",
    answer:
      "¡Sí! Te capacitamos en todo lo necesario. Necesitamos ayuda en rescates, eventos de adopción, transporte y difusión en redes sociales.",
  },
  {
    question: "¿Qué hago si encuentro un perro abandonado?",
    answer:
      "Contáctanos de inmediato por WhatsApp. Te orientaremos sobre los pasos a seguir y coordinaremos el rescate si es posible.",
  },
]

export function FAQ() {
  const handleToggle = (question: string) => {
    trackEvent("faq_toggle", { question })
  }

  return (
    <section id="faq" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 text-balance">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger
                className="text-left text-lg font-semibold text-gray-900 hover:text-brand-green py-4 hover:no-underline"
                onClick={() => handleToggle(faq.question)}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-4 text-pretty">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

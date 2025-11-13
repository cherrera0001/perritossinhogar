"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { trackEvent } from "@/lib/analytics"

const faqs = [
  {
    question: "¿Cómo funciona el proceso de adopción?",
    answer:
      "El proceso incluye una entrevista, visita al hogar y período de prueba. Nos aseguramos de que tanto el perrito como la familia sean compatibles.",
  },
  {
    question: "¿En qué se usan las donaciones?",
    answer:
      "Las donaciones se usan para alimento, atención veterinaria, esterilización, vacunas y cuidados básicos de los perritos rescatados.",
  },
  {
    question: "¿Puedo ser voluntario sin experiencia?",
    answer:
      "Sí, te capacitamos en todo lo necesario. Necesitamos ayuda en rescates, eventos de adopción, transporte y difusión en redes sociales.",
  },
  {
    question: "¿Cuánto cuesta adoptar?",
    answer:
      "La adopción tiene un costo simbólico que cubre parte de los gastos veterinarios. Todos los perritos están esterilizados, vacunados y desparasitados.",
  },
  {
    question: "¿Hacen seguimiento después de la adopción?",
    answer:
      "Sí, hacemos seguimiento periódico para asegurarnos de que todo vaya bien y ofrecemos apoyo continuo a las familias adoptantes.",
  },
]

export function FAQ() {
  const handleToggle = (question: string) => {
    trackEvent("faq_toggle", { question })
  }

  return (
    <section id="faq" className="py-16 md:py-20 bg-white scroll-mt-24">
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
                data-question={faq.question}
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

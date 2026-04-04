import { Search, FileText, Home } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Conoce a tu perrito",
    description:
      "Explora las fichas de nuestros perritos disponibles. Cada uno tiene su historia, personalidad y necesidades.",
  },
  {
    icon: FileText,
    step: "2",
    title: "Llena el formulario",
    description:
      "Completa el formulario de adopción en 5 minutos. Sin papeles, todo online. Te contactamos en 24-48 horas.",
  },
  {
    icon: Home,
    step: "3",
    title: "Visita y adopta",
    description:
      "Coordinas una visita para conocer al perrito en persona. Si hay match, se va contigo a casa ese mismo día.",
  },
]

export function AdoptionProcess() {
  return (
    <section className="py-16 md:py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-balance">
            Adoptar es simple
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Todo el proceso toma aproximadamente 1 semana. Te acompañamos en cada paso.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((item) => (
            <div key={item.step} className="text-center space-y-4">
              <div className="relative mx-auto w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center">
                <item.icon className="h-7 w-7 text-brand-green" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-brand-green text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Todos nuestros perritos están esterilizados, vacunados y desparasitados.
          </p>
        </div>
      </div>
    </section>
  )
}

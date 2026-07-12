import { Dog, Home, CheckCircle2 } from "lucide-react"
import { perritos } from "@/data/perritos"

const rescues = perritos.length
const adoptions = perritos.filter((p) => !p.available).length
const petsInCare = perritos.filter((p) => p.available).length

const metrics = [
  {
    icon: Dog,
    value: rescues,
    label: "Perritos rescatados",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
  },
  {
    icon: Home,
    value: adoptions,
    label: "Adopciones completadas",
    color: "text-brand-violet",
    bg: "bg-brand-violet/10",
  },
  {
    icon: CheckCircle2,
    value: petsInCare,
    label: "Perritos en cuidado ahora",
    color: "text-brand-yellow",
    bg: "bg-amber-50",
  },
]

export function Transparency() {
  return (
    <section className="py-16 md:py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-balance">
            Transparencia total
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Mostramos únicamente datos verificables: la cantidad real de perritos que estamos
            rescatando y su estado actual.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              <div
                className={`${metric.bg} ${metric.color} p-3 rounded-full flex-shrink-0`}
              >
                <metric.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className={`text-2xl font-heading font-bold ${metric.color}`}>
                  {metric.value}
                </p>
                <p className="text-sm text-gray-500">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Estos números se actualizan directamente desde nuestro registro de perritos.
          </p>
        </div>
      </div>
    </section>
  )
}

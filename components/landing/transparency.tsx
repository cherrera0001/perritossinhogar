import { TrendingUp, Stethoscope, UtensilsCrossed, Heart, Dog, Home } from "lucide-react"
import data from "@/data/transparency.json"

function formatCLP(amount: number) {
  return `$${amount.toLocaleString("es-CL")}`
}

const metrics = [
  {
    icon: Dog,
    value: data.rescues,
    label: "Perritos rescatados",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
  },
  {
    icon: Home,
    value: data.adoptions,
    label: "Adopciones completadas",
    color: "text-brand-violet",
    bg: "bg-brand-violet/10",
  },
  {
    icon: Stethoscope,
    value: formatCLP(data.veterinaryCost),
    label: "Gastos veterinarios",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: UtensilsCrossed,
    value: formatCLP(data.foodCost),
    label: "Alimentación",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Heart,
    value: formatCLP(data.totalDonations),
    label: "Donaciones recibidas",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
  },
  {
    icon: TrendingUp,
    value: data.petsInCare,
    label: "Perritos en cuidado",
    color: "text-brand-violet",
    bg: "bg-brand-violet/10",
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
            Cada peso que donas se registra y se publica. Sin excepciones. Datos de{" "}
            <strong>{data.monthLabel}</strong>.
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
            Publicamos estos números cada mes. Tu confianza es nuestra prioridad.
          </p>
        </div>
      </div>
    </section>
  )
}

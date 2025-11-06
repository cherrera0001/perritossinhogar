import { ShoppingBag, Home, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const impacts = [
  {
    icon: ShoppingBag,
    title: "Más rescates gracias a tu ayuda directa",
    description: "Tus donaciones pagan alimento y atención veterinaria para los perritos rescatados.",
  },
  {
    icon: Home,
    title: "Cuidado veterinario y alimento para perros rescatados",
    description: "Conectamos perros rescatados con familias amorosas que les darán un hogar permanente.",
  },
  {
    icon: Award,
    title: "Compartimos avances e historias de adopción",
    description: "Te contamos exactamente en qué se usa tu ayuda con reportes periódicos.",
  },
]

export function Impact() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 text-balance">
          Tu apoyo hace la diferencia
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="bg-brand-green/10 text-brand-green p-3 rounded-full w-max">
                  <impact.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-balance">{impact.title}</h3>
                <p className="text-gray-700 leading-relaxed text-pretty">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

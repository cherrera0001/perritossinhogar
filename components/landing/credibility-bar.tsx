import { perritos } from "@/data/perritos"

export function CredibilityBar() {
  const enCuidado = perritos.length
  const disponibles = perritos.filter((p) => p.available).length
  const adopciones = perritos.filter((p) => !p.available).length

  const stats = [
    {
      value: String(enCuidado),
      label: enCuidado === 1 ? "Perrito en cuidado" : "Perritos en cuidado",
      helper: "Datos reales, actualizados",
      color: "text-brand-green",
    },
    {
      value: String(disponibles),
      label: disponibles === 1 ? "Disponible para adopción" : "Disponibles para adopción",
      helper: "Ahora mismo",
      color: "text-brand-violet",
    },
    {
      value: String(adopciones),
      label: adopciones === 1 ? "Adopción completada" : "Adopciones completadas",
      helper: "Registro público",
      color: "text-brand-yellow",
    },
  ]

  return (
    <section className="bg-white py-8 border-b border-gray-200 scroll-mt-24" aria-label="Indicadores de credibilidad">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.helper}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

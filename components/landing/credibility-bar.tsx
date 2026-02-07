export function CredibilityBar() {
  const stats = [
    {
      value: "+200",
      label: "Perros rescatados",
      helper: "Desde 2020",
      color: "text-brand-green",
    },
    {
      value: "+150",
      label: "Familias felices",
      helper: "Adoptantes verificados",
      color: "text-brand-violet",
    },
    {
      value: "5 años",
      label: "Rescatando en Chile",
      helper: "Operando continuamente",
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

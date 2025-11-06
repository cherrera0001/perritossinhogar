import { Shield, Home, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const badges = [
  { icon: Shield, text: "Rescate responsable" },
  { icon: Home, text: "Adopción segura" },
  { icon: Users, text: "Comunidad activa" },
]

export function CredibilityBar() {
  return (
    <section className="bg-gray-50 py-8 border-b border-gray-200" aria-label="Credenciales">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="inline-flex items-center gap-2 bg-brand-violet/10 text-brand-violet hover:bg-brand-violet/20 px-4 py-2 text-sm font-medium rounded-full"
            >
              <badge.icon className="h-4 w-4" aria-hidden="true" />
              <span>{badge.text}</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

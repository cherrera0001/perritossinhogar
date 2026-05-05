import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Dog } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getFeaturedPerritos } from "@/data/perritos"

const SIZE_LABELS: Record<string, string> = {
  chico: "Chico",
  mediano: "Mediano",
  grande: "Grande",
}

const ENERGY_LABELS: Record<string, string> = {
  bajo: "Tranquilo",
  medio: "Moderado",
  alto: "Activo",
}

export function PetsPreview() {
  const featured = getFeaturedPerritos(6)

  return (
    <section id="adopta" className="py-16 md:py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-balance">
            Perritos buscando familia
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Cada uno tiene su historia y personalidad. Encuentra al compañero perfecto para ti.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((pet) => {
            const isNew =
              new Date().getTime() - new Date(pet.createdAt).getTime() <
              14 * 24 * 60 * 60 * 1000

            return (
              <Card
                key={pet.slug}
                className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                {/* Imagen de portada clicable */}
                <Link
                  href={`/perritos/${pet.slug}`}
                  className="relative aspect-[4/3] bg-gray-100 overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <Dog className="h-16 w-16" />
                  </div>
                  {pet.photo && (
                    <Image
                      src={pet.photo}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  {isNew && (
                    <Badge className="absolute top-3 left-3 bg-brand-yellow text-gray-900 font-semibold">
                      Nuevo
                    </Badge>
                  )}
                </Link>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold text-gray-900">
                      {pet.name}
                    </h3>
                    <span className="text-sm text-gray-500">{pet.age}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {SIZE_LABELS[pet.size]}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {ENERGY_LABELS[pet.energy]}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {pet.gender === "macho" ? "Macho" : "Hembra"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{pet.story}</p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-gray-500">
                    {pet.compatibility.kids && <span>✓ Niños</span>}
                    {pet.compatibility.dogs && <span>✓ Perros</span>}
                    {pet.compatibility.cats && <span>✓ Gatos</span>}
                  </div>
                  <Link
                    href={`/perritos/${pet.slug}`}
                    className="inline-flex items-center gap-1.5 text-brand-green font-semibold hover:text-brand-green-dark transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1 rounded-sm"
                    aria-label={`Conocer el perfil completo de ${pet.name}`}
                  >
                    Conocer a {pet.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href="#ayuda"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
          >
            Ver cómo adoptar <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

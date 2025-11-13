import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const stories = [
  {
    name: "Luna encuentra su hogar",
    description:
      "Luna fue rescatada de la calle hace 6 meses. Hoy vive feliz con la familia López, quienes la adoptaron y le dieron el amor que tanto necesitaba.",
    image: "/perra-golden-feliz.jpg",
    alt: "Golden retriever adoptada jugando feliz en su nuevo hogar",
  },
  {
    name: "Max y su nueva familia",
    description:
      "Max llegó a nosotros muy pequeño. Gracias a las donaciones, recibió todos los cuidados necesarios y ahora tiene una familia que lo adora.",
    image: "/cachorro-beagle-adoptado.jpg",
    alt: "Cachorro beagle adoptado recibiendo cariño de su nueva familia",
  },
]

export function Stories() {
  return (
    <section id="historias" className="py-16 md:py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 text-balance">
          Historias de éxito
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <Image
                src={story.image || "/placeholder.jpg"}
                alt={story.alt}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                <p className="text-gray-700 leading-relaxed text-pretty">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

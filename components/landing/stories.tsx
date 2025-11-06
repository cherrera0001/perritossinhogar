import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const stories = [
  {
    name: "Luna",
    description: "Rescatada de la calle, ahora vive feliz con su nueva familia.",
    image: "/perra-golden-feliz.jpg",
  },
  {
    name: "Max",
    description: "Abandonado en un parque, encontró un hogar lleno de amor.",
    image: "/labrador-jugando.png",
  },
  {
    name: "Toby",
    description: "De cachorro enfermo a perro sano y juguetón.",
    image: "/cachorro-beagle-adoptado.jpg",
  },
]

export function Stories() {
  return (
    <section id="historias" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 text-balance">
          Historias que inspiran
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <Image
                src={story.image || "/placeholder.svg"}
                alt={`${story.name} - ${story.description}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
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

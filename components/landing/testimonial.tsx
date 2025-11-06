import { MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Testimonial() {
  return (
    <section id="testimonios" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-8 md:p-10 space-y-6">
              <div className="text-brand-green">
                <MessageSquare className="w-10 h-10" aria-hidden="true" />
              </div>
              <blockquote className="text-xl md:text-2xl italic text-gray-800 leading-relaxed text-pretty">
                "Adoptar a Luna fue claro y responsable. Hoy es parte de mi familia. El equipo de Perritos Sin Hogar fue
                súper cuidadoso con el proceso y me acompañaron en todo momento."
              </blockquote>
              <div className="flex items-center gap-4 pt-4">
                <Image src="/mujer-sonriente.jpg" alt="" width={60} height={60} className="rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">María López</p>
                  <p className="text-gray-600">Adoptante</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

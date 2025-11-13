import Image from "next/image"

export function Testimonial() {
  return (
    <section id="testimonios" className="py-16 md:py-20 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Image
              src="/mujer-sonriente.jpg"
              alt="María López, adoptante feliz"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="space-y-4">
              <div className="text-brand-green" aria-hidden="true">
                {/* Cita */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-relaxed text-pretty">
                "Adopté a Luna hace un año y ha sido la mejor decisión. El equipo de Perritos Sin Hogar fue súper
                cuidadoso con el proceso y me acompañaron en todo momento."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">María López</p>
                <p className="text-gray-600">Adoptante desde 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

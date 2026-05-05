import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, CheckCircle, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { perritos, getPerritoBySlug } from "@/data/perritos"
import { PerritoGallery } from "@/components/perritos/perrito-gallery"
import { PerritoVideo } from "@/components/perritos/perrito-video"
import { AdoptaCTA } from "@/components/perritos/adopt-cta"
import { AdoptionContactPanel } from "@/components/perritos/adoption-contact-panel"

// Deshabilita slugs que no estén en generateStaticParams → 404 automático
export const dynamicParams = false

export function generateStaticParams() {
  return perritos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pet = getPerritoBySlug(slug)
  if (!pet) return {}

  const description = `Conoce a ${pet.name}: ${pet.story.slice(0, 140)}…`

  return {
    title: `${pet.name} — ${pet.age}, tamaño ${pet.size}`,
    description,
    openGraph: {
      title: `Adopta a ${pet.name} | Perritos Sin Hogar`,
      description,
      images: [{ url: pet.photo, alt: `${pet.name} en adopción — Perritos Sin Hogar` }],
    },
  }
}

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
const AGE_LABELS: Record<string, string> = {
  cachorro: "Cachorro",
  adulto: "Adulto",
  senior: "Senior",
}

function CompatBadge({ label, ok }: { label: string; ok: boolean }) {
  return (
    <span
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${
        ok
          ? "bg-green-50 border-green-200 text-green-700"
          : "bg-gray-50 border-gray-200 text-gray-400"
      }`}
    >
      <span aria-hidden="true">{ok ? "✓" : "✗"}</span>
      {label}
    </span>
  )
}

export default async function PerritoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pet = getPerritoBySlug(slug)
  if (!pet) notFound()

  return (
    <>
      <main className="min-h-screen bg-gray-50 pb-28 md:pb-16" id="main-content">
        {/* Navegación de vuelta */}
        <div className="container mx-auto px-4 pt-6">
          <Link
            href="/#adopta"
            className="inline-flex items-center gap-1.5 text-sm text-brand-green hover:text-brand-green-dark font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Ver todos los perritos
          </Link>
        </div>

        <div className="container mx-auto px-4 py-6 max-w-5xl">
          {/* Hero: foto + info principal */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Foto portada — tamaño fijo para evitar CLS */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
              <Image
                src={pet.photo}
                alt={`${pet.name}, ${pet.breed}, ${pet.age}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Panel de información */}
            <div className="space-y-5">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-4xl font-heading font-bold text-gray-900">
                    {pet.name}
                  </h1>
                  <Badge
                    className={`shrink-0 mt-1 ${
                      pet.available
                        ? "bg-brand-green text-white"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {pet.available ? "Disponible" : "En proceso"}
                  </Badge>
                </div>
                {pet.location && (
                  <p className="flex items-center gap-1 mt-1.5 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                    {pet.location}
                  </p>
                )}
              </div>

              {/* Badges de características */}
              <div className="flex flex-wrap gap-2" aria-label="Características">
                <Badge variant="outline">{pet.age}</Badge>
                <Badge variant="outline">{SIZE_LABELS[pet.size]}</Badge>
                <Badge variant="outline">{ENERGY_LABELS[pet.energy]}</Badge>
                <Badge variant="outline">
                  {pet.gender === "macho" ? "Macho" : "Hembra"}
                </Badge>
                <Badge variant="outline">{AGE_LABELS[pet.ageCategory]}</Badge>
                {pet.weight && <Badge variant="outline">{pet.weight}</Badge>}
              </div>

              {/* Personalidad */}
              {pet.personality && pet.personality.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Personalidad
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pet.personality.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1 rounded-full bg-brand-green-light text-brand-green text-sm font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Historia */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Su historia
                </p>
                <p className="text-gray-700 leading-relaxed">{pet.story}</p>
              </div>

              {/* Estado de salud */}
              <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                <CheckCircle
                  className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Estado de salud
                  </p>
                  <p className="text-sm text-gray-700 mt-0.5">{pet.healthStatus}</p>
                </div>
              </div>

              {/* Compatibilidad */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Compatible con
                </p>
                <div className="flex gap-3 flex-wrap">
                  <CompatBadge label="Niños" ok={pet.compatibility.kids} />
                  <CompatBadge label="Perros" ok={pet.compatibility.dogs} />
                  <CompatBadge label="Gatos" ok={pet.compatibility.cats} />
                </div>
              </div>

              {/* Panel completo — visible solo en desktop */}
              <div className="hidden md:block">
                <AdoptionContactPanel
                  petName={pet.name}
                  petSlug={pet.slug}
                  source="detail"
                />
              </div>
            </div>
          </div>

          {/* Galería de fotos */}
          {pet.gallery && pet.gallery.length > 0 && (
            <div className="mt-12">
              <PerritoGallery images={pet.gallery} petName={pet.name} />
            </div>
          )}

          {/* Video */}
          {pet.video && (
            <div className="mt-10">
              <PerritoVideo
                src={pet.video}
                poster={pet.videoPoster}
                petName={pet.name}
              />
            </div>
          )}

          {/* Panel completo mobile — complementa el sticky */}
          <div className="mt-10 md:hidden">
            <AdoptionContactPanel
              petName={pet.name}
              petSlug={pet.slug}
              source="detail"
            />
          </div>
        </div>
      </main>

      {/* Barra sticky — solo mobile */}
      <AdoptaCTA petName={pet.name} petSlug={pet.slug} variant="sticky" />
    </>
  )
}

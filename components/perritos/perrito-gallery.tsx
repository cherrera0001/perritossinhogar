"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import type { ImagenGaleria } from "@/data/perritos"

interface PerritoGalleryProps {
  images: ImagenGaleria[]
  petName: string
}

export function PerritoGallery({ images, petName }: PerritoGalleryProps) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  const openAt = (i: number) => {
    setCurrent(i)
    setOpen(true)
  }

  return (
    <section aria-label={`Galería de fotos de ${petName}`}>
      <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
        Más fotos de {petName}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openAt(i)}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 group"
            aria-label={`Ver foto ${i + 1}: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-2 bg-black/95 border-0">
          <DialogTitle className="sr-only">
            Galería de fotos de {petName} — foto {current + 1} de {images.length}
          </DialogTitle>
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                onClick={prev}
                className="text-white p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <span className="text-white text-sm tabular-nums" aria-live="polite">
                {current + 1} / {images.length}
              </span>
              <button
                onClick={next}
                className="text-white p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

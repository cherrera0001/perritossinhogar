export interface Compatibilidad {
  kids: boolean
  dogs: boolean
  cats: boolean
}

export interface ImagenGaleria {
  src: string
  alt: string
}

export interface Perrito {
  slug: string
  name: string
  age: string
  ageCategory: "cachorro" | "adulto" | "senior"
  size: "chico" | "mediano" | "grande"
  gender: "macho" | "hembra"
  energy: "bajo" | "medio" | "alto"
  compatibility: Compatibilidad
  weight: string
  breed: string
  photo: string
  story: string
  healthStatus: string
  available: boolean
  featured: boolean
  createdAt: string
  // Campos extendidos para páginas de detalle (opcionales, compatibles con perritos existentes)
  location?: string
  personality?: string[]
  gallery?: ImagenGaleria[]
  video?: string
  videoPoster?: string
}

export const perritos: Perrito[] = [
  {
    slug: "diguillin",
    name: "Diguillín",
    age: "2 años aprox.",
    ageCategory: "adulto",
    size: "grande",
    gender: "macho",
    energy: "medio",
    compatibility: { kids: true, dogs: true, cats: true },
    weight: "20 kg aprox.",
    breed: "Mestizo",
    photo: "/perritos/diguillin/portada.jpg",
    story:
      "Soy Diguillín y me encontraron solo en el campo, lejos de todo. Sobreviví con lo que pude, pero nunca perdí las ganas de confiar. Soy un perro grande con alma tranquila — me adapto, aprendo rápido y agradezco cada gesto de cariño. Solo necesito que alguien me dé la oportunidad de demostrarle lo fiel que puedo ser.",
    healthStatus: "Vacunado, desparasitado — pendiente esterilización",
    available: true,
    featured: true,
    createdAt: "2026-05-05",
    location: "Concepción, Chile",
    personality: ["Tranquilo", "Adaptable", "Leal"],
    gallery: [
      {
        src: "/perritos/diguillin/portada.jpg",
        alt: "Diguillín acurrucado mirando a la cámara",
      },
      { src: "/perritos/diguillin/galeria-1.jpg", alt: "Diguillín descansando tranquilo" },
      { src: "/perritos/diguillin/galeria-2.jpg", alt: "Primer plano de Diguillín" },
      { src: "/perritos/diguillin/galeria-3.jpg", alt: "Diguillín al aire libre" },
      {
        src: "/perritos/diguillin/galeria-4.jpg",
        alt: "Diguillín durante su proceso de rescate",
      },
      { src: "/perritos/diguillin/galeria-5.jpg", alt: "Diguillín listo para una nueva vida" },
    ],
    video: "/perritos/diguillin/video.mp4",
    videoPoster: "/perritos/diguillin/portada.jpg",
  },
  {
    slug: "susanita",
    name: "Susanita",
    age: "1 año aprox.",
    ageCategory: "adulto",
    size: "chico",
    gender: "hembra",
    energy: "medio",
    compatibility: { kids: true, dogs: true, cats: false },
    weight: "8 kg aprox.",
    breed: "Mestiza",
    photo: "/perritos/susanita/portada.jpg",
    story:
      "Soy Susanita y aunque soy pequeña, tengo un carácter enorme. Me rescataron justo a tiempo y desde el primer día supe que iba a estar bien. Soy cariñosa, curiosa y me encanta explorar. Solo busco un hogar donde me traten con amor — lo demás lo pongo yo.",
    healthStatus: "Vacunada, desparasitada — pendiente esterilización y chequeo completo",
    available: true,
    featured: true,
    createdAt: "2026-05-05",
    location: "Concepción, Chile",
    personality: ["Curiosa", "Cariñosa", "Valiente"],
    gallery: [
      {
        src: "/perritos/susanita/portada.jpg",
        alt: "Susanita parada en campo abierto al atardecer",
      },
      {
        src: "/perritos/susanita/galeria-1.jpg",
        alt: "Susanita durmiendo en la naturaleza",
      },
    ],
    video: "/perritos/susanita/video.mp4",
    videoPoster: "/perritos/susanita/portada.jpg",
  },
]

export function getPerritoBySlug(slug: string): Perrito | undefined {
  return perritos.find((p) => p.slug === slug)
}

export function getFeaturedPerritos(limit?: number): Perrito[] {
  const available = perritos.filter((p) => p.featured && p.available)
  return limit !== undefined ? available.slice(0, limit) : available
}

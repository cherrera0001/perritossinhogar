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
    slug: "luna",
    name: "Luna",
    age: "3 años",
    ageCategory: "adulto",
    size: "mediano",
    gender: "hembra",
    energy: "medio",
    compatibility: { kids: true, dogs: true, cats: false },
    weight: "12 kg",
    breed: "Mestiza",
    photo: "/perra-golden-feliz.jpg",
    story:
      "Soy Luna, tengo 3 años y me encanta perseguir pelotas. Me rescataron de la calle cuando era cachorra y desde entonces busco una familia que me deje dormir en el sofá. Soy buena con niños y otros perros.",
    healthStatus: "Esterilizada, vacunada, desparasitada",
    available: true,
    featured: true,
    createdAt: "2026-03-20",
  },
  {
    slug: "max",
    name: "Max",
    age: "1 año",
    ageCategory: "adulto",
    size: "chico",
    gender: "macho",
    energy: "alto",
    compatibility: { kids: true, dogs: true, cats: true },
    weight: "8 kg",
    breed: "Mestizo",
    photo: "/cachorro-beagle-adoptado.jpg",
    story:
      "Soy Max, llegué muy chiquito al refugio. Gracias a las donaciones recibí todos los cuidados que necesitaba. Ahora estoy sano, fuerte y listo para tener mi propia familia. Me llevo bien con todos.",
    healthStatus: "Esterilizado, vacunado, desparasitado",
    available: true,
    featured: true,
    createdAt: "2026-03-15",
  },
  {
    slug: "canela",
    name: "Canela",
    age: "5 años",
    ageCategory: "adulto",
    size: "grande",
    gender: "hembra",
    energy: "bajo",
    compatibility: { kids: true, dogs: false, cats: false },
    weight: "22 kg",
    breed: "Mestiza",
    photo: "/perro-rescatado-feliz-buscando-familia.jpg",
    story:
      "Soy Canela, una perrita tranquila que disfruta las siestas al sol. Prefiero ser la única mascota de la casa porque me gusta tener toda la atención. Soy ideal para una familia que busque una compañera relajada.",
    healthStatus: "Esterilizada, vacunada, desparasitada",
    available: true,
    featured: true,
    createdAt: "2026-03-25",
  },
  {
    slug: "toby",
    name: "Toby",
    age: "8 meses",
    ageCategory: "cachorro",
    size: "mediano",
    gender: "macho",
    energy: "alto",
    compatibility: { kids: true, dogs: true, cats: true },
    weight: "6 kg",
    breed: "Mestizo",
    photo: "/labrador-jugando.png",
    story:
      "Soy Toby, un cachorro lleno de energía que quiere jugar todo el día. Me encontraron solo en un parque y me trajeron acá. Necesito una familia activa que me saque a pasear y me enseñen cosas nuevas.",
    healthStatus: "Vacunado, desparasitado, pendiente esterilización",
    available: true,
    featured: true,
    createdAt: "2026-04-01",
  },
  {
    slug: "nina",
    name: "Nina",
    age: "7 años",
    ageCategory: "senior",
    size: "chico",
    gender: "hembra",
    energy: "bajo",
    compatibility: { kids: false, dogs: true, cats: true },
    weight: "5 kg",
    breed: "Mestiza",
    photo: "/cachorro-beagle-adoptado.jpg",
    story:
      "Soy Nina, una abuelita dulce que busca un hogar tranquilo para sus últimos años. No me gustan los niños pequeños porque me ponen nerviosa, pero me llevo bien con otros animales. Solo quiero un lugar calentito.",
    healthStatus: "Esterilizada, vacunada, desparasitada, control cardíaco",
    available: true,
    featured: true,
    createdAt: "2026-03-10",
  },
  {
    slug: "rocky",
    name: "Rocky",
    age: "2 años",
    ageCategory: "adulto",
    size: "grande",
    gender: "macho",
    energy: "alto",
    compatibility: { kids: true, dogs: true, cats: false },
    weight: "25 kg",
    breed: "Mestizo",
    photo: "/perro-rescatado-feliz-buscando-familia.jpg",
    story:
      "Soy Rocky, un perro grande con un corazón aún más grande. Me encanta correr, nadar y acompañar a mi familia a todas partes. Necesito espacio para moverme y alguien que disfrute de actividades al aire libre.",
    healthStatus: "Esterilizado, vacunado, desparasitado",
    available: true,
    featured: true,
    createdAt: "2026-03-28",
  },
  // ─── Nuevos ingresos mayo 2026 ───────────────────────────────────────────────
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
        alt: "Diguillín parado en campo abierto al atardecer",
      },
      { src: "/perritos/diguillin/galeria-1.jpg", alt: "Diguillín descansando tranquilo" },
      {
        src: "/perritos/diguillin/galeria-2.jpg",
        alt: "Diguillín acurrucado mirando a la cámara",
      },
      { src: "/perritos/diguillin/galeria-3.jpg", alt: "Primer plano de Diguillín" },
      { src: "/perritos/diguillin/galeria-4.jpg", alt: "Diguillín al aire libre" },
      { src: "/perritos/diguillin/galeria-5.jpg", alt: "Diguillín relajado en el refugio" },
      {
        src: "/perritos/diguillin/galeria-6.jpg",
        alt: "Diguillín durmiendo en la naturaleza",
      },
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
        src: "/perritos/susanita/galeria-1.jpg",
        alt: "Susanita descansando junto a su casita durante el rescate",
      },
      { src: "/perritos/susanita/galeria-2.jpg", alt: "Susanita mirando a la cámara" },
      { src: "/perritos/susanita/galeria-3.jpg", alt: "Susanita tranquila en el refugio" },
      {
        src: "/perritos/susanita/galeria-4.jpg",
        alt: "Susanita durante su proceso de rescate",
      },
      {
        src: "/perritos/susanita/galeria-5.jpg",
        alt: "Susanita lista para una nueva vida",
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

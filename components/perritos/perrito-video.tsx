interface PerritoVideoProps {
  src: string
  poster?: string
  petName: string
}

export function PerritoVideo({ src, poster, petName }: PerritoVideoProps) {
  return (
    <section aria-label={`Video de ${petName}`}>
      <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
        Video de {petName}
      </h2>
      <div className="relative overflow-hidden rounded-xl bg-gray-900 aspect-video shadow-sm">
          <video
          className="w-full h-full"
          controls
          preload="metadata"
          poster={poster}
          playsInline
          aria-label={`Video de ${petName} en el refugio`}
        >
          <source src={src} type="video/mp4" />
          <p className="text-white text-sm p-4">
            Tu navegador no soporta reproducción de video.{" "}
            <a href={src} download className="underline">
              Descargar video
            </a>
          </p>
        </video>
      </div>
    </section>
  )
}

import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  return (
    <li className="flex items-center gap-2 flex-shrink-0">
      <span
        id="language-switcher-label"
        className="sr-only md:not-sr-only md:inline-flex items-center gap-1 text-xs uppercase tracking-wide text-gray-500"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        Idioma
      </span>
      <div
        className="gtranslate_wrapper"
        aria-label="Selector de idioma"
        aria-describedby="language-switcher-label"
      />
    </li>
  )
}


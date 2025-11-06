'use client'

import { useEffect, useState } from 'react'

export function AnalyticsWrapper() {
  const [Analytics, setAnalytics] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    // Solo cargar Analytics en Vercel o si está habilitado explícitamente
    if (process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === 'true') {
      import('@vercel/analytics/next')
        .then((mod) => {
          setAnalytics(() => mod.Analytics)
        })
        .catch(() => {
          // Analytics no disponible, continuar sin él
        })
    }
  }, [])

  if (!Analytics) return null

  return <Analytics />
}


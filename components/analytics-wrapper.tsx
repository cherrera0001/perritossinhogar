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
        .catch((error) => {
          // Log error pero no romper la app
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.warn('Failed to load Vercel Analytics:', error)
          }
        })
    }
  }, [])

  if (!Analytics) return null

  return <Analytics />
}


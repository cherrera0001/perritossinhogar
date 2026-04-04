/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // CRÍTICO: No ignorar errores de TypeScript en producción
    // Los errores deben corregirse antes de desplegar
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Configuración para exportación estática (GitHub Pages)
  output: process.env.EXPORT_STATIC === 'true' ? 'export' : undefined,
  trailingSlash: process.env.EXPORT_STATIC === 'true',
  basePath: process.env.BASE_PATH || '',
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; frame-src https://docs.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://docs.google.com;"
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ]
  },
}

export default nextConfig

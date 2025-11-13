/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuración para exportación estática (GitHub Pages)
  output: process.env.EXPORT_STATIC === 'true' ? 'export' : undefined,
  trailingSlash: process.env.EXPORT_STATIC === 'true',
  basePath: process.env.BASE_PATH || '',
}

export default nextConfig

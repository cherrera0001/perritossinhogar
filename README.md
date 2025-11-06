# Perritos Sin Hogar

Sitio web para la adopción y rescate de perros en Chile.

## Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Construir para producción
pnpm build

# Ejecutar producción local
pnpm start
```

## Despliegue

- **[CONFIGURACION-SIN-DNS-NIC.md](./CONFIGURACION-SIN-DNS-NIC.md)** ⭐ **LEE ESTO PRIMERO** - Guía específica si solo tienes el dominio en nic.cl sin DNS
- **[DEPLOY.md](./DEPLOY.md)** - Guía completa de despliegue en GitHub Pages y Cloudflare Pages
- **[CONFIGURACION-DNS.md](./CONFIGURACION-DNS.md)** - Guía detallada para configurar DNS con nic.cl y Cloudflare
- **[GUIA-RAPIDA-DNS.md](./GUIA-RAPIDA-DNS.md)** - Guía rápida paso a paso para configurar el dominio

### Despliegue Rápido en Cloudflare Pages (Recomendado)

1. Conecta tu repositorio de GitHub a Cloudflare Pages
2. Configura:
   - **Build command:** `cd code && pnpm install && pnpm build`
   - **Build output directory:** `code/.next`
   - **Framework preset:** `Next.js`
3. Agrega tu dominio personalizado `perritossinhogar.cl`

### Despliegue en GitHub Pages

1. Habilita GitHub Pages en Settings > Pages
2. Selecciona "GitHub Actions" como fuente
3. El workflow se ejecutará automáticamente en cada push a `main`

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI

## Estructura del Proyecto

```
code/
├── app/              # Páginas y layouts de Next.js
├── components/       # Componentes React
│   ├── landing/     # Componentes de la landing page
│   └── ui/          # Componentes de UI reutilizables
├── lib/             # Utilidades y helpers
├── public/          # Archivos estáticos
└── styles/          # Estilos globales
```


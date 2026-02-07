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

## Notas de Dependencias

### Override para vaul + React 19

El proyecto usa `vaul@0.9.9` para el componente Drawer, pero esta versión solo declara soporte oficial para React 16, 17 y 18 en sus `peerDependencies`. Sin embargo, vaul **sí funciona correctamente con React 19** porque:

- Solo depende de `@radix-ui/react-dialog`
- `@radix-ui/react-dialog@1.1.4` ya soporta React 19
- El problema es solo la declaración de `peerDependencies` en el package.json de vaul

**Solución aplicada:**

Se agregó un `overrides` en `package.json` para forzar que vaul acepte React 19:

```json
"overrides": {
  "vaul": {
    "react": "19.2.1",
    "react-dom": "19.2.1"
  }
}
```

Esta solución es temporal y profesional. Cuando vaul actualice su package.json para soportar React 19 oficialmente, se puede remover este override.

**Verificar futuras versiones de vaul:**
```bash
npm view vaul peerDependencies
```


# Guía de Despliegue - Perritos Sin Hogar

Esta guía explica cómo desplegar el sitio web en GitHub Pages y/o Cloudflare Pages.

## Opción 1: Desplegar en GitHub Pages

### Requisitos Previos

1. Tener una cuenta de GitHub
2. Crear un repositorio en GitHub
3. Subir el código al repositorio

### Pasos para Desplegar

1. **Subir el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Habilitar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Ve a **Settings** > **Pages**
   - En **Source**, selecciona **GitHub Actions**
   - Guarda los cambios

3. **El workflow se ejecutará automáticamente:**
   - Cada vez que hagas push a la rama `main`, se desplegará automáticamente
   - El sitio estará disponible en: `https://TU_USUARIO.github.io/TU_REPOSITORIO`

4. **Configurar dominio personalizado (perritossinhogar.cl):**
   - En la misma página de Settings > Pages
   - En **Custom domain**, ingresa: `perritossinhogar.cl`
   - GitHub te dará instrucciones para configurar los registros DNS

### Configuración DNS para GitHub Pages

En tu proveedor de DNS (donde está registrado perritossinhogar.cl), agrega:

- **Tipo A:**
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

- **Tipo CNAME (opcional, para www):**
  - `www` → `TU_USUARIO.github.io`

## Opción 2: Desplegar en Cloudflare Pages

### Requisitos Previos

1. Tener una cuenta de Cloudflare
2. Tener el dominio `perritossinhogar.cl` configurado en Cloudflare
3. Obtener un API Token de Cloudflare

### Pasos para Desplegar

#### Método A: Desde la Interfaz Web de Cloudflare

1. **Ve a Cloudflare Dashboard:**
   - Inicia sesión en [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Selecciona tu cuenta

2. **Crear un nuevo proyecto de Pages:**
   - Ve a **Pages** en el menú lateral
   - Haz clic en **Create a project**
   - Selecciona **Connect to Git**
   - Conecta tu repositorio de GitHub

3. **Configurar el proyecto:**
   - **Project name:** `perritossinhogar`
   - **Production branch:** `main`
   - **Build command:** `cd code && pnpm install && pnpm build`
   - **Build output directory:** `code/.next`
   - **Framework preset:** `Next.js`
   - **Node version:** `20`

4. **Configurar variables de entorno (opcional):**
   - Si necesitas variables de entorno, agrégalas en la configuración del proyecto

5. **Desplegar:**
   - Cloudflare construirá y desplegará automáticamente
   - El sitio estará disponible en: `https://perritossinhogar.pages.dev`

#### Método B: Usando GitHub Actions (Automático)

1. **Configurar Secrets en GitHub:**
   - Ve a tu repositorio en GitHub
   - Ve a **Settings** > **Secrets and variables** > **Actions**
   - Agrega los siguientes secrets:
     - `CLOUDFLARE_API_TOKEN`: Tu API Token de Cloudflare
     - `CLOUDFLARE_ACCOUNT_ID`: Tu Account ID de Cloudflare

2. **Obtener API Token de Cloudflare:**
   - Ve a [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Haz clic en **Create Token**
   - Usa el template **Edit Cloudflare Workers** o crea uno personalizado con permisos de Pages
   - Copia el token generado

3. **Obtener Account ID:**
   - En el Dashboard de Cloudflare, en la barra lateral derecha verás tu **Account ID**

4. **El workflow se ejecutará automáticamente:**
   - Cada push a `main` desplegará automáticamente en Cloudflare Pages

### Configuración DNS para Cloudflare Pages

1. **En Cloudflare Dashboard:**
   - Ve a **DNS** > **Records**
   - Agrega un registro **CNAME:**
     - **Name:** `@` (o deja en blanco para el dominio raíz)
     - **Target:** `perritossinhogar.pages.dev`
     - **Proxy status:** Proxied (naranja)

2. **Para www (opcional):**
   - Agrega otro registro **CNAME:**
     - **Name:** `www`
     - **Target:** `perritossinhogar.pages.dev`
     - **Proxy status:** Proxied (naranja)

3. **Configurar dominio personalizado en Pages:**
   - Ve a tu proyecto en Cloudflare Pages
   - Ve a **Custom domains**
   - Agrega `perritossinhogar.cl` y `www.perritossinhogar.cl`
   - Cloudflare configurará automáticamente los certificados SSL

## Comparación de Opciones

### GitHub Pages
- ✅ Gratis
- ✅ Fácil de configurar
- ✅ Integración directa con GitHub
- ⚠️ Solo sitios estáticos (Next.js export)
- ⚠️ Menos funciones avanzadas

### Cloudflare Pages
- ✅ Gratis
- ✅ Soporte completo para Next.js (SSR, API routes, etc.)
- ✅ CDN global rápido
- ✅ SSL automático
- ✅ Funciones serverless incluidas
- ✅ Mejor para sitios dinámicos

## Recomendación

Para un sitio Next.js como este, **recomiendo Cloudflare Pages** porque:
- Soporta todas las características de Next.js
- Mejor rendimiento con CDN global
- SSL automático y gratuito
- Más fácil de configurar con dominio personalizado

## Solución de Problemas

### Error: "Module not found" durante el build
- Asegúrate de que todas las dependencias estén en `package.json`
- Ejecuta `pnpm install` localmente para verificar

### Error: "Base path not found"
- Verifica que la configuración de `basePath` en `next.config.mjs` sea correcta
- Para GitHub Pages, puede ser necesario configurar un basePath si el repositorio no es `username.github.io`

### El sitio no carga después del despliegue
- Verifica los logs de build en GitHub Actions o Cloudflare Pages
- Revisa que todos los archivos estáticos estén en la carpeta correcta
- Verifica la configuración DNS

## Comandos Útiles

### Build local para probar
```bash
cd code
pnpm install
EXPORT_STATIC=true pnpm build
```

### Verificar build local
```bash
cd code
pnpm start
```

## Notas Importantes

- El proyecto usa `pnpm` como gestor de paquetes
- Vercel Analytics solo se carga en Vercel o si `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS=true`
- Las imágenes están configuradas como `unoptimized` para compatibilidad con exportación estática
- El proyecto está configurado para funcionar tanto en modo estático como dinámico


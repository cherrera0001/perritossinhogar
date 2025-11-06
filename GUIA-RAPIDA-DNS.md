# Guía Rápida: Configurar perritossinhogar.cl

## Escenario: Dominio en nic.cl + Cloudflare DNS + GitHub Pages/Cloudflare Pages

### Paso 1: Configurar Cloudflare DNS (5 minutos)

1. **Agregar sitio en Cloudflare:**
   - Ve a https://dash.cloudflare.com
   - Haz clic en **Add a Site**
   - Ingresa `perritossinhogar.cl`
   - Selecciona plan **Free**
   - Anota los 2 nameservers que te da (ej: `alice.ns.cloudflare.com` y `bob.ns.cloudflare.com`)

2. **Cambiar nameservers en nic.cl:**
   - Inicia sesión en https://www.nic.cl
   - Ve a administración de `perritossinhogar.cl`
   - Busca **Nameservers** o **Servidores de nombres**
   - Reemplaza los nameservers actuales con los de Cloudflare
   - Guarda cambios

3. **Esperar propagación:**
   - 24-48 horas (puedes verificar en Cloudflare Dashboard)

### Paso 2A: Si usas GitHub Pages

1. **En Cloudflare DNS (después de la propagación):**
   - Ve a **DNS** > **Records**
   - Agrega 4 registros **A** para `@`:
     - `185.199.108.153` (DNS only - nube gris)
     - `185.199.109.153` (DNS only - nube gris)
     - `185.199.110.153` (DNS only - nube gris)
     - `185.199.111.153` (DNS only - nube gris)
   - Agrega 1 registro **CNAME** para `www`:
     - Target: `cherrera0001.github.io` (DNS only - nube gris)

2. **En GitHub:**
   - Ve a tu repositorio > **Settings** > **Pages**
   - En **Custom domain**, ingresa: `perritossinhogar.cl`
   - Marca **Enforce HTTPS**

### Paso 2B: Si usas Cloudflare Pages (Recomendado)

1. **Desplegar en Cloudflare Pages:**
   - Ve a **Pages** en Cloudflare Dashboard
   - **Create a project** > **Connect to Git**
   - Conecta tu repositorio de GitHub
   - Configura:
     - Build command: `cd code && pnpm install && pnpm build`
     - Build output: `code/.next`
     - Framework: `Next.js`

2. **En Cloudflare DNS:**
   - Ve a **DNS** > **Records**
   - Agrega registro **CNAME** para `@`:
     - Target: `perritossinhogar.pages.dev` (Proxied - nube naranja)
   - Agrega registro **CNAME** para `www`:
     - Target: `perritossinhogar.pages.dev` (Proxied - nube naranja)

3. **Configurar dominio en Pages:**
   - En tu proyecto de Pages, ve a **Custom domains**
   - Agrega `perritossinhogar.cl` y `www.perritossinhogar.cl`
   - SSL se configurará automáticamente

## Resumen Visual

```
nic.cl (Registrador)
    ↓
Cambiar Nameservers a Cloudflare
    ↓
Cloudflare DNS
    ↓
┌─────────────────┬─────────────────┐
│  GitHub Pages   │ Cloudflare Pages │
│  (4 registros A)│  (CNAME proxied) │
└─────────────────┴─────────────────┘
```

## Tiempos de Espera

- **Propagación de nameservers:** 24-48 horas
- **Propagación de registros DNS:** 1-24 horas
- **Verificación de dominio en GitHub:** 5-30 minutos
- **SSL en Cloudflare:** Automático (puede tardar hasta 24 horas)

## Verificación

```bash
# Verificar nameservers
nslookup -type=NS perritossinhogar.cl

# Verificar registros A
nslookup perritossinhogar.cl

# Verificar desde web
https://www.whatsmydns.net
```

## ¿Problemas?

Consulta [CONFIGURACION-DNS.md](./CONFIGURACION-DNS.md) para troubleshooting detallado.


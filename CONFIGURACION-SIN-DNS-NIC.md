# Configuración: Dominio en nic.cl SIN DNS - Usando Cloudflare

## Tu Situación Actual

- ✅ Dominio `perritossinhogar.cl` registrado en nic.cl
- ❌ NO tienes servicio DNS de nic.cl
- ❌ NO tienes hosting
- ✅ Necesitas configurar DNS en Cloudflare
- ✅ Necesitas hosting en GitHub Pages o Cloudflare Pages

## Solución: Cloudflare DNS + GitHub Pages o Cloudflare Pages

### Paso 1: Configurar Cloudflare DNS (OBLIGATORIO)

Como no tienes DNS en nic.cl, **DEBES** usar Cloudflare para manejar el DNS.

#### 1.1 Crear cuenta en Cloudflare (si no tienes)

1. Ve a https://dash.cloudflare.com/sign-up
2. Crea una cuenta gratuita
3. Verifica tu email

#### 1.2 Agregar tu dominio a Cloudflare

1. En Cloudflare Dashboard, haz clic en **Add a Site**
2. Ingresa: `perritossinhogar.cl`
3. Haz clic en **Add site**
4. Selecciona el plan **Free** (gratis)
5. Haz clic en **Continue**

#### 1.3 Obtener los Nameservers de Cloudflare

Cloudflare te mostrará 2 nameservers. En tu caso son:
```
leland.ns.cloudflare.com
zainab.ns.cloudflare.com
```

**IMPORTANTE:** Ya tienes estos nameservers. Procede al siguiente paso.

#### 1.4 Cambiar Nameservers en nic.cl

1. Inicia sesión en https://www.nic.cl
2. Ve a la administración de tu dominio `perritossinhogar.cl`
3. Busca la sección **"Nameservers"** o **"Servidores de nombres"** o **"DNS"**
4. Reemplaza los nameservers actuales con estos:
   - **Nameserver 1:** `leland.ns.cloudflare.com`
   - **Nameserver 2:** `zainab.ns.cloudflare.com`
5. Guarda los cambios

**💡 TIP:** Si no encuentras la opción, busca en diferentes secciones como "Configuración", "Zona DNS", o "Servidores DNS". Si aún no la encuentras, contacta soporte de nic.cl.

#### 1.5 Esperar la propagación

- **Tiempo:** 24-48 horas (puede ser más rápido, pero es mejor esperar)
- **Verificación:** En Cloudflare Dashboard verás el estado cambiar a "Active"
- Puedes verificar en: https://www.whatsmydns.net/#NS/perritossinhogar.cl

---

## Opción A: GitHub Pages + Cloudflare DNS

### Paso 2A: Configurar GitHub Pages

1. Ve a tu repositorio: https://github.com/cherrera0001/perritossinhogar
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda los cambios
5. El workflow se ejecutará automáticamente y desplegará tu sitio

### Paso 3A: Configurar DNS en Cloudflare para GitHub Pages

**IMPORTANTE:** Espera a que los nameservers se propaguen (Paso 1.5) antes de continuar.

1. En Cloudflare Dashboard, ve a tu dominio `perritossinhogar.cl`
2. Ve a **DNS** > **Records**
3. Elimina cualquier registro que Cloudflare haya agregado automáticamente

4. **Agregar registros A para el dominio raíz:**
   
   Haz clic en **Add record** y agrega estos 4 registros **A**:
   
   **Registro 1:**
   - **Type:** `A`
   - **Name:** `@` (o deja en blanco)
   - **IPv4 address:** `185.199.108.153`
   - **Proxy status:** DNS only (nube GRIS, NO naranja) ⚠️ IMPORTANTE
   - **TTL:** Auto
   - Haz clic en **Save**
   
   **Registro 2:**
   - **Type:** `A`
   - **Name:** `@`
   - **IPv4 address:** `185.199.109.153`
   - **Proxy status:** DNS only (nube GRIS)
   - **TTL:** Auto
   - Haz clic en **Save**
   
   **Registro 3:**
   - **Type:** `A`
   - **Name:** `@`
   - **IPv4 address:** `185.199.110.153`
   - **Proxy status:** DNS only (nube GRIS)
   - **TTL:** Auto
   - Haz clic en **Save**
   
   **Registro 4:**
   - **Type:** `A`
   - **Name:** `@`
   - **IPv4 address:** `185.199.111.153`
   - **Proxy status:** DNS only (nube GRIS)
   - **TTL:** Auto
   - Haz clic en **Save**

5. **Agregar registro CNAME para www (opcional):**
   
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `cherrera0001.github.io`
   - **Proxy status:** DNS only (nube GRIS)
   - **TTL:** Auto
   - Haz clic en **Save**

### Paso 4A: Configurar dominio en GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** > **Pages**
3. En **Custom domain**, ingresa: `perritossinhogar.cl`
4. Haz clic en **Save**
5. GitHub verificará el dominio (puede tardar unos minutos)
6. Una vez verificado, marca la casilla **Enforce HTTPS**

### Paso 5A: Configurar SSL en Cloudflare (Opcional)

Si quieres usar el proxy de Cloudflare (CDN):

1. En Cloudflare Dashboard, ve a **SSL/TLS**
2. Selecciona **Full** o **Full (strict)**
3. **IMPORTANTE:** Si activas el proxy (nube naranja), GitHub Pages puede tener problemas. Mejor mantenerlo en DNS only.

---

## Opción B: Cloudflare Pages (RECOMENDADO para Next.js)

### Paso 2B: Desplegar en Cloudflare Pages

1. En Cloudflare Dashboard, ve a **Pages**
2. Haz clic en **Create a project**
3. Selecciona **Connect to Git**
4. Conecta tu cuenta de GitHub
5. Selecciona el repositorio: `cherrera0001/perritossinhogar`
6. Haz clic en **Begin setup**

7. **Configurar el proyecto:**
   - **Project name:** `perritossinhogar`
   - **Production branch:** `main`
   - **Build command:** `cd code && pnpm install && pnpm build`
   - **Build output directory:** `code/.next`
   - **Framework preset:** `Next.js`
   - **Root directory:** `/` (raíz del repositorio)
   - **Node version:** `20`

8. Haz clic en **Save and Deploy**

9. Cloudflare construirá y desplegará tu sitio
10. El sitio estará disponible en: `https://perritossinhogar.pages.dev`

### Paso 3B: Configurar DNS en Cloudflare para Cloudflare Pages

**IMPORTANTE:** Espera a que los nameservers se propaguen (Paso 1.5) antes de continuar.

1. En Cloudflare Dashboard, ve a tu dominio `perritossinhogar.cl`
2. Ve a **DNS** > **Records**
3. Elimina cualquier registro que Cloudflare haya agregado automáticamente

4. **Agregar registro CNAME para el dominio raíz:**
   
   - **Type:** `CNAME`
   - **Name:** `@` (o deja en blanco)
   - **Target:** `perritossinhogar.pages.dev`
   - **Proxy status:** Proxied (nube NARANJA) ✅ Esto activa el CDN
   - **TTL:** Auto
   - Haz clic en **Save**

5. **Agregar registro CNAME para www:**
   
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `perritossinhogar.pages.dev`
   - **Proxy status:** Proxied (nube NARANJA)
   - **TTL:** Auto
   - Haz clic en **Save**

### Paso 4B: Configurar dominio personalizado en Cloudflare Pages

1. En Cloudflare Dashboard, ve a **Pages**
2. Selecciona tu proyecto `perritossinhogar`
3. Ve a la pestaña **Custom domains**
4. Haz clic en **Set up a custom domain**
5. Ingresa: `perritossinhogar.cl`
6. Haz clic en **Continue**
7. Cloudflare configurará automáticamente el SSL (puede tardar hasta 24 horas)
8. Repite para `www.perritossinhogar.cl` (opcional)

---

## Resumen de Pasos (Cloudflare Pages - Recomendado)

```
1. Crear cuenta en Cloudflare
2. Agregar dominio perritossinhogar.cl a Cloudflare
3. Cambiar nameservers en nic.cl a los de Cloudflare
4. Esperar 24-48 horas para propagación
5. Desplegar en Cloudflare Pages (conectar GitHub)
6. Configurar DNS en Cloudflare (CNAME proxied)
7. Agregar dominio personalizado en Cloudflare Pages
8. Esperar SSL automático (hasta 24 horas)
```

## Verificación

### Verificar Nameservers
```bash
nslookup -type=NS perritossinhogar.cl
```
Debe mostrar los nameservers de Cloudflare.

### Verificar DNS
```bash
nslookup perritossinhogar.cl
```
Debe mostrar las IPs correctas según tu configuración.

### Herramientas Online
- https://www.whatsmydns.net - Verificar propagación DNS
- https://dnschecker.org - Verificar DNS globalmente

## Troubleshooting

### "Domain verification failed" en GitHub Pages
- Verifica que los registros A estén correctos
- Asegúrate de que el proxy esté DESACTIVADO (nube gris)
- Espera hasta 24 horas para propagación completa

### "SSL certificate pending" en Cloudflare
- Normal, puede tardar hasta 24 horas
- Verifica que el dominio esté correctamente configurado en Cloudflare Pages
- Asegúrate de que el proxy esté ACTIVADO (nube naranja)

### El sitio no carga
- Verifica que los nameservers estén correctos en nic.cl
- Espera la propagación DNS completa (24-48 horas)
- Verifica que el build en Pages haya sido exitoso
- Revisa los logs en Cloudflare Pages o GitHub Actions

## Ventajas de Cloudflare Pages vs GitHub Pages

| Característica | GitHub Pages | Cloudflare Pages |
|---------------|--------------|------------------|
| Next.js completo | ❌ Solo estático | ✅ SSR, API routes |
| CDN global | ✅ | ✅ |
| SSL automático | ✅ | ✅ |
| Configuración DNS | Manual | Integrado |
| Rendimiento | Bueno | Excelente |
| Funciones serverless | ❌ | ✅ |

## Recomendación Final

**Usa Cloudflare Pages** porque:
- Tu proyecto es Next.js y necesita soporte completo
- Ya estás usando Cloudflare para DNS
- Todo está integrado en un solo lugar
- Mejor rendimiento y más funciones


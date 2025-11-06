# Pasos Inmediatos: Configurar perritossinhogar.cl

## ✅ Ya Tienes:
- Dominio registrado en nic.cl
- Nameservers de Cloudflare:
  - `leland.ns.cloudflare.com`
  - `zainab.ns.cloudflare.com`

## 🔴 ACCIÓN INMEDIATA: Cambiar Nameservers en nic.cl

### Paso 1: Iniciar sesión en nic.cl

1. Ve a https://www.nic.cl
2. Inicia sesión con tus credenciales

### Paso 2: Acceder a la administración del dominio

1. Busca la sección de **"Mis dominios"** o **"Administración de dominios"**
2. Haz clic en `perritossinhogar.cl`

### Paso 3: Cambiar los Nameservers

1. Busca la sección que dice:
   - **"Nameservers"** o
   - **"Servidores de nombres"** o
   - **"DNS"** o
   - **"Servidores DNS"**

2. Verás campos para nameservers (normalmente 2 o más campos)

3. **Reemplaza los nameservers actuales** con estos:

   **Nameserver 1:**
   ```
   leland.ns.cloudflare.com
   ```

   **Nameserver 2:**
   ```
   zainab.ns.cloudflare.com
   ```

4. **Guarda los cambios** (botón "Guardar", "Actualizar", "Aplicar", etc.)

### Paso 4: Verificar en Cloudflare

1. Ve a https://dash.cloudflare.com
2. Selecciona tu dominio `perritossinhogar.cl`
3. Verás el estado del dominio
4. Cuando los nameservers se propaguen (24-48 horas), el estado cambiará a **"Active"**

---

## ⏳ Mientras Esperas la Propagación (24-48 horas)

Puedes preparar el despliegue:

### Opción A: Preparar Cloudflare Pages

1. En Cloudflare Dashboard, ve a **Pages**
2. Haz clic en **Create a project**
3. Selecciona **Connect to Git**
4. Conecta tu cuenta de GitHub
5. Selecciona el repositorio: `cherrera0001/perritossinhogar`
6. Configura:
   - **Project name:** `perritossinhogar`
   - **Production branch:** `main`
   - **Build command:** `cd code && pnpm install && pnpm build`
   - **Build output directory:** `code/.next`
   - **Framework preset:** `Next.js`
   - **Root directory:** `/`
   - **Node version:** `20`
7. Haz clic en **Save and Deploy**

El sitio estará disponible temporalmente en: `https://perritossinhogar.pages.dev`

### Opción B: Preparar GitHub Pages

1. Ve a https://github.com/cherrera0001/perritossinhogar
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda los cambios

---

## ✅ Después de la Propagación DNS (24-48 horas después)

### Si usas Cloudflare Pages:

1. **Verificar que el dominio esté "Active" en Cloudflare Dashboard**

2. **Configurar DNS en Cloudflare:**
   - Ve a **DNS** > **Records**
   - Elimina cualquier registro automático que Cloudflare haya creado
   - Agrega estos registros:

   **Registro 1:**
   - **Type:** `CNAME`
   - **Name:** `@` (o deja en blanco)
   - **Target:** `perritossinhogar.pages.dev`
   - **Proxy status:** Proxied (nube NARANJA) ✅
   - **TTL:** Auto
   - Guarda

   **Registro 2:**
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `perritossinhogar.pages.dev`
   - **Proxy status:** Proxied (nube NARANJA) ✅
   - **TTL:** Auto
   - Guarda

3. **Agregar dominio personalizado en Cloudflare Pages:**
   - Ve a **Pages** > tu proyecto `perritossinhogar`
   - Ve a **Custom domains**
   - Haz clic en **Set up a custom domain**
   - Ingresa: `perritossinhogar.cl`
   - Haz clic en **Continue**
   - Repite para `www.perritossinhogar.cl` (opcional)

4. **Esperar SSL (hasta 24 horas):**
   - Cloudflare configurará automáticamente el certificado SSL
   - El sitio estará disponible en `https://perritossinhogar.cl`

### Si usas GitHub Pages:

1. **Verificar que el dominio esté "Active" en Cloudflare Dashboard**

2. **Configurar DNS en Cloudflare:**
   - Ve a **DNS** > **Records**
   - Elimina cualquier registro automático
   - Agrega estos registros:

   **Registros A (4 registros):**
   - **Type:** `A`
   - **Name:** `@`
   - **IPv4 address:** `185.199.108.153`
   - **Proxy status:** DNS only (nube GRIS) ⚠️ IMPORTANTE
   - Guarda
   
   Repite para:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   **Registro CNAME:**
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `cherrera0001.github.io`
   - **Proxy status:** DNS only (nube GRIS) ⚠️
   - Guarda

3. **Configurar dominio en GitHub:**
   - Ve a tu repositorio > **Settings** > **Pages**
   - En **Custom domain**, ingresa: `perritossinhogar.cl`
   - Guarda
   - Espera la verificación (puede tardar unos minutos)
   - Marca **Enforce HTTPS**

---

## 🔍 Verificar Propagación DNS

### Verificar Nameservers:

```bash
nslookup -type=NS perritossinhogar.cl
```

Debe mostrar:
```
leland.ns.cloudflare.com
zainab.ns.cloudflare.com
```

### Herramientas Online:

- https://www.whatsmydns.net/#NS/perritossinhogar.cl
- https://dnschecker.org/#NS/perritossinhogar.cl

---

## 📋 Checklist

- [ ] Cambiar nameservers en nic.cl a `leland.ns.cloudflare.com` y `zainab.ns.cloudflare.com`
- [ ] Guardar cambios en nic.cl
- [ ] Verificar en Cloudflare Dashboard que el dominio aparezca
- [ ] Esperar 24-48 horas para propagación
- [ ] Verificar que el dominio esté "Active" en Cloudflare
- [ ] Configurar DNS según la opción elegida (Cloudflare Pages o GitHub Pages)
- [ ] Agregar dominio personalizado
- [ ] Esperar SSL (si es Cloudflare Pages, automático)

---

## ⚠️ Notas Importantes

1. **Tiempo de propagación:** Los cambios de nameservers pueden tardar 24-48 horas en propagarse globalmente

2. **No apresurarse:** No configures los registros DNS hasta que el dominio esté "Active" en Cloudflare

3. **Proxy de Cloudflare:**
   - Para Cloudflare Pages: Usa **Proxied** (nube naranja) ✅
   - Para GitHub Pages: Usa **DNS only** (nube gris) ⚠️

4. **SSL:** Cloudflare Pages configura SSL automáticamente. GitHub Pages también, pero puede tardar más.

---

## 🆘 Si Tienes Problemas

### "No encuentro la opción de nameservers en nic.cl"
- Busca en diferentes secciones: "DNS", "Configuración", "Zona DNS"
- Contacta soporte de nic.cl si no encuentras la opción

### "El dominio no aparece como Active en Cloudflare"
- Espera más tiempo (puede tardar hasta 48 horas)
- Verifica que los nameservers estén correctos en nic.cl
- Verifica la propagación con las herramientas online

### "El sitio no carga después de configurar DNS"
- Verifica que los registros DNS estén correctos
- Espera más tiempo para la propagación completa
- Revisa los logs en Cloudflare Pages o GitHub Actions


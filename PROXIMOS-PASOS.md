# Próximos Pasos - Después de Cambiar Nameservers en nic.cl

## ✅ Lo que acabas de hacer:

- Cambiaste los nameservers en nic.cl a:
  - `leland.ns.cloudflare.com`
  - `zainab.ns.cloudflare.com`

## 🔴 ACCIÓN INMEDIATA: Guardar los cambios

1. **Asegúrate de hacer clic en el botón verde "Actualizar datos de dominio"** en la parte inferior de la página
2. Verifica que recibas una confirmación de que los cambios se guardaron

---

## ⏳ Paso 1: Esperar la Propagación DNS (24-48 horas)

Los nameservers necesitan propagarse globalmente. Esto puede tardar:

- **Mínimo:** 1-2 horas (en algunos casos)
- **Típico:** 24 horas
- **Máximo:** 48 horas

### Cómo verificar la propagación:

1. **En Cloudflare Dashboard:**
   - Ve a https://dash.cloudflare.com
   - Selecciona tu dominio `perritossinhogar.cl`
   - El estado cambiará de "Pending" a **"Active"** cuando esté listo

2. **Herramientas online:**
   - https://www.whatsmydns.net/#NS/perritossinhogar.cl
   - https://dnschecker.org/#NS/perritossinhogar.cl
   - Debe mostrar `leland.ns.cloudflare.com` y `zainab.ns.cloudflare.com` en todo el mundo

3. **Desde terminal (opcional):**
   ```bash
   nslookup -type=NS perritossinhogar.cl
   ```

---

## 🚀 Paso 2: Mientras Esperas - Preparar el Despliegue

Puedes preparar todo mientras esperas la propagación DNS.

### Opción A: Cloudflare Pages (RECOMENDADO para Next.js)

#### 2.1 Crear proyecto en Cloudflare Pages

1. Ve a https://dash.cloudflare.com
2. En el menú lateral, haz clic en **Pages**
3. Haz clic en **Create a project**
4. Selecciona **Connect to Git**
5. Autoriza Cloudflare a acceder a tu cuenta de GitHub
6. Selecciona el repositorio: `cherrera0001/perritossinhogar`
7. Haz clic en **Begin setup**

#### 2.2 Configurar el build

Configura estos valores:

- **Project name:** `perritossinhogar`
- **Production branch:** `main`
- **Build command:** `cd code && pnpm install && pnpm build`
- **Build output directory:** `code/.next`
- **Framework preset:** `Next.js` (selecciónalo del dropdown)
- **Root directory:** `/` (deja en blanco o pon `/`)
- **Node version:** `20` (o la versión más reciente disponible)

#### 2.3 Desplegar

1. Haz clic en **Save and Deploy**
2. Cloudflare comenzará a construir tu sitio
3. El sitio estará disponible temporalmente en: `https://perritossinhogar.pages.dev`
4. Puedes verificar que funciona correctamente

---

## ✅ Paso 3: Después de la Propagación DNS - Configurar DNS en Cloudflare

**IMPORTANTE:** Solo haz esto cuando el dominio esté "Active" en Cloudflare Dashboard.

### 3.1 Verificar que el dominio esté activo

1. En Cloudflare Dashboard, ve a tu dominio `perritossinhogar.cl`
2. Debe mostrar estado **"Active"** (no "Pending")

### 3.2 Configurar registros DNS

1. Ve a **DNS** > **Records**
2. Elimina cualquier registro que Cloudflare haya agregado automáticamente (si hay)

3. **Agregar registro CNAME para el dominio raíz:**

   Haz clic en **Add record**:
   
   - **Type:** `CNAME`
   - **Name:** `@` (o deja en blanco)
   - **Target:** `perritossinhogar.pages.dev`
   - **Proxy status:** Proxied (nube NARANJA) ✅ **IMPORTANTE: Debe estar en naranja**
   - **TTL:** Auto
   - Haz clic en **Save**

4. **Agregar registro CNAME para www (opcional):**

   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `perritossinhogar.pages.dev`
   - **Proxy status:** Proxied (nube NARANJA) ✅
   - **TTL:** Auto
   - Haz clic en **Save**

### 3.3 Agregar dominio personalizado en Cloudflare Pages

1. En Cloudflare Dashboard, ve a **Pages**
2. Selecciona tu proyecto `perritossinhogar`
3. Ve a la pestaña **Custom domains**
4. Haz clic en **Set up a custom domain**
5. Ingresa: `perritossinhogar.cl`
6. Haz clic en **Continue**
7. Cloudflare verificará la configuración DNS
8. Repite para `www.perritossinhogar.cl` (opcional)

### 3.4 Esperar SSL (hasta 24 horas)

- Cloudflare configurará automáticamente el certificado SSL
- Puede tardar hasta 24 horas
- El sitio estará disponible en `https://perritossinhogar.cl` cuando esté listo

---

## 📋 Checklist de Progreso

### Inmediato:
- [x] Cambiar nameservers en nic.cl
- [ ] Guardar cambios en nic.cl (botón "Actualizar datos de dominio")
- [ ] Verificar confirmación de guardado

### Durante la espera (24-48 horas):
- [ ] Crear proyecto en Cloudflare Pages
- [ ] Configurar build correctamente
- [ ] Desplegar y verificar que funciona en `perritossinhogar.pages.dev`
- [ ] Verificar propagación DNS con herramientas online

### Después de la propagación:
- [ ] Verificar que el dominio esté "Active" en Cloudflare
- [ ] Configurar registros DNS (CNAME proxied)
- [ ] Agregar dominio personalizado en Cloudflare Pages
- [ ] Esperar SSL (hasta 24 horas)
- [ ] Verificar que `https://perritossinhogar.cl` funciona

---

## 🔍 Verificación Final

Cuando todo esté configurado, deberías poder:

1. ✅ Acceder a `https://perritossinhogar.cl` (con SSL)
2. ✅ Acceder a `https://www.perritossinhogar.cl` (si lo configuraste)
3. ✅ Ver tu sitio Next.js funcionando correctamente
4. ✅ Ver el certificado SSL válido (candado verde en el navegador)

---

## 🆘 Si Tienes Problemas

### "El dominio sigue en Pending después de 48 horas"
- Verifica que los nameservers estén correctos en nic.cl
- Verifica la propagación con las herramientas online
- Contacta soporte de Cloudflare si persiste

### "El build falla en Cloudflare Pages"
- Verifica que el comando de build sea correcto: `cd code && pnpm install && pnpm build`
- Revisa los logs de build en Cloudflare Pages
- Asegúrate de que `package.json` tenga todos los scripts necesarios

### "El sitio no carga después de configurar DNS"
- Verifica que los registros DNS estén correctos (CNAME proxied)
- Espera más tiempo para la propagación completa
- Verifica que el dominio personalizado esté configurado en Cloudflare Pages

### "SSL no se activa"
- Normal, puede tardar hasta 24 horas
- Verifica que el proxy esté activado (nube naranja)
- Asegúrate de que el dominio personalizado esté correctamente configurado

---

## 📞 Recursos Útiles

- **Cloudflare Dashboard:** https://dash.cloudflare.com
- **Verificar DNS:** https://www.whatsmydns.net
- **Verificar SSL:** https://www.ssllabs.com/ssltest/
- **Documentación Cloudflare Pages:** https://developers.cloudflare.com/pages/

---

## 🎉 ¡Felicitaciones!

Una vez completados todos los pasos, tendrás:
- ✅ Dominio personalizado funcionando
- ✅ SSL automático y gratuito
- ✅ CDN global de Cloudflare
- ✅ Hosting gratuito para Next.js
- ✅ Despliegue automático desde GitHub


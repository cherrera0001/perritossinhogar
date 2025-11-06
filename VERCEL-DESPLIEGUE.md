# Desplegar en Vercel y Conectar Dominio Personalizado

## ✅ Tu Situación Actual

El proyecto ya está publicado en Vercel. El enlace que tienes es de v0.app (plataforma de creación de Vercel).

## 🚀 Opciones para Conectar perritossinhogar.cl

Tienes dos opciones principales:

### Opción 1: Vercel + Cloudflare DNS (Recomendado si ya está en Vercel)

Si tu sitio ya está funcionando en Vercel, puedes mantenerlo ahí y solo configurar el dominio personalizado.

#### Paso 1: Obtener la URL de Vercel

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto
3. Ve a **Settings** > **Domains**
4. Anota la URL de Vercel (ej: `perritos-sin-hogar.vercel.app` o similar)

#### Paso 2: Configurar DNS en Cloudflare

Una vez que el dominio esté "Active" en Cloudflare (después de la propagación de nameservers):

1. En Cloudflare Dashboard, ve a tu dominio `perritossinhogar.cl`
2. Ve a **DNS** > **Records**
3. Elimina cualquier registro automático

4. **Agregar registro CNAME para dominio raíz:**
   - **Type:** `CNAME`
   - **Name:** `@` (o deja en blanco)
   - **Target:** `cname.vercel-dns.com` (o la URL que Vercel te indique)
   - **Proxy status:** Proxied (nube NARANJA) ✅
   - Guarda

   **NOTA:** Vercel te dará el target exacto cuando agregues el dominio.

5. **Agregar registro CNAME para www (opcional):**
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `cname.vercel-dns.com` (o el target que Vercel te indique)
   - **Proxy status:** Proxied (nube NARANJA) ✅
   - Guarda

#### Paso 3: Agregar dominio en Vercel

1. En Vercel Dashboard, ve a tu proyecto
2. Ve a **Settings** > **Domains**
3. Haz clic en **Add Domain**
4. Ingresa: `perritossinhogar.cl`
5. Haz clic en **Add**
6. Vercel te mostrará las instrucciones de DNS
7. Verifica que los registros DNS en Cloudflare coincidan con lo que Vercel indica
8. Vercel verificará automáticamente el dominio

**Resultado:** `https://perritossinhogar.cl` funcionará con SSL automático

---

### Opción 2: Migrar a Cloudflare Pages

Si prefieres usar Cloudflare Pages (recomendado para aprovechar mejor el CDN):

Sigue la guía en [FLUJO-CORRECTO.md](./FLUJO-CORRECTO.md)

---

## 📋 Comparación: Vercel vs Cloudflare Pages

| Característica | Vercel | Cloudflare Pages |
|---------------|--------|------------------|
| **Ya está desplegado** | ✅ Sí | ❌ Necesitas desplegar |
| **CDN global** | ✅ Sí | ✅ Sí |
| **SSL automático** | ✅ Sí | ✅ Sí |
| **Next.js completo** | ✅ Sí | ✅ Sí |
| **Dominio personalizado** | ✅ Fácil | ✅ Fácil |
| **Costo** | Gratis (hasta cierto límite) | Gratis |
| **Integración con Cloudflare DNS** | ✅ Funciona | ✅ Nativa |

---

## 🔍 Verificar Estado Actual en Vercel

1. Ve a https://vercel.com/dashboard
2. Busca tu proyecto "perritos-sin-hogar" o similar
3. Verifica la URL actual del despliegue
4. Revisa si ya tienes algún dominio configurado

---

## ⚠️ Importante: Configuración DNS con Vercel

Cuando uses Vercel con Cloudflare DNS:

1. **Vercel te dará un target específico** cuando agregues el dominio
2. **Usa ese target exacto** en el registro CNAME de Cloudflare
3. **Puedes usar Proxied (nube naranja)** - Vercel funciona bien con el proxy de Cloudflare
4. **El SSL se configura automáticamente** en ambos lados

---

## 🚀 Pasos Rápidos (Vercel + Cloudflare)

```
1. Esperar propagación DNS (24-48 horas) → Dominio "Active" en Cloudflare
2. Agregar dominio en Vercel → Obtener target de DNS
3. Configurar CNAME en Cloudflare → Apuntar a target de Vercel
4. Verificar en Vercel → SSL automático
```

---

## 📝 Notas

- Si ya está funcionando en Vercel, **puedes mantenerlo ahí** - funciona perfectamente
- Vercel es excelente para Next.js y tiene integración nativa
- Cloudflare Pages también es excelente, pero requiere migrar el despliegue
- Ambas opciones funcionan bien con Cloudflare DNS

---

## 🆘 Si Tienes Problemas

### "Vercel no verifica el dominio"
- Verifica que el registro CNAME esté correcto en Cloudflare
- Asegúrate de usar el target exacto que Vercel te dio
- Espera unos minutos para la propagación DNS

### "SSL no se activa"
- Normal, puede tardar hasta 24 horas
- Verifica que el proxy esté activado (nube naranja) en Cloudflare
- Revisa el estado en Vercel Dashboard

---

## 💡 Recomendación

Si tu sitio **ya está funcionando bien en Vercel**, manténlo ahí y solo configura el dominio personalizado. Vercel es excelente para Next.js y la configuración es muy simple.

Si quieres aprovechar mejor el CDN de Cloudflare o tener todo en un solo lugar, considera migrar a Cloudflare Pages.


# Flujo Correcto: Cloudflare Pages (Sin pasar por GitHub Pages)

## ✅ Respuesta Directa

**NO necesitas desplegar en GitHub Pages primero.** Puedes ir directamente a Cloudflare Pages.

El flujo correcto es:

```
1. Desplegar en Cloudflare Pages → Crea automáticamente perritossinhogar.pages.dev
2. Configurar DNS en Cloudflare → CNAME apuntando a perritossinhogar.pages.dev
3. Agregar dominio personalizado → perritossinhogar.cl
```

---

## 🚀 Flujo Paso a Paso

### Paso 1: Desplegar en Cloudflare Pages (PRIMERO)

1. Ve a https://dash.cloudflare.com
2. Ve a **Pages** > **Create a project**
3. Selecciona **Connect to Git**
4. Conecta tu cuenta de GitHub
5. Selecciona el repositorio: `cherrera0001/perritossinhogar`
6. Configura el build:
   - **Project name:** `perritossinhogar`
   - **Production branch:** `main`
   - **Build command:** `cd code && pnpm install && pnpm build`
   - **Build output directory:** `code/.next`
   - **Framework preset:** `Next.js`
   - **Node version:** `20`
7. Haz clic en **Save and Deploy**

**Resultado:** Cloudflare crea automáticamente `https://perritossinhogar.pages.dev`

✅ **Ya tienes tu sitio funcionando en perritossinhogar.pages.dev**

---

### Paso 2: Esperar Propagación DNS (Si aún no está lista)

Si los nameservers aún no se han propagado (dominio no está "Active" en Cloudflare):

- Espera 24-48 horas
- Verifica en Cloudflare Dashboard que el dominio esté "Active"
- Puedes verificar en: https://www.whatsmydns.net/#NS/perritossinhogar.cl

**Mientras tanto:** Tu sitio ya funciona en `perritossinhogar.pages.dev`

---

### Paso 3: Configurar DNS en Cloudflare (Después de propagación)

Una vez que el dominio esté "Active" en Cloudflare:

1. En Cloudflare Dashboard, ve a tu dominio `perritossinhogar.cl`
2. Ve a **DNS** > **Records**
3. Elimina cualquier registro automático

4. **Agregar CNAME para dominio raíz:**
   - **Type:** `CNAME`
   - **Name:** `@` (o deja en blanco)
   - **Target:** `perritossinhogar.pages.dev` ← **Este ya existe desde el Paso 1**
   - **Proxy status:** Proxied (nube NARANJA) ✅
   - Guarda

5. **Agregar CNAME para www (opcional):**
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `perritossinhogar.pages.dev`
   - **Proxy status:** Proxied (nube NARANJA) ✅
   - Guarda

---

### Paso 4: Agregar Dominio Personalizado en Cloudflare Pages

1. En Cloudflare Dashboard, ve a **Pages**
2. Selecciona tu proyecto `perritossinhogar`
3. Ve a la pestaña **Custom domains**
4. Haz clic en **Set up a custom domain**
5. Ingresa: `perritossinhogar.cl`
6. Haz clic en **Continue**
7. Cloudflare verificará automáticamente que el DNS esté correcto
8. Repite para `www.perritossinhogar.cl` (opcional)

**Resultado:** `https://perritossinhogar.cl` funcionará con SSL automático

---

## 📋 Orden Correcto de Pasos

```
✅ 1. Desplegar en Cloudflare Pages
   └─> Crea: perritossinhogar.pages.dev (funciona inmediatamente)

⏳ 2. Esperar propagación DNS (24-48 horas)
   └─> Verificar que dominio esté "Active" en Cloudflare

✅ 3. Configurar DNS en Cloudflare
   └─> CNAME @ → perritossinhogar.pages.dev (Proxied)

✅ 4. Agregar dominio personalizado en Cloudflare Pages
   └─> perritossinhogar.cl → SSL automático
```

---

## ❌ Lo que NO necesitas hacer

- ❌ NO necesitas desplegar en GitHub Pages primero
- ❌ NO necesitas configurar nada en GitHub Pages
- ❌ NO necesitas esperar a que GitHub Pages funcione
- ❌ NO necesitas los registros A de GitHub Pages

---

## ✅ Lo que SÍ necesitas hacer

1. ✅ Desplegar directamente en Cloudflare Pages
2. ✅ Esperar propagación DNS (si aún no está lista)
3. ✅ Configurar CNAME en Cloudflare DNS
4. ✅ Agregar dominio personalizado en Cloudflare Pages

---

## 🎯 Ventajas de este Flujo

1. **Más simple:** Un solo lugar (Cloudflare) para todo
2. **Más rápido:** No pasas por GitHub Pages
3. **Mejor rendimiento:** CDN de Cloudflare desde el inicio
4. **SSL automático:** Cloudflare lo configura automáticamente
5. **Next.js completo:** Soporte para SSR, API routes, etc.

---

## 🔄 Flujo Visual

```
GitHub (código)
    ↓
Cloudflare Pages (despliegue)
    ↓
perritossinhogar.pages.dev ← Ya funciona aquí
    ↓
Cloudflare DNS (CNAME proxied)
    ↓
perritossinhogar.cl ← Funciona aquí con SSL
```

---

## ⚠️ Puntos Importantes

1. **perritossinhogar.pages.dev se crea automáticamente** cuando despliegas en Cloudflare Pages
2. **No necesitas crear nada manualmente** - Cloudflare lo hace por ti
3. **El dominio personalizado es opcional** - puedes usar solo .pages.dev si quieres
4. **El SSL se configura automáticamente** cuando agregas el dominio personalizado

---

## 🚀 Puedes Empezar Ahora

Puedes desplegar en Cloudflare Pages **ahora mismo**, incluso si los nameservers aún no se han propagado. El sitio funcionará en `perritossinhogar.pages.dev` inmediatamente, y cuando el DNS se propague, podrás agregar el dominio personalizado.

---

## 📝 Resumen

**Pregunta:** ¿Debo publicar primero en GitHub Pages?

**Respuesta:** NO. Ve directamente a Cloudflare Pages. El sitio funcionará en `perritossinhogar.pages.dev` automáticamente, y luego puedes configurar el dominio personalizado cuando el DNS esté listo.


# Configuración DNS para perritossinhogar.cl

Esta guía explica cómo configurar tu dominio comprado en nic.cl para trabajar con GitHub Pages y Cloudflare DNS.

## Opción 1: Usar Cloudflare DNS (Recomendado)

Esta opción te permite usar Cloudflare como proveedor de DNS, lo que te da:
- CDN global gratuito
- Protección DDoS
- SSL automático
- Mejor rendimiento
- Puedes usar tanto GitHub Pages como Cloudflare Pages

### Paso 1: Transferir el dominio a Cloudflare o usar Cloudflare DNS

#### Opción A: Transferir el dominio completo a Cloudflare

1. **En Cloudflare:**
   - Ve a [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Haz clic en **Add a Site**
   - Ingresa `perritossinhogar.cl`
   - Selecciona el plan **Free**
   - Cloudflare escaneará tus registros DNS actuales

2. **Obtener los Nameservers de Cloudflare:**
   - Después de agregar el sitio, Cloudflare te dará 2 nameservers, por ejemplo:
     - `alice.ns.cloudflare.com`
     - `bob.ns.cloudflare.com`

3. **En nic.cl:**
   - Inicia sesión en [nic.cl](https://www.nic.cl)
   - Ve a la sección de administración de tu dominio `perritossinhogar.cl`
   - Busca la opción **Nameservers** o **Servidores de nombres**
   - Cambia los nameservers a los que Cloudflare te proporcionó
   - Guarda los cambios

4. **Esperar la propagación:**
   - Puede tomar de 24 a 48 horas para que los cambios se propaguen
   - Puedes verificar el estado en Cloudflare Dashboard

#### Opción B: Usar Cloudflare DNS sin transferir (si nic.cl lo permite)

Algunos registradores permiten cambiar solo los nameservers sin transferir el dominio. Sigue los pasos 1-4 de la Opción A.

### Paso 2: Configurar DNS en Cloudflare para GitHub Pages

Una vez que Cloudflare esté manejando tu DNS:

1. **En Cloudflare Dashboard:**
   - Ve a tu dominio `perritossinhogar.cl`
   - Ve a la sección **DNS** > **Records**

2. **Agregar registros DNS para GitHub Pages:**

   **Para el dominio raíz (perritossinhogar.cl):**
   - Haz clic en **Add record**
   - **Type:** `A`
   - **Name:** `@` (o deja en blanco)
   - **IPv4 address:** `185.199.108.153`
   - **Proxy status:** DNS only (nube gris, NO naranja)
   - **TTL:** Auto
   - Haz clic en **Save**

   Repite este proceso para las siguientes IPs:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   **Para www (www.perritossinhogar.cl):**
   - Haz clic en **Add record**
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `cherrera0001.github.io` (reemplaza con tu usuario de GitHub)
   - **Proxy status:** DNS only (nube gris)
   - **TTL:** Auto
   - Haz clic en **Save**

3. **Configurar el dominio en GitHub Pages:**
   - Ve a tu repositorio en GitHub: https://github.com/cherrera0001/perritossinhogar
   - Ve a **Settings** > **Pages**
   - En **Custom domain**, ingresa: `perritossinhogar.cl`
   - Marca la casilla **Enforce HTTPS** (se habilitará después de que se configure el SSL)
   - GitHub verificará el dominio y creará un archivo de verificación

4. **Esperar la verificación:**
   - GitHub puede tardar unos minutos en verificar el dominio
   - Una vez verificado, verás un check verde junto al dominio

### Paso 3: Configurar SSL en Cloudflare

1. **En Cloudflare Dashboard:**
   - Ve a **SSL/TLS** en el menú lateral
   - Selecciona **Full** o **Full (strict)** mode
   - Esto asegurará que todo el tráfico esté encriptado

## Opción 2: Configurar DNS directamente en nic.cl (Sin Cloudflare)

Si prefieres mantener el DNS en nic.cl:

### Paso 1: Configurar DNS en nic.cl

1. **Inicia sesión en nic.cl:**
   - Ve a [nic.cl](https://www.nic.cl)
   - Accede a la administración de tu dominio

2. **Agregar registros A:**
   - Busca la sección de **Zona DNS** o **DNS Records**
   - Agrega los siguientes registros **A** para el dominio raíz:

   ```
   Tipo: A
   Nombre: @ (o perritossinhogar.cl)
   Valor: 185.199.108.153
   TTL: 3600 (o el valor por defecto)
   ```

   Repite para:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

3. **Agregar registro CNAME para www:**
   ```
   Tipo: CNAME
   Nombre: www
   Valor: cherrera0001.github.io
   TTL: 3600
   ```

### Paso 2: Configurar en GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** > **Pages**
3. En **Custom domain**, ingresa: `perritossinhogar.cl`
4. Marca **Enforce HTTPS**

### Paso 3: Verificar

- Espera de 24 a 48 horas para la propagación DNS
- Verifica con herramientas como:
  - [whatsmydns.net](https://www.whatsmydns.net)
  - `nslookup perritossinhogar.cl` en terminal

## Opción 3: Usar Cloudflare Pages (Recomendado para Next.js)

Si decides usar Cloudflare Pages en lugar de GitHub Pages:

### Paso 1: Configurar DNS en Cloudflare

1. Sigue los pasos de la **Opción 1** para configurar Cloudflare DNS

2. **Agregar registros DNS para Cloudflare Pages:**
   - En Cloudflare Dashboard, ve a **DNS** > **Records**
   - Agrega un registro **CNAME:**
     - **Type:** `CNAME`
     - **Name:** `@` (para dominio raíz)
     - **Target:** `perritossinhogar.pages.dev` (o el nombre de tu proyecto en Cloudflare Pages)
     - **Proxy status:** Proxied (nube naranja) - Esto activa el CDN de Cloudflare
     - Haz clic en **Save**

   - Para www:
     - **Type:** `CNAME`
     - **Name:** `www`
     - **Target:** `perritossinhogar.pages.dev`
     - **Proxy status:** Proxied (nube naranja)

### Paso 2: Configurar dominio en Cloudflare Pages

1. En Cloudflare Dashboard, ve a **Pages**
2. Selecciona tu proyecto `perritossinhogar`
3. Ve a **Custom domains**
4. Haz clic en **Set up a custom domain**
5. Ingresa `perritossinhogar.cl` y `www.perritossinhogar.cl`
6. Cloudflare configurará automáticamente el SSL

## Verificación y Troubleshooting

### Verificar configuración DNS

```bash
# Verificar registros A
nslookup perritossinhogar.cl

# Verificar registros CNAME
nslookup www.perritossinhogar.cl

# Verificar desde diferentes ubicaciones
dig perritossinhogar.cl
```

### Herramientas útiles

- [DNS Checker](https://dnschecker.org) - Verifica propagación DNS global
- [What's My DNS](https://www.whatsmydns.net) - Verifica registros DNS
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Verifica certificado SSL

### Problemas comunes

1. **"Domain verification failed" en GitHub Pages:**
   - Verifica que los registros DNS estén correctos
   - Espera hasta 24 horas para la propagación
   - Asegúrate de que el dominio no tenga un CNAME en la raíz (usa registros A)

2. **"SSL certificate pending" en Cloudflare:**
   - Puede tardar hasta 24 horas
   - Verifica que el proxy esté activado (nube naranja)
   - Asegúrate de que el dominio esté correctamente configurado en Cloudflare Pages

3. **El sitio no carga:**
   - Verifica que los nameservers estén correctos
   - Espera la propagación DNS completa
   - Verifica que el build en GitHub Pages/Cloudflare Pages haya sido exitoso

## Resumen de Configuración Recomendada

**Para GitHub Pages con Cloudflare DNS:**
```
@ (A) → 185.199.108.153 (DNS only)
@ (A) → 185.199.109.153 (DNS only)
@ (A) → 185.199.110.153 (DNS only)
@ (A) → 185.199.111.153 (DNS only)
www (CNAME) → cherrera0001.github.io (DNS only)
```

**Para Cloudflare Pages:**
```
@ (CNAME) → perritossinhogar.pages.dev (Proxied)
www (CNAME) → perritossinhogar.pages.dev (Proxied)
```

## Notas Importantes

- Los cambios de DNS pueden tardar de 24 a 48 horas en propagarse completamente
- Si cambias nameservers, todos los registros DNS anteriores se perderán
- Cloudflare ofrece SSL gratuito automático cuando usas su proxy
- GitHub Pages también ofrece SSL gratuito, pero requiere configuración manual del dominio
- Para Next.js, Cloudflare Pages es más recomendado que GitHub Pages (que solo soporta sitios estáticos)


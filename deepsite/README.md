# DeepSite - Versión HTML/JS/CSS Optimizada

Landing page optimizada aplicando **Clean Code** y principios **SOLID**, con enfoque en accesibilidad (WCAG 2.1 AA), SEO y performance. Última actualización: 2025-11-06.

## 📁 Contenido

- `index.html` - Página principal HTML5 semántica con schema.org
- `script.js` - JavaScript modular (SOLID principles) con tracking avanzado
- `style.css` - Estilos CSS optimizados con Design Tokens
- `sitemap.xml` - Mapa del sitio para SEO
- `robots.txt` - Configuración de indexación
- `CHANGELOG.md` - Detalle completo de cambios
- `PR.md` - Documentación del Pull Request

## ✨ Características

### Clean Code & SOLID
- ✅ Código modular y organizado
- ✅ Single Responsibility Principle
- ✅ Open/Closed Principle
- ✅ Dependency Inversion Principle
- ✅ Sin duplicación de código

### Accesibilidad (WCAG 2.1 AA)
- ✅ Navegación por teclado completa
- ✅ Skip links accesibles
- ✅ ARIA labels y roles correctos
- ✅ Contraste mínimo 4.5:1 (hero con overlay)
- ✅ Focus states visibles
- ✅ Áreas táctiles mínimo 44x44px
- ✅ CTA sticky en mobile

### SEO Avanzado
- ✅ H1 único y optimizado
- ✅ Meta tags completos (OG/Twitter)
- ✅ Schema.org JSON-LD (Organization, WebSite, FAQPage)
- ✅ Sitemap.xml y robots.txt
- ✅ Canonical URL
- ✅ Estructura semántica con IDs

### Performance
- ✅ CSS inicial <100KB
- ✅ Lazy loading con decoding="async"
- ✅ Event delegation
- ✅ Debouncing optimizado
- ✅ Intersection Observer para tracking
- ✅ Preconnect a CDNs

### Analytics Avanzado
- ✅ Tracking de clicks con data-analytics (JSON)
- ✅ Tracking de view_section (Intersection Observer)
- ✅ Tracking de FAQ toggle
- ✅ Compatible con data-evt legacy
- ✅ Eventos: cta_whatsapp_click, cta_email_click, view_section, faq_toggle

## 🚀 Uso

Simplemente abre `index.html` en un navegador o sirve con cualquier servidor web estático:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

## 📊 Secciones

1. Header sticky con navegación accesible
2. Hero con H1 único y CTA optimizados (data-variant="A")
3. Barra de credibilidad (con fuentes)
4. Misión
5. Beneficios (3 cards con iconos)
6. Testimonio (con foto de María López)
7. Cómo ayudar (3 opciones: Donar, Adoptar, Voluntariado)
8. Historias de éxito (Luna y Max)
9. FAQ (5 preguntas con details/summary)
10. CTA final
11. Footer completo
12. CTA sticky mobile (fixed bottom)

## 🔗 Enlaces

- WhatsApp: `+56955338899`
- Email: `hola@perritossinhogar.cl`
- Dominio: `perritossinhogar.cl`

## 🎯 Mejoras Implementadas (Nov 2025)

### P0 - Críticas (SEO y Conversión)
- ✅ H1 único en hero (eliminado del header)
- ✅ H1 optimizado V1: "Rescata un perro hoy: adopta o dona en 2 minutos"
- ✅ **H1 mejorado V2 (B3)**: "Cambia una vida en 2 minutos" ⭐ ACTUAL
- ✅ Schema.org JSON-LD completo
- ✅ Imágenes con decoding="async"
- ✅ Tracking de view_section implementado

### P1 - Alto Impacto
- ✅ Copy mejorado en hero y subtítulo
- ✅ **Hero CTA Opción 3 (Marketing + UX)** ⭐ NUEVO
  - Badge de urgencia con pulse
  - H1 más corto y poderoso (5 palabras)
  - Ecuación de valor: $5.000 = 30 días
  - Rating 4.9/5 de confianza
  - CTA primario con micro-copy educativo
  - CTA secundario específico
- ✅ CTA sticky en mobile (fixed bottom)
- ✅ Overlay en hero para mejor contraste (4.5:1+)
- ✅ Foto en testimonio de María López
- ✅ Fuentes en barra de credibilidad
- ✅ Sitemap.xml y robots.txt

### P2 - Mejoras Incrementales
- ✅ Analytics con data-analytics (JSON)
- ✅ Hooks A/B testing (data-variant)
- ✅ IDs en todas las secciones
- ✅ README actualizado

## 📝 Nota

Este es un sitio web independiente del proyecto principal en Next.js que se encuentra en la carpeta `code/`.

Última optimización: 2025-11-06 aplicando mejores prácticas de conversión, SEO y UX.


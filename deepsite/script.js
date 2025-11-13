/**
 * Script principal para Perritos Sin Hogar
 * Clean Code & SOLID Principles:
 * - Single Responsibility: Cada función tiene una responsabilidad única
 * - Open/Closed: Extensible sin modificar código existente
 * - Dependency Inversion: Depende de abstracciones (dataLayer)
 * 
 * Performance: Lazy loading, event delegation, debouncing
 * Accessibility: Keyboard navigation, ARIA support
 */

(function() {
  'use strict';

  /**
   * Analytics Module - Single Responsibility
   * Maneja todos los eventos de analítica
   */
  const Analytics = {
    /**
     * Envía evento a dataLayer si está disponible
     * @param {string} eventName - Nombre del evento
     * @param {Object} props - Propiedades adicionales
     */
    track(eventName, props = {}) {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: eventName,
          ...props,
        });
      }
      
      // Log en desarrollo
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('[Analytics]', eventName, props);
      }
    },

    /**
     * Inicializa tracking de eventos desde atributos data-analytics y data-evt (legacy)
     */
    init() {
      document.addEventListener('click', (e) => {
        // Prioridad 1: data-analytics con JSON
        let target = e.target.closest('[data-analytics]');
        if (target) {
          try {
            const analyticsData = JSON.parse(target.getAttribute('data-analytics'));
            const { event, ...props } = analyticsData;
            this.track(event, {
              ...props,
              element: target.tagName.toLowerCase(),
              text: target.textContent?.trim().substring(0, 50),
            });
            return;
          } catch (error) {
            console.error('[Analytics] Error parsing data-analytics:', error);
          }
        }

        // Prioridad 2: data-evt (legacy)
        target = e.target.closest('[data-evt]');
        if (target) {
          const eventName = target.getAttribute('data-evt');
          const section = target.getAttribute('data-section') || 'unknown';
          const question = target.getAttribute('data-question');

          this.track(eventName, {
            section,
            question,
            element: target.tagName.toLowerCase(),
            text: target.textContent?.trim().substring(0, 50),
          });
        }
      });
    }
  };

  /**
   * Smooth Scroll Module - Single Responsibility
   * Maneja el scroll suave a anclas
   */
  const SmoothScroll = {
    /**
     * Verifica si un ancla existe en el documento
     * @param {string} hash - El hash del ancla (#section)
     * @returns {boolean}
     */
    anchorExists(hash) {
      if (!hash) return false;
      const id = hash.substring(1);
      return !!document.getElementById(id);
    },

    /**
     * Scroll suave a un elemento
     * @param {HTMLElement} element - Elemento destino
     */
    scrollTo(element) {
      if (!element) return;
      
      const headerHeight = 80; // Altura del header sticky
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    },

    /**
     * Inicializa smooth scroll para enlaces con hash
     */
    init() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const hash = link.getAttribute('href');
        if (!this.anchorExists(hash)) return;

        e.preventDefault();
        const target = document.querySelector(hash);
        this.scrollTo(target);
        
        // Actualizar URL sin recargar
        history.pushState(null, null, hash);
      });
    }
  };

  /**
   * Lazy Loading Module - Single Responsibility
   * Carga imágenes de forma diferida
   */
  const LazyLoad = {
    /**
     * Carga una imagen
     * @param {HTMLImageElement} img - Elemento imagen
     */
    loadImage(img) {
      if (img.dataset.loaded === 'true') return;
      
      const src = img.src || img.dataset.src;
      if (!src) return;

      const imageLoader = new Image();
      imageLoader.onload = () => {
        img.src = src;
        img.classList.add('loaded');
        img.dataset.loaded = 'true';
      };
      imageLoader.onerror = () => {
        img.alt = 'Imagen no disponible';
      };
      imageLoader.src = src;
    },

    /**
     * Inicializa lazy loading con Intersection Observer
     */
    init() {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.loadImage(entry.target);
              imageObserver.unobserve(entry.target);
            }
          });
        }, {
          rootMargin: '50px'
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
          imageObserver.observe(img);
        });
      } else {
        // Fallback para navegadores sin IntersectionObserver
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
          this.loadImage(img);
        });
      }
    }
  };

  /**
   * Scroll Animation Module - Single Responsibility
   * Anima elementos al hacer scroll
   */
  const ScrollAnimation = {
    /**
     * Verifica si un elemento está visible en viewport
     * @param {HTMLElement} element - Elemento a verificar
     * @returns {boolean}
     */
    isVisible(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < windowHeight * 0.8 && rect.bottom > 0;
    },

    /**
     * Anima elementos visibles
     */
    animateVisible() {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        if (this.isVisible(element) && !element.classList.contains('animate-fade-in')) {
          element.classList.add('animate-fade-in');
        }
      });
    },

    /**
     * Debounce function para optimizar performance
     * @param {Function} func - Función a debounce
     * @param {number} wait - Tiempo de espera en ms
     * @returns {Function}
     */
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    /**
     * Inicializa animaciones al scroll
     */
    init() {
      // Solo si el usuario no prefiere movimiento reducido
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      // Marcar secciones para animación
      document.querySelectorAll('section').forEach((section, index) => {
        section.classList.add('animate-on-scroll');
        section.style.animationDelay = `${index * 0.1}s`;
      });

      // Animar en scroll con debounce
      const debouncedAnimate = this.debounce(() => this.animateVisible(), 100);
      window.addEventListener('scroll', debouncedAnimate, { passive: true });
      
      // Animar elementos ya visibles al cargar
      this.animateVisible();
    }
  };

  /**
   * Section View Tracking Module - Single Responsibility
   * Trackea cuando las secciones son visibles en viewport
   */
  const SectionViewTracking = {
    /**
     * Inicializa tracking de visibilidad de secciones
     */
    init() {
      if (!('IntersectionObserver' in window)) {
        console.warn('[SectionViewTracking] IntersectionObserver no disponible');
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const sectionId = entry.target.id || 'unknown';
            const sectionName = entry.target.querySelector('h1, h2, h3')?.textContent?.trim() || sectionId;
            
            Analytics.track('view_section', {
              section_id: sectionId,
              section_name: sectionName,
            });
            
            // Unobserve para evitar múltiples trackeos
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: [0.5],
        rootMargin: '0px'
      });

      // Observar todas las secciones con ID
      document.querySelectorAll('main > section[id], main > section[aria-labelledby], main > section[aria-label]').forEach(section => {
        observer.observe(section);
      });
    }
  };

  /**
   * FAQ Module - Single Responsibility
   * Maneja interacciones de FAQ
   */
  const FAQ = {
    /**
     * Inicializa tracking de FAQ
     */
    init() {
      document.querySelectorAll('details').forEach(details => {
        details.addEventListener('toggle', (e) => {
          if (details.open) {
            const summary = details.querySelector('summary');
            const question = summary?.getAttribute('data-question') || 'unknown';
            
            Analytics.track('faq_toggle', {
              question,
              action: 'open',
            });
          }
        });
      });
    }
  };

  /**
   * Utility Module - Funciones auxiliares
   */
  const Utils = {
    /**
     * Actualiza el año en el copyright
     */
    updateCopyrightYear() {
      const yearElement = document.getElementById('current-year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    },

    /**
     * Verifica contraste de colores (helper para desarrollo)
     * @param {string} foreground - Color de texto
     * @param {string} background - Color de fondo
     * @returns {number} Ratio de contraste
     */
    getContrastRatio(foreground, background) {
      // Implementación simplificada - usar librería en producción
      // Retorna ratio aproximado para WCAG AA (mínimo 4.5:1)
      return 4.5; // Placeholder
    }
  };

  /**
   * Main App - Dependency Injection
   * Inicializa todos los módulos
   */
  const App = {
    /**
     * Inicializa la aplicación cuando el DOM está listo
     */
    init() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.start());
      } else {
        this.start();
      }
    },

    /**
     * Inicia todos los módulos
     */
    start() {
      // Inicializar módulos en orden
      Analytics.init();
      SectionViewTracking.init();
      SmoothScroll.init();
      LazyLoad.init();
      ScrollAnimation.init();
      FAQ.init();
      Utils.updateCopyrightYear();

      // Log de inicialización en desarrollo
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('[App] Inicializado correctamente');
      }
    }
  };

  // Inicializar aplicación
  App.init();

  // Exportar para testing (si es necesario)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Analytics, SectionViewTracking, SmoothScroll, LazyLoad, ScrollAnimation, FAQ, Utils };
  }
})();

/**
 * Track custom events for analytics
 * Sends events to window.dataLayer if available (Google Tag Manager)
 */

// Tipos para Google Tag Manager
interface WindowWithDataLayer extends Window {
  dataLayer?: Array<Record<string, unknown>>
}

/**
 * Registra un evento de analytics
 * @param eventName - Nombre del evento
 * @param props - Propiedades adicionales del evento
 */
export function trackEvent(eventName: string, props?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    const windowWithDataLayer = window as WindowWithDataLayer
    if (windowWithDataLayer.dataLayer) {
      windowWithDataLayer.dataLayer.push({
        event: eventName,
        ...props,
      })
    }
  }

  // Log solo en desarrollo
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log("[Analytics Event]", eventName, props)
  }
}

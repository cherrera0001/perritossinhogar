/**
 * Track custom events for analytics
 * Sends events to window.dataLayer if available (Google Tag Manager)
 */
export function trackEvent(eventName: string, props?: Record<string, unknown>) {
  if (typeof window !== "undefined" && "dataLayer" in window) {
    ;(window as any).dataLayer.push({
      event: eventName,
      ...props,
    })
  }

  // Also log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics Event]", eventName, props)
  }
}

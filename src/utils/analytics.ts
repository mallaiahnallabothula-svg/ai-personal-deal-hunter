/**
 * AI Personal Deal Hunter - Lightweight Analytics Abstraction
 *
 * Prepared for static zero-cookie analytics (such as Cloudflare Web Analytics)
 * without requiring third-party marketing trackers or paid services.
 * Completely safe for offline or static testing.
 */

export interface PageViewEvent {
  path: string;
  title: string;
}

export function trackPageView(event: PageViewEvent): void {
  // If Cloudflare Web Analytics or custom beacon is mounted on window:
  if (typeof window !== "undefined" && (window as unknown as { __cfBeacon?: unknown }).__cfBeacon) {
    // Cloudflare handles path tracking automatically via browser History API
  }
}

export function trackCustomEvent(eventName: string, properties?: Record<string, unknown>): void {
  if (import.meta.env.DEV) {
    // Quiet developer logging only in development mode
    // console.debug(`[Analytics Event: ${eventName}]`, properties);
  }
}

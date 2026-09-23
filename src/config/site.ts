/**
 * AI Personal Deal Hunter - Configuration
 *
 * Central configuration file for brand parameters, operational status,
 * contact endpoints, and affiliate disclosure states across the entire application.
 */

/**
 * Deployment URL configuration.
 * IMPORTANT: Set this to the production Cloudflare Pages URL (e.g., https://<project>.pages.dev)
 * or a verified custom domain once assigned. Leave empty until the real deployment URL is known.
 * After Cloudflare assigns the real pages.dev URL, finalize SITE_URL, update robots.txt, and
 * generate sitemap.xml with the valid absolute deployment URL.
 */
export const SITE_URL: string = "";

/**
 * Returns the effective runtime site origin.
 * In the browser, dynamically uses window.location.origin unless SITE_URL is explicitly configured.
 */
export function getEffectiveOrigin(): string {
  if (SITE_URL && SITE_URL.trim() !== "") {
    return SITE_URL.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location && window.location.origin) {
    return window.location.origin;
  }
  return "";
}

/**
 * Default Open Graph / Twitter social preview image path.
 */
export const OG_IMAGE_URL: string = "/og-image.svg";

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  secondaryTagline: string;
  statusLabel: string;
  url: string;
  ogImage: string;
  contactEmail: string;
  affiliateEnabled: boolean;
  earlyAccessEnabled: boolean;
  lastUpdated: string;
  currency: string;
  region: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "AI Personal Deal Hunter",
  shortName: "Deal Hunter",
  tagline: "Know when a deal is actually worth checking.",
  secondaryTagline: "Tell us what you want. We’ll watch the opportunity.",
  statusLabel: "Personal Deal Hunts — Coming Soon",
  url: SITE_URL,
  ogImage: OG_IMAGE_URL,

  // Set your real contact email before production release:
  // e.g., "contact@yourdomain.com"
  contactEmail: "REPLACE_WITH_REAL_EMAIL",

  // Set to true once registered with verified affiliate networks.
  // When false, the website displays validation-stage educational disclosures.
  affiliateEnabled: false,

  // Enables early access interest feedback without backend requirement.
  earlyAccessEnabled: true,

  // Centralized policy and content update date
  lastUpdated: "September 2026",

  currency: "INR (₹)",
  region: "India",
};

/**
 * Evaluates whether contact email has been explicitly configured with a real address
 */
export function isRealContactEmail(email: string): boolean {
  if (!email || email === "REPLACE_WITH_REAL_EMAIL") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Generates an honest mailto: link for zero-cost static communication
 */
export function getMailtoLink(subject: string, body: string): string | null {
  if (!isRealContactEmail(SITE_CONFIG.contactEmail)) return null;
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${SITE_CONFIG.contactEmail}?subject=${encodedSubject}&body=${encodedBody}`;
}

import { SITE_CONFIG, getEffectiveOrigin } from "../config/site";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: "website" | "article";
  noindex?: boolean;
  imageUrl?: string;
  articleData?: {
    datePublished: string;
    headline: string;
    description: string;
  };
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * Updates head metadata dynamically on client-side route changes.
 * Manages standard tags, OpenGraph, Twitter cards, robots noindex, and Schema.org JSON-LD.
 * Uses window.location.origin dynamically unless a real production SITE_URL is defined.
 */
export function updatePageMetadata({
  title,
  description,
  canonicalPath = "",
  type = "website",
  noindex = false,
  imageUrl,
  articleData,
  breadcrumbs,
}: PageMetadata): void {
  if (typeof document === "undefined") return;

  const origin = getEffectiveOrigin();

  // 1. Title
  const fullTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`;
  document.title = fullTitle;

  // 2. Helper for meta tags
  const setMeta = (attrName: "name" | "property", key: string, content: string) => {
    let el = document.querySelector(`meta[${attrName}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attrName, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  // 3. Helper for removing meta tags
  const removeMeta = (attrName: "name" | "property", key: string) => {
    const el = document.querySelector(`meta[${attrName}="${key}"]`);
    if (el) el.remove();
  };

  setMeta("name", "description", description);
  setMeta("property", "og:title", fullTitle);
  setMeta("property", "og:description", description);
  setMeta("property", "og:type", type);
  setMeta("property", "og:site_name", SITE_CONFIG.name);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", fullTitle);
  setMeta("name", "twitter:description", description);

  // Social share image (dynamically resolved to absolute URL if origin is available)
  const resolvedImage = imageUrl || SITE_CONFIG.ogImage;
  const absoluteImageUrl = origin && resolvedImage.startsWith("/")
    ? `${origin}${resolvedImage}`
    : resolvedImage;
  setMeta("property", "og:image", absoluteImageUrl);
  setMeta("name", "twitter:image", absoluteImageUrl);

  // 4. Robots Noindex / Index
  if (noindex) {
    setMeta("name", "robots", "noindex, nofollow");
  } else {
    removeMeta("name", "robots");
  }

  // 5. Canonical URL & og:url
  const normalizedPath = canonicalPath.startsWith("/")
    ? canonicalPath
    : `/${canonicalPath}`;

  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (origin) {
    const canonicalUrl = `${origin}${normalizedPath === "/" ? "" : normalizedPath}`;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);
    setMeta("property", "og:url", canonicalUrl);
  } else {
    // If no origin is determinable, do not publish an incorrect invented canonical
    if (canonicalEl) canonicalEl.remove();
    removeMeta("property", "og:url");
  }

  // 6. Dynamic JSON-LD Structured Data
  let scriptEl = document.getElementById("dynamic-jsonld") as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement("script");
    scriptEl.id = "dynamic-jsonld";
    scriptEl.type = "application/ld+json";
    document.head.appendChild(scriptEl);
  }

  const websiteId = origin ? `${origin}/#website` : "#website";
  const orgId = origin ? `${origin}/#organization` : "#organization";

  const graph: unknown[] = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      ...(origin ? { url: origin } : {}),
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.tagline,
      publisher: {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_CONFIG.name,
        ...(origin ? { url: origin } : {}),
      },
    },
  ];

  if (type === "article" && articleData) {
    const articleCanonical = origin
      ? `${origin}${normalizedPath === "/" ? "" : normalizedPath}`
      : normalizedPath;
    graph.push({
      "@type": "Article",
      "@id": origin ? `${articleCanonical}#article` : `#article-${normalizedPath.replace(/[^a-zA-Z0-9]/g, "-")}`,
      ...(origin ? { url: articleCanonical } : {}),
      headline: articleData.headline,
      description: articleData.description,
      datePublished: articleData.datePublished,
      inLanguage: "en-IN",
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        ...(origin ? { url: origin } : {}),
      },
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: origin && !crumb.item.startsWith("http")
          ? `${origin}${crumb.item}`
          : crumb.item,
      })),
    });
  }

  scriptEl.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

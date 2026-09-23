import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "./config/site";
import { updatePageMetadata } from "./utils/seo";
import { trackPageView } from "./utils/analytics";
import { getArticleBySlug } from "./data/articles";

// Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { EarlyInterestModal } from "./components/EarlyInterestModal";

// Pages
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ResearchHubPage } from "./pages/ResearchHubPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { AffiliateDisclosurePage } from "./pages/AffiliateDisclosurePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

/**
 * Normalizes browser path whether served via standard paths or hash fragments
 */
function getInitialPath(): string {
  if (typeof window === "undefined") return "/";
  if (window.location.hash && window.location.hash.startsWith("#/")) {
    return window.location.hash.slice(1);
  }
  return window.location.pathname || "/";
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isEarlyInterestOpen, setIsEarlyInterestOpen] = useState(false);

  // Listen to browser forward/backward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = getInitialPath();
      setCurrentPath(path);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  // Update SEO metadata and scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    trackPageView({ path: currentPath, title: document.title });

    // Dynamic SEO Metadata Configuration
    if (currentPath === "/" || currentPath === "") {
      updatePageMetadata({
        title: `${SITE_CONFIG.name} – Know When a Deal Is Actually Worth Checking`,
        description:
          "Independent consumer shopping intelligence for India. Understand true prices, evaluate advertised discounts, and make disciplined buying decisions.",
        canonicalPath: "/",
        breadcrumbs: [{ name: "Home", item: "/" }],
      });
    } else if (currentPath === "/how-it-works") {
      updatePageMetadata({
        title: `How It Works – Architecture & Validation Roadmap | ${SITE_CONFIG.name}`,
        description:
          "Explore the difference between our active shopping education guides and our future 9-step personal deal-hunting application currently in development.",
        canonicalPath: "/how-it-works",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "How It Works", item: "/how-it-works" },
        ],
      });
    } else if (currentPath === "/research") {
      updatePageMetadata({
        title: `Shopping Intelligence Library – Evidence-Based Guides | ${SITE_CONFIG.name}`,
        description:
          "In-depth consumer guides on statutory MRP vs street prices, price history observations, target price formulations, and electronics buying checklists.",
        canonicalPath: "/research",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Shopping Intelligence Library", item: "/research" },
        ],
      });
    } else if (currentPath.startsWith("/research/")) {
      const slug = currentPath.replace("/research/", "").replace(/\/$/, "");
      const article = getArticleBySlug(slug);
      if (article) {
        updatePageMetadata({
          title: `${article.title} | ${SITE_CONFIG.name}`,
          description: article.summary,
          canonicalPath: article.route,
          type: "article",
          articleData: {
            headline: article.title,
            description: article.summary,
            datePublished: "2026-09-01",
          },
          breadcrumbs: [
            { name: "Home", item: "/" },
            { name: "Research", item: "/research" },
            { name: article.title, item: article.route },
          ],
        });
      } else {
        updatePageMetadata({
          title: `Page Not Found | ${SITE_CONFIG.name}`,
          description: "The requested shopping intelligence guide could not be found.",
          canonicalPath: currentPath,
          noindex: true,
        });
      }
    } else if (currentPath === "/about") {
      updatePageMetadata({
        title: `About the Project – Mission & Core Principles | ${SITE_CONFIG.name}`,
        description:
          "Learn about AI Personal Deal Hunter's consumer-first mission, ethical principles, zero-cost static architecture, and independent development.",
        canonicalPath: "/about",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ],
      });
    } else if (currentPath === "/contact") {
      updatePageMetadata({
        title: `Contact & Feedback – Direct Consumer Inquiries | ${SITE_CONFIG.name}`,
        description:
          "Get in touch with AI Personal Deal Hunter for editorial feedback, guide suggestions, or validation project questions.",
        canonicalPath: "/contact",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ],
      });
    } else if (currentPath === "/affiliate-disclosure") {
      updatePageMetadata({
        title: `Affiliate & Commercial Disclosure | ${SITE_CONFIG.name}`,
        description:
          "Transparent disclosure on our current zero-affiliate status, editorial independence, and guidelines for future commercial partnerships.",
        canonicalPath: "/affiliate-disclosure",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Affiliate Disclosure", item: "/affiliate-disclosure" },
        ],
      });
    } else if (currentPath === "/privacy-policy") {
      updatePageMetadata({
        title: `Privacy Policy – Plain-Language Data Protection | ${SITE_CONFIG.name}`,
        description:
          "Our privacy guidelines: no tracking cookies, no banking credential access, and zero data selling. Built with consumer privacy first.",
        canonicalPath: "/privacy-policy",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Privacy Policy", item: "/privacy-policy" },
        ],
      });
    } else if (currentPath === "/terms") {
      updatePageMetadata({
        title: `Terms & Conditions – Usage & Disclaimers | ${SITE_CONFIG.name}`,
        description:
          "Terms of use, consumer educational disclaimer, and third-party retailer purchase boundaries for AI Personal Deal Hunter.",
        canonicalPath: "/terms",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Terms & Conditions", item: "/terms" },
        ],
      });
    } else {
      // 404 Route
      updatePageMetadata({
        title: `404 - Page Not Found | ${SITE_CONFIG.name}`,
        description: "The page you are looking for does not exist or has moved.",
        canonicalPath: currentPath,
        noindex: true,
      });
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path === currentPath) return;

    try {
      window.history.pushState({}, "", path);
    } catch {
      window.location.hash = `#${path}`;
    }
    setCurrentPath(path);
  };

  // Render Page Component with exact 404 handling
  const renderPage = () => {
    if (currentPath === "/" || currentPath === "") {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onOpenEarlyInterest={() => setIsEarlyInterestOpen(true)}
        />
      );
    }

    if (currentPath === "/how-it-works") {
      return (
        <HowItWorksPage
          onNavigate={handleNavigate}
          onOpenEarlyInterest={() => setIsEarlyInterestOpen(true)}
        />
      );
    }

    if (currentPath === "/research") {
      return <ResearchHubPage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith("/research/")) {
      const slug = currentPath.replace("/research/", "").replace(/\/$/, "");
      const article = getArticleBySlug(slug);
      if (article) {
        return (
          <ArticleDetailPage
            article={article}
            onNavigate={handleNavigate}
          />
        );
      }
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    if (currentPath === "/about") {
      return (
        <AboutPage
          onNavigate={handleNavigate}
          onOpenEarlyInterest={() => setIsEarlyInterestOpen(true)}
        />
      );
    }

    if (currentPath === "/contact") {
      return (
        <ContactPage
          onOpenEarlyInterest={() => setIsEarlyInterestOpen(true)}
        />
      );
    }

    if (currentPath === "/affiliate-disclosure") {
      return <AffiliateDisclosurePage />;
    }

    if (currentPath === "/privacy-policy") {
      return <PrivacyPolicyPage />;
    }

    if (currentPath === "/terms") {
      return <TermsPage />;
    }

    // Explicit 404 for any other unrecognized path
    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* 3-Zone Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenEarlyInterest={() => setIsEarlyInterestOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Early Interest Modal */}
      <EarlyInterestModal
        isOpen={isEarlyInterestOpen}
        onClose={() => setIsEarlyInterestOpen(false)}
      />
    </div>
  );
}

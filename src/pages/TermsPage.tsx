import React from "react";
import { SITE_CONFIG } from "../config/site";
import { Scale, FileText, AlertCircle } from "lucide-react";

export const TermsPage: React.FC = () => {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Header */}
      <section className="pt-8 pb-4 border-b border-slate-200">
        <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-2">
          Usage Guidelines
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Clear, balanced terms governing your use of the {SITE_CONFIG.name} website
          and educational materials.
        </p>
        <div className="mt-3 text-xs text-slate-400">
          Last Updated: {SITE_CONFIG.lastUpdated}
        </div>
      </section>

      {/* Terms Body */}
      <section className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            1. Educational & Informational Purpose
          </h2>
          <p>
            All content, articles, price breakdown tools, and checklists provided
            on {SITE_CONFIG.name} are published strictly for consumer educational
            and research purposes. While we strive for analytical precision,
            nothing on this website constitutes professional financial, legal, or
            commercial investment advice.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            2. No Guarantee of Prices, Offers, or Availability
          </h2>
          <p>
            Online marketplace pricing, seller inventories, coupon validity, and
            bank-sponsored cashback rates are controlled exclusively by third-party
            merchants and can change without notice.
          </p>
          <p>
            {SITE_CONFIG.name} makes no warranty or representation that any
            historical, median, or hypothetical price illustrated on our site will
            be available at any given retailer at any specific moment. We do not
            guarantee that a price represents the absolute lowest transaction in
            the market.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            3. Independent Retailer Transactions
          </h2>
          <p>
            {SITE_CONFIG.name} is not an e-commerce merchant, marketplace seller,
            broker, or logistics provider. We do not take orders, collect customer
            funds, ship packages, handle warranty claims, or manage returns.
          </p>
          <p>
            When you purchase a product from an external retailer, that transaction
            is strictly between you and that retailer. The retailer&apos;s own terms
            of service, return policies, shipping fees, and warranty covenants
            govern your purchase completely.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            4. User Responsibility for Purchase Decisions
          </h2>
          <p>
            You remain solely responsible for evaluating whether any product,
            variant, price, or seller meets your personal standards and budgetary
            requirements. You should always inspect the final checkout summary,
            shipping costs, model number, and manufacturer warranty coverage before
            submitting payment.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            5. Potential Affiliate Relationships
          </h2>
          <p>
            As detailed in our Affiliate Disclosure, the website currently contains
            no affiliate links. In the future, the website may include affiliate
            links that earn a commission if a reader completes a purchase through
            them. Affiliate commissions are generally paid by the merchant or
            affiliate network. The final price, eligibility and offer terms are
            controlled by the retailer and should always be verified on the retailer
            website before purchase. Such relationships will not influence our
            editorial guidelines.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            6. Intellectual Property & Content Reuse
          </h2>
          <p>
            The original research articles, frameworks, and text published on this
            site are the intellectual property of {SITE_CONFIG.name}. You may quote
            short excerpts for educational, non-commercial commentary provided
            proper attribution and a clear link back to the source page are
            included. Bulk scraping or republishing of entire articles without
            written consent is prohibited.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            7. Reporting Inaccuracies
          </h2>
          <p>
            If you identify a factual error, obsolete policy reference, or broken
            link in any of our guides, we encourage you to notify us through our
            Contact page so we can review and update the content.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, {SITE_CONFIG.name} shall not
            be liable for any indirect, consequential, or punitive damages
            arising from your access to or inability to access this website, or
            from any purchase decisions made based on information published here.
          </p>
        </div>
      </section>
    </div>
  );
};

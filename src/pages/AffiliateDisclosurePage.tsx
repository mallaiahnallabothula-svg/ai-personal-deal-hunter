import React from "react";
import { SITE_CONFIG } from "../config/site";
import { Info, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Header */}
      <section className="pt-8 pb-4 border-b border-slate-200">
        <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-2">
          Transparency & Monetization Standards
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Affiliate & Commercial Disclosure
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Our plain-language disclosure regarding current monetization status,
          future affiliate participation, and editorial independence.
        </p>
      </section>

      {/* Clear Current Status Notice */}
      <section className="rounded-xl p-6 border bg-slate-50 border-slate-200 text-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
          <Info className="w-4 h-4 text-slate-700" />
          <span>Current Operational Status</span>
        </div>
        <p className="text-sm sm:text-base font-semibold text-slate-950">
          The website currently contains no affiliate links.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          In the future, the website may include affiliate links that earn a
          commission if a reader completes a purchase through them. Such
          relationships will not influence editorial guidelines.
        </p>
      </section>

      {/* Detailed Plain Language Policies */}
      <section className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            1. What Are Affiliate Links?
          </h2>
          <p>
            An affiliate link is an outbound URL provided by an e-commerce platform
            or affiliate network. If a visitor clicks an affiliate link and makes a
            qualifying purchase on the merchant’s platform, the referring website
            may receive a small commission.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 bg-white p-4 rounded-lg border border-slate-200">
            <strong>Important Consumer Notice:</strong> Affiliate commissions are
            generally paid by the merchant or affiliate network. The final price,
            eligibility and offer terms are controlled by the retailer and should
            always be verified on the retailer website before purchase.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            2. Editorial Independence & Consumer Protection
          </h2>
          <p>
            {SITE_CONFIG.name} was created to provide objective shopping education
            and analytical deal verification for Indian consumers. Our editorial
            standards remain strictly independent:
          </p>
          <ul className="space-y-2 text-sm text-slate-700 pl-4 list-disc">
            <li>
              Products and deals will never be featured or evaluated favorably
              simply because a referral commission is available.
            </li>
            <li>
              If a product carries poor value, ambiguous MRP markdowns, or restrictive
              warranty terms, we highlight those factors objectively regardless of
              any future commercial affiliate relationship.
            </li>
            <li>
              We do not accept paid positive reviews or sponsored placements from
              brands or retailers.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            3. Dynamic Retailer Pricing & Availability
          </h2>
          <p>
            All purchase transactions occur directly on third-party retailer
            portals (such as Amazon India, Flipkart, Croma, Reliance Digital, or
            direct brand storefronts).
          </p>
          <p>
            Prices, instant discounts, stock levels, and merchant terms can change
            rapidly based on dynamic retail algorithms. We cannot guarantee that an
            analyzed price remains available when you reach the checkout screen.
            Always confirm the final payable total, seller ratings, and warranty
            coverage on the retailer’s site before completing your purchase.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            4. Future Policy Updates
          </h2>
          <p>
            Before any active affiliate links are published on this website, this
            disclosure and our Privacy Policy will be formally updated to identify
            participating merchant programs and tracking technologies.
          </p>
          <p className="text-xs text-slate-500">
            Policy last reviewed: <strong>{SITE_CONFIG.lastUpdated}</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

import React from "react";
import { SITE_CONFIG } from "../config/site";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
  onOpenEarlyInterest: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigate,
  onOpenEarlyInterest,
}) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Header */}
      <section className="pt-8 pb-4 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-2">
            System Architecture & Roadmap
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            How It Works
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Understanding the distinction between what exists on this website today
            and what is being developed for the future Personal Deal Hunt service.
          </p>
        </div>
      </section>

      {/* Part 1: What Exists Today */}
      <section>
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Currently Active on This Website</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            What Exists Today
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Today, {SITE_CONFIG.name} is a comprehensive educational resource
            dedicated to demystifying online electronics and consumer goods pricing
            in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Shopping Education & Literacy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In-depth articles dissecting Maximum Retail Price (MRP) mechanics,
              statutory price limits, and why a 50% discount label rarely reflects
              true savings against standard off-sale market pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Price-Awareness Guides
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Methodologies for analyzing recent observed prices, evaluating
              historical price context across multiple windows, and recognizing
              when historical charts record anomalous, unrepeatable pricing errors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Deal-Verification Principles
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Systematic frameworks to verify authorized seller status, official
              manufacturer warranty coverage in India, and return vs. replacement
              fine print before committing funds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Practical Buying Checklists
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Actionable checklists covering the entire purchase lifecycle: from
              pre-purchase specifications to final payment gateways and doorstep
              Open Box Delivery verification.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => onNavigate("/research")}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse All Research Articles</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* Part 2: What Is Being Developed */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Under Development · Not Yet Live</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            What Is Being Developed: The Future Deal Hunt Concept
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            The future application will replace broad public deal broadcasts with
            bespoke, single-user price monitoring. Here is how each stage will
            function:
          </p>
        </div>

        <ol className="space-y-6">
          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              1
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                User describes the purchase
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                You input the exact item or class of device you wish to buy (e.g.
                a specific 14-inch laptop model or a noise-cancelling headphone).
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                User sets maximum budget
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                You configure a hard rupee ceiling beyond which no recommendation
                will ever be generated.
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              3
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                User optionally sets target price
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                You specify the exact price point at which the transaction becomes
                compelling enough for you to buy immediately.
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              4
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Matching supported products are identified
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                The engine isolates the specific SKU, generation, storage, and
                authorized seller variants that correspond to your criteria.
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              5
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Relevant prices are monitored where legally and technically permitted
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Supported retailer prices are observed ethically in compliance with
                terms of service, without bypassing security protocols.
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              6
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Historical observations are compared
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Current observations are evaluated against historical price
                context to check whether the current price differs materially from
                recent observed prices.
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              7
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Important anomalies are checked
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Signals such as sudden seller swaps, non-returnable flags, or
                mandatory card conditions are surfaced to prevent unpleasant
                surprises.
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              8
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Relevant alerts are generated
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                A single clean notification is sent to you detailing the price,
                merchant, conditions, and reason why it qualifies.
              </p>
            </div>
          </li>

          <li className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              9
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                User decides whether to visit the retailer
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                You review the findings and choose whether to proceed directly to
                the merchant to complete the purchase on your own terms.
              </p>
            </div>
          </li>
        </ol>

        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Want to help us shape this product?
          </span>
          <button
            onClick={onOpenEarlyInterest}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Join Early Interest
          </button>
        </div>
      </section>

      {/* Part 3: Essential Consumer Advisories */}
      <section className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Important Consumer Disclaimers & Realities</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          Transparency on Pricing & Retailer Policies
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>No Guarantee of Lowest Price:</strong> Neither this website
            nor any future version of AI Personal Deal Hunter can promise or
            guarantee the absolute lowest historical price in existence. Online
            merchant prices fluctuate rapidly based on dynamic algorithms, bank
            partner quotas, and limited clearance inventories.
          </p>
          <p>
            <strong>Direct Merchant Relationship:</strong> All purchases take place
            directly on external third-party retailer websites. We do not process
            payments, store banking credentials, handle warehousing, or fulfill
            shipments.
          </p>
          <p>
            <strong>Mandatory Final Verification:</strong> Shoppers must always
            verify final checkout totals, seller credibility, manufacturer warranty
            eligibility, and return/replacement policies on the retailer&apos;s
            platform before authorizing payment.
          </p>
        </div>
      </section>
    </div>
  );
};

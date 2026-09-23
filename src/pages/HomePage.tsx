import React from "react";
import { SITE_CONFIG } from "../config/site";
import { RESEARCH_ARTICLES } from "../data/articles";
import { DealSanityCalculator } from "../components/DealSanityCalculator";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Search,
  Scale,
  Sliders,
  BellRing,
  Tag,
  CreditCard,
  Truck,
  RotateCcw,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenEarlyInterest: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEarlyInterest,
}) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Hero Section */}
      <section className="pt-10 md:pt-16 pb-8 border-b border-slate-200/80">
        <div className="max-w-4xl">
          {/* Subtle status note */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            <span>Personal Deal Hunts are coming soon</span>
            <span aria-hidden="true">·</span>
            <span>Independent Shopping Intelligence</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] text-balance">
            Know when a deal is actually worth checking.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {SITE_CONFIG.name} is being built to help Indian shoppers understand
            prices, discount patterns, and buying opportunities instead of blindly
            trusting sale labels.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate("/research")}
              className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Explore Shopping Research</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate("/how-it-works")}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 text-sm font-semibold rounded-lg border border-slate-300 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>How It Works</span>
            </button>
          </div>

          {/* Calibrated Trust Boundary */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>Validation stage project</span>
            <span aria-hidden="true">·</span>
            <span>Zero paid spam feeds</span>
            <span aria-hidden="true">·</span>
            <span>No false urgency tactics</span>
            <span aria-hidden="true">·</span>
            <span>Educational & transparent</span>
          </div>
        </div>
      </section>

      {/* 2. The Problem Section */}
      <section className="scroll-mt-20">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            The Consumer Dilemma
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
            Evaluating Promotional Pricing in Indian E-Commerce
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Online storefronts present frequent promotions, but a large
            percentage discount label does not automatically mean a product is transacting at
            a genuinely attractive price relative to its standard selling price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-xs space-y-4">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              What Retail Platforms Display
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Seasonal sales and promotional campaigns commonly present:
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Tag className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Statutory MRP comparisons ('Was ₹14,999, Now ₹5,999!')</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Conditional bank offers with specific caps and eligibility criteria</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Promotional countdown timers and limited-time offer labels</span>
              </li>
              <li className="flex items-start gap-2.5">
                <RotateCcw className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Exchange valuation estimates dependent on doorstep evaluation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-xs space-y-4">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              The Burden Put on the Consumer
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              To verify if an offer is authentic, everyday shoppers are forced to
              manually perform extensive investigative research:
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Search className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Compare prices across competing storefronts and platforms</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Scale className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Search past price history to see if the price was hiked beforehand</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Verify seller ratings, warranty coverage, and return restrictions</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>Inspect final checkout screens for mandatory fees shown during checkout</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-slate-100/80 rounded-xl p-5 border border-slate-200 text-sm text-slate-700">
          <strong>Our Purpose:</strong> This exhaustive manual friction is exactly
          what AI Personal Deal Hunter aims to study, educate consumers on, and
          eventually automate.
        </div>
      </section>

      {/* 3. What We Are Building: Future Workflow */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 mb-4">
            <span>Future product workflow — not yet live</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            What We Are Building
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Instead of broadcasting thousands of noisy affiliate links you do not
            care about, the future Deal Hunt architecture will execute a disciplined,
            user-directed workflow:
          </p>
        </div>

        {/* 6 Step Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400">Step 01</div>
            <h3 className="text-base font-semibold text-white">Tell us what you want</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Describe the specific model, hardware tier, or product category you intend to buy.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400">Step 02</div>
            <h3 className="text-base font-semibold text-white">Set your budget</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Define the maximum hard ceiling in rupees that you are willing to spend.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400">Step 03</div>
            <h3 className="text-base font-semibold text-white">Set a target price</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Specify your optimal buying threshold where the purchase becomes an actionable deal.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400">Step 04</div>
            <h3 className="text-base font-semibold text-white">We monitor supported opportunities</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The engine watches verified merchant listings where legally and technically permitted.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400">Step 05</div>
            <h3 className="text-base font-semibold text-white">We verify important signals</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We evaluate seller identity and track record, recent observed prices, and mandatory fees shown during checkout.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400">Step 06</div>
            <h3 className="text-base font-semibold text-white">You receive a useful alert</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              A single relevant alert arrives only when your conditions are genuinely satisfied.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Development Phase: Educational baseline complete. Architecture validation in progress.
          </div>
          <button
            onClick={onOpenEarlyInterest}
            className="px-4 py-2 bg-white text-slate-900 text-xs font-semibold rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Express Early Interest →
          </button>
        </div>
      </section>

      {/* 4. Our Principles */}
      <section>
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Foundational Ethics
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
            Our Principles for Consumer Trust
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Evaluating promotional pricing requires clear methodology. We adhere
            to five consumer-focused principles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Evidence Over Hype</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We prefer transparent, observable price realities over dramatic
              promotional slogans and statutory retail tags.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
              <BellRing className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Relevance Over Noise</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The future product will focus strictly on what you actually want to
              buy, instead of spamming hundreds of unrelated deal feeds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Exact Product Matching</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Model numbers, RAM configurations, storage sizes, and regional Indian
              warranty variants matter. Close matches are not treated as equal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Transparency</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Verified retailer data, estimated calculations, and third-party
              disclaimers should always be clearly distinguished and accessible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3 md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Consumer First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Useful, rational buying decisions come before monetization. We do not
              recommend products just because a retailer pays a commission.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Interactive Tool: Deal Sanity Inspector */}
      <section>
        <DealSanityCalculator />
      </section>

      {/* 6. Learn Before You Buy: Research Hub Spotlight */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Original Research
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Learn Before You Buy
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Independent guides on discount anatomy, price history analysis, and
              verification checklists for Indian shoppers.
            </p>
          </div>
          <button
            onClick={() => onNavigate("/research")}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 inline-flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View All Research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
            >
              <div>
                <div className="text-xs text-slate-600 mb-2 flex items-center gap-2">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTimeMinutes} min read</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950 leading-snug hover:text-slate-700 transition-colors">
                  <button
                    onClick={() => onNavigate(article.route)}
                    className="text-left cursor-pointer"
                  >
                    {article.title}
                  </button>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600">{article.publishedDate}</span>
                <button
                  onClick={() => onNavigate(article.route)}
                  className="text-xs font-semibold text-slate-900 hover:text-slate-600 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Section: Coming Soon (Personal Deal Hunts) */}
      <section className="bg-slate-100/90 border border-slate-200 rounded-2xl p-8 sm:p-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-slate-700" />
            <span>Future Application · Personal Deal Hunts</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Tell us what you want. We&apos;ll watch the opportunity.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The future goal is simple: tell us the product or type of product you
            want, your budget, and your target price. We aim to watch supported
            shopping opportunities and notify you only when your conditions are
            meaningfully met.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenEarlyInterest}
              className="px-5 py-2.5 bg-slate-950 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Join Early Interest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-600 border-t border-slate-200">
            <strong>Honest Stage Note:</strong> No automated price scrapers, live
            retailer API feeds, or commercial transactions are active on this
            validation website. We are gathering user interest and testing demand
            before releasing the hunt client.
          </div>
        </div>
      </section>
    </div>
  );
};

import React from "react";
import { SITE_CONFIG } from "../config/site";
import {
  ShieldCheck,
  Target,
  Eye,
  Lock,
  Coins,
  ArrowRight,
} from "lucide-react";

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenEarlyInterest: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenEarlyInterest,
}) => {
  return (
    <div className="space-y-16 max-w-4xl mx-auto">
      {/* Header */}
      <section className="pt-8 pb-4 border-b border-slate-200">
        <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-2">
          Origin & Purpose
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          About {SITE_CONFIG.name}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          An early-stage independent project focused on improving online shopping
          decisions for Indian consumers.
        </p>
      </section>

      {/* Honest Validation Stage Notice */}
      <section className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
          <span>Project Stage Disclosure</span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-950">
          Currently in Research & Validation
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          {SITE_CONFIG.name} is built independently with a consumer-first approach.
          We are currently in our initial validation phase. We do not claim
          thousands of active bots, automated crawling infrastructure, or
          exclusive merchant partnerships. Our immediate focus is establishing
          sound analytical buying frameworks, researching price behavior in India,
          and gauging genuine consumer demand.
        </p>
      </section>

      {/* Mission */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Our Mission
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          To reduce deal noise and help Indian shoppers understand whether an
          opportunity actually deserves attention.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          During seasonal promotional events, Indian consumers encounter intense
          promotional campaigns, countdown clocks, and steep percentage markdowns
          pegged to statutory Maximum Retail Prices. Our objective is to provide
          calm, objective, evidence-based shopping intelligence to help shoppers
          evaluate pricing claims rationally.
        </p>
      </section>

      {/* Core Values */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Ethical Guardrails
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Transparency</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We distinguish between verified facts, statistical medians, and
              unsubstantiated retailer claims. We never hide commercial relationships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
              <Target className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Accuracy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We pay rigorous attention to product variations, Indian warranty
              specifications, and final checkout surcharges before judging an offer.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Relevance</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We believe a deal is only valuable if it matches what a consumer
              already plans to purchase. We reject the broadcast model of pushing
              hundreds of unwanted impulse items.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Privacy First</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not track users across websites, harvest retailer passwords,
              or demand unnecessary personal data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2.5 md:col-span-2">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
              <Coins className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Responsible Monetization
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If and when affiliate links or commercial revenue models are
              introduced, they will be disclosed explicitly. A commission will
              never dictate whether a deal is flagged as attractive.
            </p>
          </div>
        </div>
      </section>

      {/* Independent Development Statement */}
      <section className="border-t border-slate-200 pt-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-950">
          Independent Development
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          {SITE_CONFIG.name} is an independently developed early-stage consumer
          shopping intelligence project. It was started from the conviction that
          Indian shoppers deserve calm, evidence-based tools rather than
          generalized deal broadcast channels and ambiguous promotional claims.
        </p>
        <div className="pt-2 flex items-center gap-4">
          <button
            onClick={() => onNavigate("/research")}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Explore our research library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-slate-300">·</span>
          <button
            onClick={() => onNavigate("/contact")}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

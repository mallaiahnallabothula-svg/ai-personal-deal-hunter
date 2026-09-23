import React from "react";
import { SITE_CONFIG } from "../config/site";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-lg font-bold tracking-tight text-white">
              {SITE_CONFIG.name}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An independent consumer shopping intelligence project helping Indian
              online shoppers understand prices, discount patterns, and buying
              signals before transacting.
            </p>
            <div className="text-xs text-slate-400 pt-2 flex items-center gap-2">
              <span>Validation Stage</span>
              <span aria-hidden="true">·</span>
              <span>Updated {SITE_CONFIG.lastUpdated}</span>
              <span aria-hidden="true">·</span>
              <span>India First</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("/")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/how-it-works")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/research")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Shopping Intelligence Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/about")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  About the Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/contact")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Contact & Feedback
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Transparency Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Consumer Trust & Policies
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("/affiliate-disclosure")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/privacy-policy")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/terms")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Consumer Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 space-y-4">
          <div className="bg-slate-950/60 rounded-lg p-4 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">
              Consumer Notice & Retailer Disclaimer:{" "}
            </span>
            Prices, availability and promotions can change. Always verify the
            final price, seller, warranty and offer terms on the retailer website
            before purchasing. AI Personal Deal Hunter does not sell products,
            fulfill transactions, or represent any specific commercial retailer.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div>
              © 2026 {SITE_CONFIG.name}. Built independently with a consumer-first approach.
            </div>
            <div>
              Published for educational & consumer research purposes.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from "react";
import { RESEARCH_ARTICLES, ResearchArticle } from "../data/articles";
import { DealSanityCalculator } from "../components/DealSanityCalculator";
import { ArrowRight, BookOpen, Calculator, Sparkles } from "lucide-react";

interface ResearchHubPageProps {
  onNavigate: (path: string) => void;
}

export const ResearchHubPage: React.FC<ResearchHubPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Pricing Strategy",
    "Deal Verification",
    "Consumer Checklists",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? RESEARCH_ARTICLES
      : RESEARCH_ARTICLES.filter(
          (article) => article.category === selectedCategory
        );

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="pt-8 pb-4 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-2">
            Independent Consumer Education
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Shopping Intelligence Library
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical guides for understanding online prices, promotions, and
            purchase decisions. Written without retailer bias or sponsored product
            placements.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-slate-950 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured / Marquee Article Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article: ResearchArticle, idx: number) => {
            const isFirst = idx === 0 && selectedCategory === "All";
            return (
              <article
                key={article.slug}
                className={`bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs ${
                  isFirst ? "md:col-span-2 bg-gradient-to-br from-white to-slate-50" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {article.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTimeMinutes} min read</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h2
                    className={`font-bold text-slate-950 tracking-tight hover:text-slate-700 transition-colors ${
                      isFirst ? "text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    <button
                      onClick={() => onNavigate(article.route)}
                      className="text-left cursor-pointer"
                    >
                      {article.title}
                    </button>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Key Takeaways Preview */}
                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Core Concept Focus:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-slate-400 font-bold shrink-0">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Analytical Guide
                  </span>
                  <button
                    onClick={() => onNavigate(article.route)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Interactive Tool Banner in Hub */}
      <section className="mt-12">
        <DealSanityCalculator />
      </section>

      {/* Editorial Standards Notice */}
      <section className="bg-slate-100/80 rounded-xl p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="font-semibold text-slate-900">
          Editorial & Research Standards
        </div>
        <p className="leading-relaxed">
          Every guide published in this library is crafted to give Indian online
          shoppers practical, objective mental models. We do not accept sponsored
          placement from consumer brands, nor do we promote artificial affiliate
          hypes. If you spot a factual inaccuracy or want to suggest a topic,
          reach out via our Contact page.
        </p>
      </section>
    </div>
  );
};

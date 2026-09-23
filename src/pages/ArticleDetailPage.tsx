import React from "react";
import { ResearchArticle, RESEARCH_ARTICLES } from "../data/articles";
import { DealSanityCalculator } from "../components/DealSanityCalculator";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  AlertCircle,
  CheckCircle,
  BookOpen,
  FileCheck,
  ExternalLink,
  Info,
} from "lucide-react";

interface ArticleDetailPageProps {
  article: ResearchArticle;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onNavigate,
}) => {
  const currentIndex = RESEARCH_ARTICLES.findIndex((a) => a.slug === article.slug);
  const nextArticle =
    currentIndex < RESEARCH_ARTICLES.length - 1
      ? RESEARCH_ARTICLES[currentIndex + 1]
      : null;
  const prevArticle = currentIndex > 0 ? RESEARCH_ARTICLES[currentIndex - 1] : null;

  return (
    <article className="space-y-10 max-w-3xl mx-auto">
      {/* Breadcrumb / Back button */}
      <div>
        <button
          onClick={() => onNavigate("/research")}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Consumer Research Hub</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-4 pb-8 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-medium bg-slate-100 text-slate-800 border border-slate-200">
            <Tag className="w-3 h-3 text-slate-500" />
            <span>{article.category}</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{article.readTimeMinutes} min read</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            <span>Published: {article.publishedDate}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 font-medium text-slate-700">
            <FileCheck className="w-3 h-3 text-emerald-600" />
            <span>Reviewed: {article.reviewedDate}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18] text-balance">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {article.subtitle}
        </p>

        {/* Practical Guidance Notice if present */}
        {article.practicalGuidanceNotice && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed">
            <Info className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <span>{article.practicalGuidanceNotice}</span>
          </div>
        )}

        {/* Key Takeaways Callout */}
        <div className="mt-6 bg-slate-50 border border-slate-200/90 rounded-xl p-5 sm:p-6 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Key Principles & Takeaways
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Article Body Sections */}
      <div className="space-y-10 text-slate-800 leading-relaxed text-sm sm:text-base">
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              {section.heading}
            </h2>

            <div className="space-y-3 text-slate-700">
              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {section.callout && (
              <div
                className={`p-5 rounded-xl border space-y-3 ${
                  section.callout.type === "warning"
                    ? "bg-amber-50/60 border-amber-200 text-amber-950"
                    : section.callout.type === "checklist"
                    ? "bg-slate-50 border-slate-200 text-slate-900"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  {section.callout.type === "warning" && (
                    <AlertCircle className="w-4 h-4 text-amber-700" />
                  )}
                  {section.callout.type === "checklist" && (
                    <CheckCircle className="w-4 h-4 text-slate-700" />
                  )}
                  <span>{section.callout.title}</span>
                </div>

                {section.callout.text && (
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {section.callout.text}
                  </p>
                )}

                {section.callout.items && (
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {section.callout.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-slate-400 select-none">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Embedded Calculator for relevant guides */}
      {(article.slug === "fake-discounts" || article.slug === "target-price") && (
        <section className="pt-6 border-t border-slate-200">
          <DealSanityCalculator />
        </section>
      )}

      {/* Sources & Further Reading Section */}
      {article.sourcesAndReading && article.sourcesAndReading.length > 0 && (
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Sources & Official References</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            The factual references, definitions, and legal benchmarks cited in this
            guide are grounded in official Indian consumer protection instruments
            and regulatory publications:
          </p>
          <div className="space-y-3 pt-2">
            {article.sourcesAndReading.map((src, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-950 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group"
                  >
                    <span>{src.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 shrink-0" />
                  </a>
                  <span className="text-[11px] font-medium text-slate-500 shrink-0">
                    Reviewed: {src.reviewedDate}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-700">{src.authority}</div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800 font-semibold">What it supports: </strong>
                  {src.whatItSupports}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Mandatory Educational Disclaimer */}
      <footer className="pt-6 border-t border-slate-200 space-y-8">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 leading-relaxed space-y-1">
          <div className="font-semibold text-slate-900">
            Educational Disclaimer:
          </div>
          <div>
            This guide is for educational purposes only. Retail prices, promotions,
            bank offers, and seller policies change frequently. Verify all details
            directly on the retailer&apos;s checkout page before completing any purchase.
          </div>
        </div>

        {/* Prev / Next Article Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {prevArticle ? (
            <button
              onClick={() => onNavigate(prevArticle.route)}
              className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 text-left bg-white transition-colors cursor-pointer group"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                ← Previous Guide
              </div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-slate-700 line-clamp-1">
                {prevArticle.title}
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <button
              onClick={() => onNavigate(nextArticle.route)}
              className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 text-right bg-white transition-colors cursor-pointer group"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Next Guide →
              </div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-slate-700 line-clamp-1">
                {nextArticle.title}
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </article>
  );
};

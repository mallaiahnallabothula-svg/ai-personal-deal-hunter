import React from "react";
import { ArrowLeft, BookOpen, Home, Search } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24 max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
          <span>Error 404</span>
          <span aria-hidden="true">·</span>
          <span>Page Not Found</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          The page you requested does not exist or may have been moved. You can
          explore our shopping research guides or return to the homepage.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate("/")}
          className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg inline-flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </button>

        <button
          onClick={() => onNavigate("/research")}
          className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-300 inline-flex items-center gap-2 transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Explore Research Hub</span>
        </button>
      </div>

      <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 max-w-sm mx-auto">
        <p>
          Need assistance or spotted a broken link? Let us know on our{" "}
          <button
            onClick={() => onNavigate("/contact")}
            className="text-slate-800 font-semibold underline underline-offset-4 hover:text-slate-950 cursor-pointer"
          >
            Contact page
          </button>
          .
        </p>
      </div>
    </div>
  );
};

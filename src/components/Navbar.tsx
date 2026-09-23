import React, { useState } from "react";
import { SITE_CONFIG } from "../config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEarlyInterest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenEarlyInterest,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Research", path: "/research" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (path: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick("/")}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded"
          aria-label={`${SITE_CONFIG.name} Home`}
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors">
            {SITE_CONFIG.name}
          </span>
        </button>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.path ||
              (link.path === "/research" && currentPath.startsWith("/research/"));

            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors cursor-pointer py-1 text-sm ${
                  isActive
                    ? "text-slate-950 font-semibold underline decoration-slate-900 underline-offset-8"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action or status button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenEarlyInterest}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 rounded-md transition-colors cursor-pointer whitespace-nowrap"
            title="Personal Deal Hunts are currently in development"
          >
            <span>Personal Deal Hunts</span>
            <span className="text-slate-500 font-normal">· Coming Soon</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-sm animate-in fade-in slide-in-from-top-1 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path === "/research" && currentPath.startsWith("/research/"));

              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 text-slate-950 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEarlyInterest();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              <span>Personal Deal Hunts</span>
              <span className="text-slate-500">Coming Soon →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

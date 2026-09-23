import React, { useState, useEffect, useRef } from "react";
import { SITE_CONFIG, isRealContactEmail, getMailtoLink } from "../config/site";
import { X, Clock, MailCheck, AlertCircle } from "lucide-react";

interface EarlyInterestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  "Smartphones & Mobile Devices",
  "Laptops & Ultrabooks",
  "Headphones & Wireless Audio",
  "Smart TVs & Home Entertainment",
  "Home & Kitchen Appliances",
  "Smart Watches & Fitness Trackers",
  "Computer Components & Monitors",
  "Other Consumer Tech",
];

export const EarlyInterestModal: React.FC<EarlyInterestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [maxBudget, setMaxBudget] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [emailDraftTriggered, setEmailDraftTriggered] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);

  const hasConfiguredEmail = isRealContactEmail(SITE_CONFIG.contactEmail);

  // Focus management & Escape key handling
  useEffect(() => {
    if (!isOpen) {
      setEmailDraftTriggered(false);
      return;
    }

    // Save previous active element to restore upon close
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;

    // Trap focus inside modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Focus the first interactive element
    const timeoutId = setTimeout(() => {
      if (modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          focusable[0].focus();
        }
      }
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutId);
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasConfiguredEmail) {
      return;
    }

    const subject = `Deal Hunt Early Interest: ${category} - ${productDescription.slice(0, 30)}`;
    const body = `Hello AI Personal Deal Hunter,\n\nI would like to express early interest in Personal Deal Hunts.\n\nCategory: ${category}\nProduct/Item: ${productDescription || "Not specified"}\nMaximum Acceptable Budget: ₹${maxBudget || "Not specified"}\nTarget Price: ₹${targetPrice || "Not specified"}\nMy Contact Email: ${userEmail || "Not provided"}\n\nNotes:\n- Please notify me when user validation trials begin.\n- I understand this product is in validation stage.\n`;

    const mailto = getMailtoLink(subject, body);
    if (mailto) {
      window.location.href = mailto;
      setEmailDraftTriggered(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-1">
              <Clock className="w-3.5 h-3.5 text-slate-700" />
              <span>Personal Deal Hunts · Development Stage</span>
            </div>
            <h2 id="modal-title" className="text-xl font-bold tracking-tight text-slate-950">
              Personal Deal Hunts Early Access
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900 p-1.5 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!hasConfiguredEmail ? (
            /* Honest Status when Contact Email is Not Configured */
            <div className="py-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Registration Disabled
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Early access registration is not open yet. Please check back
                    when pilot registration begins.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Because {SITE_CONFIG.name} does not run undisclosed data harvesting
                or pretend to record interest when no backend mailbox is active,
                preference collection is currently disabled on this validation build.
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </div>
          ) : emailDraftTriggered ? (
            /* Email Draft Triggered State (Not a completed submission) */
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mx-auto">
                <MailCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950">
                  Email Draft Opened
                </h3>
                <p className="text-sm text-slate-700 max-w-sm mx-auto leading-relaxed">
                  Your email draft has been opened. Please send the email to
                  complete your early-interest request.
                </p>
                <p className="text-xs text-slate-500 pt-2 max-w-sm mx-auto">
                  We will review your product preferences as we design supported
                  categories for future validation testing.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEmailDraftTriggered(false);
                  onClose();
                }}
                className="mt-4 px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* Active mailto configuration form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-800">
                  Validation Stage Transparency:{" "}
                </span>
                We are actively designing the hunting framework. Submitting this form
                will create an email draft with your buying preferences.
              </div>

              <div>
                <label
                  htmlFor="hunt-category"
                  className="block text-xs font-semibold text-slate-800 mb-1"
                >
                  Product Category
                </label>
                <select
                  id="hunt-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="hunt-product"
                  className="block text-xs font-semibold text-slate-800 mb-1"
                >
                  Specific Product or Model (Optional)
                </label>
                <input
                  id="hunt-product"
                  type="text"
                  placeholder="e.g. 55-inch 4K OLED TV or ANC Headphones"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="hunt-budget"
                    className="block text-xs font-semibold text-slate-800 mb-1"
                  >
                    Max Budget (₹)
                  </label>
                  <input
                    id="hunt-budget"
                    type="number"
                    min="0"
                    placeholder="e.g. 35000"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 tabular-nums"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hunt-target"
                    className="block text-xs font-semibold text-slate-800 mb-1"
                  >
                    Target Price (₹)
                  </label>
                  <input
                    id="hunt-target"
                    type="number"
                    min="0"
                    placeholder="e.g. 29999"
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="hunt-email"
                  className="block text-xs font-semibold text-slate-800 mb-1"
                >
                  Your Email (Optional)
                </label>
                <input
                  id="hunt-email"
                  type="email"
                  placeholder="you@domain.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
                >
                  Open Email Draft
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

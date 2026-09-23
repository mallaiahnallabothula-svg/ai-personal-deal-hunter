import React, { useState } from "react";
import { SITE_CONFIG, isRealContactEmail, getMailtoLink } from "../config/site";
import {
  Mail,
  MessageSquare,
  HelpCircle,
  Copy,
  Check,
  Send,
  Sparkles,
} from "lucide-react";

interface ContactPageProps {
  onOpenEarlyInterest: () => void;
}

const TOPICS = [
  { id: "feedback", label: "General Feedback & Thoughts" },
  { id: "suggestion", label: "Product & Feature Suggestion" },
  { id: "correction", label: "Research Correction or Update" },
  { id: "partnership", label: "Partnership Enquiry" },
  { id: "affiliate", label: "Commercial / Network Enquiry" },
  { id: "early-access", label: "Early Access / Testing Interest" },
];

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenEarlyInterest }) => {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0].id);
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [copiedDraft, setCopiedDraft] = useState(false);

  const hasConfiguredEmail = isRealContactEmail(SITE_CONFIG.contactEmail);

  const activeTopicObj = TOPICS.find((t) => t.id === selectedTopic);
  const fullSubject = `[${activeTopicObj?.label}] ${userSubject || "Inquiry"}`;
  const fullBody = `Topic: ${activeTopicObj?.label}\n\nMessage:\n${userMessage || "(Please write your message here)"}\n\nSent to: ${SITE_CONFIG.name}`;

  const mailtoUrl = hasConfiguredEmail
    ? getMailtoLink(fullSubject, fullBody)
    : null;

  const handleCopyDraft = () => {
    const textToCopy = `Subject: ${fullSubject}\n\n${fullBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Header */}
      <section className="pt-8 pb-4 border-b border-slate-200">
        <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-2">
          Communication & Feedback
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Contact the Project
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          We welcome thoughtful questions, research corrections, and consumer
          feedback as we build {SITE_CONFIG.name}.
        </p>
      </section>

      {/* Stage Context Banner */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1.5">
        <div className="font-semibold text-slate-900 flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4 text-slate-700" />
          <span>Zero-Cost Static Communication:</span>
        </div>
        <p>
          To keep this validation version simple and zero-cost, the site currently
          uses email drafts instead of a server-side contact form. Composing a message
          below will prepare a draft using your preferred email client.
        </p>
      </section>

      {/* Form / Composer */}
      <section className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Select Inquiry Topic
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {TOPICS.map((topic) => {
              const isSelected = selectedTopic === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                    isSelected
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                  }`}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-semibold text-slate-800 mb-1"
          >
            Subject Summary
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="e.g. Question regarding recent smartphone price history"
            value={userSubject}
            onChange={(e) => setUserSubject(e.target.value)}
            className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold text-slate-800 mb-1"
          >
            Your Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Share your feedback, correction, or thoughts..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 resize-y"
          />
        </div>

        {/* Action Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100">
          <button
            type="button"
            onClick={handleCopyDraft}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {copiedDraft ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Draft Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Draft Text</span>
              </>
            )}
          </button>

          {hasConfiguredEmail && mailtoUrl ? (
            <a
              href={mailtoUrl}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open in Email App</span>
            </a>
          ) : (
            <div className="text-xs text-slate-600 flex items-center justify-end">
              <span>Direct inbox is opening during public launch</span>
            </div>
          )}
        </div>
      </section>

      {/* Early Access Dedicated Shortcut */}
      <section className="bg-slate-100/80 rounded-xl p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-slate-900">
            Looking for Personal Deal Hunts?
          </div>
          <p className="text-xs text-slate-600 mt-0.5">
            If you want to register interest for testing future price monitors,
            use our dedicated preference questionnaire.
          </p>
        </div>
        <button
          onClick={onOpenEarlyInterest}
          className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
        >
          Express Early Interest →
        </button>
      </section>
    </div>
  );
};

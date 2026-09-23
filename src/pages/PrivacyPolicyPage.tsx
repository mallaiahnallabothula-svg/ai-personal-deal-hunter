import React from "react";
import { SITE_CONFIG } from "../config/site";
import { Lock, ShieldCheck, AlertTriangle, Info } from "lucide-react";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Header */}
      <section className="pt-8 pb-4 border-b border-slate-200">
        <div className="text-xs font-semibold text-slate-700 tracking-wide uppercase mb-2">
          Consumer Data & Privacy
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          How {SITE_CONFIG.name} handles information during this validation stage.
          Written plainly without legal obfuscation.
        </p>
        <div className="mt-3 text-xs text-slate-500">
          Last Updated: {SITE_CONFIG.lastUpdated}
        </div>
      </section>

      {/* Critical Consumer Security Warning */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-2 text-xs sm:text-sm text-slate-900">
        <div className="flex items-center gap-2 font-bold text-slate-900 uppercase tracking-wide">
          <ShieldCheck className="w-4 h-4 text-slate-700" />
          <span>Security Guidelines for Online Consumers</span>
        </div>
        <ul className="space-y-1.5 pl-4 list-disc text-slate-700 leading-relaxed">
          <li>
            <strong>Never share account credentials:</strong> {SITE_CONFIG.name} will
            never ask for your passwords for Amazon, Flipkart, banks, or email
            accounts.
          </li>
          <li>
            <strong>No financial data collection:</strong> We do not collect credit
            or debit card numbers, CVVs, UPI PINs, or bank account credentials.
          </li>
          <li>
            <strong>No financial transactions:</strong> This website does not
            process payments or hold consumer funds.
          </li>
        </ul>
      </section>

      {/* Policy Details */}
      <section className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            1. Information We Collect
          </h2>
          <p>
            Because this is currently a static, educational validation-stage
            website, we deliberately collect minimal information:
          </p>
          <ul className="space-y-2 text-sm pl-4 list-disc text-slate-700">
            <li>
              <strong>Direct Voluntary Communications:</strong> If you choose to
              send an email inquiry, feedback, or suggestion, we receive your email
              address and message body solely to read and reply to your note.
            </li>
            <li>
              <strong>No Central User Accounts or Databases:</strong> We do not
              operate user accounts, cloud database profiles, or persistent server
              profiles.
            </li>
            <li>
              <strong>Privacy-Friendly Metrics:</strong> We may review aggregate,
              cookie-less technical logs (such as page views and general browser
              types) to understand which research topics readers find useful. We do
              not deploy invasive cross-site ad-tech fingerprinting.
            </li>
          </ul>
        </div>

        {/* Affiliate Tracking Transparency */}
        <div className="space-y-3 bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200">
          <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-700" />
            <span>2. Affiliate Tracking Transparency</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 font-medium">
            No affiliate tracking is currently active on this website.
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            In the future, if affiliate links are introduced to help sustain the
            project, merchant partners (such as e-commerce platforms or affiliate
            networks) may use standard referral cookies to track completed
            purchases. These referral cookies are set by external merchants upon
            clicking an outbound link.
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            This privacy policy will be updated with comprehensive details before
            any active affiliate links are published on the website.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            3. How Information Is Used
          </h2>
          <p>Any feedback or voluntary correspondence received is used solely to:</p>
          <ul className="space-y-2 text-sm pl-4 list-disc text-slate-700">
            <li>Respond to direct consumer inquiries and research suggestions.</li>
            <li>Improve the clarity and accuracy of our educational articles.</li>
            <li>
              Identify which consumer electronics categories to prioritize for
              future deal-hunting validation.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            4. External Merchant Websites
          </h2>
          <p>
            Our articles may reference external merchant websites, regulatory
            guidelines, or brand support resources. When following an external
            link, you leave {SITE_CONFIG.name} and become subject to that external
            entity’s privacy policy and terms. We encourage you to review the
            policies of any third-party website you visit.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-950">
            5. Contact Us About Privacy
          </h2>
          <p>
            For questions regarding our privacy practices or to request the deletion
            of past email correspondence, please contact us via our Contact page.
          </p>
        </div>
      </section>
    </div>
  );
};

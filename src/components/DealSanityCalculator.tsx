import React, { useState } from "react";
import { Calculator, Info, CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react";

export const DealSanityCalculator: React.FC = () => {
  // Input states with defaults for educational demonstration
  const [mrp, setMrp] = useState<number | string>(20000);
  const [salePrice, setSalePrice] = useState<number | string>(9999);
  const [referencePrice, setReferencePrice] = useState<number | string>(8499);
  const [verifiedInstantDiscount, setVerifiedInstantDiscount] = useState<number | string>(0);
  const [mandatoryFees, setMandatoryFees] = useState<number | string>(0);

  // Numerical normalization
  const validMrp = Math.max(0, Number(mrp) || 0);
  const validSale = Math.max(0, Number(salePrice) || 0);
  const validRef = Math.max(0, Number(referencePrice) || 0);
  const validDiscount = Math.max(0, Number(verifiedInstantDiscount) || 0);
  const validFees = Math.max(0, Number(mandatoryFees) || 0);

  // Validation: Check if discount exceeds sale price
  const isDiscountExcessive = validDiscount > validSale && validSale > 0;

  // Core formula: effectivePrice = salePrice - verifiedInstantDiscount + mandatoryFees
  // If discount exceeds sale price, compute mathematically but flag clearly
  const rawEffective = validSale - validDiscount + validFees;
  const effectivePrice = Math.max(0, rawEffective);

  // Advertised MRP markdown percentage
  let mrpComparisonText = "0% off MRP";
  if (validMrp > 0) {
    if (validSale > validMrp) {
      mrpComparisonText = "Sale price exceeds stated MRP";
    } else {
      const pct = Math.round(((validMrp - validSale) / validMrp) * 100);
      mrpComparisonText = `${pct}% off MRP`;
    }
  }

  // Reference-price comparison against effective price
  const diffFromReference = effectivePrice - validRef;
  const isLowerThanReference = diffFromReference < 0;
  const isHigherThanReference = diffFromReference > 0;

  const percentDiffReference =
    validRef > 0
      ? Math.round((Math.abs(diffFromReference) / validRef) * 100)
      : 0;

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs">
      {/* Top Banner Notice */}
      <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/60">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          <Calculator className="w-4 h-4 text-slate-700" />
          <span>Educational calculator — user-entered values, not live retailer data.</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-950">
          Deal Sanity Calculator
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Evaluate advertised promotions against a user-defined reference price.
          Calculate your estimated effective price after verified checkout deductions
          and mandatory delivery fees.
        </p>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* User Input Section */}
        <div className="lg:col-span-7 space-y-5">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Enter Promotion Numbers (₹)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="calc-mrp"
                className="block text-xs font-semibold text-slate-800 mb-1"
              >
                Statutory MRP
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
                <input
                  id="calc-mrp"
                  type="number"
                  min="0"
                  value={mrp}
                  onChange={(e) => setMrp(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full pl-7 pr-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 tabular-nums font-mono text-slate-900"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Printed maximum retail price ceiling</p>
            </div>

            <div>
              <label
                htmlFor="calc-sale"
                className="block text-xs font-semibold text-slate-800 mb-1"
              >
                Advertised Sale Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
                <input
                  id="calc-sale"
                  type="number"
                  min="0"
                  value={salePrice}
                  onChange={(e) => setSalePrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full pl-7 pr-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 tabular-nums font-mono text-slate-900"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Stated price on product listing page</p>
            </div>

            <div>
              <label
                htmlFor="calc-reference"
                className="block text-xs font-semibold text-slate-800 mb-1"
              >
                Reference / Typical Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
                <input
                  id="calc-reference"
                  type="number"
                  min="0"
                  value={referencePrice}
                  onChange={(e) => setReferencePrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full pl-7 pr-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 tabular-nums font-mono text-slate-900"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Observed non-promotional price
              </p>
            </div>

            <div>
              <label
                htmlFor="calc-discount"
                className="block text-xs font-semibold text-slate-800 mb-1"
              >
                Verified Instant Discount (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
                <input
                  id="calc-discount"
                  type="number"
                  min="0"
                  value={verifiedInstantDiscount}
                  onChange={(e) => setVerifiedInstantDiscount(e.target.value === "" ? "" : Number(e.target.value))}
                  className={`w-full pl-7 pr-3 py-1.5 text-sm rounded-lg border focus:outline-none focus:ring-2 tabular-nums font-mono text-slate-900 ${
                    isDiscountExcessive
                      ? "border-amber-400 focus:ring-amber-500 bg-amber-50/30"
                      : "border-slate-300 focus:ring-slate-900"
                  }`}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Immediate checkout deduction only
              </p>
            </div>
          </div>

          {/* Validation Warning for Discount > Sale Price */}
          {isDiscountExcessive && (
            <div className="rounded-lg p-3 bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Validation Warning: </strong>
                Verified Instant Discount (₹{validDiscount.toLocaleString("en-IN")}) exceeds the Advertised Sale Price (₹{validSale.toLocaleString("en-IN")}). In online retail transactions, instant deductions cannot exceed the purchase subtotal. Please verify the entered deduction.
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="calc-fees"
              className="block text-xs font-semibold text-slate-800 mb-1"
            >
              Mandatory Fees / Shipping / Handling (Optional)
            </label>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
              <input
                id="calc-fees"
                type="number"
                min="0"
                value={mandatoryFees}
                onChange={(e) => setMandatoryFees(e.target.value === "" ? "" : Number(e.target.value))}
                className="w-full pl-7 pr-3 py-1.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 tabular-nums font-mono text-slate-900"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Any unavoidable fee added at final checkout
            </p>
          </div>

          {/* Explicit User Verification Note */}
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-1">
            <p>
              <strong>Important note on Reference Price:</strong> This value is
              entered by you. AI Personal Deal Hunter is not independently verifying
              this reference price in the current version.
            </p>
            <p>
              <strong>Important note on Instant Discounts:</strong> Only include
              deductions that apply immediately at checkout. Do not include future
              cashback, reward points, or speculative post-purchase refunds.
            </p>
          </div>
        </div>

        {/* Output & Comparison Section */}
        <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Comparison
            </div>

            <div className="space-y-4">
              {/* Advertised MRP markdown */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs text-slate-600">Advertised MRP Markdown</span>
                <span className="text-sm font-bold text-slate-900 tabular-nums font-mono">
                  {mrpComparisonText}
                </span>
              </div>

              {/* Reference-price comparison */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs text-slate-600">Reference-Price Comparison</span>
                <span className="text-sm font-bold tabular-nums font-mono">
                  {validRef === 0 ? (
                    <span className="text-slate-500 font-medium text-xs">
                      No reference price entered
                    </span>
                  ) : isLowerThanReference ? (
                    <span className="text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>₹{Math.abs(diffFromReference).toLocaleString("en-IN")} below reference ({percentDiffReference}%)</span>
                    </span>
                  ) : isHigherThanReference ? (
                    <span className="text-slate-800 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                      <span>₹{diffFromReference.toLocaleString("en-IN")} above reference ({percentDiffReference}%)</span>
                    </span>
                  ) : (
                    <span className="text-slate-700">Matches reference price</span>
                  )}
                </span>
              </div>

              {/* Estimated Effective Price Card */}
              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Estimated Effective Price
                </div>
                <div className="text-2xl font-extrabold text-slate-950 tabular-nums font-mono mt-0.5">
                  ₹{effectivePrice.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Sale price (₹{validSale.toLocaleString("en-IN")}) minus instant discount (₹{validDiscount.toLocaleString("en-IN")}) plus mandatory fees (₹{validFees.toLocaleString("en-IN")})
                </div>
              </div>
            </div>
          </div>

          {/* Contextual Guidance */}
          <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-600 flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              {validRef === 0 ? (
                <span>
                  Enter a reference or typical price to evaluate whether the effective
                  price provides meaningful savings compared to ordinary pricing.
                </span>
              ) : isHigherThanReference ? (
                <span>
                  <strong>Price observation:</strong> At an estimated effective
                  price of ₹{effectivePrice.toLocaleString("en-IN")}, you would be
                  paying ₹{diffFromReference.toLocaleString("en-IN")} more than your
                  specified reference price of ₹{validRef.toLocaleString("en-IN")},
                  despite any advertised markdown against MRP.
                </span>
              ) : isLowerThanReference ? (
                <span>
                  <strong>Price observation:</strong> The estimated effective price
                  is ₹{Math.abs(diffFromReference).toLocaleString("en-IN")} below your
                  specified reference price. Confirm seller credibility, warranty terms,
                  and return policies prior to checkout.
                </span>
              ) : (
                <span>
                  <strong>Price observation:</strong> The estimated effective price
                  matches your entered reference price exactly.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

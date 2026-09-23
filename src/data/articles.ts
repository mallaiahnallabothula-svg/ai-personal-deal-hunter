export interface ArticleSection {
  heading: string;
  content: string[];
  callout?: {
    type: "example" | "warning" | "tip" | "checklist";
    title: string;
    items?: string[];
    text?: string;
  };
}

export interface ArticleSource {
  title: string;
  authority: string;
  url: string;
  reviewedDate: string;
  whatItSupports: string;
}

export interface ResearchArticle {
  slug: string;
  route: string;
  title: string;
  subtitle: string;
  summary: string;
  category: "Pricing Strategy" | "Deal Verification" | "Consumer Checklists";
  readTimeMinutes: number;
  publishedDate: string;
  reviewedDate: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  sourcesAndReading: ArticleSource[];
  practicalGuidanceNotice?: string;
}

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    slug: "fake-discounts",
    route: "/research/fake-discounts",
    title: "Evaluating Advertised Discounts: Understanding MRP vs. Prevailing Market Prices",
    subtitle: "Why Maximum Retail Price (MRP) comparisons can mislead online shoppers and how to evaluate promotional pricing objectively.",
    summary: "Promotional discount percentages frequently compare against statutory Maximum Retail Prices rather than prevailing market selling prices. Learn how to verify whether an advertised discount represents genuine financial savings.",
    category: "Pricing Strategy",
    readTimeMinutes: 7,
    publishedDate: "September 2026",
    reviewedDate: "September 2026",
    keyTakeaways: [
      "In India, MRP is a statutory price ceiling established under consumer law, not necessarily the typical competitive marketplace price.",
      "A large percentage discount calculated from MRP does not guarantee that a product is priced lower than its ordinary prevailing street price.",
      "Always evaluate the effective rupee price after instant discounts and mandatory checkout fees rather than relying on promotional percentage tags.",
    ],
    sections: [
      {
        heading: "1. Understanding the Role of Maximum Retail Price (MRP)",
        content: [
          "In the Indian retail market, the Maximum Retail Price (MRP) is established under the Legal Metrology (Packaged Commodities) Rules. It represents the statutory upper legal ceiling that can be charged to a consumer for a packaged good.",
          "Because MRP is an upper limit, prevailing market prices under competitive e-commerce conditions are frequently lower than the printed MRP throughout the year. As a result, when an online listing displays a markdown such as '50% off MRP', this percentage is measured against the statutory ceiling rather than the item's standard non-sale selling price.",
          "For example, if a consumer electronics product carries a statutory MRP of ₹6,999, but routinely sells on online platforms for ₹2,199 during normal weeks, a promotional event pricing the item at ₹1,999 represents a modest reduction of ₹200 from its typical selling price, rather than a ₹5,000 reduction from MRP.",
          "To evaluate discounts objectively, shoppers should compare current sale pricing against observable typical selling prices rather than statutory ceilings alone.",
        ],
        callout: {
          type: "example",
          title: "Hypothetical Educational Illustration — Not Based on Live Retailer Data",
          items: [
            "Stated Statutory MRP: ₹20,000",
            "Advertised Promotional Price: ₹9,999 (Advertised as '50% off MRP')",
            "Observed Typical Non-Promotional Price: ₹8,499",
            "Price Comparison: At ₹9,999, the item is ₹10,001 below the statutory MRP ceiling, but ₹1,500 higher than its typical non-promotional market level.",
            "Takeaway: Evaluating prices against recent non-promotional levels provides clearer perspective than measuring against statutory ceilings alone.",
          ],
        },
      },
      {
        heading: "2. Key Variables to Verify During Promotional Events",
        content: [
          "When evaluating any advertised promotion, consumers should verify the complete transaction requirements. Advertised headline prices often depend on specific conditions:",
        ],
        callout: {
          type: "checklist",
          title: "Pre-Purchase Discount Verification Points",
          items: [
            "Exact Model & SKU: Verify whether the promotion applies to the latest model or a preceding product generation.",
            "Specific Storage or Color Variant: Headline offers may apply to a single specific colorway or storage capacity, while adjacent variants remain at standard prices.",
            "Seller Authorization & Warranty: Confirm whether the seller is an authorized merchant with valid manufacturer warranty coverage in India.",
            "Coupon & Voucher Application: Check whether manual coupon clipping or checkbox toggles are necessary to achieve the advertised price.",
            "Bank Card Terms: Verify whether instant checkout discounts or deferred card cashback applies, and check for transaction value minimums.",
            "Mandatory Checkout Fees: Review final order totals for shipping fees, convenience charges, or packaging surcharges.",
            "Exchange Dependencies: Confirm whether advertised headline prices assume an optional device trade-in allowance.",
            "Delivery Timeframes: Check estimated dispatch and delivery schedules to ensure the item is in stock rather than backordered.",
            "Cross-Platform Verification: Check comparable reputable retailers to confirm whether the promotional price is standard across the market.",
          ],
        },
      },
      {
        heading: "3. Developing Objective Price Discipline",
        content: [
          "Rather than focusing solely on the stated discount percentage, consumers can ground their purchase decisions with two objective questions:",
          "1. What is the exact rupee amount leaving my payment method today after all discounts and mandatory fees?",
          "2. What has been the typical non-promotional price for this specific model across recent months?",
          "Anchoring purchases in net payable rupee outlay and typical non-promotional prices helps ensure that promotional events deliver genuine value.",
        ],
      },
    ],
    sourcesAndReading: [
      {
        title: "Legal Metrology (Packaged Commodities) Rules, 2011",
        authority: "Department of Consumer Affairs, Government of India",
        url: "https://consumeraffairs.nic.in/acts-and-rules/legal-metrology/the-legal-metrology-packaged-commodities-rules-2011",
        reviewedDate: "September 2026",
        whatItSupports: "Statutory provisions defining Maximum Retail Price (MRP) as the mandatory tax-inclusive ceiling price for packaged consumer goods in India, establishing that retail transactions cannot exceed MRP while competitive selling prices may legally be lower.",
      },
      {
        title: "Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements, 2022",
        authority: "Central Consumer Protection Authority (CCPA), Government of India",
        url: "https://consumeraffairs.nic.in/sites/default/files/CCPA_Notification.pdf",
        reviewedDate: "September 2026",
        whatItSupports: "Regulatory provisions prohibiting deceptive discount claims, misleading reference pricing, and unsubstantiated comparative savings assertions in commercial advertising.",
      },
      {
        title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023",
        authority: "Central Consumer Protection Authority (CCPA), Government of India",
        url: "https://consumeraffairs.nic.in/sites/default/files/Guidelines_for_Prevention_and_Regulation_of_Dark_Patterns_2023.pdf",
        reviewedDate: "September 2026",
        whatItSupports: "Prohibits deceptive e-commerce practices including false urgency (fictitious purchase countdowns) and drip pricing (unavoidable fees revealed only at final checkout).",
      },
    ],
  },
  {
    slug: "target-price",
    route: "/research/target-price",
    title: "What Is a Target Price and How to Set One",
    subtitle: "A target price is not a predictive forecast. It is a personal buying threshold based on budget and utility.",
    summary: "Setting a realistic target price prevents impulsive purchases during high-pressure sale events. Understand how to formulate a disciplined buying threshold based on personal utility and typical market pricing.",
    category: "Pricing Strategy",
    readTimeMinutes: 6,
    publishedDate: "September 2026",
    reviewedDate: "September 2026",
    keyTakeaways: [
      "A target price is a pre-determined decision threshold: 'If the net effective price drops to or below ₹X, I buy; otherwise, I wait.'",
      "Realistic target prices reflect typical non-sale pricing and reasonable savings relative to recent prices, not improbable temporary pricing errors.",
      "Base target thresholds on personal utility, replacement urgency, and available alternative products.",
    ],
    sections: [
      {
        heading: "1. Defining the Concept: Decision Boundary vs. Market Prediction",
        content: [
          "Shoppers often attempt to forecast the absolute lowest historical floor price of a product. In practice, online retail pricing is subject to dynamic inventory adjustments, distributor incentives, and bank sponsorship agreements that cannot be predicted with certainty.",
          "A target price does not attempt to predict future market movements. Instead, it serves as a personal boundary condition: the net effective price at which a product offers satisfactory value given your specific budget and functional requirements.",
          "Establishing a target price in advance helps shoppers resist promotional pressure such as countdown clocks or limited-quantity notices. If the item reaches your threshold, you purchase with confidence; if it does not, you can comfortably wait or consider alternatives.",
        ],
      },
      {
        heading: "2. Formulating a Realistic Target Price",
        content: [
          "When setting an effective target price for consumer goods, consider balancing the following objective factors:",
        ],
        callout: {
          type: "tip",
          title: "Target Price Formulation Framework",
          items: [
            "Hard Budget Ceiling: The maximum rupee outlay you are prepared to spend without straining your financial plans.",
            "Urgency of Replacement: If a critical device has broken down, your buying threshold should remain closer to prevailing market prices than if you are contemplating an optional upgrade.",
            "Viable Market Alternatives: Consider comparable models in the same category that offer similar utility at lower price points.",
            "Typical Non-Sale Pricing: Realistic target prices reflect reasonable savings relative to recent prices, rather than anomalous one-off pricing errors.",
            "Expected Lifespan & Utility: Evaluate the anticipated years of service to assess cost per year of active ownership.",
            "Service and Brand Preferences: Factor in whether official local service centres and reliable warranty support justify a price differential.",
            "Opportunity Cost: Evaluate whether saving an incremental amount on specifications you may not actively need frees funds for higher-priority needs.",
          ],
        },
      },
      {
        heading: "3. Illustrative Target Setting Case Study",
        content: [
          "Consider an illustrative example of a shopper seeking a mid-range tablet for reading and productivity:",
        ],
        callout: {
          type: "example",
          title: "Hypothetical Educational Illustration — Not Based on Live Retailer Data",
          items: [
            "Statutory Product MRP: ₹34,999",
            "Prevailing Everyday Retail Price: ₹28,999",
            "Observed Previous Promotional Range: ₹25,500 – ₹27,000",
            "Shopper's Pre-Determined Target Price: ₹25,000",
            "Decision Process: When an advertised sale lists the device at ₹27,499 with promotional banners, the shopper waits because the price remains above their target threshold.",
            "When a verified promotion subsequently lists the item at ₹24,999 inclusive of an instant checkout discount, the shopper completes the purchase with confidence, having met their pre-planned criteria.",
          ],
        },
      },
    ],
    sourcesAndReading: [
      {
        title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023",
        authority: "Central Consumer Protection Authority (CCPA), Government of India",
        url: "https://consumeraffairs.nic.in/sites/default/files/Guidelines_for_Prevention_and_Regulation_of_Dark_Patterns_2023.pdf",
        reviewedDate: "September 2026",
        whatItSupports: "Prohibits drip pricing, mandating that incremental fees added after the initial price listing are identified and regulated as deceptive commercial patterns.",
      },
      {
        title: "Consumer Protection (E-Commerce) Rules, 2020",
        authority: "Department of Consumer Affairs, Government of India",
        url: "https://consumeraffairs.nic.in/acts-and-rules/consumer-protection/consumer-protection-e-commerce-rules-2020",
        reviewedDate: "September 2026",
        whatItSupports: "Requires marketplace and inventory e-commerce entities to disclose total price breakdown in a single clear figure alongside delivery and handling charges.",
      },
    ],
  },
  {
    slug: "price-history",
    route: "/research/price-history",
    title: "Price History Explained: Understanding Historical Price Observations",
    subtitle: "Understanding median prices, data staleness, variant distinctions, and why the lowest recorded price is not the complete picture.",
    summary: "Historical price charts provide helpful context, but focusing solely on an isolated historical low point can mislead. Learn how to interpret price history data and median price trends constructively.",
    category: "Pricing Strategy",
    readTimeMinutes: 8,
    publishedDate: "September 2026",
    reviewedDate: "September 2026",
    keyTakeaways: [
      "An 'all-time lowest price' record may represent an unrepeatable pricing error, an unverified third-party listing, or an out-of-stock entry.",
      "The sustained median price over recent months provides a more reliable baseline for evaluating deal quality.",
      "Always confirm whether historical price data included mandatory bank discounts, bundled subscriptions, or non-refundable delivery charges.",
    ],
    sections: [
      {
        heading: "1. The Value and Limitations of Historical Price Data",
        content: [
          "Historical price trackers can be valuable tools for consumers. Observing how a product's price has moved over several months helps expose promotional patterns and pre-festival price fluctuations.",
          "However, relying exclusively on the lowest historical data point on a chart can be misleading. A price graph records an observed numerical value, but it does not always capture the logistical or contractual conditions surrounding that price.",
        ],
      },
      {
        heading: "2. Common Factors Behind Anomalous Historical Lows",
        content: [
          "When inspecting a price history graph that shows an unusual downward spike, consider the common conditions behind unrepeatable historical price points:",
        ],
        callout: {
          type: "warning",
          title: "Factors Underlying Historical Price Anomalies",
          items: [
            "Temporary Pricing Errors: Algorithmic repricing errors where a product is listed briefly before orders are cancelled by the platform.",
            "Unverified Third-Party Resellers: Listings from unrated or newly registered third-party sellers that may lack manufacturer warranty coverage or order fulfillment.",
            "Variant Conflation: Tracking systems occasionally conflate an open-box or refurbished unit with a brand-new, sealed retail unit.",
            "Limited Clearance Stock: Single-unit open-box clearances sold off under the primary product listing.",
            "Stale or Cached Crawls: Web scrapers recording promotional text that had already expired at the checkout gateway.",
            "Restricted Payment Conditions: Prices that required a specific co-branded corporate credit card held by a limited segment of consumers.",
          ],
        },
      },
      {
        heading: "3. Focusing on the Median and Price Stability",
        content: [
          "Rather than benchmarking purchases against an isolated lowest historical point, experienced shoppers evaluate:",
          "1. The Sustained Median Price: The prevailing price at which the product transacts during ordinary non-promotional periods.",
          "2. Price Consistency: Whether the product's price remains steady over several weeks or fluctuates frequently based on inventory levels.",
          "3. Pre-Promotion Adjustments: Verifying whether retail prices were adjusted upward immediately prior to a major promotional event.",
        ],
      },
    ],
    sourcesAndReading: [
      {
        title: "Market Study on E-Commerce in India: Key Findings and Observations",
        authority: "Competition Commission of India (CCI), Government of India",
        url: "https://www.cci.gov.in/economics-research/market-studies/details/18/6",
        reviewedDate: "September 2026",
        whatItSupports: "Official CCI market study discussing marketplace discount policies, search-ranking factors, platform practices, and concerns reported by participating sellers and service providers.",
      },
      {
        title: "Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements, 2022",
        authority: "Central Consumer Protection Authority (CCPA), Government of India",
        url: "https://consumeraffairs.nic.in/sites/default/files/CCPA_Notification.pdf",
        reviewedDate: "September 2026",
        whatItSupports: "Sets standards for non-misleading advertisements and includes requirements concerning bait advertisements and misleading commercial claims.",
      },
    ],
  },
  {
    slug: "deal-verification",
    route: "/research/deal-verification",
    title: "How to Verify an Online Deal: Pre-Purchase Verification Protocol",
    subtitle: "A systematic verification protocol to check seller credentials, warranty validity, and final checkout totals.",
    summary: "An advertised discount loses its value if the product lacks manufacturer warranty or incurs unexpected fees at checkout. Review this systematic verification protocol before completing your order.",
    category: "Deal Verification",
    readTimeMinutes: 9,
    publishedDate: "September 2026",
    reviewedDate: "September 2026",
    keyTakeaways: [
      "Never confirm an order based solely on the product listing page; verify all line items on the final checkout summary.",
      "Check seller authorization credentials to ensure manufacturer warranty support in India.",
      "Review return and replacement policies carefully, noting differences between replacement-only terms and brand service centre visits.",
    ],
    sections: [
      {
        heading: "1. Pre-Purchase Verification Protocol",
        content: [
          "Consumers can apply this pre-purchase verification protocol before authorizing payment for online electronics and consumer goods:",
        ],
        callout: {
          type: "checklist",
          title: "Pre-Purchase Verification Protocol",
          items: [
            "1. Exact Model Number: Verify character-by-character (e.g. regional Indian model suffixes vs. international imports).",
            "2. Hardware Variant: Check internal storage capacity, RAM configuration, and colorway details.",
            "3. Seller Track Record: Look for established marketplace sellers with consistent seller history and a positive customer track record.",
            "4. Official Warranty Validity: Confirm whether the listing specifies manufacturer warranty or seller-backed warranty.",
            "5. Return & Replacement Terms: Distinguish between standard returnable windows, replacement-only terms, and 'Service Centre Walk-in Only' policies.",
            "6. Final Checkout Payable Sum: Verify that the price on the payment page matches expectations without unexpected add-ons.",
            "7. Coupon Application Status: Ensure promo codes or voucher selections have reduced the subtotal prior to authorizing payment.",
            "8. Payment Offer Terms: Confirm whether card offers are instant discounts or deferred cashback, and verify eligibility conditions.",
            "9. Trade-In / Exchange Terms: Read details regarding doorstep evaluation criteria for old device trade-ins.",
            "10. Mandatory Checkout Surcharges: Inspect line items for delivery, handling, or secure packaging fees.",
            "11. Stock & Delivery Timelines: Confirm that the product is in stock with a clear delivery window rather than an extended pre-order.",
            "12. Market Price Context: Compare pricing across at least one other reputable platform to verify overall market alignment.",
          ],
        },
      },
      {
        heading: "2. Total Value vs. Headline Markdown",
        content: [
          "Total value is determined by the combination of price, official warranty coverage, and seller reliability.",
          "A marginally lower price from an unauthorized third-party seller with ambiguous warranty terms can result in higher long-term costs than purchasing from an authorized merchant with full nationwide warranty support.",
        ],
      },
    ],
    sourcesAndReading: [
      {
        title: "Consumer Protection (E-Commerce) Rules, 2020",
        authority: "Department of Consumer Affairs, Government of India",
        url: "https://consumeraffairs.nic.in/acts-and-rules/consumer-protection/consumer-protection-e-commerce-rules-2020",
        reviewedDate: "September 2026",
        whatItSupports: "Mandates e-commerce platforms to provide verified legal name, principal geographic address, customer customer care details, and explicit return/warranty terms for each registered marketplace seller.",
      },
      {
        title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023",
        authority: "Central Consumer Protection Authority (CCPA), Government of India",
        url: "https://consumeraffairs.nic.in/sites/default/files/Guidelines_for_Prevention_and_Regulation_of_Dark_Patterns_2023.pdf",
        reviewedDate: "September 2026",
        whatItSupports: "Prohibits deceptive interface designs including basket sneaking (unwanted extended warranty additions) and disguised commercial links.",
      },
    ],
  },
  {
    slug: "smart-buying-checklist",
    route: "/research/smart-buying-checklist",
    title: "Smart Buying Checklist for Consumer Electronics",
    subtitle: "A step-by-step consumer checklist covering product selection, offer verification, payment safeguards, and post-delivery inspection.",
    summary: "Purchasing high-value consumer electronics online benefits from a methodical approach. Follow this 5-phase checklist from initial product selection to doorstep package inspection.",
    category: "Consumer Checklists",
    readTimeMinutes: 10,
    publishedDate: "September 2026",
    reviewedDate: "September 2026",
    practicalGuidanceNotice: "Practical Consumer Guidance Notice: The 5-phase shopping discipline steps and unboxing recommendations in this article represent practical consumer guidance. The seller identification and checkout disclosure rules cited below reflect official regulatory requirements.",
    keyTakeaways: [
      "Structure your purchase into five distinct phases: Selection, Comparison, Offer Verification, Checkout, and Post-Delivery.",
      "Inspect the courier seal upon delivery and verify serial numbers against invoice documentation.",
      "Register serial numbers on the official manufacturer portal promptly after delivery to confirm warranty validity.",
    ],
    sections: [
      {
        heading: "Phase 1: Before Choosing the Product",
        content: [
          "Evaluate your purchase requirements based on daily utility rather than promotional claims:",
          "• Clarify non-negotiable specifications (e.g. required battery performance, display characteristics, operating system support).",
          "• Consult independent community reviews and hardware analyses rather than sponsored promotional endorsements.",
          "• Research the manufacturer's authorized service centre network in your local region or district.",
          "• Check whether a successor product is scheduled for imminent launch at a similar price tier.",
        ],
      },
      {
        heading: "Phase 2: Before Comparing Prices",
        content: [
          "Ensure you are comparing identical models and configurations across competing platforms:",
          "• Note down the exact model number and regional SKU suffix.",
          "• Check whether necessary accessories (such as chargers, cables, or adapters) are included in the retail box or sold separately.",
          "• Verify whether extended protection plans are bundled or offered as optional additions.",
        ],
      },
      {
        heading: "Phase 3: Before Applying an Offer",
        content: [
          "Review promotional terms and conditions prior to checkout:",
          "• For payment card promotions, determine whether the saving is an instant discount deducted at payment or a deferred cashback credit.",
          "• Check whether EMI options involve processing charges or affect eligibility for instant promotional discounts.",
          "• Review promotional coupon terms to confirm return eligibility.",
        ],
      },
      {
        heading: "Phase 4: Before Payment & Checkout",
        content: [
          "Verify all details prior to authorizing the payment transaction:",
          "• Confirm delivery address, PIN code, and contact information.",
          "• Check that optional insurance or add-on warranties were not automatically pre-selected.",
          "• Verify that the final checkout summary matches your calculated effective price.",
          "• Keep a record of the final order confirmation and itemized invoice preview.",
        ],
      },
      {
        heading: "Phase 5: Delivery Day & Post-Order Verification",
        content: [
          "Follow prudent verification steps upon parcel arrival:",
          "• If the logistics partner provides Open Box Delivery (OBD), inspect the physical unit, accessories, and serial number before sharing the delivery authentication code.",
          "• If Open Box Delivery is not available, inspect package seals for tampering and document the unboxing process.",
          "• Download and archive the official tax invoice directly from your merchant account dashboard.",
          "• Register the product serial number or IMEI on the official manufacturer website to confirm valid warranty registration.",
        ],
      },
    ],
    sourcesAndReading: [
      {
        title: "Consumer Protection (E-Commerce) Rules, 2020",
        authority: "Department of Consumer Affairs, Government of India",
        url: "https://consumeraffairs.nic.in/acts-and-rules/consumer-protection/consumer-protection-e-commerce-rules-2020",
        reviewedDate: "September 2026",
        whatItSupports: "Supports disclosure of seller information, total price and applicable charges, return/refund terms, delivery information, and relevant guarantees or warranties.",
      },
      {
        title: "Guidelines for Prevention and Regulation of Dark Patterns, 2023",
        authority: "Central Consumer Protection Authority (CCPA), Government of India",
        url: "https://consumeraffairs.nic.in/sites/default/files/Guidelines_for_Prevention_and_Regulation_of_Dark_Patterns_2023.pdf",
        reviewedDate: "September 2026",
        whatItSupports: "Supports consumer verification of final checkout totals to identify and eliminate drip pricing and pre-ticked add-on charges.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): ResearchArticle | undefined {
  return RESEARCH_ARTICLES.find((a) => a.slug === slug);
}

// ─────────────────────────────────────────────
//  TRADES DATA MODEL
//  Add new ideas here. The UI renders from this.
//  Each trade links to its own detail page in /ideas/
//  Future: replace with API fetch from a market data provider.
// ─────────────────────────────────────────────

const TRADES = [
  {
    id: "ewz-straddle-2026",
    ticker: "EWZ · NYSE",
    direction: "Straddle",
    name: "iShares MSCI Brazil",
    sector: "EM Equities · Brazil",
    updated: "Mar 2025",
    preview: "A vol play on Brazil's 2026 presidential election. Not calling up or down — just that EWZ moves more than the market currently prices in. Max loss is the premium paid.",
    url: "ideas/ewz-straddle-2026.html"
  }
];

// ─────────────────────────────────────────────
//  COMING SOON PLACEHOLDERS
// ─────────────────────────────────────────────

const COMING_SOON = [
  { hint: "Next idea in progress" },
  { hint: "Conviction loading..." }
];

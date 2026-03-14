// ─────────────────────────────────────────────
//  TRADES DATA MODEL
//  Add new ideas here. The UI renders from this.
//  Future: replace with API fetch from market data provider.
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
    thesis: {
      body: "Brazil's 2026 presidential election sets up a textbook volatility event. EWZ is the most liquid proxy for Brazilian equities and has historically moved 10–18% around major political inflection points. The structure is a straddle — buying both a call and a put at the same strike — which profits from a large move in either direction, or from implied volatility being bid up as the election approaches. No directional view required.",
      catalysts: [
        "Shorter-dated leg targets the first-round shock on October 4 — the moment markets absorb who advances.",
        "Longer-dated leg captures the runoff, potential policy pivot signals, and the noise that follows a result.",
        "If IV spikes in the weeks before the vote, the position can be sold at a premium before the event itself.",
        "A polarized field means binary outcomes on fiscal policy, commodities orientation, and BRL — all EWZ movers."
      ],
      risks: [
        "Max loss is fully defined — the total premium paid. No open-ended downside.",
        "If EWZ trades sideways into expiry without a vol spike, both legs decay.",
        "Timing matters — entering too early bleeds premium; entering too late may mean IV is already elevated."
      ]
    }
  }
];

// ─────────────────────────────────────────────
//  COMING SOON PLACEHOLDERS
//  Shows intent without overpromising.
// ─────────────────────────────────────────────

const COMING_SOON = [
  { hint: "Next idea in progress" },
  { hint: "Conviction loading..." }
];

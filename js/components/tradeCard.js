// ─────────────────────────────────────────────
//  TRADE CARD COMPONENT  (View)
//  Renders one trade card from a data object.
//  Ghost cards rendered separately.
// ─────────────────────────────────────────────

const TradeCard = {

  directionClass(dir) {
    const map = { Long: "long", Short: "short", Straddle: "vol" };
    return map[dir] || "neutral";
  },

  buildDots(catalysts = []) {
    return catalysts.map(c => `<li>${c}</li>`).join("");
  },

  render(trade) {
    const dirClass = this.directionClass(trade.direction);
    const catalysts = trade.thesis.catalysts.map(c => `<li>${c}</li>`).join("");
    const risks     = trade.thesis.risks.map(r => `<li>${r}</li>`).join("");

    return `
      <article class="idea-card reveal" data-card id="card-${trade.id}">
        <div class="card-top">
          <span class="card-ticker">${trade.ticker}</span>
          <span class="card-dir ${dirClass}">${trade.direction}</span>
        </div>
        <div class="card-name">${trade.name}</div>
        <div class="card-sector">${trade.sector}</div>
        <p class="card-preview">${trade.preview}</p>
        <div class="card-meta">
          <div class="meta-item">
            <span class="meta-lbl">Updated</span>
            <span class="meta-val">${trade.updated}</span>
          </div>
        </div>
        <button class="expand-btn" onclick="App.toggleCard(this)">
          <div class="exp-icon">+</div>
          <span>Read thesis</span>
        </button>
        <div class="card-expand-body">
          <div class="expand-inner">
            <div class="ex-label">The Setup</div>
            <p class="ex-para">${trade.thesis.body}</p>
            <div class="ex-label">Structure &amp; Catalysts</div>
            <ul class="ex-list">${catalysts}</ul>
            <div class="ex-label">Risk Considerations</div>
            <ul class="ex-list">${risks}</ul>
          </div>
        </div>
      </article>
    `;
  },

  renderGhost(item) {
    return `
      <article class="idea-card idea-card--ghost reveal">
        <div class="ghost-inner">
          <div class="ghost-eyebrow">
            <span class="ghost-dot"></span>
            <span class="ghost-dot"></span>
            <span class="ghost-dot"></span>
          </div>
          <div class="ghost-line ghost-line--lg"></div>
          <div class="ghost-line ghost-line--sm"></div>
          <div class="ghost-hint">${item.hint}</div>
        </div>
      </article>
    `;
  }

};

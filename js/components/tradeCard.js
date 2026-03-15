// ─────────────────────────────────────────────
//  TRADE CARD COMPONENT  (View)
//  Renders a preview card. "Read thesis" links
//  to a dedicated page in /ideas/.
// ─────────────────────────────────────────────

const TradeCard = {

  directionClass(dir) {
    const map = { Long: "long", Short: "short", Straddle: "vol" };
    return map[dir] || "neutral";
  },

  render(trade) {
    const dirClass = this.directionClass(trade.direction);

    return `
      <article class="idea-card reveal" id="card-${trade.id}">
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
        <a class="expand-btn idea-card-link" href="${trade.url}">
          <div class="exp-icon">&#x2192;</div>
          <span>Read thesis</span>
        </a>
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

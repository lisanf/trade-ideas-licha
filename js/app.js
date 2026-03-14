// ─────────────────────────────────────────────
//  APP CONTROLLER
//  Mounts components, handles interactions.
//  Market data integration: swap fetchMarketData()
//  with a real provider (e.g. Polygon, Yahoo Finance proxy).
// ─────────────────────────────────────────────

const App = {

  init() {
    this.mountTrades();
    this.initScrollReveal();
    this.initNavHighlight();
    this.updateTimestamp();
    // this.fetchMarketData(); // ← future: live price hook
  },

  // ── Render all trade cards + ghost cards ──────────────────
  mountTrades() {
    const grid = document.getElementById("ideas-grid");
    if (!grid) return;

    let html = "";
    TRADES.forEach(trade => {
      html += TradeCard.render(trade);
    });
    COMING_SOON.forEach(ghost => {
      html += TradeCard.renderGhost(ghost);
    });

    grid.innerHTML = html;
  },

  // ── Expand / collapse thesis ──────────────────────────────
  toggleCard(btn) {
    const card = btn.closest("[data-card]");
    const isOpen = card.classList.toggle("expanded");
    btn.querySelector("span").textContent = isOpen ? "Close" : "Read thesis";
  },

  // ── Scroll reveal (IntersectionObserver) ─────────────────
  initScrollReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 90);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    // Re-observe after dynamic mount
    requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    });
  },

  // ── Active nav link on scroll ─────────────────────────────
  initNavHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");

    const sio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (match) match.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(s => sio.observe(s));
  },

  // ── Live timestamp on trade section ──────────────────────
  updateTimestamp() {
    const el = document.getElementById("last-updated");
    if (!el) return;
    const now = new Date();
    el.textContent = now.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  },

  // ── FUTURE: Market Data Integration ──────────────────────
  // async fetchMarketData() {
  //   try {
  //     const res = await fetch("https://your-proxy.com/api/quotes?tickers=EWZ");
  //     const data = await res.json();
  //     this.injectPrices(data);
  //   } catch (e) {
  //     console.warn("Market data unavailable:", e);
  //   }
  // },
  //
  // injectPrices(data) {
  //   data.forEach(q => {
  //     const el = document.querySelector(`[data-price="${q.ticker}"]`);
  //     if (el) el.textContent = `$${q.price.toFixed(2)}`;
  //   });
  // }

};

document.addEventListener("DOMContentLoaded", () => App.init());

// src/pages/Pricing.jsx
import React from "react";

// Reads from Vite env vars (must start with VITE_)
const LINKS = {
  stocksMonthly: import.meta.env.VITE_STRIPE_STOCKS_MONTHLY,
  allMonthly: import.meta.env.VITE_STRIPE_ALL_MONTHLY,
  allAnnual: import.meta.env.VITE_STRIPE_ALL_ANNUAL,
};
function go(url) {
  if (!url) {
    alert(
      "Stripe link missing.\n\nFix: set your .env.local VITE_STRIPE_* links and restart `npm run dev`."
    );
    return;
  }
  window.location.href = url; // send to Stripe checkout
}

function Card({ title, price, subtitle, bullets, cta, onClick, badge }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          ) : null}
        </div>

        {badge ? (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="mt-5">
        <div className="text-4xl font-extrabold text-slate-900">{price}</div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[2px]">✅</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className="mt-6 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3"
      >
        {cta}
      </button>

      <p className="mt-3 text-xs text-slate-500">
        Secure checkout powered by Stripe.
      </p>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-3">Pricing</h2>

      <p className="text-center text-slate-600 mb-10">
        Simple subscription tiers built around signal coverage, not complexity.
        Cancel any time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Core Equities */}
        <Card
          title="Core Equities"
          badge="Starter"
          price="$29.99/mo"
          subtitle="Equities-only signals"
          bullets={[
            "Equities signal access",
            "Real-time alerts",
            "Simple, clean plan to start",
            "Cancel anytime",
          ]}
          cta="Subscribe"
          onClick={() => go(LINKS.coreMonthly)}
        />

        {/* All Markets Monthly */}
        <Card
          title="All Markets"
          badge="Most Popular"
          price="$49.99/mo"
          subtitle="Stocks + forex + futures (everything)"
          bullets={[
            "All markets signal access",
            "Real-time alerts",
            "Priority updates as we expand",
            "Cancel anytime",
          ]}
          cta="Subscribe"
          onClick={() => go(LINKS.allMonthly)}
        />

        {/* All Markets Annual */}
        <Card
          title="All Markets — Annual"
          badge="Best Value"
          price="$499.99/yr"
          subtitle="Pay yearly, save vs monthly"
          bullets={[
            "All markets signal access",
            "Yearly billing discount",
            "Real-time alerts",
            "Cancel anytime",
          ]}
          cta="Subscribe yearly"
          onClick={() => go(LINKS.allAnnual)}
        />
      </div>
    </section>
  );
}

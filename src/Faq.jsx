import React, { useState } from "react";

const items = [
  { q: "Do backtests match live alerts?", a: "Yes. We use once-per-bar evaluation and non-repainting logic to mirror live alerts." },
  { q: "How are alerts delivered?", a: "Email for Starter. Telegram & Webhooks on Pro." },
  { q: "What markets are supported?", a: "Stocks, major FX pairs, and popular futures." },
  { q: "Can I cancel anytime?", a: "Absolutely — month to month." },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-semibold mb-6">FAQ</h1>
      <div className="space-y-4">
        {items.map((it, i) => (
          <div key={i} className="border rounded-xl p-4">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left text-lg font-medium">
              {it.q}
            </button>
            {open === i && <p className="mt-2 text-gray-600">{it.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

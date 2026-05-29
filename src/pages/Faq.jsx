import React, { useState } from "react";

const items = [
  { q: "Do backtests match live alerts?", a: "Yes — identical logic." },
  { q: "How are alerts delivered?", a: "Email, Telegram, webhook." },
  { q: "What markets are supported?", a: "Stocks, FX, Futures." },
  { q: "Can I cancel anytime?", a: "Absolutely." },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-8">FAQ</h1>

      {items.map((it, i) => (
        <div key={i} className="border-b py-4">
          <button onClick={() => setOpen(open === i ? null : i)}>
            {it.q}
          </button>
          {open === i && <p className="mt-2 text-gray-600">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}

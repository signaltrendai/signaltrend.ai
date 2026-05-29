import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$29/mo",
    features: ["1 asset class", "Email alerts", "Basic analytics"],
    cta: "Choose Starter",
  },
  {
    name: "Pro",
    price: "$79/mo",
    popular: true,
    features: [
      "All assets (stocks/FX/futures)",
      "Telegram + Webhooks",
      "Advanced analytics & export",
    ],
    cta: "Choose Pro",
  },
  {
    name: "Team",
    price: "$199/mo",
    features: ["5 seats included", "Priority support", "Custom integrations"],
    cta: "Choose Team",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Pricing</h1>
        <p className="mt-2 text-gray-600">Simple, transparent plans. Cancel anytime.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 bg-white ${
                p.popular ? "border-indigo-400 shadow-md" : "border-gray-200"
              }`}
            >
              {p.popular && (
                <span className="inline-block mb-3 rounded-full bg-indigo-100 text-indigo-700 text-xs px-3 py-1">
                  Most Popular
                </span>
              )}
              <div className="text-lg font-medium">{p.name}</div>
              <div className="mt-1 text-3xl font-semibold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-indigo-600 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/login"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-500"
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-gray-600">
          Have questions? <Link to="/login" className="text-indigo-600">Contact us</Link>.
        </div>
      </div>
    </div>
  );
}

// src/App.jsx
import React, { useEffect, useState } from "react";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

const API_BASE = "https://signaltrendai-backend.gregoryvhibox.workers.dev";

async function goPlan(plan) {
  try {
    const res = await fetch(`${API_BASE}/api/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.url) {
      alert(data?.error || "Failed to create checkout session.");
      return;
    }

    window.location.href = data.url;
  } catch (err) {
    console.error("Checkout error:", err);
    alert("Checkout error.");
  }
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/success" element={<ThankYouPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/discord-connected" element={<DiscordConnectedPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/risk-disclosure" element={<RiskDisclosurePage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

function ThankYouPage() {
  const [sessionInfo, setSessionInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingPortal, setLoadingPortal] = useState(false);
  const [error, setError] = useState("");

  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  useEffect(() => {
    async function loadSession() {
      if (!sessionId) {
        setError("Missing checkout session. Please contact support.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${API_BASE}/api/checkout-session?session_id=${encodeURIComponent(
            sessionId
          )}`
        );

        const data = await res.json();

        if (!data.ok) {
          setError(data.error || "Unable to load checkout session.");
        } else {
          setSessionInfo(data);
        }
      } catch (err) {
        console.error("Checkout session load failed:", err);
        setError("Unable to load checkout session.");
      }

      setLoading(false);
    }

    loadSession();
  }, [sessionId]);

  const connectDiscordUrl = sessionId
    ? `${API_BASE}/auth/discord/start?session_id=${encodeURIComponent(
        sessionId
      )}`
    : null;

  async function openBillingPortal() {
    if (!sessionInfo?.customer_id) {
      alert("Missing customer ID. Please contact support.");
      return;
    }

    setLoadingPortal(true);

    try {
      const res = await fetch(`${API_BASE}/api/create-portal-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer_id: sessionInfo.customer_id }),
      });

      const data = await res.json();

      if (!data.url) {
        alert(data.error || "Could not open billing portal.");
        setLoadingPortal(false);
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      console.error("Billing portal error:", err);
      alert("Billing portal failed.");
      setLoadingPortal(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
        <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-indigo-600 text-white grid place-items-center text-2xl font-bold">
          ✓
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          Payment Successful
        </h1>

        {loading && (
          <p className="mt-4 text-sm text-slate-600">
            Loading subscription...
          </p>
        )}

        {!loading && error && (
          <p className="mt-5 text-sm text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <>
            <p className="mt-3 text-sm text-slate-600">
              Your subscription is active. Connect Discord to receive signals
              and unlock your access role.
            </p>

            <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-4 text-left text-sm">
              <p className="text-slate-700">
                <span className="font-semibold">Email:</span>{" "}
                {sessionInfo?.email || "Customer"}
              </p>

              <p className="mt-1 text-slate-700">
                <span className="font-semibold">Plan:</span>{" "}
                {sessionInfo?.plan || "Active subscription"}
              </p>
            </div>

            {connectDiscordUrl && (
              <a
                href={connectDiscordUrl}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 shadow-sm"
              >
                Connect Discord
              </a>
            )}

            <button
              onClick={openBillingPortal}
              disabled={loadingPortal}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:border-indigo-500 hover:text-indigo-600"
            >
              {loadingPortal ? "Opening..." : "Manage Subscription"}
            </button>
          </>
        )}

        <p className="mt-4 text-xs text-slate-500">
          Signals are delivered via Discord. You’ll need a free Discord account
          to receive access.
        </p>

        <p className="mt-2 text-xs text-slate-500">
          You can manage billing, update payment methods, or cancel anytime
          through Stripe.
        </p>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Systematic signal output built on volatility structure and
                regime-aware modeling.
              </h1>

              <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
                SignalTrendAI converts raw price behavior into model-driven
                entries and exits using volatility clustering, factor dynamics,
                and probabilistic regimes across global markets.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#pricing"
                  className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold text-sm shadow hover:bg-indigo-700"
                >
                  View pricing
                </a>
                <a
                  href="/#faq"
                  className="px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-medium text-sm hover:bg-slate-200"
                >
                  How it works
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-500">
                <div>
                  <div className="font-semibold text-slate-800">
                    Multi-asset coverage
                  </div>
                  <div>Equity, index, FX, and futures signals in one place.</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">
                    Regime-aware logic
                  </div>
                  <div>Adaptive behavior across volatility and trend regimes.</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl shadow-xl p-5 sm:p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Live model snapshot
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Multi-asset signal engine
                  </div>
                </div>
                <div className="h-9 w-9 rounded-2xl bg-indigo-500/80 grid place-items-center text-xs font-bold">
                  ST
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <SignalRow left="US_EQ_Factors" right="long bias" color="emerald" />
                <SignalRow left="FX_Regime" right="mixed / mean-revert" color="amber" />
                <SignalRow left="Index_VolCluster" right="compressed volatility" color="emerald" />
                <SignalRow left="Metals_Signal" right="downside risk flagged" color="rose" />
              </div>

              <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                <div className="text-[11px] text-slate-400 mb-1">
                  Example output:
                </div>
                <ul className="text-[11px] space-y-1 text-slate-200">
                  <li>• Model-driven entry/exit indications</li>
                  <li>• Volatility and regime context on each signal</li>
                  <li>• Consolidated feed across multiple markets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="bg-slate-100 border-y border-slate-200 py-16 md:py-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Built for systematic, model-driven decision making.
            </h2>
            <p className="text-slate-600 max-w-2xl mb-8 text-sm sm:text-base">
              Designed for users who think in terms of volatility regimes, factor
              exposure, and probabilistic outcomes instead of intuition and noise.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                title="Volatility-aware models"
                body="Signal outputs adapt to volatility clustering, dispersion, and compression across markets."
              />
              <FeatureCard
                title="Factor and regime context"
                body="Each signal is generated within a broader regime framework that tracks momentum, mean-reversion, and structural conditions."
              />
              <FeatureCard
                title="Multi-asset coverage"
                body="Consistent logic applied across US equities, global indices, FX majors, and key futures markets."
              />
              <FeatureCard
                title="Objective, rules-based logic"
                body="No narratives, no headlines—just rules, parameters, and transparent model behavior."
              />
              <FeatureCard
                title="Portfolio-level view"
                body="Monitor how signals cluster across assets so you can understand concentration and correlation risk."
              />
              <FeatureCard
                title="Discord delivery"
                body="After checkout, connect Discord and your access role is applied automatically."
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24 max-w-6xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Pricing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Simple subscription tiers built around signal coverage, not
              complexity. Cancel any time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard
              label="Core Equities"
              price="$29.99"
              cadence="per month"
              blurb="Model-driven entry and exit indications focused on US equities."
              features={[
                "Coverage for a curated universe of US stocks",
                "Signal indications with volatility and regime notes",
                "Discord access after checkout",
              ]}
              plan="stocks"
            />

            <PricingCard
              label="All Markets"
              highlight
              price="$49.99"
              cadence="per month"
              blurb="Full multi-asset signal universe in one subscription."
              features={[
                "US equities, indices, FX majors, and selected futures",
                "Unified signal feed with regime and factor context",
                "Discord access after checkout",
              ]}
              plan="all"
            />

            <PricingCard
              label="All Markets Annual"
              price="$499.99"
              cadence="per year"
              blurb="Same coverage as All Markets with a discounted annual rate."
              features={[
                "All Markets feature set for a full year",
                "Reduced effective monthly cost",
                "Priority access to new model releases",
              ]}
              plan="yearly"
            />
          </div>

          <p className="mt-4 text-xs text-center text-slate-500 max-w-3xl mx-auto">
            Signals are delivered via Discord. You will connect your Discord
            account after checkout.
          </p>

          <p className="mt-6 text-xs text-center text-slate-500 max-w-3xl mx-auto">
            SignalTrendAI delivers model output and systematic indications only.
            Nothing here is individual investment advice or a recommendation for
            any person or account. Users are responsible for their own execution
            and risk management.
          </p>
        </section>

        <section
          id="faq"
          className="py-16 md:py-24 max-w-6xl mx-auto px-4 border-t border-slate-200"
        >
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>

          <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
            <FaqItem
              q="How do I get started?"
              a="Choose a plan, complete checkout through Stripe, then click Connect Discord on the confirmation page. Log into Discord, approve access, and your SignalTrendAI role will be added automatically so you can see the signal channels."
            />

            <FaqItem
              q="What if I close the confirmation page?"
              a="Your subscription is still active. If you close the page before connecting Discord or managing billing, contact support and we can help reconnect your account or send you a secure Stripe billing link."
            />

            <FaqItem
              q="How do I cancel later?"
              a="You can cancel anytime through the secure Stripe billing portal. Use the Manage Subscription button after checkout, or contact support and we can send you a secure billing link."
            />

            <FaqItem
              q="How do I trade the signals?"
              a="Signals are delivered inside Discord. Each signal shows the market, direction, and event type. You are responsible for deciding whether to take a trade, choosing your position size, placing the order with your own broker, and managing risk. SignalTrendAI does not place trades for you."
            />

            <FaqItem
              q="What exactly does SignalTrendAI provide?"
              a="SignalTrendAI provides model-driven signal indications across multiple markets, including entry and exit style alerts with context about volatility and market regime. The signals are educational/model output and are not personalized financial advice."
            />

            <FaqItem
              q="Is this discretionary or model-based?"
              a="Everything is model-based. The system uses rules, volatility measures, factor logic, and regime detection—not headlines or discretion—to generate output."
            />

            <FaqItem
              q="Which markets are covered?"
              a="Coverage focuses on US equities, major indices, selected futures, and primary FX pairs, with a unified framework applied across all markets."
            />

            <FaqItem
              q="Does SignalTrendAI trade for me?"
              a="No. SignalTrendAI does not connect to your brokerage account, does not execute orders, and does not manage your money. You remain fully responsible for your trades, execution, position sizing, and risk management."
            />
          </div>
        </section>

        <section
          id="contact"
          className="py-16 md:py-24 max-w-6xl mx-auto px-4 border-t border-slate-200"
        >
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-3">Contact</h2>
              <p className="text-slate-600 text-sm sm:text-base mb-4">
                Have questions about coverage, signal logic, billing, or
                Discord access? Send a message and we’ll respond as soon as we can.
              </p>
              <p className="text-sm text-slate-600">
                You can also email directly at{" "}
                <a
                  href="mailto:info@signaltrend.ai"
                  className="text-indigo-600 hover:underline"
                >
                  info@signaltrend.ai
                </a>
                .
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
              <form
                action="https://formspree.io/f/xpvnwgvn"
                method="POST"
                className="space-y-4 text-sm"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 bg-white"
                    placeholder="Tell us about your question."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-sm"
                >
                  Send message
                </button>

                <p className="text-[11px] text-slate-500 mt-2">
                  By contacting us you agree that we may reply via email. No
                  promotional lists are used without explicit opt-in.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function DiscordConnectedPage() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  const plan = params.get("plan");

  const planLabel =
    plan === "all"
      ? "All Markets"
      : plan === "stocks"
      ? "Core Equities"
      : plan === "yearly"
      ? "All Markets Annual"
      : plan || "Active subscription";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
        <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-indigo-600 text-white grid place-items-center text-2xl font-bold">
          ✓
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          Discord Connected
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Your Discord account has been connected successfully. Your access role
          has been applied inside the SignalTrendAI Discord server.
        </p>

        <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-4 text-left text-sm">
          {email && (
            <p className="text-slate-700">
              <span className="font-semibold">Email:</span> {email}
            </p>
          )}

          {plan && (
            <p className="mt-1 text-slate-700">
              <span className="font-semibold">Plan:</span> {planLabel}
            </p>
          )}

          {!email && !plan && (
            <p className="text-slate-600">
              Your Discord connection is complete.
            </p>
          )}
        </div>

        <a
          href="/"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 shadow-sm"
        >
          Back to home
        </a>

        <p className="mt-4 text-xs text-slate-500">
          You can now return to Discord and start receiving SignalTrendAI access.
        </p>
      </div>
    </div>
  );
}

function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <LegalSection title="1. Acceptance of Terms">
        By using SignalTrendAI, purchasing a subscription, accessing Discord
        channels, or viewing any signal output, you agree to these terms.
      </LegalSection>

      <LegalSection title="2. Educational and Informational Use Only">
        SignalTrendAI provides model-driven market signal output for educational
        and informational purposes only. Nothing on this website, in Discord, or
        in any related communication is financial advice, investment advice, tax
        advice, legal advice, or a recommendation to buy or sell any financial
        instrument.
      </LegalSection>

      <LegalSection title="3. No Personalized Advice">
        SignalTrendAI does not know your financial situation, objectives, risk
        tolerance, account size, or trading experience. All decisions are your
        responsibility.
      </LegalSection>

      <LegalSection title="4. Trading Risk">
        Trading and investing involve substantial risk. You can lose money.
        Past performance, backtests, examples, or model output do not guarantee
        future results.
      </LegalSection>

      <LegalSection title="5. No Execution or Account Management">
        SignalTrendAI does not place trades, manage accounts, connect to your
        brokerage account, or control your money.
      </LegalSection>

      <LegalSection title="6. Subscriptions and Billing">
        Subscriptions are billed through Stripe. You may manage, update, or
        cancel your subscription through the Stripe billing portal.
      </LegalSection>

      <LegalSection title="7. Discord Access">
        Discord access is provided based on your active subscription tier. Access
        may be removed if a subscription is canceled, expires, fails payment, or
        violates these terms.
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        SignalTrendAI is not responsible for trading losses, missed trades,
        execution errors, platform outages, delayed signals, Discord issues,
        Stripe issues, brokerage issues, or decisions made based on model output.
      </LegalSection>
    </LegalPage>
  );
}

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalSection title="1. Information We Collect">
        We may collect your email address, subscription plan, Stripe customer
        information, Discord connection status, and basic information needed to
        provide access to SignalTrendAI.
      </LegalSection>

      <LegalSection title="2. Payments">
        Payments are processed by Stripe. SignalTrendAI does not store full
        credit card numbers on its servers.
      </LegalSection>

      <LegalSection title="3. Discord">
        If you connect Discord, we use Discord OAuth to identify your account,
        add you to the server when applicable, and apply the correct access role.
      </LegalSection>

      <LegalSection title="4. How Information Is Used">
        Information is used to process subscriptions, provide Discord access,
        manage billing status, respond to support requests, and operate the
        service.
      </LegalSection>

      <LegalSection title="5. Sharing">
        We do not sell your personal information. We may use service providers
        such as Stripe, Discord, Cloudflare, and form/contact tools to operate the
        service.
      </LegalSection>
    </LegalPage>
  );
}

function RiskDisclosurePage() {
  return (
    <LegalPage title="Risk Disclosure">
      <LegalSection title="Important Risk Warning">
        Trading financial markets involves risk. You can lose money. Leveraged
        products such as futures, forex, options, and margin trading can amplify
        losses.
      </LegalSection>

      <LegalSection title="No Guarantee">
        SignalTrendAI model output, signals, examples, alerts, backtests, or
        historical references do not guarantee any future result.
      </LegalSection>

      <LegalSection title="User Responsibility">
        You are responsible for deciding whether a signal is appropriate for you,
        placing your own trades, choosing your own position size, using your own
        broker, and managing your own risk.
      </LegalSection>

      <LegalSection title="Not Financial Advice">
        SignalTrendAI is not a registered investment adviser, broker-dealer, or
        financial planner. The service is intended for informational and
        educational model output only.
      </LegalSection>
    </LegalPage>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-indigo-600 grid place-items-center text-white font-bold text-sm">
            ST
          </div>
          <span className="font-semibold tracking-tight text-slate-900">
            SignalTrendAI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#features" className="hover:text-indigo-600 transition-colors">
            Features
          </a>
          <a href="/#pricing" className="hover:text-indigo-600 transition-colors">
            Pricing
          </a>
          <a href="/#faq" className="hover:text-indigo-600 transition-colors">
            FAQ
          </a>
          <a href="/#contact" className="hover:text-indigo-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} SignalTrendAI. All rights reserved.</div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/terms" className="hover:text-indigo-600">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-indigo-600">
            Privacy
          </Link>
          <Link to="/risk-disclosure" className="hover:text-indigo-600">
            Risk Disclosure
          </Link>
          <span>Model-driven signal output. Not individualized advice.</span>
        </div>
      </div>
    </footer>
  );
}

function LegalPage({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <Link to="/" className="text-sm text-indigo-600 hover:underline">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-8 space-y-6">{children}</div>
      </main>

      <Footer />
    </div>
  );
}

function LegalSection({ title, children }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
      <h2 className="text-lg font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-sm leading-6 text-slate-600">{children}</p>
    </section>
  );
}

function SignalRow({ left, right, color }) {
  const colorClass =
    color === "amber"
      ? "text-amber-300"
      : color === "rose"
      ? "text-rose-300"
      : "text-emerald-400";

  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-400">{left}</span>
      <span className={`${colorClass} font-semibold`}>{right}</span>
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
      <h3 className="text-sm font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-600">{body}</p>
    </div>
  );
}

function PricingCard({
  label,
  price,
  cadence,
  blurb,
  features,
  highlight,
  plan,
}) {
  return (
    <div
      className={
        "flex flex-col rounded-2xl border shadow-sm p-5 sm:p-6 bg-white " +
        (highlight
          ? "border-indigo-300 shadow-md shadow-indigo-100"
          : "border-slate-200")
      }
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
        {label}
      </div>

      <div className="flex items-baseline gap-1">
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {price}
        </div>
        <div className="text-xs text-slate-500">{cadence}</div>
      </div>

      <p className="mt-2 text-xs sm:text-sm text-slate-600">{blurb}</p>

      <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
        {features.map((f, idx) => (
          <li key={idx}>• {f}</li>
        ))}
      </ul>

      <div className="mt-5">
        <button
          onClick={() => goPlan(plan)}
          className={
            "inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold " +
            (highlight
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-slate-900 text-white hover:bg-slate-800")
          }
        >
          Get access
        </button>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-900 mb-1">{q}</div>
      <div className="text-xs sm:text-sm text-slate-600 leading-5">{a}</div>
    </div>
  );
}
// src/App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

/* HEADER */

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 grid place-items-center text-white font-bold text-sm shadow-md">
            ST
          </div>
          <span className="font-extrabold tracking-tight text-slate-900 text-sm">
            SignalTrendAI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>
          <a href="#pricing" className="hover:text-indigo-600">
            Pricing
          </a>
          <a href="#faq" className="hover:text-indigo-600">
            FAQ
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-sm text-xs"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

/* MAIN CONTENT */

function MainContent() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-center">
          {/* Left column */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-indigo-600 uppercase mb-3">
              Quant Signal Platform
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Systematic signals built on volatility models, factor dynamics,
              and probabilistic forecasting.
            </h1>

            <p className="text-base md:text-lg text-slate-700 font-medium max-w-xl mb-6">
              SignalTrendAI converts raw market behavior into model-driven
              signals using volatility clustering, momentum and mean-reversion
              factors, probabilistic score models, and portfolio-level risk
              budgeting across multiple assets.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:from-indigo-500 hover:to-sky-400 transition"
              >
                View pricing
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:border-indigo-500 hover:text-indigo-600 transition"
              >
                Explore features
              </a>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3 text-xs md:text-sm">
              <div>
                <dt className="font-semibold text-slate-900">
                  Multi-asset coverage
                </dt>
                <dd className="text-slate-600">
                  Equities, indices, FX, and metals under a unified quant
                  framework.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Quant-first design
                </dt>
                <dd className="text-slate-600">
                  Factor models, volatility regimes, and signal statistics
                  instead of noise.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Risk metrics
                </dt>
                <dd className="text-slate-600">
                  Hit-rate, drawdown, and risk-adjusted performance summaries.
                </dd>
              </div>
            </dl>
          </div>

          {/* Right column – metrics card */}
          <div className="rounded-2xl bg-white shadow-xl border border-slate-200 p-5 md:p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-2">
              Quant Metrics Overview
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Every signal engine is evaluated using rolling Sharpe,
              downside variance, exposure stability, and factor contribution to
              aggregate performance.
            </p>

            <dl className="grid grid-cols-2 gap-3 text-xs">
              <Metric label="Sharpe (model set)" value="1.42" />
              <Metric label="Hit-rate" value="58%" />
              <Metric label="Max drawdown" value="-14.3%" />
              <Metric label="Signal stability" value="High" />
              <Metric label="Lookback universe" value="10+ years" />
              <Metric label="Markets" value="Equities, FX, indices, metals" />
            </dl>

            <p className="mt-4 text-xs text-slate-500">
              Built for users who think in terms of alpha, beta, and risk
              budgets — not guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
              Features
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              A systematic architecture for users who think in terms of alpha
              factors, volatility regimes, and probabilistic outcomes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Factor engines"
              body="Momentum, mean-reversion, volatility and cross-sectional scoring models generating adaptive signals across regimes."
            />
            <FeatureCard
              title="Risk-focused design"
              body="Drawdown controls, variance targeting, and risk overlays embedded into the signal logic and simulations."
            />
            <FeatureCard
              title="Multi-asset capability"
              body="Coverage spanning equities, FX, index instruments, and metal markets with consistent statistics."
            />
            <FeatureCard
              title="Backtested models"
              body="Historical simulations evaluating hit-rate, distribution asymmetry, cumulative performance, and model stability."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
              Pricing
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Three simple plans based on your data needs and coverage scope.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PriceCard
              label="Stocks Signals"
              price="$29.99"
              subtitle="Monthly · Equities-focused"
              bullets={[
                "Single-name equity and equity index models",
                "Momentum & volatility-adaptive signal engines",
                "Risk snapshots & core model statistics",
              ]}
            />
            <PriceCard
              label="All Markets"
              price="$49.99"
              highlight
              subtitle="Monthly · Multi-asset access"
              bullets={[
                "Equities, FX, indices, and metals",
                "Cross-asset factor blends and variations",
                "Access to extended signal configurations",
              ]}
            />
            <PriceCard
              label="All Markets – Yearly"
              price="$499.99"
              subtitle="Yearly · Best value"
              bullets={[
                "Full multi-asset access for 12 months",
                "Priority email support and configuration guidance",
                "Early access to new signal engines and updates",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              q="What type of models power the signals?"
              a="The platform uses factor modeling, volatility clustering, probabilistic scoring, and risk metrics such as drawdown, exposure, and hit-rate. Outputs are derived from historical and real-time data under consistent assumptions."
            />
            <FAQItem
              q="How are signals delivered?"
              a="Signals and summaries are delivered primarily by email. After subscribing, you confirm your email address and receive ongoing outputs and periodic performance snapshots directly in your inbox."
            />
            <FAQItem
              q="What’s included in the All Markets plan?"
              a="All Markets plans extend coverage across equities, FX pairs, index instruments, and selected metals. Additional instruments are added over time as they complete internal model review and quality checks."
            />
            <FAQItem
              q="Do you provide historical statistics?"
              a="Yes. Each signal set includes summaries of long-term behavior, including stability metrics, variance, hit-rate, drawdown, and other risk-adjusted results."
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Contact us
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium mb-6 max-w-2xl">
            Have questions about signal coverage, data sourcing, or quant
            methods? Send a message and we&apos;ll respond via email.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-900 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-900 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your objectives, markets of interest, and risk preferences..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:from-indigo-500 hover:to-sky-400 transition"
            >
              Send message
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-600">
            Or email us directly at{" "}
            <a
              href="mailto:support@signaltrendai.com"
              className="font-semibold text-indigo-600"
            >
              support@signaltrendai.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* LEGAL BOXES */}
      <section id="legal" className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 space-y-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
            Legal
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium max-w-2xl">
            Key terms and privacy information for SignalTrendAI. Expand each
            box to read a concise version of the full text.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* TERMS BOX */}
            <article
              id="terms-box"
              className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Terms of Service
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Summary of how subscriptions work, how signal outputs are
                delivered by email, and user responsibilities.
              </p>

              <details className="mt-auto group">
                <summary className="cursor-pointer text-sm font-semibold text-indigo-600 group-open:text-indigo-700">
                  Read full Terms
                </summary>
                <div className="mt-3 max-h-56 overflow-y-auto pr-2 text-xs leading-relaxed text-slate-700 space-y-2">
                  <p>
                    SignalTrendAI (&quot;Company&quot;, &quot;we&quot;,
                    &quot;our&quot;, or &quot;us&quot;) provides
                    quantitative-model signal outputs, analytics, and related
                    information services (the &quot;Services&quot;). By
                    accessing or using the Services, you agree to be bound by
                    these Terms of Service.
                  </p>
                  <p>
                    Access to certain parts of the Services requires an active
                    subscription. Plans include equities-focused access,
                    multi-asset access, and a yearly multi-asset package.
                    Payments are processed via third-party providers, and you
                    authorize recurring billing until you cancel.
                  </p>
                  <p>
                    All outputs are informational and model-based. The Services
                    are provided on an &quot;as is&quot; and &quot;as
                    available&quot; basis with no warranty of accuracy,
                    uninterrupted availability, or future performance.
                  </p>
                  <p>
                    To the maximum extent permitted by law, our total aggregate
                    liability for any claim will not exceed the amount you paid
                    for the Services in the three (3) months preceding the event
                    giving rise to the claim.
                  </p>
                  <p>
                    You agree not to misuse the platform, attempt to bypass
                    billing, or redistribute our signal outputs or internal
                    analytics without written permission. We may suspend or
                    terminate access if we detect misuse or violation of these
                    Terms.
                  </p>
                </div>
              </details>
            </article>

            {/* PRIVACY BOX */}
            <article
              id="privacy-box"
              className="rounded-2xl bg-white shadow-sm border border-slate-200 p-5 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Privacy Policy
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Overview of what data we collect, how it&apos;s used, and how we
                protect subscriber and contact information.
              </p>

              <details className="mt-auto group">
                <summary className="cursor-pointer text-sm font-semibold text-indigo-600 group-open:text-indigo-700">
                  Read full Privacy Policy
                </summary>
                <div className="mt-3 max-h-56 overflow-y-auto pr-2 text-xs leading-relaxed text-slate-700 space-y-2">
                  <p>
                    SignalTrendAI collects limited information needed to operate
                    the Services, including email address, subscription details,
                    and billing data processed via third-party providers. We
                    also collect basic usage data such as IP address and
                    aggregate visit patterns for analytics and security.
                  </p>
                  <p>
                    We use this information to deliver signal outputs, manage
                    subscriptions, respond to support requests, monitor system
                    performance, and protect against misuse. We do not sell user
                    data to advertising networks.
                  </p>
                  <p>
                    Data may be shared with trusted infrastructure partners
                    strictly for service operation, including payment
                    processing, email delivery, and hosting. These partners are
                    required to handle data securely and only for the purposes
                    we specify.
                  </p>
                  <p>
                    We use reasonable technical and organizational measures such
                    as HTTPS encryption and access controls to safeguard
                    information. No system is perfectly secure, and you
                    acknowledge the inherent risks of transmitting data over the
                    internet.
                  </p>
                  <p>
                    Depending on your jurisdiction, you may have rights to
                    access, correct, or delete certain information. You can
                    contact{" "}
                    <span className="font-semibold">
                      support@signaltrendai.com
                    </span>{" "}
                    to submit requests related to your data.
                  </p>
                </div>
              </details>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

/* FOOTER */

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} SignalTrendAI. All rights reserved.</div>

        <div className="flex items-center gap-4">
          <a href="#terms-box" className="hover:text-indigo-600">
            Terms of Service
          </a>
          <a href="#privacy-box" className="hover:text-indigo-600">
            Privacy Policy
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

/* SMALL SUBCOMPONENTS */

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <dt className="text-[0.7rem] font-semibold text-slate-500 mb-0.5">
        {label}
      </dt>
      <dd className="text-sm font-bold text-slate-900">{value}</dd>
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <article className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4 flex flex-col">
      <h3 className="text-sm font-bold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-xs md:text-sm text-slate-600 font-medium">{body}</p>
    </article>
  );
}

function PriceCard({ label, price, subtitle, bullets, highlight }) {
  return (
    <article
      className={[
        "rounded-2xl border p-5 flex flex-col bg-slate-50 shadow-sm",
        highlight
          ? "border-indigo-500 shadow-md shadow-indigo-100"
          : "border-slate-200",
      ].join(" ")}
    >
      <div className="text-xs font-semibold tracking-wide uppercase text-slate-700 mb-1">
        {label}
      </div>
      <div className="text-2xl font-extrabold text-slate-900 mb-1">
        {price}
      </div>
      <div className="text-xs text-slate-600 font-medium mb-3">
        {subtitle}
      </div>

      <ul className="space-y-1.5 text-xs text-slate-700 mb-4 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={[
          "mt-auto inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition",
          highlight
            ? "bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow"
            : "bg-white text-slate-900 border border-slate-300 hover:border-indigo-500 hover:text-indigo-600",
        ].join(" ")}
      >
        Get started
      </button>
    </article>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <span className="text-xs text-slate-500 group-open:hidden">+</span>
        <span className="text-xs text-slate-500 hidden group-open:inline">
          −
        </span>
      </summary>
      <p className="mt-3 text-xs md:text-sm text-slate-700">{a}</p>
    </details>
  );
}

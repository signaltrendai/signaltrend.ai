import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dummyTrades = [
  {
    id: 1,
    market: "AAPL",
    direction: "Long",
    entryTime: "2025-11-24 09:31",
    entryPrice: 192.45,
    exitTime: "2025-11-24 13:10",
    exitPrice: 196.1,
    pnl: 365.0,
    size: "100 shares",
    model: "Momentum-Vol Composite",
  },
  {
    id: 2,
    market: "ES",
    direction: "Short",
    entryTime: "2025-11-23 10:05",
    entryPrice: 5302.25,
    exitTime: "2025-11-23 11:40",
    exitPrice: 5278.75,
    pnl: 587.5,
    size: "1 contract",
    model: "Regime Breakout",
  },
  {
    id: 3,
    market: "EURUSD",
    direction: "Long",
    entryTime: "2025-11-22 07:15",
    entryPrice: 1.0785,
    exitTime: "2025-11-22 11:20",
    exitPrice: 1.082,
    pnl: 350.0,
    size: "50k notional",
    model: "FX Mean-Revert",
  },
  {
    id: 4,
    market: "XAUUSD",
    direction: "Short",
    entryTime: "2025-11-21 09:50",
    entryPrice: 2421.3,
    exitTime: "2025-11-21 14:05",
    exitPrice: 2408.1,
    pnl: 660.0,
    size: "3 lots",
    model: "Vol Shock Fade",
  },
  {
    id: 5,
    market: "NVDA",
    direction: "Long",
    entryTime: "2025-11-20 10:12",
    entryPrice: 125.4,
    exitTime: "2025-11-20 15:32",
    exitPrice: 123.1,
    pnl: -230.0,
    size: "100 shares",
    model: "Equity Factor Blend",
  },
  {
    id: 6,
    market: "NQ",
    direction: "Long",
    entryTime: "2025-11-19 09:40",
    entryPrice: 18950.25,
    exitTime: "2025-11-19 12:10",
    exitPrice: 19080.75,
    pnl: 655.0,
    size: "1 contract",
    model: "Index Trend Engine",
  },
  {
    id: 7,
    market: "GBPUSD",
    direction: "Short",
    entryTime: "2025-11-18 08:25",
    entryPrice: 1.247,
    exitTime: "2025-11-18 10:40",
    exitPrice: 1.2495,
    pnl: -250.0,
    size: "50k notional",
    model: "FX Vol Filter",
  },
  {
    id: 8,
    market: "XAUUSD",
    direction: "Long",
    entryTime: "2025-11-17 09:05",
    entryPrice: 2438.2,
    exitTime: "2025-11-17 13:25",
    exitPrice: 2446.0,
    pnl: 390.0,
    size: "1 contract",
    model: "Metal Momentum",
  },
  {
    id: 9,
    market: "TSLA",
    direction: "Short",
    entryTime: "2025-11-16 10:15",
    entryPrice: 212.35,
    exitTime: "2025-11-16 14:10",
    exitPrice: 205.9,
    pnl: 645.0,
    size: "100 shares",
    model: "Equity Vol Break",
  },
  {
    id: 10,
    market: "CL",
    direction: "Long",
    entryTime: "2025-11-15 09:25",
    entryPrice: 78.4,
    exitTime: "2025-11-15 11:50",
    exitPrice: 77.1,
    pnl: -130.0,
    size: "1 contract",
    model: "Energy Regime Model",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  // Protect route: if not "logged in", send to /login
  useEffect(() => {
    const authed = localStorage.getItem("stai_auth");
    if (!authed) {
      navigate("/login");
    }
  }, [navigate]);

  function handleSignOut() {
    localStorage.removeItem("stai_auth");
    localStorage.removeItem("stai_email");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Top bar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 grid place-items-center text-white font-bold text-sm shadow-md">
              ST
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight">
                SignalTrendAI
              </span>
              <span className="text-[11px] text-slate-500">
                Subscriber dashboard
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Active session
            </span>
            <button
              onClick={handleSignOut}
              className="px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:text-rose-600 hover:border-rose-200"
            >
              Sign out
            </button>
            <a
              href="/"
              className="text-slate-500 hover:text-indigo-600 font-semibold"
            >
              Back to site
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Summary header */}
        <section className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Recent model activity
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Last 10 closed positions across the model universe. Times shown in
              your local timezone.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            <SummaryStat label="Positions closed" value={dummyTrades.length} />
            <SummaryStat
              label="Win rate (last 10)"
              value={calcWinRate(dummyTrades) + "%"}
            />
            <SummaryStat label="Net PnL" value={formatPnLTotal(dummyTrades)} />
          </div>
        </section>

        {/* Table */}
        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 px-4 py-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">
              Last 10 closed positions
            </h2>
            <span className="text-[11px] text-slate-500">
              Source: SignalTrendAI models (example data)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <Th>Market</Th>
                  <Th>Direction</Th>
                  <Th>Model</Th>
                  <Th>Size</Th>
                  <Th>Entry time</Th>
                  <Th>Entry level</Th>
                  <Th>Exit time</Th>
                  <Th>Exit level</Th>
                  <Th className="text-right pr-4">PnL</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dummyTrades.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/70">
                    <Td>{t.market}</Td>
                    <Td>
                      <span
                        className={
                          "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold " +
                          (t.direction === "Long"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                            : "bg-rose-50 text-rose-700 border border-rose-100")
                        }
                      >
                        {t.direction}
                      </span>
                    </Td>
                    <Td className="max-w-[180px]">
                      <span className="text-[11px] text-slate-600">
                        {t.model}
                      </span>
                    </Td>
                    <Td>
                      <span className="text-[11px] text-slate-600">
                        {t.size}
                      </span>
                    </Td>
                    <Td>
                      <Mono>{t.entryTime}</Mono>
                    </Td>
                    <Td>
                      <Mono>{formatPrice(t.entryPrice)}</Mono>
                    </Td>
                    <Td>
                      <Mono>{t.exitTime}</Mono>
                    </Td>
                    <Td>
                      <Mono>{formatPrice(t.exitPrice)}</Mono>
                    </Td>
                    <Td className="text-right pr-4">
                      <span
                        className={
                          "font-semibold " +
                          (t.pnl > 0
                            ? "text-emerald-600"
                            : t.pnl < 0
                            ? "text-rose-600"
                            : "text-slate-700")
                        }
                      >
                        {formatPnL(t.pnl)}
                      </span>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span>Showing the most recent closed signals in this view.</span>
            <span>Historical model behavior may change as logic evolves.</span>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Small helper components */

function SummaryStat({ label, value }) {
  return (
    <div className="px-3 py-2 rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="text-sm font-bold text-slate-900 mt-0.5">{value}</div>
    </div>
  );
}

function Th({ children, className = "" }) {
  return (
    <th
      className={
        "px-3 py-2 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wide " +
        className
      }
    >
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return (
    <td className={"px-3 py-2 align-middle text-slate-800 " + className}>
      {children}
    </td>
  );
}

function Mono({ children }) {
  return (
    <span className="font-mono text-[11px] text-slate-700">{children}</span>
  );
}

/* Simple formatters */

function formatPrice(x) {
  if (x === undefined || x === null) return "-";
  if (x > 1000) return x.toFixed(2);
  if (x > 100) return x.toFixed(2);
  if (x > 10) return x.toFixed(3);
  return x.toFixed(4);
}

function formatPnL(pnl) {
  const sign = pnl > 0 ? "+" : "";
  return sign + pnl.toFixed(2);
}

function formatPnLTotal(trades) {
  const total = trades.reduce((sum, t) => sum + (t.pnl || 0), 0);
  const sign = total > 0 ? "+" : "";
  return sign + total.toFixed(2);
}

function calcWinRate(trades) {
  const wins = trades.filter((t) => t.pnl > 0).length;
  if (trades.length === 0) return 0;
  return Math.round((wins / trades.length) * 100);
}

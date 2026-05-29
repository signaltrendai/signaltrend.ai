import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // SUPER SIMPLE "FAKE" AUTH FOR NOW
    // Later we'll replace this with real Stripe + Supabase.
    localStorage.setItem("stai_auth", "1");
    localStorage.setItem("stai_email", email);

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-9 w-9 rounded-2xl bg-indigo-600 text-white grid place-items-center font-bold text-sm">
            ST
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">
              SignalTrendAI
            </div>
            <div className="text-xs text-slate-500">Subscriber access</div>
          </div>
        </div>

        <h1 className="text-xl font-extrabold text-slate-900 mb-2">
          Sign in to your dashboard
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Use the email associated with your subscription to view model output.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Continue to dashboard"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-4 w-full text-xs text-slate-500 hover:text-indigo-600 text-center"
        >
          ← Back to main site
        </button>
      </div>
    </div>
  );
}

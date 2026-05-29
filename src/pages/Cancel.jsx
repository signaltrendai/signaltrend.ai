import React from "react";

export default function Cancel() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
        <h1 className="text-2xl font-extrabold">Checkout canceled</h1>

        <p className="mt-2 text-sm text-slate-600">
          You weren’t charged. You can return to pricing and subscribe anytime.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href="/pricing"
            className="w-full text-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3"
          >
            Back to pricing
          </a>

          <a
            href="/"
            className="w-full text-center rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold py-3"
          >
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
}

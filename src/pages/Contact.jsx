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

    {/* ✅ Formspree wired form */}
    <form
      action="https://formspree.io/f/xpwnvgvn"
      method="POST"
      className="space-y-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
    >
      {/* Email Field */}
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
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-slate-900 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your objectives, questions, or signal interests..."
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
        />
      </div>

      {/* Submit Button */}
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
        href="mailto:info@signaltrend.ai"
        className="font-semibold text-indigo-600"
      >
        info@signaltrend.ai
      </a>
      .
    </p>
  </div>
</section>

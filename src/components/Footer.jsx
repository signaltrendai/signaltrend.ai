import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} SignalTrendAI. All rights reserved.</div>

        <div className="flex items-center gap-4">
          {/* These scroll to the boxes on the main page */}
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

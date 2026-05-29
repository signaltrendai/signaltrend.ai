import React from "react";

export default function Privacy() {
  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: "#e2e8f0",
        color: "#020617",
        minHeight: "100vh",
      }}
    >
      <SiteHeader />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "3rem 1.25rem 4rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "0.25rem",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "#475569", fontWeight: 500, marginBottom: "1.5rem" }}>
          Last updated:{" "}
          <span style={{ fontWeight: 700 }}>{"{ insert date }"}</span>
        </p>

        <Section title="1. Overview">
          <p>
            This Privacy Policy explains how SignalTrendAI
            (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) collects, uses, and protects information when you
            use our website and Services.
          </p>
          <p>
            By accessing the Services, you consent to the practices described in
            this Privacy Policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following categories of information:</p>
          <ul>
            <li>
              <strong>Account and contact data:</strong> email address, name
              (optional), and communication preferences.
            </li>
            <li>
              <strong>Billing data:</strong> payment-related information
              processed by third-party providers such as Stripe. We do not store
              full payment card numbers on our own servers.
            </li>
            <li>
              <strong>Usage data:</strong> IP address, device identifiers,
              browser type, pages viewed, and interactions with emails and
              signal outputs.
            </li>
            <li>
              <strong>Support data:</strong> information you submit via contact
              forms or support requests.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Information">
          <p>We use collected information to:</p>
          <ul>
            <li>Deliver signal outputs and performance summaries</li>
            <li>Manage subscriptions and process payments</li>
            <li>Respond to questions and support requests</li>
            <li>Monitor system performance and improve our models</li>
            <li>
              Protect against misuse, unauthorized access, or violations of our
              Terms of Service
            </li>
          </ul>
          <p>
            We do <strong>not</strong> sell user data to advertising networks.
          </p>
        </Section>

        <Section title="4. Email Communications">
          <p>
            By subscribing, you consent to receiving emails from SignalTrendAI,
            which may include:
          </p>
          <ul>
            <li>Signal outputs and related analytics</li>
            <li>Account and billing notifications</li>
            <li>System updates and service announcements</li>
          </ul>
          <p>
            You may opt out of non-essential email content at any time by using
            unsubscribe links where available or contacting us directly. Certain
            transactional notices (such as billing or critical system messages)
            are considered essential.
          </p>
        </Section>

        <Section title="5. Cookies and Analytics">
          <p>
            Our website may use minimal cookies or similar technologies to
            support basic analytics and functionality. These may help us
            understand aggregate usage patterns, such as which pages are visited
            most frequently.
          </p>
          <p>
            We may use privacy-friendly analytics platforms that focus on
            aggregated, non-identifying metrics.
          </p>
        </Section>

        <Section title="6. Data Sharing">
          <p>
            We may share limited information with trusted third parties solely
            for the purpose of operating the Services, including:
          </p>
          <ul>
            <li>Payment processors (e.g., Stripe)</li>
            <li>Email delivery providers (e.g., Resend, SendGrid, SES)</li>
            <li>Hosting and infrastructure providers (e.g., Cloudflare)</li>
            <li>Analytics or logging providers for performance monitoring</li>
          </ul>
          <p>
            These third parties are contractually obligated to handle your data
            securely and only for the purposes we specify.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We maintain information for as long as necessary to provide the
            Services, comply with legal obligations, resolve disputes, and
            enforce our agreements.
          </p>
          <p>
            If you request deletion of your account, we will remove or
            anonymize personal data where feasible, subject to retention
            requirements under applicable law.
          </p>
        </Section>

        <Section title="8. Data Security">
          <p>
            We use reasonable technical and organizational measures to protect
            information, including HTTPS encryption, access controls, and
            least-privilege principles.
          </p>
          <p>
            However, no system can be guaranteed to be perfectly secure. You
            acknowledge that transmission of data over the internet carries
            inherent risks.
          </p>
        </Section>

        <Section title="9. Your Rights">
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, export, or delete certain personal information, as well as
            to object to or restrict certain processing activities.
          </p>
          <p>
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:support@signaltrendai.com"
              style={{ color: "#4f46e5", fontWeight: 700 }}
            >
              support@signaltrendai.com
            </a>
            . We may need to verify your identity before processing requests.
          </p>
        </Section>

        <Section title="10. Children&apos;s Privacy">
          <p>
            The Services are intended for adults and are not directed to persons
            under 18 years of age. We do not knowingly collect personal
            information from minors. If you believe a minor has provided
            information to us, please contact us so we can remove it.
          </p>
        </Section>

        <Section title="11. International Data Transfers">
          <p>
            Our infrastructure or third-party providers may be located in
            various regions. By using the Services, you consent to the transfer
            of your information outside your country, where data protection
            rules may differ.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. When we make
            changes, we will update the &quot;Last updated&quot; date at the top
            of this page.
          </p>
          <p>
            Your continued use of the Services after any update constitutes
            acceptance of the revised Policy.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            For questions, privacy requests, or concerns, contact us at:{" "}
            <a
              href="mailto:support@signaltrendai.com"
              style={{ color: "#4f46e5", fontWeight: 700 }}
            >
              support@signaltrendai.com
            </a>
            .
          </p>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* Reuse the same shared layout from Terms */

function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backgroundColor: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #cbd5e1",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0.75rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              height: "36px",
              width: "36px",
              borderRadius: "0.85rem",
              background:
                "linear-gradient(145deg, #1e293b, #6366f1, #38bdf8)",
              boxShadow: "0 8px 18px rgba(15,23,42,0.25)",
              display: "grid",
              placeItems: "center",
              color: "white",
              fontWeight: 800,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
            }}
          >
            ST
          </div>
          <span style={{ fontWeight: 800, fontSize: "1rem" }}>
            SignalTrendAI
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          <a href="/#features" style={navLinkStyle}>
            Features
          </a>
          <a href="/#pricing" style={navLinkStyle}>
            Pricing
          </a>
          <a href="/#faq" style={navLinkStyle}>
            FAQ
          </a>
          <a
            href="/#contact"
            style={{
              padding: "0.45rem 0.9rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg,#6366f1,#38bdf8)",
              color: "white",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.85rem",
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid #cbd5e1",
        padding: "1.25rem",
        backgroundColor: "#ffffff",
        fontSize: "0.85rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          color: "#475569",
          fontWeight: 500,
        }}
      >
        <span>© {new Date().getFullYear()} SignalTrendAI</span>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="/terms" style={footerLinkStyle}>
            Terms of Service
          </a>
          <a href="/privacy" style={footerLinkStyle}>
            Privacy Policy
          </a>
          <a
            href="mailto:support@signaltrendai.com"
            style={{ ...footerLinkStyle, color: "#4f46e5" }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

const navLinkStyle = {
  color: "#020617",
  textDecoration: "none",
};

const footerLinkStyle = {
  textDecoration: "none",
  color: "#475569",
};

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "1.75rem" }}>
      <h2
        style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          marginBottom: "0.4rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "0.5rem",
          fontSize: "0.95rem",
          color: "#111827",
          fontWeight: 500,
        }}
      >
        {children}
      </div>
    </section>
  );
}

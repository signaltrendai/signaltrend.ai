// src/Privacy.jsx
import React from "react";
import Layout from "./components/Layout.jsx";

export default function Privacy() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last updated: <span className="font-semibold">{`{ insert date }`}</span>
        </p>

        <Section title="1. Overview">
          <p>
            This Privacy Policy explains how SignalTrendAI (&quot;Company&quot;,
            &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses,
            and protects information when you use our website and Services.
          </p>
          <p>
            By accessing the Services, you consent to the practices described in
            this Privacy Policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc pl-5">
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
          <ul className="list-disc pl-5">
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
          <ul className="list-disc pl-5">
            <li>Signal outputs and related analytics</li>
            <li>Account and billing notifications</li>
            <li>System updates and service announcements</li>
          </ul>
          <p>
            You may opt out of non-essential email content at any time by using
            unsubscribe links where available or contacting us directly.
            Certain transactional notices are considered essential.
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
          <ul className="list-disc pl-5">
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
              className="font-semibold text-indigo-600"
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
            For questions, privacy requests, or concerns, contact us at{" "}
            <a
              href="mailto:support@signaltrendai.com"
              className="font-semibold text-indigo-600"
            >
              support@signaltrendai.com
            </a>
            .
          </p>
        </Section>
      </main>
    </Layout>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-slate-900 mb-2">{title}</h2>
      <div className="space-y-2 text-[0.95rem] text-slate-800">{children}</div>
    </section>
  );
}

import React, { useEffect, useMemo, useState } from "react";

const API_BASE = "https://signaltrendai-backend.gregoryvhibox.workers.dev";

export default function ThankYouPage() {
  const [sessionInfo, setSessionInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);
  const [error, setError] = useState("");

  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const sessionId = params.get("session_id");

  useEffect(() => {
    async function loadSession() {
      if (!sessionId) {
        setError("Missing checkout session.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${API_BASE}/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`
        );

        const data = await res.json();

        if (!data.ok) {
          setError(data.error || "Unable to load checkout session.");
        } else {
          setSessionInfo(data);
        }
      } catch (err) {
        setError("Unable to load checkout session.");
      }

      setLoading(false);
    }

    loadSession();
  }, [sessionId]);

  function connectDiscord() {
    if (!sessionId) return;

    window.location.href = `${API_BASE}/auth/discord/start?session_id=${encodeURIComponent(
      sessionId
    )}`;
  }

  async function manageSubscription() {
    if (!sessionInfo?.customer_id) {
      alert("Missing customer ID. Please contact support.");
      return;
    }

    setPortalLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/create-portal-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: sessionInfo.customer_id,
        }),
      });

      const data = await res.json();

      if (!data.url) {
        alert("Could not open billing portal.");
        setPortalLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      alert("Billing portal failed.");
      setPortalLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#ffffff",
          borderRadius: "18px",
          padding: "36px",
          textAlign: "center",
          boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>

        <h1 style={{ fontSize: "28px", marginBottom: "12px" }}>
          Payment Successful
        </h1>

        {loading && <p>Loading subscription...</p>}

        {!loading && error && (
          <p style={{ color: "red", marginBottom: "20px" }}>{error}</p>
        )}

        {!loading && !error && (
          <>
            <p style={{ color: "#475569", lineHeight: 1.6 }}>
              Your subscription is active. Connect Discord to receive signals
              and unlock your access role.
            </p>

            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px",
                margin: "22px 0",
                textAlign: "left",
              }}
            >
              <p>
                <strong>Email:</strong> {sessionInfo?.email || "Customer"}
              </p>
              <p>
                <strong>Plan:</strong> {sessionInfo?.plan || "Subscription"}
              </p>
            </div>

            <button
              onClick={connectDiscord}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "999px",
                border: "none",
                background: "#4f46e5",
                color: "#fff",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "12px",
              }}
            >
              Connect Discord
            </button>

            <button
              onClick={manageSubscription}
              disabled={portalLoading}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "999px",
                border: "1px solid #cbd5e1",
                background: "#fff",
                color: "#111827",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              {portalLoading ? "Opening..." : "Manage Subscription"}
            </button>
          </>
        )}

        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "20px" }}>
          You can manage billing, update payment methods, or cancel anytime
          through Stripe.
        </p>
      </div>
    </div>
  );
}
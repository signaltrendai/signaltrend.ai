// src/components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

// helper (NOT exported, and defined only once)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// single default export
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

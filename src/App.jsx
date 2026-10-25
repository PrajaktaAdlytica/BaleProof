import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSiteMotion, scrollPageTo } from "./motion";
import { Header, Footer } from "./components";
import {
  Home,
  ProductPage,
  ProductsPage,
  Pricing,
  Solutions,
  Platform,
  Evaluation,
  RequestForm,
  SignIn,
  NotFound,
} from "./pages";
import {
  WhyChange,
  Company,
  Trust,
  Integrations,
  Resources,
  AuditChecklist,
  MarketContext,
  Legal,
  Accessibility,
  AccessHelp,
} from "./info";
import {
  DemoProvider,
  DemoLanding,
  DemoQueue,
  DemoCase,
  Packet,
  Pilot,
} from "./demo";
export function App() {
  const location = useLocation(),
    root = useRef(null);
  const [motion, setMotion] = useState(
    () => !matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const home = location.pathname === "/";
  useEffect(() => {
    const m = matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (e) => setMotion(!e.matches);
    m.addEventListener("change", listener);
    return () => m.removeEventListener("change", listener);
  }, []);
  useLayoutEffect(() => {
    document.body.className = home ? "theme-home" : "theme-archive";
    window.history.scrollRestoration = "manual";
    scrollPageTo(0, true);
    const title =
      location.pathname === "/"
        ? "Every bale has a story. Show the source."
        : location.pathname
            .split("/")
            .filter(Boolean)
            .at(-1)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (x) => x.toUpperCase());
    document.title = `BaleProof — ${title}`;
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [location.pathname, home]);
  useSiteMotion(root, location.pathname, motion);
  return (
    <DemoProvider>
      <div
        ref={root}
        className={`site-shell ${home ? "home-theme" : "archive-theme"} ${motion ? "motion-enabled" : "motion-disabled"}`}
      >
        <Header />
        <main id="main" tabIndex="-1">
          <Routes key={location.pathname}>
            <Route path="/" element={<Home motion={motion} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/why-change" element={<WhyChange />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/evaluation/:sub" element={<Evaluation />} />
            <Route
              path="/request-evaluation"
              element={<RequestForm key="evaluation" />}
            />
            <Route path="/request-demo" element={<RequestForm key="demo" />} />
            <Route path="/contact" element={<RequestForm key="contact" />} />
            <Route path="/company" element={<Company />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/resources" element={<Resources />} />
            <Route
              path="/resources/example-bale-packet"
              element={<Packet resource />}
            />
            <Route
              path="/resources/mrf-audit-checklist"
              element={<AuditChecklist />}
            />
            <Route
              path="/resources/market-context"
              element={<MarketContext />}
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/access-help" element={<AccessHelp />} />
            <Route path="/legal/privacy" element={<Legal />} />
            <Route path="/legal/terms" element={<Legal />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/demo" element={<DemoLanding />} />
            <Route path="/demo/workbench" element={<DemoQueue />} />
            <Route
              path="/demo/cases/:id"
              element={<DemoCase key={location.pathname} />}
            />
            <Route path="/demo/packets/DEMO-P004" element={<Packet />} />
            <Route path="/demo/pilot" element={<Pilot />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer motion={motion} setMotion={setMotion} />
      </div>
    </DemoProvider>
  );
}

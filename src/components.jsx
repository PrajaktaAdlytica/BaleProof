import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  ArrowLeft,
  CaretDown,
  List,
  X,
  Stack,
  Scan,
  Files,
  ChartLine,
  GridFour,
  Eye,
  Camera,
  WarningCircle,
  CheckCircle,
  LinkSimple,
  UserCircle,
  DownloadSimple,
  Play,
  Pause,
  LinkedinLogo,
  FileText,
  Clock,
  ArrowSquareOut,
  LockSimple,
  Plus,
  Minus,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products, faq, disclaimer } from "./data";
import { lockPageScroll, scrollPageTo } from "./motion";
gsap.registerPlugin(ScrollTrigger);
export const icons = { Stack, Scan, Files, ChartLine, GridFour };
export function Arrow({ up = false, ...props }) {
  return up ? (
    <ArrowUpRight size={20} {...props} />
  ) : (
    <ArrowRight size={20} {...props} />
  );
}
export function Button({
  to,
  children,
  secondary = false,
  text = false,
  className = "",
  ...props
}) {
  const cls = `button ${secondary ? "secondary" : ""} ${text ? "text-button" : ""} ${className}`;
  return to ? (
    <Link className={cls} to={to} {...props}>
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">
        <Arrow />
        <Arrow />
      </span>
    </Link>
  ) : (
    <button className={cls} {...props}>
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">
        <Arrow />
        <Arrow />
      </span>
    </button>
  );
}
export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}
export function Badge({ children = "Demo · simulated data", className = "" }) {
  return <span className={`badge ${className}`}>{children}</span>;
}
export function Logo({ footer = false }) {
  return (
    <Link
      className={`logo ${footer ? "footer-logo" : ""}`}
      to="/"
      aria-label="BaleProof home"
    >
      <img className="brand-lockup" src={`/brand/baleproof-horizontal-${footer ? "ivory" : "burgundy"}.svg`} width="190" height="66" alt="" />
    </Link>
  );
}
export function Image({
  name,
  alt = "",
  className = "",
  eager = false,
  ...props
}) {
  return (
    <img
      src={`/images/${name}`}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      {...props}
    />
  );
}
export function Header() {
  const [open, setOpen] = useState(false),
    [mobile, setMobile] = useState(false);
  const location = useLocation();
  const root = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    setOpen(false);
    setMobile(false);
  }, [location.pathname]);
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobile(false);
        (mobile
          ? root.current?.querySelector(".mobile-toggle")
          : toggle.current
        )?.focus();
      }
    };
    const click = (e) => {
      if (root.current && !root.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", click);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", click);
    };
  }, [mobile]);
  useEffect(() => {
    if (mobile) {
      const old = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      lockPageScroll(true);
      return () => {
        document.body.style.overflow = old;
        lockPageScroll(false);
      };
    }
  }, [mobile]);
  return (
    <header
      className="site-header"
      ref={root}
      onKeyDown={(e) => {
        if (
          mobile &&
          e.key === "Tab" &&
          e.shiftKey &&
          document.activeElement ===
            root.current.querySelector(".mobile-toggle")
        ) {
          e.preventDefault();
          [...root.current.querySelectorAll(".mobile-menu a")].at(-1)?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-inner">
        <Logo />
        <span className="header-status">Concept preview</span>
        <nav className="desktop-nav" aria-label="Main navigation">
          <button
            ref={toggle}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="product-menu"
          >
            Products
            <CaretDown size={12} />
          </button>
          <Link to="/platform">Platform</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/company">Company</Link>
        </nav>
        <div className="header-actions">
          <Link className="sign-link" to="/sign-in">
            Sign in
          </Link>
          <Button to="/request-evaluation">Request evaluation</Button>
        </div>
        <button
          className="mobile-toggle icon-button"
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X size={25} /> : <List size={25} />}
        </button>
      </div>
      {open && (
        <div className="mega-menu" id="product-menu">
          <div className="mega-intro">
            <Eyebrow>The proposed suite</Eyebrow>
            <h3>
              Five offers.
              <br />
              <em>One evidence trail.</em>
            </h3>
            <Link className="inline-link" to="/products">
              Explore all products
              <Arrow />
            </Link>
            <p>
              Separate jobs. Separate quotes.
              <br />
              One human-reviewed foundation.
            </p>
          </div>
          <div className="mega-products">
            {products.map((p) => {
              const Icon = icons[p.icon];
              return (
                <Link to={`/products/${p.id}`} key={p.id}>
                  <Icon size={25} weight="light" />
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.scope}</span>
                  </div>
                  <Arrow />
                </Link>
              );
            })}
          </div>
          <Link className="mega-demo" to="/demo">
            <Image name="packet-v2.webp" alt="Illustrative evidence packet" />
            <span>
              Follow a sample case
              <Arrow />
            </span>
            <Badge />
          </Link>
        </div>
      )}
      {mobile && (
        <nav
          className="mobile-menu"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              const nodes = [
                ...root.current.querySelectorAll(
                  ".mobile-toggle,.mobile-menu a",
                ),
              ];
              if (e.shiftKey && document.activeElement === nodes[0]) {
                e.preventDefault();
                nodes.at(-1).focus();
              } else if (
                !e.shiftKey &&
                document.activeElement === nodes.at(-1)
              ) {
                e.preventDefault();
                nodes[0].focus();
              }
            }
          }}
        >
          <Eyebrow>Explore BaleProof</Eyebrow>
          <Link to="/products">
            All products
            <Arrow />
          </Link>
          {products.map((p) => (
            <Link
              className="mobile-product"
              key={p.id}
              to={`/products/${p.id}`}
            >
              {p.name}
              <span>{p.num}</span>
            </Link>
          ))}
          {[
            "Platform",
            "Solutions",
            "Pricing",
            "Resources",
            "Company",
            "Trust",
            "Contact",
          ].map((x) => (
            <Link key={x} to={`/${x.toLowerCase()}`}>
              {x}
              <Arrow />
            </Link>
          ))}
          <Link to="/sign-in">Sign in</Link>
          <Button to="/request-evaluation">Request evaluation</Button>
        </nav>
      )}
    </header>
  );
}
export function Footer({ motion, setMotion }) {
  const [selectedOffer, setSelectedOffer] = useState(2);
  const offerTabs = useRef([]);
  const { pathname } = useLocation();
  const offer = products[selectedOffer];
  useEffect(() => {
    const current = products.findIndex(
      (product) => pathname === `/products/${product.id}`,
    );
    if (current >= 0) setSelectedOffer(current);
  }, [pathname]);
  function selectWithKey(event, index) {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? products.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + products.length) %
            products.length;
    setSelectedOffer(next);
    offerTabs.current[next]?.focus();
  }
  return (
    <footer
      className="site-footer"
      id="site-footer"
      aria-label="BaleProof footer"
    >
      <section
        className="footer-discovery"
        aria-labelledby="footer-discovery-heading"
      >
        <div className="footer-invitation">
          <Eyebrow>One job. One first step.</Eyebrow>
          <h2 id="footer-discovery-heading">
            Find the right
            <br />
            <em>starting point.</em>
          </h2>
          <p>
            Five distinct offers. Explore the evidence you need, then choose
            where to begin.
          </p>
          <Link className="footer-method-link" to="/evaluation">
            How an evaluation works <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="footer-offer-explorer">
          <div
            className="footer-offer-tabs"
            role="tablist"
            aria-label="Explore a proposed offer"
          >
            {products.map((product, index) => (
              <button
                key={product.id}
                ref={(node) => {
                  offerTabs.current[index] = node;
                }}
                id={`footer-tab-${product.id}`}
                role="tab"
                type="button"
                aria-selected={selectedOffer === index}
                aria-controls="footer-offer-panel"
                aria-label={product.name}
                tabIndex={selectedOffer === index ? 0 : -1}
                onClick={() => setSelectedOffer(index)}
                onKeyDown={(event) => selectWithKey(event, index)}
              >
                <span className="footer-tab-number" aria-hidden="true">
                  {product.num}
                </span>
                <span>
                  <span className="footer-tab-prefix">Material </span>
                  {product.name.replace("Material ", "")}
                </span>
              </button>
            ))}
          </div>
          <div
            className="footer-offer-panel"
            id="footer-offer-panel"
            role="tabpanel"
            aria-labelledby={`footer-tab-${offer.id}`}
          >
            <div className="footer-offer-preview" key={offer.id}>
              <div className="footer-offer-image">
                <Image
                  name={offer.asset}
                  alt={`${offer.scope} — illustrative concept`}
                />
                <span>Illustrative concept</span>
              </div>
              <div className="footer-offer-copy">
                <p className="footer-offer-kicker">
                  {offer.num} / Proposed module
                </p>
                <h3>{offer.name}</h3>
                <p className="footer-offer-output">{offer.output}</p>
                <p className="footer-offer-price">
                  {offer.price} {offer.unit}
                  <span>Pricing test hypothesis</span>
                </p>
                <Link
                  className="footer-offer-link"
                  to={`/products/${offer.id}`}
                >
                  Explore {offer.name}
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </div>
          <p className="footer-explorer-note">
            Separately scoped. Labeling and video costs quoted separately.
          </p>
        </div>
      </section>
      <div className="footer-top">
        <div>
          <Logo footer />
          <p>
            Connect the material.
            <br />
            Keep the source.
          </p>
          <Badge>Research-stage concept</Badge>
        </div>
        <div>
          <h4>Products</h4>
          {products.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`}>
              {p.name}
            </Link>
          ))}
          <Link to="/products">Explore the portfolio</Link>
        </div>
        <div>
          <h4>Explore</h4>
          {[
            ["Platform", "/platform"],
            ["Why change", "/why-change"],
            ["Solutions", "/solutions"],
            ["Pricing hypotheses", "/pricing"],
            ["Synthetic demo", "/demo"],
            ["Evaluation method", "/evaluation"],
          ].map(([s, l]) => (
            <Link key={l} to={l}>
              {s}
            </Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          {[
            ["About BaleProof", "/company"],
            ["Resources", "/resources"],
            ["Data requirements", "/integrations"],
            ["Trust & boundaries", "/trust"],
            ["Contact", "/contact"],
            ["Sign in / access", "/sign-in"],
          ].map(([s, l]) => (
            <Link key={l} to={l}>
              {s}
            </Link>
          ))}
        </div>
        <div>
          <h4>Start a conversation</h4>
          <Link className="footer-cta" to="/request-evaluation">
            Request a paid evaluation
            <ArrowUpRight size={20} />
          </Link>
          <Link to="/request-demo">Request a walkthrough</Link>
          <div className="socials">
            <span title="LinkedIn profile not published">
              <LinkedinLogo size={23} />
              <span>Not published</span>
            </span>
            <span title="Crunchbase profile not published">
              <img src="/images/crunchbase.svg" alt="Crunchbase" />
              <span>Not published</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="footer-signature"
        onPointerMove={(event) => {
          if (!motion || event.pointerType !== "mouse") return;
          const bounds = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty(
            "--spot-x",
            `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
          );
          event.currentTarget.style.setProperty(
            "--spot-y",
            `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
          );
        }}
        onPointerLeave={(event) => {
          event.currentTarget.style.removeProperty("--spot-x");
          event.currentTarget.style.removeProperty("--spot-y");
        }}
      >
        <div className="footer-signature-meta">
          <span>From material to evidence.</span>
          <span>Human review, at every step.</span>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          BaleProof
        </div>
        <button
          className="footer-back-top"
          type="button"
          onClick={() => {
            scrollPageTo(0, !motion);
            document.getElementById("main")?.focus({ preventScroll: true });
          }}
        >
          <span>Back to top</span>
          <span className="footer-top-icon">
            <ArrowUp size={23} aria-hidden="true" />
          </span>
        </button>
      </div>
      <p className="footer-disclaimer">{disclaimer}</p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BaleProof · Concept preview</span>
        <div>
          <Link to="/legal/privacy">Privacy</Link>
          <Link to="/legal/terms">Terms</Link>
          <Link to="/accessibility">Accessibility</Link>
          <button className="motion-control" onClick={() => setMotion(!motion)}>
            {motion ? <Pause size={13} /> : <Play size={13} />}Motion{" "}
            {motion ? "on" : "off"}
          </button>
        </div>
      </div>
    </footer>
  );
}
export function SectionHeading({ eyebrow, title, copy, children }) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
      {children}
    </div>
  );
}
export function Breadcrumb({ label, parent }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span>/</span>
      {parent && (
        <>
          <Link to={parent[1]}>{parent[0]}</Link>
          <span>/</span>
        </>
      )}
      <span>{label}</span>
    </div>
  );
}
export function InnerHero({
  eyebrow,
  title,
  copy,
  image = "archive-bale.webp",
  label,
  cta = "Explore the synthetic demo",
  to = "/demo",
  parent,
  children,
}) {
  return (
    <section className="inner-hero wrap">
      <Breadcrumb label={label || eyebrow} parent={parent} />
      <div className="inner-hero-grid">
        <div data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p className="lead">{copy}</p>
          {children || <Button to={to}>{cta}</Button>}
          <p className="tiny hero-note">
            Proposed capabilities · Concept preview
          </p>
        </div>
        <div
          className={`inner-hero-visual ${image.includes("packet") ? "packet-visual" : ""}`}
        >
          <Image
            name={image}
            alt="Original illustrative materials-recovery scene"
            eager
          />
          <span className="image-caption">
            Illustrative concept / no production connection
          </span>
        </div>
      </div>
    </section>
  );
}
export function FinalCTA({
  title = (
    <>
      Start with one line.
      <br />
      <em>Agree what proof should look like.</em>
    </>
  ),
  copy = "A permissioned, human-reviewed paid evaluation.",
  to = "/request-evaluation",
  label = "Request a paid evaluation",
}) {
  return (
    <section className="final-cta">
      <div className="wrap final-cta-inner" data-reveal>
        <div>
          <Eyebrow>From material to evidence</Eyebrow>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Button to={to}>{label}</Button>
      </div>
    </section>
  );
}
export function Faq({
  items = faq,
  title = (
    <>
      Clarity is part of
      <br />
      <em>the process.</em>
    </>
  ),
}) {
  return (
    <section className="wrap section faq-section">
      <div data-reveal>
        <Eyebrow>Your questions</Eyebrow>
        <h2>{title}</h2>
        <Link className="inline-link" to="/contact">
          Talk through your context
          <Arrow />
        </Link>
      </div>
      <div>
        {items.map(([q, a], i) => (
          <details key={i} className="faq-item">
            <summary>
              {q}
              <Plus className="faq-plus" size={20} />
              <Minus className="faq-minus" size={20} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Coverage({ compact = false }) {
  const [mode, setMode] = useState(0);
  return (
    <div className={`coverage-display ${compact ? "compact" : ""}`}>
      <div className="coverage-image">
        <Image
          name="coverage-map.webp"
          eager
          alt="Illustrative passive camera coverage above a conveyor, with a hatched blind spot on the right"
        />
        <div className="coverage-tag">
          {mode === 0
            ? "Coverage gap"
            : mode === 1
              ? "Below review threshold"
              : "Human review required"}
          <WarningCircle size={16} />
        </div>
      </div>
      <div
        className="coverage-controls"
        role="group"
        aria-label="Inspect the evidence boundary"
      >
        {["Coverage", "Confidence", "Human review"].map((s, i) => (
          <button
            className={mode === i ? "active" : ""}
            key={s}
            onClick={() => setMode(i)}
          >
            <span>0{i + 1}</span>
            {s}
          </button>
        ))}
      </div>
      <p className="coverage-caption" aria-live="polite">
        {
          [
            "The far edge is not observed. A coverage gap cannot support a material conclusion.",
            "Illustrative score 0.73 is below the 0.85 review threshold. These are simulated, uncalibrated values.",
            "A named reviewer checks the source, alternative explanations and bale association. No equipment control.",
          ][mode]
        }
      </p>
    </div>
  );
}
export function ProductVisual({ product, large = false }) {
  if (product.id === "material-report")
    return (
      <div
        className={`program-matrix ${large ? "large" : ""}`}
        aria-label="Synthetic source-program sample availability"
      >
        <div className="matrix-caption">
          Sample availability
          <Badge />
        </div>
        <table>
          <thead>
            <tr>
              <th>Program</th>
              <th>A</th>
              <th>B</th>
              <th>C</th>
            </tr>
          </thead>
          <tbody>
            {["DEMO North", "DEMO East", "DEMO West"].map((x, i) => (
              <tr key={x}>
                <th>{x}</th>
                {[0, 1, 2].map((j) => (
                  <td key={j}>
                    {(i + j) % 3 === 0 ? (
                      <span className="matrix-gap">Gap</span>
                    ) : (
                      <CheckCircle
                        size={19}
                        weight="light"
                        aria-label="Sample present"
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  if (product.id === "material-signal" && !large)
    return (
      <div className="scenario-preview">
        <Eyebrow>Illustrative scenario</Eyebrow>
        {[
          ["Baseline", 62],
          ["Line-change case", 78],
        ].map(([s, n]) => (
          <div key={s}>
            <span>{s}</span>
            <meter
              min="0"
              max="100"
              value={n}
              aria-label={`${s}, synthetic illustration`}
            />
          </div>
        ))}
        <small>Assumptions for discussion, not forecasts.</small>
      </div>
    );
  return (
    <Image
      name={product.asset}
      alt={`${product.scope}, illustrative concept`}
      className={`product-image ${product.id === "material-proof" ? "paper-image" : ""}`}
    />
  );
}
export function ProductsRail({ motion = true }) {
  const root = useRef(null),
    track = useRef(null),
    viewport = useRef(null),
    trigger = useRef(null);
  const [index, setIndex] = useState(0);
  useLayoutEffect(() => {
    if (!motion) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width:1100px) and (min-height:900px)", () => {
      const distance = () =>
        Math.max(0, track.current.scrollWidth - viewport.current.clientWidth);
      const tween = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 96px",
          end: () => `+=${distance() * 1.15}`,
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (self) =>
            setIndex(Math.min(4, Math.floor(self.progress * 5))),
        },
      });
      trigger.current = tween.scrollTrigger;
      return () => {
        trigger.current = null;
      };
    });
    return () => mm.revert();
  }, [motion]);
  function go(n) {
    const next = Math.max(0, Math.min(4, n));
    if (trigger.current) {
      const t = trigger.current;
      scrollPageTo(t.start + ((t.end - t.start) * next) / 4, !motion);
    } else
      viewport.current?.scrollTo({
        left: next * (track.current.children[0].offsetWidth + 32),
        behavior: motion ? "smooth" : "instant",
      });
    setIndex(next);
  }
  return (
    <section className="products-story" id="products" ref={root}>
      <div className="wrap">
        <SectionHeading
          eyebrow="The proposed suite"
          title={
            <>
              Five offers.
              <br className="mobile-only" /> One evidence trail.
            </>
          }
        >
          <div className="rail-controls">
            <button
              className="icon-button"
              aria-label="Previous product"
              onClick={() => go(index - 1)}
            >
              <ArrowLeft size={21} />
            </button>
            <button
              className="icon-button"
              aria-label="Next product"
              onClick={() => go(index + 1)}
            >
              <ArrowRight size={21} />
            </button>
            <span>0{index + 1} / 05</span>
          </div>
        </SectionHeading>
        <div className="product-jumps">
          {products.map((p, i) => (
            <button
              key={p.id}
              className={index === i ? "active" : ""}
              onClick={() => go(i)}
            >
              {p.name}
            </button>
          ))}
          <a href="#after-products">
            Skip product sequence
            <ArrowRight size={13} />
          </a>
        </div>
        <div className="rail-viewport" ref={viewport}>
          <div className="products-track" ref={track}>
            {products.map((p) => (
              <article className="product-panel" key={p.id}>
                <Link
                  to={`/products/${p.id}`}
                  onFocus={() => go(products.indexOf(p))}
                >
                  <div className="product-panel-art">
                    <ProductVisual product={p} />
                  </div>
                  <div className="panel-number">
                    <span>{p.num} / Proposed module</span>
                    <ArrowUpRight size={22} />
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.scope}</p>
                  <span className="product-price">
                    {p.price}
                    <span>{p.unit}</span>
                  </span>
                  <small>Pricing test hypothesis</small>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <p className="tiny rail-note">
          Five independently quotable offers. Labeling and video costs
          separately scoped. No active checkout.
        </p>
      </div>
    </section>
  );
}
export function Steps({ items, className = "" }) {
  return (
    <div className={`steps ${className}`}>
      {items.map((v, i) => {
        const [title, desc] = Array.isArray(v) ? v : [v, null];
        return (
          <article key={i} data-reveal>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            {desc && <p>{desc}</p>}
          </article>
        );
      })}
    </div>
  );
}
export function PriceTable() {
  return (
    <div className="price-table">
      {products.map((p) => (
        <Link key={p.id} to={`/request-evaluation?offer=${p.id}`}>
          <span className="price-number">{p.num}</span>
          <div>
            <h3>{p.name}</h3>
            <p>{p.scope}</p>
          </div>
          <div className="price">
            <strong>{p.price}</strong>
            <span>{p.unit}</span>
          </div>
          <ArrowUpRight size={24} />
        </Link>
      ))}
      <p className="tiny">
        All prices are test hypotheses, not verified market rates or active
        offers. Labeling/video costs are separately quoted. Scope and
        procurement appetite must be tested.
      </p>
    </div>
  );
}
export {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  CaretDown,
  Eye,
  Camera,
  WarningCircle,
  CheckCircle,
  LinkSimple,
  UserCircle,
  DownloadSimple,
  FileText,
  Clock,
  ArrowSquareOut,
  LockSimple,
  X,
  Scan,
  Files,
  Stack,
  ChartLine,
  GridFour,
};

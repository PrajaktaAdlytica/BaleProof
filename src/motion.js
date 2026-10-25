import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, SplitText);
let smoothScroll;
let locked = false;

export function lockPageScroll(value) {
  locked = value;
  if (value) smoothScroll?.stop();
  else smoothScroll?.start();
}
export function scrollPageTo(top, immediate = false) {
  if (smoothScroll) smoothScroll.scrollTo(top, { immediate, duration: 1.15, force: immediate });
  else window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
}

/** One window scroller, one ticker, and route-scoped, reversible animation. */
export function useSiteMotion(root, pathname, enabled) {
  useLayoutEffect(() => {
    if (!enabled || !root.current) return;
    const scope = root.current;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      prevent: (node) =>
        Boolean(
          node.closest?.(
            "[data-lenis-prevent], .mobile-menu, dialog, textarea, .queue-table, .table-scroll",
          ),
        ),
    });
    smoothScroll = lenis;
    if (locked) lenis.stop();
    const tick = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const splits = [];
    const tagged = [];
    const headingLabels = [];
    const select = (selector) => [...scope.querySelectorAll(selector)];
    const tag = (el, kind) => {
      el.dataset.motion = kind;
      tagged.push(el);
    };
    const ctx = gsap.context(() => {
      // Text remains semantic and screen readers receive the unsplit heading.
      // Dynamic workbench source panes and feedback are deliberately left intact.
      select("main h1, main h2, .footer-top h4")
        .filter(
          (el) =>
            !el.closest(
              ".source-pane, .review-panel, .packet-document, .form-complete, .evidence-intro",
            ),
        )
        .forEach((heading, i) => {
          const label = heading.getAttribute("aria-label");
          const spoken = heading.innerText.replace(/\s+/g, " ").trim();
          headingLabels.push([heading, label]);
          const split = SplitText.create(heading, {
            type: "words",
            wordsClass: "motion-word",
            tag: "span",
            aria: "auto",
          });
          heading.setAttribute("aria-label", spoken);
          splits.push(split);
          tag(heading, "words");
          const sideways = i % 3 === 1;
          gsap.fromTo(
            split.words,
            {
              yPercent: sideways ? 25 : 105,
              x: sideways ? (i % 2 ? -32 : 32) : 0,
              rotation: sideways ? 0 : 3,
              opacity: 0,
            },
            {
              yPercent: 0,
              x: 0,
              rotation: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.055,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 94%",
                endTrigger: heading.closest(".products-story")
                  ? "#after-products"
                  : heading,
                end: heading.closest(".products-story")
                  ? "top top"
                  : "bottom 0%",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        });

      // Each editorial chapter gets its own silhouette. The full/hold/close
      // timeline makes the mask respond in both directions, not only on entry.
      const media = select(
        ".inner-hero-visual > img, .macro-sample, .coverage-image > img, .packet-image-link > img, .product-detail-visual > .product-image, .product-index-art > *, .signin-art > img, .request-intro > img, .resource-card img",
      );
      const masks = [
        "circle(0% at 50% 50%)",
        "ellipse(0% 0% at 50% 100%)",
        "inset(0% 100% 0% 0%)",
        "ellipse(0% 0% at 50% 0%)",
        "inset(100% 0% 0% 0%)",
      ];
      media.forEach((el, i) => {
        const shape = el.closest(".packet-image-link")
          ? 1
          : el.closest(".coverage-image")
            ? 2
            : i % masks.length;
        const full =
          shape === 0
            ? "circle(150% at 50% 50%)"
            : shape === 1
              ? "ellipse(150% 150% at 50% 100%)"
              : shape === 3
                ? "ellipse(150% 150% at 50% 0%)"
                : "inset(0% 0% 0% 0%)";
        tag(
          el,
          ["circle", "arch-up", "wipe-right", "arch-down", "wipe-up"][shape],
        );
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 98%",
              end: "bottom -35%",
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(
            el,
            { clipPath: masks[shape] },
            { clipPath: full, duration: 2.2, ease: "power2.inOut" },
          )
          .to(el, { clipPath: full, duration: 2.2 })
          .to(el, { clipPath: masks[shape], duration: 0.7, ease: "power2.in" });
      });

      // Alternating directional entrances for the content around each artifact.
      // Do not move whole pinned sections, input controls, tables or live labels.
      const blocks = select(
        ".price-table > a > div, .roles-grid > a > p, .solution-row > p, .scorecard-table > div, .section-heading > p, .inner-hero-grid > div > .lead, .reading-section > section > p, .product-index-row > div > p, .coverage-copy > p, .score-pair, .evidence-copy > p, .platform-flow > div, .workbench-teaser, .roles-grid > a, .scorecard-sheet, .steps > *, .feature-rows > *, .input-register > *, .company-principles > *, .gate-columns > *, .resource-card, .solution-row, .input-output > *, .module-summary-row, .product-commercial, .demo-intro-grid > *, .pilot-grid > *, .audit-checklist > *, .reading-section > p, .final-cta-inner > .button, .trust-strip .button",
      );
      blocks
        .filter(
          (el) =>
            !el.matches("a, button") &&
            !el.querySelector(
              "h1, h2, a, button, summary, input, textarea, select",
            ) &&
            !el.closest(".packet-document"),
        )
        .forEach((el, i) => {
          tag(el, ["left", "right", "up", "down"][i % 4]);
          const mobile = window.innerWidth < 700;
          const distance = mobile ? 38 : 100;
          const from = [
            { x: -distance, y: 0 },
            { x: distance, y: 0 },
            { x: 0, y: 65 },
            { x: 0, y: -55 },
          ][i % 4];
          gsap.fromTo(
            el,
            { ...from, opacity: 0 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "bottom -8%",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        });

      // Artifact details drift independently of copy, without obscuring labels.
      select(".hero-source").forEach((el, i) => {
        gsap.fromTo(
          el,
          { x: i % 2 ? -45 : 45, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 + i * 0.15,
            scrollTrigger: {
              trigger: ".home-hero",
              start: "top 95%",
              end: "bottom 0%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });
      const hero = scope.querySelector(".hero-background");
      if (hero)
        gsap.fromTo(
          hero,
          { scale: 1.035, yPercent: 0 },
          {
            scale: 1.12,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: ".home-hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      // A staggered vertical cadence beneath the independent horizontal rail.
      select(".product-panel-art").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 55 + i * 8, opacity: 0.15 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.09,
            scrollTrigger: {
              trigger: ".products-story",
              start: "top 80%",
              end: "bottom -10%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });
    }, scope);
    let disposed = false;
    const refresh = () => {
      if (!disposed) {
        lenis.resize();
        ScrollTrigger.refresh();
      }
    };
    document.fonts.ready.then(refresh);
    const images = select("main img");
    images.forEach((img) => img.addEventListener("load", refresh));
    const timer = setTimeout(refresh, 250);
    return () => {
      disposed = true;
      clearTimeout(timer);
      images.forEach((img) => img.removeEventListener("load", refresh));
      ctx.revert();
      splits.forEach((split) => split.revert());
      headingLabels.forEach(([heading, label]) => {
        if (label === null) heading.removeAttribute("aria-label");
        else heading.setAttribute("aria-label", label);
      });
      tagged.forEach((el) => delete el.dataset.motion);
      gsap.ticker.remove(tick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      if (smoothScroll === lenis) smoothScroll = undefined;
    };
  }, [root, pathname, enabled]);
}

# BaleProof

A complete local concept website and isolated synthetic review demo. The homepage uses the approved option 1 + 3 direction. Every separate page uses option 1 / Material Archive: ivory, rust, editorial typography and tactile material imagery.

## Preview

The local preview is served at **http://localhost:4173/**. No public deployment or custom domain is configured.

For a fresh checkout, use `npm install`, then `npm run dev -- --host 0.0.0.0 --port 4173`. `npm run build` produces the browser app in `dist/client` and preserves the starter's Sites-compatible hosting output. `npm run test:sites` verifies the hosting adapter. `vercel.json` supplies the static build and client-route fallback for a later authorized deployment.

## Included

- Homepage with original bale imagery, interactive coverage explanation, burgundy packet chapter, desktop scroll-driven horizontal product sequence, and vertical section reveals.
- Five distinct product pages; portfolio, platform, problem, three buyer solutions, hypothesis pricing, evaluation methodology and protocol.
- Company, trust, data requirements, resources, example packet, interactive audit checklist, market context and cited sources.
- Evaluation, walkthrough and contact forms; sign-in presentation, access help, draft legal notices, accessibility page and branded 404.
- Ten deterministic fictional cases, queue filters/search/sort, coverage-first source panes, keyboard-operable evidence tabs, required reviewer rationale, local decisions, JSON export, print/PDF layout and reset.
- Logo, favicon, locally served fonts, original illustrative imagery, Phosphor icons and responsive layouts. All imagery is illustrative; no proprietary competitor assets are used.

## Boundaries

This is a research-stage website and frontend simulation, not an operating SaaS. All names, source records and organizations in the demo are fictional. Product scopes and prices are test hypotheses. No security certification, customer, revenue, ROI, integration or robotic actuation is represented.

Forms validate locally but do not transmit or retain entries. Sign-in does not authenticate. Demo review state exists only in React memory and resets on reload or explicit reset. Exports retain synthetic-data labels and limitations. No analytics service, booking service, CRM, external messaging or operational upload is connected. No payment collection exists.

For a real pilot: signed evaluation/SOW and footage/bale-data permissions, named operating/data owners, agreed comparator and adequate sample coverage are prerequisites. Procurement, legal, security and physical-control decisions belong to the responsible humans.

## Source map

- `src/data.js`: exact five offers, prices, FAQs, roles, sources, scorecard and seed records.
- `src/components.jsx`: shared brand, navigation, footer, coverage and product sequence.
- `src/pages.jsx`: public commercial/product pages and preview forms.
- `src/info.jsx`: company, trust, resources and draft legal pages.
- `src/demo.jsx`: isolated demo state, queue, records, packet and pilot example.
- `src/styles.css`: typography, two page themes, breakpoints, motion and print styling.
- `src/motion.js`: route-scoped Lenis, GSAP ScrollTrigger, word reveals and reversible image masks.
- `src/hover.css`: shared shutters/folds, rolling CTA arrows, link rules, footer markers, card details and control feedback.
- `public/images`: optimized runtime assets. `assets/source`: full-resolution originals and prior packet illustration for provenance.
- `docs/BaleProof-Website-Blueprint.md`: complete IA, copy, evidence data dictionary, sample packet, pilot scorecard, analytics event plan, ad variants and launch requirements. Internal execution details stay in this handoff rather than becoming buyer-facing copy.
- `design-qa.md` and `qa/`: comparison record, real browser captures and route audits.

## Asset and library provenance

Original project illustrations and the logo were generated for BaleProof. Generated packet v2 corrects the packet mark to the shared company logo. The final browser UI is actual React/HTML, not an image of an interface. Production rights/name/domain clearance remain separate work.

Newsreader, Manrope and IBM Plex Mono are served from Fontsource packages (licenses included in their npm packages). Interface icons use `@phosphor-icons/react`; the requested Crunchbase mark comes from `simple-icons` and is explicitly marked not published. Social profiles are not invented or linked to unrelated organizations. Lenis drives smooth window scrolling through the GSAP ticker, synchronized with ScrollTrigger. GSAP SplitText reveals headings word by word; directional content entrances replay on entering from either direction. Circular, semicircular and directional image masks are scrubbed against scroll position, with a full-visibility interval for reading. The desktop product sequence and its jump controls use the same scroller. Each route cleans up its animations, split text, image listeners and Lenis instance. Motion can be switched off and respects the operating system's reduced-motion preference. Interactive hit areas, input controls and live provenance labels stay stable. Mobile menus suspend scrolling; touch retains native scrolling. The implementation follows the [official Lenis GSAP integration](https://github.com/darkroomengineering/lenis#gsap-scrolltrigger).

Desktop rail pinning is enabled only at widths ≥1100px and heights ≥900px. Shorter/tablet layouts use native horizontal scrolling and explicit controls; mobile stacks all five offers. Keyboard focus scrolls the chosen product into view. Primary evidence labels, confidence thresholds and source timestamps remain accessible on mobile.

## Future connections

Before publication, supply the approved domain, actual contact/delivery service, final legal notices, consent/retention policy and confirmed company profiles. Connect analytics only with the event/consent rules in the blueprint; do not report preview form tests as leads or meetings. Real authentication, integrations and storage are separate projects.

## Hover interaction system

Primary CTAs use opposed shutters; outlined CTAs fold in two paper panels. Shared button arrows roll diagonally inside a fixed slot with decorative duplicates hidden from assistive technology. Navigation, body and footer links receive animated rules; footer links reveal direction markers. Product/resource images zoom slightly and reveal a corner marker. Pricing rows use a paper wash, circular controls use a radial fill, and tabs/queue rows/accordions/fields have restrained state feedback. All hit areas stay fixed. Keyboard focus uses the same engagement state; pointer effects are gated for fine-pointer hover, and reduced-motion/off modes remove transition duration. Noninteractive unpublished social-profile labels retain their honest state.

Pattern research: [Codrops Creative Link Effects](https://tympanus.net/codrops/2013/08/06/creative-link-effects/) and [MDN Styling Links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Styling_links). The site uses original CSS implementations in its existing brand palette.

## Interactive footer

The shared footer includes a five-offer explorer with source-specific artwork, deliverables, exact hypothesis prices and product links. Its tabs support click/tap, arrow keys, Home/End and a single keyboard tab stop. Product pages select their matching offer. All original sitemap, contact, social-status, privacy, legal and motion controls remain available. A large decorative BaleProof wordmark responds to pointer position with a muted highlight; motion-off/reduced-motion modes keep it static. Back to top uses the existing Lenis scroller and returns keyboard focus to main content.

`src/footer.css` contains the responsive footer layout. Pattern research used Awwwards' [creative footer collection](https://www.awwwards.com/15-excellent-creative-website-footers.html) and [footer design examples](https://www.awwwards.com/awwwards/collections/website-footer-design-best-practices/): strong closing identity, comprehensive navigation and a useful next action. This implementation uses BaleProof's own identity and assets; it does not copy a reference footer.

## Evidence Landscape intro

Option 3 is implemented above the homepage hero as an eight-second silent Remotion Player composition. `src/IntroScene.jsx` owns frame-based imagery; `src/Intro.jsx` owns accessible HTML copy, playback controls and continuation. `src/IntroPlayer.jsx` lazy-loads playback and pauses when the section is less than 40% visible or the tab is hidden. The shared Motion off setting and operating-system reduced-motion preference use the static landscape poster without mounting the player.

Run `npm run video:studio` to edit the `EvidenceLandscape` composition in Remotion Studio. Runtime art is `public/images/intro-landscape.webp`; the original is retained in `assets/source`. No MP4 export has been created. The current implementation uses a still-art camera move and a dissolve, rather than simulated equipment movement.

### Intro refinement
The opening now uses a clean artwork plate (`intro-landscape-clean.webp`) and an animated SVG thread with source/review/bale nodes. Titles reveal word by word from the same playback frame. The player covers the full viewport without letterboxing; mobile follows the evidence with horizontal framing. The navbar is hidden and inert during playback and fades in when the film ends or the visitor continues down the page. Completion automatically scrolls to the hero and focuses its heading. No zoom animation remains. Static motion-off retains the original illustrated thread and does not auto-advance.

### Latest intro revision: calm editorial sequence
Supersedes the thread animation above: 12 seconds at 60 fps, no thread, a soft light sweep and three source/review/context captions. `frameupdate` replaces the coarse `timeupdate` event for smooth text/pan updates. The intro is fixed over the real hero and dissolves over 1.8 seconds; completion never scrolls. The hero remains at its original document position, and hidden content is inert until the overlay exits. Skip uses the same dissolve; reduced motion exits immediately. Timing constants live in `src/intro-timing.js`.

## Hostinger deployment

Use regular **Custom PHP/HTML hosting**: this site is static after compilation and consumes no Node.js app slot. Connect Hostinger to the **`hostinger` branch**, with `public_html` as the web root. GitHub Actions builds that branch from `main`; it does not access your Hostinger account. Full instructions: [Hostinger setup](docs/HOSTINGER.md).

For manual upload, run `npm ci` then `npm run package:hostinger`. Extract `artifacts/BaleProof-Hostinger.zip` directly into `public_html`, including `.htaccess` for React Router deep links. A hosting plan with an available regular website allowance is still required.

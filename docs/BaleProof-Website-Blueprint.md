# BaleProof
## Website architecture, content & motion blueprint

**Concept 35 · Materials Recovery Agent · Specification v1 · 25 October 2026**

**Design ambition:** a premium industrial SaaS presence with the craft, depth and polish expected of a high-value business. The user's $100,000 ambition is a quality and commercial aspiration, not a verified valuation, product price or sales claim.

**Current status:** research-stage concept. This document specifies a future website and isolated product demo. No website, production product, deployment, customer pipeline, paid demand or integrations are represented as completed.

## 01 — Decisions and source hierarchy

1. **Company name: BaleProof.** This explicit instruction replaces Scrap Waypoint throughout customer-facing copy. The five Material product names retain their responsibilities under the BaleProof brand. These are proposed module names; trademark, company and domain ownership remain unverified.
2. **The master guide governs architecture and quality.** Although the uploaded guide itself says the startup brief comes first, the user's latest instruction explicitly asks that the brief not override the guide. Accordingly, plan a complete multipage company experience, including five product pages, rather than restricting the future website to a single landing page.
3. **Preserve the brief's substantive content.** Keep every offer, price hypothesis, buyer role, operational constraint, validation requirement, demo rule and handoff requirement. Where the original brief repeats an instruction, preserve its substance once and map it in the coverage register.
4. **Scope now: IA and specification.** The user's immediate request is to create the IA and web structure. Implementation, publishing, account creation, Notion edits, outreach, payment collection and production-data access are outside this deliverable. Future website requirements are specified, not claimed complete.
5. **Public story and internal planning have different homes.** All brief content is accounted for. Buyer-relevant content belongs on the website; internal ad budgets, acquisition tracking, demand-count rules and Notion field definitions belong in the implementation appendix, with public methodology summaries where useful. They must not disappear from the handoff.
6. **A polished concept is still a concept.** Use persistent, readable disclosures without turning every heading into a warning. No fabricated customers, certifications, customer quotes, results, funding or live telemetry.

**Naming migration:** Scrap Waypoint Material Desk → BaleProof Material Desk; Material Review → BaleProof Material Review; Material Proof → BaleProof Material Proof; Material Signal → BaleProof Material Signal; Material Report → BaleProof Material Report.

**Legacy metadata retained for traceability:** Concept #35; Materials Recovery Agent; source employee-handoff category D; prior proposed brand Scrap Waypoint and domain scrapwaypoint.com. The brief's historical RDAP 404 is an unverified, time-specific source statement; it does not establish present availability or confer rights. Do not reuse that domain or invent baleproof.com ownership. The referenced `screenshots/35-website-preview.png` was not supplied as a separate accessible file and must not be described as inspected.

## 02 — Positioning and brand foundation

### Positioning

**Category:** proposed materials-recovery quality evidence software, within energy, industry and resilience.

**Primary buyer:** materials-recovery-facility operations manager, with the commodity-sales lead. The day-to-day operator and data/integration owner are essential participants. Procurement and legal permission precede real-record access.

**Job:** connect a suspected contamination event to source evidence, a bale QC sample and a shipment note so a human reviewer can explain what is known, missing and unresolved.

**Vision:** operators and commodity sales share an auditable evidence trail from stream sample to bale shipment.

**Mission:** help MRF operations and commodity-sales teams move from fragmented evidence to a defensible, human-approved decision, with provenance and explicit uncertainty.

**Potential differentiation, to test:** the traceable, manually reviewed buyer packet that connects observations to bale outcomes. Do not claim that camera interpretation alone proves bale quality or that BaleProof is superior to incumbent analytics.

### Recommended territory: The Material Archive

An industrial editorial identity: warm mineral-white space, ink typography, rust-orange details, silver-grey metal, paper fibers, compressed recyclable textures and precise evidence annotations. The hero object is an original cross-section of a material bale with an evidence sleeve, not the reference site's ledger or floating pastel cards.

**Brand traits:** exact, tactile, composed, accountable, industrial.

**Three distinct directions considered:**

| Direction | Main composition | Signature visual | Motion | Recommendation |
|---|---|---|---|---|
| The Material Archive | Spacious editorial chapters, specimen-like objects | Bale cross-section becoming an evidence packet | Layers separate, evidence links resolve, a packet assembles | Recommended: fits the desired premium reference while remaining original |
| The Recovery Atlas | Panoramic line diagrams and large numbered annotations | A single-line optical coverage plan | Camera field masks, path tracing, layered coverage | Useful technical alternative; more engineering-led |
| The Quality Studio | Photography-led journal with oversized captions | Material studies paired with reviewer notes | Image crops reveal annotations and alternate explanations | Useful art-led alternative; lighter on architectural storytelling |

The remainder specifies The Material Archive as a proposed direction, not a user-approved final identity.

### Logo, favicon and visual assets to design before high fidelity

- **Mark concept:** a compact rectangular bale built from three offset material bands, enclosed on two corners by evidence brackets. Negative space may suggest a B; avoid checkmark seals, certification shields and recycling-arrow clichés.
- **Wordmark:** BaleProof in a custom-spaced, restrained sans serif. Use a single consistent casing.
- **Versions:** horizontal, compact mark, monochrome, reverse and small-size optical variant. Proposed clear space: one band-height around the mark; test small mark at 16/24/32 px and wordmark at 120 px before setting final minima.
- **Favicon:** actual mark, simplified for 16/32 px; deliver SVG, ICO, 180 px Apple touch icon and app icon sizes if required. Never retain a template favicon.
- **Asset kit:** bale specimen, conveyor/camera diagram, material classification strip, uncertainty trend, packet spread, scenario bands, municipal sample matrix and evaluation scorecard. No third-party product screenshots or proprietary facility imagery.
- **Imagery:** original illustrations or properly licensed generic materials imagery. Generated industrial imagery is atmosphere only, never evidence of an operating installation. Keep product screenshots as real captures of the eventual built demo.

### Proposed tokens

| Role | Value / usage |
|---|---|
| Canvas | `#F5F2EB` warm mineral white |
| Paper surface | `#FFFEFA` evidence documents and forms |
| Primary ink | `#252B28` headings, body and dark chapters |
| Secondary text | `#58615B` supporting copy; verify contrast in implementation |
| Primary accent | `#A33F23` kiln rust; primary CTA and active evidence path |
| Soft accent | `#EBD7CA` chapter background, never relied on for status |
| Technical field | `#E5EAE6` coverage-map background |
| Border | `#C7CCC5` structural dividers |
| Review / warning | `#805619`, with icon and explicit label |
| Blocked / rejected | `#A1302B`, with text reason |
| Completed | `#35604A`, with text; does not mean certified quality |
| Focus | High-contrast ink/rust outline with offset, tested on each surface |

**Typography proposal:** Newsreader for editorial headings, Manrope for UI/body/navigation, IBM Plex Mono for identifiers, timestamps and data labels. Keep font license notices; verify actual font files and weights before use. The final identity must not reproduce the reference's exact type pairing or italic-heading pattern.

- Desktop H1: 76–96 px, approximately 0.98–1.05 line-height; mobile 42–50 px. Do not force long words into clipped lines.
- H2: 48–64 px desktop / 32–38 px mobile. Body: 18–20 px marketing / 16 px UI. Evidence labels: at least 12–14 px, with accessible full text.
- Data tables use tabular numerals. Long copy is 60–72 characters wide. Labels use sentence case; monospace is reserved for metadata.
- Use consistent 1.5–2 px outline icons with filled states only when meaningful. LinkedIn and Crunchbase icons belong in the footer, inactive and clearly labeled until verified profile URLs exist.

## 03 — Reference reading and original adaptation

**Inspected:** both supplied screenshots and 20 sampled frames across the 67.07-second recording. The following describes visible composition and sequencing; frame samples do not establish the reference's exact animation implementation or easing.

| Recording position | Visible reference quality | BaleProof adaptation |
|---|---|---|
| 00:00–00:04 | Spacious opening followed by an oversized editorial hero and tactile object | Immediate buyer-specific hero with a material specimen; no mandatory intro gate |
| Around 00:07 | Background and object composition change for the problem chapter | Disconnected sampling, QC and shipment artifacts on a mineral work surface |
| Around 00:11 | Product workspace visual beside explanatory copy | Evidence review workbench with a real source pane and labeled uncertainties |
| Around 00:14–00:18 | Wide supplier-card composition over a full-width landscape | Horizontal five-product journey over a drawn single-line material path; no copied townscape or supplier cards |
| Around 00:21–00:28 | Proof, pricing and contact chapters use different layouts and tones | Evaluation methodology, five independent quote hypotheses, and role-aware paid-evaluation form |
| Around 00:32 | FAQ followed by substantial dark footer | Concise buyer FAQ and complete ink-coloured navigation footer |
| Around 00:39–00:49 | Product hero, step-based workflow, feature detail and closing CTA | Full product-specific pages with inputs, exceptions, outputs and sample artifacts |
| Around 00:53–01:00 | Second product page and deliberately designed sign-in | Distinct page art for each module and honest preview access presentation |
| Around 01:07 | Dedicated guided request flow | Separate guided-demo request and paid-evaluation qualification flows |

**Adopt:** editorial scale, tactile depth, generous spacing, chapter environments, clear navigation, complete inner pages and deliberate pacing. **Create afresh:** mark, colours, specimens, layouts, diagrams, cards, UI, text, scroll sequence and section compositions. Do not borrow the reference's claims, certification symbols, pricing, quotes or logos.

## 04 — Information architecture and route map

The future marketing website and synthetic product preview are connected but visibly separate. Every destination below needs substantive content or a truthful frontend state; a route is not complete merely because a menu item exists.

| Page / route | Purpose and required content | Primary next step |
|---|---|---|
| Home `/` | Full buyer story, all five products, platform, artifact, evaluation, trust, pricing and conversion | Request a paid evaluation |
| Why change `/why-change` | Fragmented footage, samples and sale/rejection records; limits of camera-only interpretations | Explore the evidence workflow |
| Products `/products` | Five proposed modules, separate jobs, inputs/outputs, users and quote units | Open a product page |
| Material Desk `/products/material-desk` | Feedstock composition audit | Discuss a feedstock audit |
| Material Review `/products/material-review` | Contamination episode detection and shift brief | Discuss a line evaluation |
| Material Proof `/products/material-proof` | Bale quality evidence package | Review the example packet |
| Material Signal `/products/material-signal` | Throughput/bottleneck and line-change simulation | Discuss a scenario workshop |
| Material Report `/products/material-report` | Source-program contamination feedback | Discuss a program evaluation |
| Platform `/platform` | Shared evidence model, provenance, review, missingness, exports and proposed architecture | Explore the synthetic demo |
| Solutions `/solutions` | Role/workflow overview, links to specific audiences, relevant products | Select a workflow |
| MRF operations `/solutions/mrf-operations` | Primary budget owner: shift review, evidence gaps and audit effort | Qualify an MRF evaluation |
| Commodity sales `/solutions/commodity-sales` | Co-owner: packet review, buyer questions, sale/rejection comparisons | Explore Material Proof |
| Collection feedback `/solutions/collection-programs` | Adjacent source-program audience; distinguish from MRF demand | Explore Material Report |
| Evaluation evidence `/evaluation` | Scorecard, baseline method, comparison design, failure criteria; no claimed results | Read the pilot protocol |
| Pilot protocol `/evaluation/pilot-protocol` | Permissioned retrospective comparison, SOW and go/no-go gate | Request a paid evaluation |
| Pricing `/pricing` | All five proposed price hypotheses, cost exclusions and quote process | Discuss one proposed offer |
| Request evaluation `/request-evaluation` | Buyer qualification, module selection, permissions readiness and follow-up consent | Submit only when delivery is connected |
| Request walkthrough `/request-demo` | Human-guided product walkthrough; separate from self-serve demo | Request a walkthrough |
| Synthetic demo `/demo` | Scope, badge, local reset and single-line case entry | Open demo workbench |
| Demo workbench `/demo/workbench` | Ten-case queue, filters, counts, roles and source status | Open a case |
| Demo case `/demo/cases/DEMO-C004` | Coverage first, classification, QC link, exceptions, reviewer and next action | Record a local review decision |
| Demo packet `/demo/packets/DEMO-P004` | Buyer-facing evidence packet; source references and limitations | Export synthetic packet |
| Demo pilot `/demo/pilot` | One illustrative shadow-audit opportunity with baseline and permission tasks | Inspect illustrative next steps |
| About `/company` | Vision, mission, research stage, principles and expansion hypothesis | Contact the team |
| Contact `/contact` | General inquiry, access/help and data-request escalation | Send inquiry when connected |
| Trust `/trust` | Data vs physical boundaries, permissions, privacy, review and exports | Read data requirements |
| Data requirements `/integrations` | Proposed retrospective inputs and portability; all production connectors future/unconfirmed | Discuss dataset feasibility |
| Resources `/resources` | Artifact, audit checklist, methodology and market-source index | Read a useful resource |
| Example packet `/resources/example-bale-packet` | Accessible synthetic packet and source legend | Open corresponding demo record |
| Audit checklist `/resources/mrf-audit-checklist` | Ownership, coverage, baseline and reviewer checklist | Assess readiness |
| Market context `/resources/market-context` | AMP/Glacier context, substitutes, evidence strength and unanswered questions | Read evaluation method |
| Sign in `/sign-in` | Complete preview-access UI; no working-auth claim | Open synthetic demo or request access |
| Access help `/access-help` | Preview status, no credentials needed, future access/help path | Contact / open demo |
| Privacy `/legal/privacy` | Draft notice and actual handling/disclosure state | Privacy/deletion contact once verified |
| Terms `/legal/terms` | Draft concept-preview terms; not legal assurance | Contact |
| Accessibility `/accessibility` | Motion controls, keyboard use and known limitations | Report a problem |
| Custom 404 | Branded recovery, search/links to products and demo | Recover navigation |

**Features** are detailed inside the five product pages and platform page; no thin duplicate `/features` page. **Results** use `/evaluation`, with methodology and empty measurement fields instead of invented outcomes. **Customer stories, testimonials, funding, status and careers** are not fabricated. Add them only when evidence exists. An unattributed “questions we are testing” panel can provide human context without pretending to be a quote.

## 05 — Navigation and buyer journeys

### Desktop navigation

**BaleProof logo · Products · Platform · Solutions · Pricing · Resources · Company · Sign in · Request evaluation**

- Products mega menu lists all five names, one-line responsibilities, proposed-module status and “View all products.” No hidden products or five identical links.
- Solutions groups MRF operations, commodity sales and collection programs, with primary/adjacent distinctions in page copy.
- Resources includes example packet, audit checklist, evaluation method and market context.
- Company includes About, Contact and Trust. Trust also has a persistent footer link.
- “Explore synthetic demo” is a clear secondary action and never labeled “Go live.” Keep the main CTA short; its landing page explicitly says paid evaluation.
- Mobile drawer has identical destinations, 44 px minimum targets, expandable groups, focus management, Escape dismissal and scroll restoration. Never require hover.

### Footer

Product suite; Platform and Solutions; Evaluation and Resources; Company and Contact; Trust, Privacy, Terms, Accessibility; Sign in and Access help. Include concept status, synthetic-demo disclosure and copyright. LinkedIn and Crunchbase icons use verified URLs only; otherwise an accessible inactive “Profile not published” state. No invented address, founders, social profiles or certifications.

### Journeys

1. **Operations manager:** Home → Why change → Material Desk/Review → coverage-first demo → pilot protocol → evaluation form. Success signal: qualified budget owner plus named operator and permission readiness, not a page view.
2. **Commodity-sales lead:** Material Proof → example packet → source gaps and reviewer decision → comparator methodology → paid-evaluation request.
3. **Data/integration owner:** Platform → Data requirements → Trust → scope and permission checklist → human feasibility review. No upload of footage or production records through public forms.
4. **Municipal/EPR contact:** Collection-program solution → Material Report → separate program qualification. Do not merge this segment into the MRF buyer count.
5. **Curious visitor:** Explore demo → explicit synthetic introduction → workbench → review interaction → watermarked export. No account or real data required.

## 06 — Homepage storyboard and copy-ready hero

### Hero copy

**Eyebrow:** BaleProof / Materials recovery quality intelligence

**Headline:** Connect contamination evidence to the bale buyers actually inspect.

**Supporting copy:** A proposed evidence workspace for materials-recovery-facility operations managers and commodity-sales leads. Review stream samples, contamination observations and bale records together—with source timestamps, visible gaps and a human decision at every consequential step.

**Primary CTA:** Request a paid evaluation

**Secondary CTA:** Explore the synthetic demo

**Disclosure:** CONCEPT PREVIEW · DEMO / SIMULATED DATA. Proposed software; no live integrations or equipment control.

**Short route summary beneath CTA:** Existing evidence → reviewed case → buyer packet.

### Chapter plan

| # / section | Content and buyer takeaway | Unique visual composition | Movement and link |
|---|---|---|---|
| 01 / Hero | Buyer, job and research stage | Large bale cross-section on warm paper, with a single physical-looking evidence sleeve; editorial type occupies its own space | One gentle layered reveal; scroll separates layers into source, review and packet. No looping robot action. Evaluation + demo links |
| 02 / The missing connection | Incoming material varies; footage, sample audits and sale/rejection records are fragmented | Three long document strips on different vertical baselines, with one missing link visibly interrupted | Vertical reveal connects only known references. Link Why change |
| 03 / Coverage before conclusions | Show where the camera sees, does not see and lacks a usable sample | Full-width, original overhead conveyor drawing; hatched blind spot, camera field and threshold legend | Brief vertical pinned chapter on spacious desktops: coverage → threshold → interpretation. Mobile stacks three panels |
| 04 / Five offers, five jobs | All five proposed products, their scopes and price hypotheses | Horizontal editorial product chapters; each has a different specimen/diagram, visible name, short copy, quote unit and page link | One horizontal sequence driven by normal vertical scroll; explicit numbered navigation and jump links. Accessible stacked equivalent |
| 05 / Shared platform | Common evidence model, not generic autonomous orchestration | Architectural section drawing: inputs above, case/reviewer spine in centre, packet below | Source connectors draw around labels; human checkpoint appears before export. Link Platform |
| 06 / One event, fully examined | Conveyor sample → material classification → contamination trend → bale audit → shipment | A real future-built workbench with queue, record and source pane; one stable case ID persists | Vertical scroll advances selected display states, never makes review decisions. “Open case” enters demo |
| 07 / The buyer packet | What a reviewer could actually hand to commodity sales | Full-width evidence-document spread with readable source IDs, missingness strip and reviewer note | Packet pages align; hover/focus highlights corresponding source. Link accessible example packet |
| 08 / Different jobs, shared evidence | Operations, commodity sales and adjacent collection teams | Three editorial rows with different artifact crops, not another card carousel | Small route-highlight on selection. Link dedicated solutions |
| 09 / Measure before making claims | Packet completeness, reviewer time or dispute resolution, qualified paid commitment | Oversized evaluation worksheet with units and unfilled baseline/result fields | Field labels appear with final static values of “Not measured”; no animated made-up ROI. Link Evaluation |
| 10 / The boundary is part of the product | Footage ownership, data portability and human control | Split industrial cutaway: evidence workspace on one side; equipment boundary with stop line on the other | Boundary resolves before links are drawn. No connector enters a motor/control endpoint. Link Trust + Data requirements |
| 11 / A paid evaluation, step by step | Discovery → permissioned comparison → SOW → evaluation → go/no-go | A vertical rail resembling a numbered inspection checklist | Individual steps reveal; stop gates remain readable. Link Pilot protocol |
| 12 / Commercial starting points | Five independent quotes, cost exclusions and test-hypothesis labels | A spacious ruled pricing ledger with five rows and the same units as the offer cards | Row focus reveals scope summary, with essential prices always visible. Link Pricing |
| 13 / Buyer questions | Availability, inputs, cameras, controls, cost, evidence gaps and outputs | Two-column FAQ with section index | Accessible accordions; no disappearing required disclosures |
| 14 / Request evaluation | Clear paid ask, roles needed, no public uploads, optional waitlist | Warm rust-tinted chapter with concise form beside a large permission checklist | Form has stable layout, progress and honest validation. Link full qualification form |
| 15 / Footer | Complete navigation and company status | Ink background, large restrained wordmark, meticulous columns | Quiet link underline; no decorative motion |

All five products are visible in chapter 04 and the pricing ledger. Jumping directly to a product must not require traversing the whole animated sequence. Intro, hero and navigation remain usable before media loads.

## 07 — Five proposed product cards and dedicated pages

**Shared label on every card and page:** Proposed module · Pricing test hypothesis · No active checkout. Labeling/video costs separately quoted. These are separate offers, not five CRM tabs or already-live plans.

### 01 / BaleProof Material Desk

**Card headline:** Understand the material you can actually observe.

**Card copy:** A feedstock composition audit using existing sampling records or permissioned camera footage. Review classifications alongside sampling limits, uncertain observations and source references.

**Price hypothesis:** $2,500 / plant. **CTA:** Discuss a feedstock audit.

**Dedicated-page structure:** job and buyer → input checklist → coverage and sampling method → composition view → ambiguous classifications and missingness → manually reviewed audit output → exclusions and hypothesis price → evaluation CTA.

**Inputs:** permissioned footage or samples, timestamps, line/shift context and labeling protocol. **Output:** composition audit with observed denominator and limitations. **Distinct visual:** a material specimen tray with labelled fractions and an explicit unknown/unclassified portion; no generic pie chart detached from records.

**Pilot question:** is the available sample representative enough to support the agreed audit? **Exclusions:** full-stream certainty, unseen material classification and certified composition claims.

### 02 / BaleProof Material Review

**Card headline:** Give the next shift a reviewable contamination brief.

**Card copy:** Link suspected contamination episodes to timestamps, coverage and reviewer notes. Show uncertainty before an interpretation and carry unresolved exceptions into the shift brief.

**Price hypothesis:** $750 / month / line. **CTA:** Discuss a line evaluation.

**Dedicated-page structure:** shift problem → coverage/threshold gate → suspected-episode timeline → source inspection → reviewer action → shift handoff brief → limitations and hypothesis price → CTA.

**Inputs:** time-indexed existing footage/samples, shift context and reviewer annotations. **Output:** episode review and shift brief. **Distinct visual:** a horizontal shift strip with observation windows, gaps and confidence bands, not a flashing “live” dashboard.

**Pilot question:** can a reviewer produce a more complete brief within the agreed comparison method? **Exclusions:** real-time alarms, autonomous dispatch, guaranteed detection and equipment actuation.

### 03 / BaleProof Material Proof

**Card headline:** Put the source behind every bale-quality statement.

**Card copy:** Assemble a manually reviewed evidence packet that links observations, bale QC samples and shipment notes. Make missing links and alternative explanations visible to commodity sales and buyers.

**Price hypothesis:** $20 / bale batch. **CTA:** Review an example packet.

**Dedicated-page structure:** buyer question → example packet → observation-to-bale linkage → QC/sample limitations → shipment notes → reviewer/sign-off and export → batch definition and hypothesis price → paid-evaluation CTA.

**Inputs:** footage/sample references, bale audit and shipment/sale/rejection records where permissioned. **Output:** exportable evidence package. **Distinct visual:** an editorial document spread with evidence tabs and a missingness margin.

**Pilot question:** is the packet complete enough for the agreed buyer discussion and independent review? **Exclusions:** quality certification, guaranteed acceptance and a claimed reduction in disputes. Define “bale batch” and included review effort in the SOW; do not silently reinterpret the price as per bale.

### 04 / BaleProof Material Signal

**Card headline:** Examine a line-change scenario before discussing it on the floor.

**Card copy:** Explore throughput and bottleneck assumptions in a facilitated simulation workshop. Compare scenarios with explicit inputs, uncertainty and operator review.

**Price hypothesis:** $3,000 / plant. **CTA:** Discuss a scenario workshop.

**Dedicated-page structure:** workshop question → input/assumption register → baseline scenario → line-change comparison → uncertainty bands → facilitator review/output → physical-control exclusions and hypothesis price → CTA.

**Inputs:** permissioned historical throughput, line context and explicit scenario assumptions. **Output:** workshop report and scenario comparison. **Distinct visual:** two aligned conveyor diagrams with capacity bands and a labelled constraint, rather than a 3D robot.

**Pilot question:** are the inputs adequate for a useful comparison? **Exclusions:** digital-twin accuracy claims, production optimization, robotic picks, conveyor commands and safety-interlock changes. The initial isolated demo need not implement a full simulator; this remains a separately quotable proposed direction.

### 05 / BaleProof Material Report

**Card headline:** Bring source-program feedback back to the evidence.

**Card copy:** Prepare contamination feedback for municipal collection teams using permissioned, attributable samples. Separate observed patterns from unsupported assumptions about their source.

**Price hypothesis:** $1,000 / month / program. **CTA:** Discuss program feedback.

**Dedicated-page structure:** program question → attribution prerequisites → sample/coverage matrix → feedback draft → reviewer checks → municipal handoff → privacy, limits and hypothesis price → CTA.

**Inputs:** permissioned source-program metadata and samples with defensible linkage. **Output:** reviewed collection-program feedback report. **Distinct visual:** a program-by-sample matrix with missing cells and explanatory margin notes; no invented geographic heatmap.

**Pilot question:** does source attribution support a useful, appropriately limited report? **Exclusions:** household profiling, unsupported blame and municipal counts treated as MRF customer demand.

### Common completeness for all five pages

Include target user, budget owner, specific problem, inputs, workflow, distinct capabilities, output, evidence/sample UI, approvals, exceptions, data requirements, measurement plan, relationship to the platform, FAQ and tailored CTA. Links to other products explain a relevant handoff; they do not merge the offers into a subscription bundle. No production connectors are advertised as available.

## 08 — Supporting-page structure

| Page | Section sequence and distinct visual |
|---|---|
| Why change | Existing workflow → evidence gaps → camera vs bale ground truth → present substitutes → what to test. Visual: discontinuous paper trail with labelled missing join, not quantified losses |
| Products | Portfolio introduction → five editorial product rows → shared data/review foundation → choosing one first evaluation → separate quote process. Each row includes all card content and a unique preview |
| Platform | Inputs → timestamped source register → case/annotation model → exceptions → reviewer ownership → reversible export → future connectors. Visual: legible layered architecture; no OEM control arrow |
| Solutions hub | Primary buyer and shared team → operations workflow → commodity-sales workflow → separately identified collection-program opportunity → role-specific links |
| MRF operations | Shift question → coverage and samples → Material Desk/Review/Signal → operator/integration-owner responsibilities → baseline → pilot ask. Visual: shift handoff sheet |
| Commodity sales | Buyer question → sample-to-bale linkage → Material Proof → missing outcomes → dispute comparator → paid ask. Visual: annotated packet exchange, no actual buyer send action |
| Collection programs | Program context → attribution limits → Material Report → separate procurement/qualification → permissioned feedback. Visual: source attribution matrix |
| Evaluation | No results yet → metric definitions → pre-registration → comparator → sample adequacy → failure and stopping rules → measurement worksheet. Charts are empty or explicitly illustrative |
| Pilot protocol | Readiness → discovery → sharing terms → retrospective comparison → conditional paid SOW → evaluation → reviewer sign-off → go/no-go. Do not imply a signed SOW |
| Pricing | Hypothesis disclosure → five independent rows → included/excluded scope → labeling/video/services costs → quote assumptions → interviews/SOW → FAQ. No checkout, guaranteed savings or $100k package |
| Company | Mission and vision → research-stage story → design principles → primary buyer → expansion hypothesis → contact. No invented team biography or headquarters |
| Trust | Permissions and ownership → labeling/missing ground truth → review responsibilities → physical boundary → export/deletion design → current vs future controls → contact. No certification badges |
| Data requirements | Existing files and metadata → ownership checklist → minimum schema → portability/export → sparse outcomes and coverage → integration-owner review → future connector status. No logo wall implying partnerships |
| Resources | Three complete useful resources and sources → individual readable articles → related module/CTA. No empty blog grid |
| Sign in | Preview access message → polished sample email/validation presentation → access-help link → prominent Open synthetic demo → disclosure that auth is unconnected. Do not collect or store passwords or show unsupported SSO |
| Contact | General inquiry vs access help vs data-permission discussion → minimal form → privacy context → truthful completion state. Real-record requests are escalated to human security/legal review |
| Legal | Draft/privacy and terms content matched to actual implementation; responsible owner and contact details remain pending. Do not present a template as counsel-approved |

## 09 — Motion system, layout and responsive behaviour

### Motion choreography

| Sequence | Trigger / duration target | Visible change | Reverse / exit | Mobile / reduced motion |
|---|---|---|---|---|
| Hero specimen | Initial entrance, 600–900 ms total | Three material/evidence layers settle into one readable object | Reveal remains complete; no repeated replay | Still specimen, immediate headline and CTAs |
| Problem trace | Section entry / short scrub | Source fragments line up; missing join remains dashed | Scrub reverses without deleting text | Stacked sources and permanently visible missing-link label |
| Coverage chapter | Desktop scroll through about 160–200vh total, only if height ≥800px and width ≥1100px | Coverage map → threshold → suspected observation | Predictable reversible stages; natural unpin | All three stages stacked; no pin |
| Five-product chapter | One desktop pin over roughly 220–280vh, tune after usability review | Track moves through five individually linked chapters | Progress reverses; scrolling exits normally | Five vertical sections; optional touch gallery only for supplementary imagery |
| Platform diagram | Enters viewport, staged 800–1200 ms | Source paths, case links, reviewer boundary, export | Completes once, remains legible | Complete still diagram plus text equivalent |
| Product-in-action | Vertical chapter, at most three story stages | Coverage/exception → QC/shipment sources → packet | Display navigation reverses; reviewer state never changes from scroll | Explicit step buttons and stacked summary |
| Packet spread | Section enters / pointer or focus | Pages align, source reference highlights | Highlight clears on blur/leave | Static packet list; tap source link |
| Scenario comparison | Tab selection | Assumption set and matching illustrative bands change | Selection persists; reset available | Buttons and accessible comparison table |
| Pricing | Focus/hover, 160–220 ms | Row rail and scope detail highlight | Returns without layout jump | Always-visible scope; no hover prerequisite |
| Final CTA | Section entry, 350–500 ms | Rule/heading resolves; form stays stationary | No replay | Static complete form |

**Limits:** use at most two substantial pinned experiences on the homepage; combine coverage and workbench storytelling if page length becomes excessive. The five-product sequence is a horizontal narrative, not horizontal page overflow. Critical copy remains in document order. Provide “Skip product sequence” and per-product navigation. Keyboard focus must bring the focused product into view without trapping scrolling.

**Implementation proposal:** React + TypeScript, Next.js for routes/metadata, GSAP ScrollTrigger for coordinated scenes, optional Lenis only after native-scroll behaviour works. Synchronize to one scroll loop, clean up route-specific triggers, recalculate after media/font dimensions settle and respect reduced motion. Do not make WebGL, smooth scrolling or autoplay a dependency for reading or conversion.

### Fine-detail rules

- Max copy container 1200–1280 px; wide visuals up to 1440 px; reading column around 680 px. Desktop gutters 48–64 px, tablet 32 px, mobile 20 px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Chapters typically 96–144 px vertical padding, mobile 56–80 px.
- Navigation approximately 80 px desktop / 64 px mobile. Sticky header must not cover anchors, disclosures or focus targets.
- Primary buttons: 48–52 px height, firm 6–8 px corners, dark or rust surface, stable label and arrow in a masked slot. Hover moves the arrow 4–6 px and changes the surface; focus is equally visible.
- Product panels use an expanding edge rail and meaningful source highlight. Avoid repeated tilt, magnetic targets and essential text appearing only on hover.
- Thin structural lines, restrained shadows and material texture distinguish paper, diagrams and UI. Do not add heavy shadow to every rectangle.
- Components need default, hover, focus, pressed, selected, disabled, loading, success, error and empty states where relevant.
- Respect reduced motion with complete final states; stop offscreen/hidden animations. Avoid flashing, autoplay sound, scroll interception and continuously moving background text.
- Contrast target: WCAG AA for text/controls; verify actual combinations. Status uses words and icons as well as colour. Tables and charts have text summaries and accessible alternatives.

## 10 — Synthetic product demo: actors, records and workflow

**Persistent top badges:** DEMO — SYNTHETIC DATA · CONCEPT PREVIEW. Every row carries a DEMO label. Every chart/report is marked illustrative. Every export retains the same status.

**One invented account:** DEMO Alder Loop Recovery. **Site:** DEMO Plant 01. **Line:** DEMO Line A. This is a generic fictional organization, not a real customer. All dates, people, identifiers and events below are invented.

| Fictional actor | Role | Responsibility |
|---|---|---|
| DEMO Avery Chen | MRF operations manager | Illustrative budget/accountability owner |
| DEMO Morgan Ellis | Commodity-sales lead | Buyer packet and comparator review |
| DEMO Rowan Vale | Day-to-day operator | Shift context and sample annotations |
| DEMO Casey Noor | Data/integration owner | Footage ownership, schema and permission status |
| DEMO Ellis Ward | Analyst/reviewer | Evidence interpretation and local packet review |

### One deterministic scenario

1. Open `DEMO-C004`. Show synthetic camera field and blind spots before any interpretation. Camera `DEMO-CAM-A` covers the illustrated central belt zone; the occluded far edge is unobserved. This is a schematic, not a surveyed optical map.
2. Display source `DEMO-E004-CAM`, timestamp `2026-09-16 08:14:22Z`, with a simulated suspected flexible-film classification. Illustrative score **0.73**, review threshold **0.85**. A score is not measured model accuracy or a calibrated probability. The requested confidence-band visualization uses a clearly labelled invented range, **0.61–0.84**, solely to demonstrate uncertainty presentation; it is not a statistical confidence interval or model-derived estimate.
3. Flag “Below threshold — manual review required.” Link adjacent synthetic observations on a fixed trend; gaps remain gaps. Do not interpolate unseen samples or claim full-stream contamination.
4. Open QC source `DEMO-E004-QC`, `08:32:00Z`: synthetic 10.0 kg sample, 0.32 kg non-target material = **3.2% of this sample only**. It is not the line rate or bale-wide contamination percentage.
5. Inspect `DEMO-B004` and `DEMO-S004`, shipment note `10:05:00Z`. Timestamp proximity suggests a candidate association, but the transport-to-bale join has not been independently confirmed. Buyer acceptance/rejection outcome is missing.
6. Show alternatives: overlapping material/occlusion, sample unrepresentativeness and timestamp-to-bale mismatch. Distinguish observed facts, model suggestion and analyst interpretation.
7. Reviewer may “Prepare packet with limitations,” “Request more evidence,” or “Reject association.” Each action changes only local demo state, adds a synthetic timeline entry and leaves operational controls untouched.
8. A prepared packet means “ready for discussion within the demo,” not approved bale quality, accepted shipment or external transmission. Export is a local, reversible download; reset restores the original seed. No email/send/writeback button.

### Ten consistent queue records

All records belong to the one fictional line/account. Times are UTC on 16 September 2026; each has distinct `DEMO-E###-*` sources, matching `DEMO-B###` bale reference and `DEMO-S###` shipment reference where present. “Completed” means the local review task completed, never buyer acceptance.

| Case | Observation time | Review status | Source / exception | Owner | Dated next action |
|---|---|---|---|---|---|
| DEMO-C001 | 07:05:00Z | Completed | Packet prepared with sample limitations | DEMO Ellis Ward | 17 Sep 09:00Z: illustrative packet QA |
| DEMO-C002 | 07:23:00Z | Pending | QC note awaiting review | DEMO Rowan Vale | 16 Sep 11:00Z: review QC source |
| DEMO-C003 | 07:48:00Z | Blocked | Camera reference unavailable | DEMO Casey Noor | 16 Sep 11:15Z: resolve missing source |
| DEMO-C004 | 08:14:22Z | Pending | Score below threshold; bale join unconfirmed | DEMO Ellis Ward | 16 Sep 11:30Z: compare source and QC |
| DEMO-C005 | 08:39:00Z | Completed | Review records insufficient support for escalation | DEMO Ellis Ward | 17 Sep 09:15Z: archive review note |
| DEMO-C006 | 09:02:00Z | Rejected | Suggested bale association contradicted by shift note | DEMO Rowan Vale | 16 Sep 12:00Z: retain rejection reason |
| DEMO-C007 | 09:27:00Z | Pending | Annotation requires commodity-sales context | DEMO Morgan Ellis | 16 Sep 12:15Z: review buyer question |
| DEMO-C008 | 09:51:00Z | Blocked | Illustrative footage permission status unresolved | DEMO Casey Noor | 16 Sep 12:30Z: inspect mock permission task |
| DEMO-C009 | 10:16:00Z | Completed | Packet prepared; buyer outcome still not supplied | DEMO Ellis Ward | 17 Sep 09:30Z: outcome follow-up task |
| DEMO-C010 | 10:41:00Z | Pending | QC sample reference absent | DEMO Rowan Vale | 16 Sep 12:45Z: request sample reference |

**Initial visible counters:** 10 cases · 4 pending · 2 blocked · 3 completed · 1 rejected. Generate counts from records; after preparing C004, counts become 3 pending and 4 completed. Never label these counts actual plant performance.

### Demo pilot opportunity

Exactly one `DEMO-OPP-001`: “MRF shadow audit — proposed.” Stage: permission/baseline scoping. Account and buyer roles above; proposed selected module: Material Proof. Required tasks: data-sharing request, commodity buyer dispute baseline, comparator agreement, quote scope and paid SOW. Signed revenue and committed amount are **none**. A proposed quote is not a won deal. CRM is a supporting pilot panel, not the main product metaphor.

## 11 — Data dictionary and relationships

All seed entities require `is_synthetic=true`, an immutable DEMO-prefixed ID and a visible label. Timestamps are ISO 8601 UTC; display timezone must be explicit. Missing data uses `null` plus a reason, never a fabricated zero.

| Entity / fields | Type and meaning | Validation / UI rule |
|---|---|---|
| Account: `account_id`, `name`, `site_id`, `line_id` | Strings; fictional organizational context | Exactly one seeded MRF; distinguish site and line |
| Actor: `actor_id`, `display_name`, `role` | Named fictional role | Buyer, operator, commodity lead, integration owner and reviewer remain distinct |
| Case: `case_id`, `observed_at`, `state`, `owner_id`, `next_action`, `due_at` | Source-linked review record | Enum: pending/blocked/completed/rejected; require dated next action |
| Coverage: `coverage_id`, `camera_id`, `schematic_region`, `blind_spots`, `usable_window` | Diagram coordinates and observable limits | Show before classification; no surveyed-accuracy claim |
| Source: `source_id`, `kind`, `captured_at`, `source_ref`, `permission_status` | Footage, sample, QC, shift or shipment source | Synthetic local refs only; no remote/production fetch |
| Observation: `material_label`, `score`, `threshold`, `score_kind` | Proposed class and illustrative 0–1 score | Score below threshold mandates review; confidence ≠ validated accuracy |
| Uncertainty display: `band_low`, `band_high`, `band_basis` | Illustrative 0–1 range; basis = synthetic display example | Require low ≤ score ≤ high; label as invented, not statistical/model-derived confidence |
| Trend: `window_start`, `window_end`, `observed_count`, `flagged_count`, `missing_intervals` | Fixed synthetic observation windows | Denominator and missingness visible; never imply belt-wide coverage |
| QC sample: `qc_id`, `sample_mass_kg`, `non_target_mass_kg`, `method_note` | Measured-looking but invented sample values | Fraction derives from sample masses; no extrapolation to bale |
| Bale link: `bale_id`, `candidate_source_ids`, `link_status`, `alternative_explanations` | Relationship between observation and bale | candidate/confirmed-within-demo/rejected; confidence alone cannot confirm |
| Shipment: `shipment_id`, `bale_ids`, `note_at`, `buyer_outcome` | Shipment-note association and optional outcome | Missing buyer outcome remains null; no invented acceptance |
| Annotation: `annotation_id`, `author_id`, `created_at`, `source_ids`, `text` | Analyst interpretation linked to evidence | Keep separate from source contents |
| Review: `review_id`, `reviewer_id`, `decision`, `rationale`, `reviewed_at` | Local-only review event | Prepare-with-limitations / request-evidence / reject-association |
| Packet: `packet_id`, `case_ids`, `source_ids`, `version`, `limitations`, `exported_at` | Reversible evidence export | Watermark on every page; include provenance and current review state |
| Pilot: `opportunity_id`, `selected_offer_id`, `stage`, `permission_state`, `baseline_state`, `sow_state` | Illustrative evaluation opportunity | No signed value or real contact details; unconfirmed states explicit |
| Metric protocol: `metric`, `unit`, `baseline`, `comparator`, `evaluator`, `window`, `threshold`, `result` | Proposed evaluation configuration | Baseline/threshold/result remain unset until agreed/measured |
| Event log: `event_id`, `entity_id`, `at`, `actor_id`, `action`, `previous_state`, `new_state` | Deterministic local timeline | Reset restores seed; no server audit-log claim |

**Relationships:** account → site → line → cases; case → coverage + observations + sources + annotations; QC and shipment records → candidate bale link; review → case; packet → selected cases + cited sources + review; pilot opportunity → account + selected offer + readiness tasks.

**Initial C004 timeline:** 08:14:22 observation; 08:32 QC sample; 10:05 shipment note; 10:20 case assembled; 10:24 analyst flags uncertain join; 11:30 reviewer task due. Demo actions use deterministic subsequent synthetic timestamps, clearly separate from the visitor's actual clock.

## 12 — Sample buyer evidence packet

**BALEPROOF / DEMO-P004 / v0.1**  
**DEMO — SYNTHETIC DATA · CONCEPT PREVIEW · NOT FOR OPERATIONAL USE**

**Prepared for:** DEMO Morgan Ellis, commodity-sales lead, DEMO Alder Loop Recovery.  
**Prepared by:** DEMO Ellis Ward, analyst/reviewer.  
**Case:** DEMO-C004 · DEMO Line A · 16 September 2026 UTC.  
**Status:** Pending review. No buyer acceptance or bale-quality approval.

### Question under review

Does the observed suspected flexible-film event have a defensible relationship to bale DEMO-B004 and shipment note DEMO-S004?

### Evidence register

| Reference | Synthetic timestamp | What it supports | What it does not establish |
|---|---|---|---|
| DEMO-E004-CAM | 08:14:22Z | A simulated visible observation in the camera's illustrated field | Identity of occluded objects; full-stream composition |
| DEMO-E004-ANN | 10:24:00Z | Analyst's suspected film interpretation; score 0.73 vs 0.85 threshold | Calibrated accuracy or confirmed bale linkage |
| DEMO-E004-QC | 08:32:00Z | 0.32 kg non-target material in a fictional 10.0 kg sample | Bale-wide 3.2% contamination or representativeness |
| DEMO-E004-SHIP | 10:05:00Z | A synthetic shipment note naming DEMO-B004 | Buyer acceptance/rejection or causality |

### Missingness and exceptions

- Far-edge camera blind spot; sample coverage is incomplete.
- Conveyor-to-bale timing association not independently confirmed.
- Buyer sale/rejection outcome absent; historical dispute comparator absent.
- QC sample representativeness not established.
- Footage ownership is simulated, not a permission to process actual footage.

### Alternative explanations

Occlusion may distort the observed material; the sampled material may not represent the full bale; the timestamp match may associate the wrong bale. Do not convert correlation into confirmed causation.

### Reviewer disposition

Pending. Available local actions: prepare packet with limitations, request more evidence, reject association. A prepared packet explicitly says “For discussion; linkage unresolved.” Physical operations and commodity acceptance remain with authorized humans/OEMs.

### Next action

DEMO Ellis Ward to compare the source/QC timing and request missing bale linkage at 16 September 2026 11:30Z. No automated email, dispatch or control action.

**Export manifest:** packet ID/version, case IDs, source IDs/timestamps, annotations, limitations, reviewer state and export notice. Export can be discarded/regenerated; it does not alter a source system. PDF/HTML and machine-readable JSON are future demo-export formats. Every format retains DEMO/SIMULATED labels.

## 13 — Paid-evaluation ask, protocol and scorecard

### Copy-ready pilot ask

**Evaluate one line. Review one evidence trail. Agree what would count as useful.**

We are seeking one consenting MRF to explore a paid shadow evaluation using existing video, quality samples and sale or rejection records. Bring an operations manager, commodity-sales lead, named operator and data/integration owner. Together, define one proposed offer, the permissions required and an independent comparison before any real records are used.

**CTA:** Request a paid evaluation.  
**Supporting note:** Scope and price are hypotheses for discussion. No production integration, equipment control or performance guarantee is included.

### Protocol

1. Qualify the distinct budget/accountability owner and select one offer; preserve the other four as separate future tests.
2. Recruit the named day-to-day operator, commodity lead, integration owner and independent evaluator. The evaluator must be able to judge outcomes without relying solely on the builder's claims.
3. Review footage ownership, access rights, labeling needs, data portability, sample coverage, bale-level ground truth and historical comparator availability.
4. Obtain procurement/legal permission and signed data-sharing terms before real records. Establish the safety boundary with the relevant operator/OEM; do not touch conveyors, robotic picks or interlocks.
5. Define a permissioned retrospective comparison. Pre-register baseline, selected metric, evaluator, comparison method, observation window, minimum usable coverage and failure threshold in a conditional paid SOW.
6. Agree and sign the paid evaluation scope, including labeling/video/services costs and export/deletion expectations. An indicative price on the website is not an accepted contract.
7. Conduct the manually assisted shadow evaluation and compare against historical manual audits. Hold material, shift and case-selection differences visible; document exclusions and missing cases.
8. Produce the reviewer packet and scorecard; decide go/no-go against precommitted criteria. Separately record qualified-buyer-to-paid-commitment conversion.

### Scorecard template

| Metric / gate | Definition | Baseline / target / result |
|---|---|---|
| Packet completeness | Required evidence fields present / pre-agreed required fields, with critical missing fields separately flagged | All unset until SOW/measurement |
| Reviewer time | Active review minutes per comparable packet; specify included/excluded tasks | Baseline historical manual process; threshold pre-agreed |
| Dispute resolution, if selected | Documented time/outcome per eligible historical buyer dispute; comparable cases and observation window specified | Do not claim fewer disputes from a short or incomparable sample |
| Bale-level ground truth | Availability and adequacy of QC/outcome references linking sample to bale | Fail if unavailable or inadequate for the chosen comparison |
| Sample/optical coverage | Usable footage/sample coverage relative to the agreed decision scope | Minimum threshold must be set before pilot |
| Permissions / procurement | Signed sharing rights and paid SOW, named accountable roles | Required before real-record processing |
| Safety boundary | Certified operators/OEMs retain equipment authority; required sign-off available | Required; no control shortcut |
| Commercial commitment | Distinct qualified MRF buyer progressing to an actual paid commitment | Count only actual agreement, separate from waitlist/traffic |
| Costs / portability | Labeling, services and integration effort; ability to export evidence | Record actual costs; no software-economics assumption |

**Go:** operator signs paid evaluation and footage/bale permissions; commodity lead agrees comparator; data coverage supports the intended decision; required safety sign-off is available. **Pause/fail:** missing permissions, missing safety sign-off, missing historical comparator or insufficient bale-level ground truth. Never manufacture value through autonomous control.

**Expansion hypothesis:** plant-level quality intelligence → multi-facility reporting → buyer-facing traceability, only if evidence shows incremental value beyond OEM dashboards and data is portable. This is not a current product-availability claim.

**Revenue-sizing method for later internal validation:** verified buyer count × tested annual contract value × reachable share, with services/integration costs accounted for. No TAM, million-dollar revenue or accepted pricing is established. Do not substitute sector spend, loss volume or equipment capex for software revenue.

## 14 — Forms, privacy and authentication states

### Evaluation form

**Required minimum:** work email, organization, role, selected proposed module, current workflow/challenge, site count or scale band, pilot timeframe and explicit permission to follow up about this request.

**Qualification fields:** operations budget-owner status; named operator identified?; commodity lead identified?; integration owner identified?; existing video/quality/outcome records available?; authority to discuss permissions? Use yes/no/unknown and optional role descriptions. Collect actual additional contact identities later in a consented human conversation rather than demanding third-party personal data in a public form.

**Never request here:** footage, real bale records, invoices, contracts, credentials, personal records or sensitive operational uploads. Provide a clear human review path for data-access requests.

**Optional waitlist:** work email, role, organization, sector/site count, current workflow, pilot timeframe and follow-up consent. Separate unchecked marketing-consent checkbox. Waitlist is a weak signal, not product validation.

**Consent copy:** “You may contact me about this evaluation request.” Separate: “Send me occasional BaleProof product updates.” Link the actual privacy notice and verified deletion-request channel when configured.

### State requirements

- Empty/default: visible labels, required-field indicators, no preselected marketing consent.
- Invalid: inline error plus summary, preserve non-sensitive entered values, focus the first error.
- Submitting: stable button dimensions, prevent duplicate requests, announce progress.
- Success only after delivery succeeds: “Your request was received. A human will review your scope and permissions readiness.” Do not invent a response SLA or meeting booking.
- Failure: explain that delivery failed and provide retry; never show a success event.
- Unconnected prototype: “Preview form — nothing is sent or saved.” Simulated submit reports “Preview complete; no request sent.” Do not collect real details for a frontend mock.
- Meeting booked: only after an actual booking confirmation from a future connected flow. No fabricated availability calendar.

**Authentication:** complete visual treatment and validation states, but no real credential collection in the initial demo. Use an access-help path and direct synthetic-demo entry. Recovery explains that preview accounts do not exist. No fake Google/Microsoft/SSO support, password storage or “secure” badge without implementation evidence.

## 15 — Analytics and qualification plan

Analytics are a future implementation plan, not active instrumentation or reported campaign success. Respect applicable consent/deletion requirements and disclose actual tools when selected. Keep operational data and personal data out of event payloads.

| Event | When it fires | Allowed properties / restrictions |
|---|---|---|
| `page_view` | Actual route view once per navigation | route template, page family, allowlisted UTM source/campaign |
| `offer_card_view` | At least 50% of a product panel visible for 1 second; once per offer/view | offer ID, placement; implementation measurement rule is proposed |
| `demo_open` | Visitor explicitly opens synthetic demo | entry route, selected offer; never imply live product use |
| `pilot_cta` | Paid-evaluation CTA activated | placement, offer ID |
| `form_start` | First meaningful form interaction | form ID, offer ID; no keystrokes or entered values |
| `form_submit` | Successful connected delivery only | form ID, offer ID, consent version; never on validation error or prototype simulation |
| `meeting_booked` | Confirmed actual booking | booking source and offer ID; no names/emails in analytics |

Use a separate local-only QA mode for prototype actions; do not pollute marketing analytics. Strip free-form query parameters and personal identifiers from URLs. Do not send filenames, source IDs, footage metadata, notes, emails, names or form text to analytics. Define retention, access and deletion implementation before connection.

**Qualification register, kept separately from anonymous analytics:** distinct account/budget owner, primary or adjacent segment, named operator readiness, authorized dataset status, integration owner, comparator readiness, paid willingness, SOW/commitment status and next action. Dedupe contacts in the permissioned lead system; do not count multiple contacts at one facility as independent MRF demand. Report footage-access commitments, qualified conversations and paid audits separately.

## 16 — Acquisition, LinkedIn and ad variants

### Channel plan

Approach MRF operator networks, equipment OEMs/installers, municipal recycling tenders and EPR implementation partners. Pilot with operators; do not target household recycling consumers. OEM/integrator, municipal and MRF opportunities remain separate segment counts.

LinkedIn organic concept: share a visibly synthetic bale-evidence card, explain the unresolved link between observations and buyer inspection, and invite operations managers to discuss a paid shadow audit. No outreach or campaign is executed in this specification.

### Variant A — Buyer job

**Headline:** The camera saw an event. Which bale does it explain?

**Body:** MRF operations and commodity-sales teams work across footage, samples and shipment records. BaleProof is exploring a reviewed evidence trail that keeps those sources—and their gaps—together. View the synthetic workflow and discuss a paid shadow evaluation.

**CTA:** Explore the evaluation.

**Visual:** original coverage schematic with a clearly unresolved sample-to-bale link; CONCEPT PREVIEW / SYNTHETIC DATA label. Destination: `/solutions/mrf-operations` with explicit campaign parameters.

### Variant B — Human-reviewed artifact

**Headline:** A bale-quality discussion should have its sources attached.

**Body:** Inspect a synthetic buyer packet with timestamps, QC references, missing evidence and reviewer notes. BaleProof is a research-stage concept seeking an MRF partner for a permissioned paid evaluation.

**CTA:** View the example packet.

**Visual:** actual future-rendered synthetic packet, readable at ad size. Destination: `/resources/example-bale-packet`, with a clear paid-evaluation next step.

### Test protocol

Use small, capped LinkedIn tests only after targeting, geography, total spend cap, daily cap, observation window and pause rules are explicitly set. Budget is unassigned in this spec; no campaign may launch with an unset cap. Compare buyer-job vs evidence-packet messages to the same qualified role definitions. Record actual targeting, spend, clicks, CPC, consented requests, footage-access commitments and qualified meetings. Predefine the underperformance rule before spend. Do not report sample results, accuracy, savings, safety, certifications or customer traction as achieved.

## 17 — Responsive screenshot and asset production brief

**Capture the real built demo in a browser.** An AI-generated dashboard image or the supplied concept screenshot cannot count as implementation evidence.

| Required capture | Composition / acceptance |
|---|---|
| Desktop 1440 px, full-screen frame | Queue with 10 cases and matching status counts; C004 opened; visible source pane and reviewer action; persistent badges and no hidden uncertainty |
| Desktop detail/report view | Packet DEMO-P004, timestamps, sources, reviewer state, missingness and no-control boundary; export label visible |
| Mobile 390 px | Stacked case header → coverage/threshold → evidence → review → packet. Provenance and DEMO badge remain visible without tiny scaled desktop UI |
| Marketing desktop crop | Legible event → classification → trend → bale audit/shipment chain; no unverified branded integration |
| Mobile-safe marketing crop | Focused source-to-review moment with full disclosure, timestamp and uncertainty; separate composition, not centre-cropped desktop |
| Feedback states | Pending, blocked, rejected, prepared-with-limitations, no evidence and reset confirmation. At least one failed association visible |

**Proposed filenames:** `baleproof-demo-workbench-desktop-1440.png`, `baleproof-demo-packet-desktop-1440.png`, `baleproof-demo-case-mobile-390.png`. These are future capture targets, not delivered screenshots.

**Alt text example:** “BaleProof synthetic case C004 showing a camera blind spot, a score below the review threshold, a sample QC record and an unresolved bale-to-shipment association.”

Review at 100% zoom: labels, sample arithmetic, chronological timestamps, counts, clipping, focus, badge visibility and provenance. Test 390 px mobile plus tablet, 1440 px desktop and short-height desktop. No proprietary logos, real customer identifiers or actual personal/production records.

## 18 — Limitations, privacy, copyright and market context

### Copy-ready main disclaimer

“BaleProof is a research-stage concept. Product previews use invented records and simulated data; they do not show an operating product, live integrations or actual customers. Proposed modules and prices are test hypotheses. Human reviewers retain responsibility for consequential decisions. BaleProof does not control conveyors, robotic picks or safety interlocks.”

### Distinct barrier groups

- **Data:** image/footage ownership, labeling cost, variable material streams, camera blind spots, limited coverage and sparse bale-level ground truth. Portability and outcome linkage must be demonstrated.
- **Physical/control:** conveyor speed, robotic picks and safety interlocks remain with certified operators/OEMs. Read-only evidence review does not confer control authority.
- **Commercial:** capex procurement cycles, bundled incumbent analytics and integration/services costs may constrain standalone software economics.
- **Evidence:** the brief characterizes evidence for competing robotic facilities as high and standalone analytics pricing evidence as low. Treat this as the supplied research assessment, not a new verified numerical score.
- **Unanswered gap:** willingness of MRFs to share footage and bale outcomes, and willingness to pay for incremental standalone value.

### Competitive framing

Keep AMP and Glacier in factual market context, with official links. Also acknowledge OEM analytics, camera/robot integrators, scale tickets, manual bale audits, commodity brokers and existing process engineers. Do not imply an empty category or superiority over their products. The proposed incremental value must be tested against the buyer's actual incumbent workflow.

### Copyright and attribution

Use original copy, diagrams, fictional records and properly licensed imagery/fonts. Do not copy competitor screenshots, vendor marketing copy, regulator logos, maps, reference-site illustrations or proprietary facility photographs. Link factual sources without implying endorsement. Generic camera symbols must not suggest a confirmed integration.

No actual founder, customer, procurement, legal, security, regulatory or domain verification is supplied. Design proposed controls as proposed; do not claim compliance, encryption, audit certifications, hosting regions or retention operations that have not been implemented and reviewed.

## 19 — Complete brief-to-site coverage register

| Supplied requirement | Homepage placement | Dedicated page / deliverable | Future completion evidence |
|---|---|---|---|
| BaleProof name; Concept 35 and old-name traceability | Hero/logo | §01–02; Company | Final naming/brand assets; owner verification |
| Buyer, pain and category | Hero, problem | Why change; MRF solution | Buyer-specific copy |
| Named operator and integration owner; procurement/legal permission | Pilot and trust | Evaluation form; protocol | Role/permission states |
| Do not merge adjacent demand | Solutions | §05, §15–16 qualification plan | Segmented counts |
| AMP/Glacier and substitutes | Market-context link | Resources/market-context; §18 | Attributed sources |
| Five sellable offers | All five in chapter 04 | Five product pages; §07 | Five working links and unique screenshots |
| Exact price hypotheses and labeling/video costs | Pricing ledger | Pricing; §07 | Correct units, labels, no checkout |
| Tagline, vision and mission | Hero | Company; §02, §06 | Copy matches brief |
| Input → classification → trend → bale/shipment | Demo teaser | Demo case; §10 | Real captured workflow |
| Coverage and confidence before interpretation | Coverage chapter | Demo case | Order, labels and blind spots visible |
| Source timestamps, missingness, annotations, alternatives | Packet chapter | Data dictionary; sample packet | Source pane and export |
| Human reviewer and consequential decision boundary | Workbench and trust | Demo; Trust | Local-only action; explicit no-control state |
| Five independently quotable offers, select one pilot | Products/pricing | Pricing; pilot protocol | Module-specific scope and form |
| Read-only isolated MVP, no production connectors/control | Hero disclosure, trust | Platform; Integrations; Demo | No external writes or production access |
| Manually assisted shadow audit and paid agreement | Pilot chapter | Evaluation/protocol; §13 | Signed terms required for future real pilot |
| Independent audit-time/dispute comparator | Evaluation | Scorecard | Baseline, evaluator, window and threshold |
| Plant → multi-facility → buyer traceability hypothesis | Platform / Company link | Company; §13 | Future-status language |
| Million-dollar hypothesis and disciplined sizing | Company methodology link | §13 internal expansion method | No invented TAM/revenue |
| Data, control, commercial, evidence and gap barriers | Trust | §18; Trust | Distinct labelled constraints |
| DEMO/SIMULATED hero/workflow/screenshots | Hero, demo, packet | All demo routes and exports | Persistent badges on desktop/mobile |
| Fake CRM account, buyer/operator, evidence, tasks and deal | Demo entry | Demo pilot; §10 | One synthetic opportunity, no won revenue |
| 8–12 consistent records and edge/failure cases | Workbench | Ten-record seed; §10–11 | Counts, dates and links agree |
| Local reviewer state and reversible export | Workbench/packet | Demo case and packet | Prepare/request/reject/reset/export verified |
| Offer → artifact → qualify → discovery → comparison → SOW → go/no-go | Conversion links | §05, §13–14 | End-to-end journey |
| Consent waitlist and separate marketing checkbox | Final conversion | §14 | Unchecked independent consent |
| Seven specified analytics events, UTM and dedupe | Instrumentation plan | §15 | Delivery/booking gating, no PII payloads |
| LinkedIn channels and two ad angles | Public packet CTA | §16 handoff | Approved capped test, actual results only |
| Source/program buyer segregation | Solution rows | Collection-program page | Distinct qualification segment |
| Required spec: hero/CTA/cards/workflow/dictionary/packet | Multiple chapters | §06–12 | Complete specification |
| Required spec: pilot/scorecard/disclaimer/events/ads/capture brief | Evaluation/CTA/trust | §13–18 | Complete specification |
| Notion field inventory; no Notion access | Not public navigation | §20 | Parent-managed handoff only |
| Name/domain/screenshot ownership verification | Status and footer | §01, §17, §20 | Parent verification before claims |
| Copyright and original assets | All sections | §03, §18 | Asset/source license record |
| Guide: logo/favicon/type/palette/icons | Brand and navigation | §02, §09 | Final asset kit before build |
| Guide: problem/solutions/products/platform/results/pricing/company | Narrative | §04, §08 | Complete routes; results mapped to evaluation |
| Guide: auth/contact/trust/legal/resources/integrations/error | Nav/footer | §04, §08, §14 | Truthful complete UI states |
| Guide: LinkedIn/Crunchbase footer | Footer | §05 | Verified URLs or explicit inactive states |
| Guide: unique section visuals/scroll/hover/mobile/reduced motion | Every chapter | §06, §09 | Browser QA evidence |
| Guide: remove template marks, polish, SEO, GitHub/Vercel/domain | Future build | §21 | Build, deployed QA and ownership checks when in scope |
| Definition of done: spec only, no website/Notion activity | Deliverable status | §01, §21 | IA/spec delivered; implementation not claimed |

## 20 — Parent-managed tracking and unresolved inputs

Retain the following future Notion/tracking fields without accessing Notion: idea number; working title; buyer/budget owner; operator; hypothesis; five offer IDs; price hypotheses; source links; contact consent; interview date; permissioned dataset status; baseline/evaluator/threshold; paid SOW status; integration owner; safety boundary; regulatory review; demo URL; screenshot verification; name/domain verification; traffic cohort/spend; qualified meetings; decision; next action.

**Offer IDs:** `BP-DESK`, `BP-REVIEW`, `BP-PROOF`, `BP-SIGNAL`, `BP-REPORT`. These are internal identifiers, not registered product marks.

**Owner inputs still needed before relevant future launch steps:** verified legal/company name and domain; selected logo/identity; legal and privacy owner/contact; LinkedIn/Crunchbase URLs; approved font/image files; real form delivery and retention/deletion implementation; approved analytics setup; repository and deployment destination; authentic screenshots after build; pilot geography, sample scope, comparator, evaluator and thresholds; procurement/security/legal permission for any actual dataset.

These gaps do not block this IA. They must not be filled with invented business facts. No account creation, outreach, Notion update, domain purchase, paid campaign or real-data collection is implied by this document.

## 21 — Implementation handoff and acceptance gates

### Recommended build order

1. Confirm identity direction; design final logo/favicon and asset kit; keep brand provenance/license records.
2. Finalize route copy, all five offers and the coverage checklist; define shared UI tokens and component states.
3. Create the deterministic ten-case demo model and source relationships before marketing screenshots.
4. Build accessible static page layouts, navigation, forms and honest auth presentation across all routes.
5. Implement local-only review, packet generation/reset and truthful form boundaries.
6. Create original chapter visuals; capture actual demo UI; add scroll storytelling with reduced-motion/mobile equivalents.
7. Run content, interaction, accessibility, responsive and performance QA; produce desktop/mobile captures and a limitations register.
8. When actual launch scope is authorized, push to the intended GitHub repository, deploy through Vercel, configure the verified domain and review the deployed result. Never report deployment/domain connection without checking it.

### Acceptance checklist for the eventual website

- All five proposed modules appear on the homepage, menu, product index, individual page, pricing and relevant intake. Names, scopes and price units agree everywhere.
- Complete problem, solutions, platform, evaluation, company, request-demo, request-evaluation, contact, sign-in, trust, resources, data requirements, legal and 404 experiences.
- Logo/favicon match the chosen identity; no Lovable or other builder badges, template marks, default favicon or unrelated visual assets.
- Every major chapter has a purpose-built visual and motion/still-state plan. No endless repeated cards or generic “AI” diagrams.
- Source timestamps, missingness, confidence threshold, blind spots, reviewer ownership and no-control boundary survive all responsive layouts and exports.
- Ten-case counts and state transitions reconcile; source chronology and QC arithmetic agree; reject/blocked/empty paths are demonstrated.
- No live-status fiction, performance guarantee, accepted pricing claim, signed-revenue claim, real customer identifier or production connector.
- Buttons/menus/forms/accordions/tabs work by keyboard and touch. All routes load directly; anchors account for sticky header; scroll down/up and route cleanup work.
- No clipped copy, horizontal page overflow, trapped scroll, focus hidden behind overlays or unreadable document labels. Test reduced motion, short screens and font/media failure.
- No success analytics for mock submits, failed delivery or unconfirmed bookings. No sensitive or personal data in analytics payloads.
- Production build, relevant checks, browser runtime, internal links, metadata, favicon, social preview and asset loading are verified with recorded evidence.
- Privacy/auth/form integrations and remaining limitations are documented accurately; publish no legal/security assurances without verification.

### Definition of done for this planning deliverable

IA, homepage sequence, full five-product inventory, supporting-page plans, copy-ready hero/CTAs/cards, proposed brand direction, motion/responsive specification, deterministic workflow, data dictionary, sample packet, pilot ask/scorecard, disclosures, event plan, ad variants, screenshot brief and coverage register are specified. No website build or live pilot is claimed. Future implementation and future pilot each have their own acceptance gates above.

## 22 — Source notes

**User-supplied sources:** the full Concept 35 brief; STARTUP_WEBSITE_MASTER_GUIDE.md; two screenshots dated 25 October 2026; Screen Recording 2026-10-25 at 00.25.05.mov. The supplied brief includes citation markers [11] and [12] without a bibliography; those markers alone are not verified source URLs.

**Reference interpretation:** visual observations come from the supplied images/video samples. No current live Disclera website inspection is claimed. Design choices, route names, motion dimensions, proposed typography and sample records are planning recommendations, not researched company facts.

### External research, retrieved through Perplexity's high research preset

Research was retrieved for this specification on 25 October 2026 in the user's timezone. The following summarizes primary sources and omits vendor performance figures. Product offerings can change; recheck before publication.

| Topic | Source-supported finding | Consequence for this specification |
|---|---|---|
| AMP vision and analytics | AMP describes material identification, connections to its analytics and bale-QC use on its [Vision page](https://ampsortation.com/technologies/vision) | Do not position read-only observation or bale QC as an empty market |
| AMP hardware and facility systems | Official pages describe [Delta robotic sorting](https://ampsortation.com/technologies/delta) and [AMP ONE facility-scale systems](https://ampsortation.com/products/amp-one), including bale-related data | Distinguish this software concept from physical sorting; validate incremental value against actual incumbent workflows |
| Glacier hardware | Glacier describes its [sorting robot](https://endwaste.io/robot/) | Hardware-plus-software alternatives are real; do not illustrate BaleProof robotic actuation |
| Glacier facility visibility | [DataMap](https://endwaste.io/glacier-datamap-mrf-intelligence/) describes scanner-based material/facility monitoring and historical operational records | Monitoring alone is not sufficient differentiation; permissions, portability and buyer packet utility remain tests |
| Adjacent brand analytics | Glacier's [brand offering](https://endwaste.io/for-brands/) describes packaging-level insights | Keep brand/municipal adjacent segments separate from primary MRF demand |
| Newsreader | The [official project](https://github.com/productiontype/Newsreader) and [license](https://github.com/productiontype/Newsreader/blob/master/OFL.txt) identify SIL OFL 1.1 | Preserve notices with actual font files; proposed display face |
| Manrope | The [official repository](https://github.com/googlefonts/manrope) and [Google Fonts license](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt) identify SIL OFL 1.1 | Preserve notices; proposed body/UI face |
| IBM Plex | [IBM's repository](https://github.com/IBM/plex) and [license](https://github.com/IBM/plex/blob/master/LICENSE.txt) identify SIL OFL 1.1 and a reserved font name | Preserve notices and applicable modification restrictions; proposed mono/data family |
| ScrollTrigger | [Official documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) documents pinning, scrubbing and geometry refresh | Use selectively; accessibility and chapter-length limits here are design requirements, not automatic library guarantees |
| Lenis | [Official repository](https://github.com/darkroomengineering/lenis/) documents GSAP integration | One coordinated animation loop; smoothing remains optional and must be tested against native navigation |

**Inference from the market sources:** standalone buyer-evidence differentiation, cross-vendor data portability, usable bale-level ground truth, buyer acceptance and willingness to pay remain unproven. Public vendor descriptions do not establish third-party access rights or interoperability for BaleProof. The brief's price figures remain supplied test hypotheses; the research does not validate them.

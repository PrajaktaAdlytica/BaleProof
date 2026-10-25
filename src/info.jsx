import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  InnerHero,
  SectionHeading,
  Eyebrow,
  Badge,
  Image,
  Button,
  Steps,
  FinalCTA,
  Arrow,
  ArrowUpRight,
  CheckCircle,
  WarningCircle,
  Faq,
} from "./components";
import { sources, disclaimer } from "./data";
import { NotFound } from "./pages";
export function WhyChange() {
  return (
    <>
      <InnerHero
        eyebrow="The missing connection"
        title={
          <>
            An observation is not
            <br />
            <em>the whole story.</em>
          </>
        }
        copy="A camera sees a moment. A QC sample examines part of a bale. A shipment note records a handoff. A useful quality discussion needs to know how—and whether—they connect."
        image="material-sample.webp"
        label="Why change"
      />
      <section className="wrap section">
        <SectionHeading
          eyebrow="The current workflow"
          title={
            <>
              Good records.
              <br />
              <em>Fragmented context.</em>
            </>
          }
          copy="Scale tickets, manual bale audits, footage, broker notes and process-engineering judgment already support the work. The question is whether a reviewed evidence trail adds value beyond them."
        />
        <Steps
          items={[
            [
              "The stream changes",
              "Incoming materials vary. A camera may not observe every region or interval.",
            ],
            [
              "The sample has limits",
              "A QC sample is not automatically representative of an entire bale.",
            ],
            [
              "The association is uncertain",
              "Timestamp proximity does not by itself establish which bale a material entered.",
            ],
            [
              "The outcome may be absent",
              "Buyer sale/rejection records can be sparse or unavailable.",
            ],
          ]}
        />
      </section>
      <section className="chapter-tint section">
        <div className="wrap split-editorial">
          <div>
            <Eyebrow>The proposed approach</Eyebrow>
            <h2>
              Preserve the source.
              <br />
              <em>Expose the gap.</em>
            </h2>
            <p>
              Model a source-linked case, including alternative explanations,
              reviewer ownership and a dated next action. A reviewer decides
              whether the packet is useful for discussion.
            </p>
            <Button to="/platform">Explore the evidence model</Button>
          </div>
          <Image
            name="packet-v2.webp"
            alt="Illustrative source-linked evidence packet"
          />
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="A question to test"
          title="Does this add value to your existing workflow?"
          copy="AMP and Glacier already operate in hardware-plus-software categories. Independent software economics depend on data portability and incremental value beyond OEM dashboards. Read-only monitoring alone is not sufficient differentiation."
        />
        <Button to="/resources/market-context" text>
          Read the market context
        </Button>
      </section>
      <FinalCTA />
    </>
  );
}
export function Company() {
  return (
    <>
      <InnerHero
        eyebrow="About BaleProof"
        title={
          <>
            From material
            <br />
            <em>to defensible evidence.</em>
          </>
        }
        copy="BaleProof is a research-stage concept in materials-recovery quality intelligence. The ambition is simple: help operations and commodity-sales teams share a source-linked record of what they know—and what they do not."
        label="Company"
        image="archive-bale.webp"
        to="/contact"
        cta="Start a conversation"
      />
      <section className="wrap section company-principles">
        <div>
          <Eyebrow>Our vision</Eyebrow>
          <h2>
            One auditable trail.
            <br />
            <em>A shared understanding.</em>
          </h2>
          <p>
            Operators and commodity sales share an evidence trail from stream
            sample to bale shipment.
          </p>
        </div>
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h3>Make the human decision more reviewable.</h3>
          <p>
            Move from fragmented evidence to a defensible, human-approved
            decision through provenance, explicit uncertainty and careful
            review.
          </p>
          <p>
            Product advantage, demand and price acceptance remain unproven. No
            actual customers, signed revenue or live integrations are claimed.
          </p>
        </div>
      </section>
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we approach the work"
            title={
              <>
                Specificity over spectacle.
                <br />
                <em>Sources before certainty.</em>
              </>
            }
          />
          <Steps
            items={[
              [
                "The source stays visible",
                "Every important statement should retain the evidence and limitations behind it.",
              ],
              [
                "The operator stays responsible",
                "Certified operators and OEMs retain authority over equipment and safety interlocks.",
              ],
              [
                "The evaluation stays honest",
                "Agree a comparator and failure criteria before measuring results.",
              ],
            ]}
          />
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="A hypothesis for expansion"
          title={
            <>
              One plant first.
              <br />
              <em>Earn the next step.</em>
            </>
          }
          copy="Plant-level quality intelligence could lead to multi-facility reporting and buyer-facing traceability if the workflow proves useful and data is portable. These are future possibilities, not available features."
        />
        <div className="method-note">
          <h3>What would make the business credible?</h3>
          <p>
            Verified buyer count × tested annual contract value × reachable
            share, accounting for services and integration costs. Sector spend,
            waste volume and equipment capex are not software revenue. No
            revenue, valuation or TAM claim has been established.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Trust() {
  return (
    <>
      <InnerHero
        eyebrow="Trust & boundaries"
        title={
          <>
            The limits belong
            <br />
            <em>beside the evidence.</em>
          </>
        }
        copy="The proposed workflow supports a human review. It does not own equipment authority, imply source-data permission or turn incomplete observations into certainty."
        label="Trust"
        image="packet-v2.webp"
        to="/integrations"
        cta="Inspect data requirements"
      />
      <section className="wrap section">
        <div className="gate-columns">
          <article>
            <Eyebrow>Data access</Eyebrow>
            <h2>
              Permission
              <br />
              <em>comes first.</em>
            </h2>
            <p>
              Footage ownership, labeling cost, stream variability, blind spots
              and sparse bale-level ground truth are distinct constraints.
              Confirm who can share each record and for which purpose.
            </p>
          </article>
          <article>
            <Eyebrow>Physical control</Eyebrow>
            <h2>
              Authority stays
              <br />
              <em>on the floor.</em>
            </h2>
            <p>
              Conveyor speed, robotic picks and safety interlocks remain with
              certified operators/OEMs. This preview has no writeback, dispatch
              or equipment connection.
            </p>
          </article>
        </div>
      </section>
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="The review boundary"
            title="Human ownership at consequential steps."
          />
          <Steps
            items={[
              [
                "Before access",
                "Procurement/legal permission and signed sharing terms before real records.",
              ],
              [
                "Before interpretation",
                "Camera coverage, sampling limitations and confidence threshold visible first.",
              ],
              [
                "Before a packet",
                "Named reviewer, alternatives, evidence gaps and a decision rationale.",
              ],
              [
                "Before expansion",
                "Paid commitment, agreed comparator and sufficient ground truth.",
              ],
            ]}
          />
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="This preview, precisely"
          title={
            <>
              Synthetic records.
              <br />
              <em>Local decisions.</em>
            </>
          }
          copy="The demo uses invented people, organizations, IDs and timestamps. Review changes live only in browser memory and can be reset. Downloads retain the synthetic label. Forms do not transmit or save entries."
        />
        <div className="feature-rows">
          {[
            [
              "No claimed certifications",
              "No security certification, regulatory approval, hosted region, encryption implementation or legal clearance is asserted.",
            ],
            [
              "No external data flow",
              "The preview does not load footage from production systems or send records to buyers.",
            ],
            [
              "Review before a future connection",
              "Choose actual data handling, retention, deletion and access controls with the responsible human owners before a real pilot.",
            ],
          ].map(([a, b], i) => (
            <article key={a}>
              <span>0{i + 1}</span>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Integrations() {
  return (
    <>
      <InnerHero
        eyebrow="Data requirements"
        title={
          <>
            Start with the records
            <br />
            <em>you have permission to use.</em>
          </>
        }
        copy="Existing files are the starting point for a retrospective evaluation. Production connectors, APIs and OEM interoperability are future work—not available integrations."
        label="Data requirements"
        image="coverage-map.webp"
        to="/request-evaluation"
        cta="Discuss dataset feasibility"
      />
      <section className="wrap section">
        <SectionHeading
          eyebrow="Inputs for one consenting MRF"
          title="A minimum useful evidence set."
        />
        <div className="input-register">
          {[
            [
              "Existing footage or sample records",
              "Owner, capture timestamp, source reference, line context and usable coverage.",
            ],
            [
              "Bale QC samples",
              "Sample method, sample mass, non-target mass, bale association and representativeness limits.",
            ],
            [
              "Sale / rejection and shipment notes",
              "Permissioned outcome references and an independently defensible link to the bale.",
            ],
            [
              "Historical manual process",
              "A comparison method, evaluator, observation window and usable baseline.",
            ],
          ].map(([a, b], i) => (
            <article key={a}>
              <span>0{i + 1}</span>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Data portability is a test"
            title={
              <>
                An export is only useful
                <br />
                <em>if its context travels.</em>
              </>
            }
            copy="The proposed evidence model keeps original timestamps, source IDs, annotations, alternative explanations, reviewer decisions and missingness together. Confirm actual rights and usable exports with the integration owner."
          />
          <Steps
            items={[
              [
                "Ownership",
                "Confirm image rights and permission to share each source.",
              ],
              [
                "Labeling",
                "Scope the labor and cost of stream labeling and review.",
              ],
              [
                "Ground truth",
                "Check that bale/QC/outcome associations support the proposed comparison.",
              ],
              [
                "Human review",
                "Agree production connector boundaries before any implementation.",
              ],
            ]}
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
const resources = [
  {
    slug: "example-bale-packet",
    type: "Synthetic artifact",
    title: "Inside a source-linked bale packet.",
    desc: "The observation, QC sample, shipment note and unanswered questions behind DEMO-C004.",
    image: "packet-v2.webp",
  },
  {
    slug: "mrf-audit-checklist",
    type: "Evaluation guide",
    title: "Before the first shadow audit.",
    desc: "The people, permissions, source records and comparator that make a pilot reviewable.",
    image: "archive-bale.webp",
  },
  {
    slug: "market-context",
    type: "Market context",
    title: "A category with existing alternatives.",
    desc: "Where OEM analytics and manual workflows fit—and what standalone evidence must prove.",
    image: "coverage-map.webp",
  },
];
export function Resources() {
  return (
    <>
      <InnerHero
        eyebrow="Resources"
        title={
          <>
            Useful context.
            <br />
            <em>Open questions.</em>
          </>
        }
        copy="Inspect a synthetic artifact, prepare the permission checklist and understand the alternatives before discussing an evaluation."
        image="packet-v2.webp"
        label="Resources"
        to="/resources/example-bale-packet"
        cta="Read the example packet"
      />
      <section className="wrap section resources-grid">
        {resources.map((r) => (
          <Link
            to={`/resources/${r.slug}`}
            className="resource-card"
            key={r.slug}
          >
            <div>
              <Image name={r.image} alt={r.type + " illustrative visual"} />
            </div>
            <Eyebrow>{r.type}</Eyebrow>
            <h2>{r.title}</h2>
            <p>{r.desc}</p>
            <span className="inline-link">
              Read resource
              <Arrow />
            </span>
          </Link>
        ))}
      </section>
      <FinalCTA />
    </>
  );
}
export function AuditChecklist() {
  const [checked, setChecked] = useState([]);
  const items = [
    "MRF budget owner and commodity-sales lead identified",
    "Named day-to-day operator recruited",
    "Data / integration owner identified",
    "Footage ownership and sharing permission confirmed",
    "Procurement/legal permission and paid scope agreed",
    "Camera coverage and sample limitations documented",
    "Bale-level QC/outcome ground truth available",
    "Historical comparator and independent evaluator agreed",
    "Metric, window, threshold and failure rule preregistered",
    "Equipment/control boundary and required safety sign-off documented",
  ];
  return (
    <>
      <InnerHero
        eyebrow="Evaluation guide"
        title={
          <>
            Before the first
            <br />
            <em>shadow audit.</em>
          </>
        }
        copy="Use this checklist to structure a readiness conversation. Checking boxes here does not grant permission or replace signed terms."
        image="archive-bale.webp"
        label="Audit checklist"
        parent={["Resources", "/resources"]}
      />
      <section className="reading-section wrap">
        <Eyebrow>Local checklist / nothing is saved</Eyebrow>
        <h2>
          {checked.length} of {items.length} discussion points reviewed.
        </h2>
        <div className="audit-checklist">
          {items.map((s, i) => (
            <label key={s}>
              <input
                type="checkbox"
                checked={checked.includes(i)}
                onChange={() =>
                  setChecked((v) =>
                    v.includes(i) ? v.filter((x) => x !== i) : [...v, i],
                  )
                }
              />
              <span>{s}</span>
            </label>
          ))}
        </div>
        <p className="notice">
          Pause if permissions, safety sign-off or historical comparators are
          unavailable. Fail the proposed comparison if usable bale-level ground
          truth is absent.
        </p>
        <Button to="/evaluation/pilot-protocol">
          Read the full pilot protocol
        </Button>
      </section>
      <FinalCTA />
    </>
  );
}
export function MarketContext() {
  return (
    <>
      <InnerHero
        eyebrow="Market context"
        title={
          <>
            An existing category.
            <br />
            <em>An unproven advantage.</em>
          </>
        }
        copy="Hardware, vision systems, analytics and human audits already support materials recovery. Standalone evidence software must add value to the actual process a facility uses."
        image="coverage-map.webp"
        label="Market context"
        parent={["Resources", "/resources"]}
      />
      <section className="reading-section wrap">
        <Eyebrow>Research context / 25 October 2026</Eyebrow>
        <h2>The alternatives are part of the evaluation.</h2>
        <p>
          AMP describes vision and analytics, including bale-QC context,
          alongside sorting systems. Glacier describes robotic sorting and
          facility/material monitoring. These official descriptions establish a
          competitive context; they do not validate BaleProof’s workflow,
          pricing or access to their data.
        </p>
        <div className="source-links">
          {sources.map(([a, b, c]) => (
            <a href={b} target="_blank" rel="noreferrer" key={b}>
              <strong>
                {a}
                <ArrowUpRight size={18} />
              </strong>
              <p>{c}</p>
            </a>
          ))}
        </div>
        <h3>Other substitutes</h3>
        <p>
          Existing OEM dashboards, camera/robot integrators, scale tickets,
          manual bale audits, commodity brokers and process engineers. Compare
          against the workflow the operator actually has, rather than an
          imagined empty market.
        </p>
        <h3>What remains a hypothesis</h3>
        <p>
          Willingness to share footage and bale outcomes, portable source data,
          buyer acceptance of an evidence packet and willingness to pay for
          value beyond incumbent analytics. Public vendor descriptions do not
          establish third-party API permissions or interoperability.
        </p>
        <h3>Evidence and commercial barriers</h3>
        <p>
          The supplied concept research describes stronger evidence for
          competing robotic facilities and weaker evidence for standalone
          analytics pricing. Labeling cost, variable streams, sparse ground
          truth, capex procurement and bundled analytics all need testing.
        </p>
        <p className="tiny">
          These are source-grounded context and explicitly stated inferences,
          not endorsements or partner relationships. No competitor imagery is
          used.
        </p>
        <Button to="/evaluation">Inspect the measurement plan</Button>
      </section>
      <FinalCTA />
    </>
  );
}
export function Legal() {
  const path = useLocation().pathname;
  const privacy = path.endsWith("privacy");
  return (
    <section className="reading-section wrap legal-page">
      <Eyebrow>Draft notice / concept preview</Eyebrow>
      <h1>{privacy ? "Privacy, in context." : "Terms of this preview."}</h1>
      <p className="lead">
        {privacy
          ? "This notice describes the local concept website you are viewing. It is not a claim that production data-handling controls have been implemented."
          : "BaleProof is a research-stage concept. The proposed modules and price figures are hypotheses for discussion."}
      </p>
      <Badge>Draft · Not counsel-approved</Badge>
      {(privacy
        ? [
            [
              "What this preview handles",
              "Demo records are invented. Form entries are held only in the page’s temporary memory for local validation. There is no form backend, account creation, operational upload, analytics service or external submission connected.",
            ],
            [
              "Your browser and downloads",
              "Local review state resets when the page reloads or you choose Reset demo. An exported packet is saved only where you choose to download it. It retains DEMO / SYNTHETIC DATA labels.",
            ],
            [
              "Consent and follow-up",
              "The preview shows separate follow-up and optional marketing choices. Nothing is sent or retained. A production form will require a verified owner, actual delivery, retention and deletion handling before use.",
            ],
            [
              "Do not submit real records",
              "Do not enter footage, bale records, invoices, contracts, credentials or sensitive personal/operational information. Real-data access belongs in a human security/legal review under signed terms.",
            ],
            [
              "Before a public launch",
              "A responsible entity, privacy contact, hosting details, actual processors, consent handling and deletion channel must be verified. None is invented here. General questions can be explored in the unconnected contact-form preview.",
            ],
          ]
        : [
            [
              "Scope",
              "The website and isolated demo are for exploring a proposed human-reviewed quality evidence workflow. They are not an operating product, quality certificate or source of operational instructions.",
            ],
            [
              "Synthetic content",
              "Names, organizations, source references, timestamps, classifications and review histories are invented. Generated industrial images are illustrations, not actual facility or customer records.",
            ],
            [
              "No physical authority",
              "Conveyor speed, robotic picks and safety interlocks remain with certified operators and OEMs. This preview has no control, writeback, dispatch or external integration.",
            ],
            [
              "Prices and results",
              "Prices are separately quotable test hypotheses. No accepted offer, checkout, savings guarantee, established revenue, performance outcome or customer traction is represented.",
            ],
            [
              "A future paid evaluation",
              "Real records require permissions, paid scope and an agreed historical comparison. Procurement, legal and safety owners must review applicable terms before any real pilot.",
            ],
          ]
      ).map(([h, p]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{p}</p>
        </section>
      ))}
      <Button to="/contact" text>
        Open contact preview
      </Button>
    </section>
  );
}
export function Accessibility() {
  return (
    <section className="reading-section wrap legal-page">
      <Eyebrow>Accessibility</Eyebrow>
      <h1>Read at your pace.</h1>
      <p className="lead">
        The page keeps an ordinary reading order, visible keyboard focus and
        complete content when motion is reduced.
      </p>
      <h2>Motion controls</h2>
      <p>
        The footer’s Motion control turns the scene animations off. The
        operating system’s reduced-motion preference is honored. Product links
        are available independently of the horizontal scroll sequence, including
        in navigation.
      </p>
      <h2>Keyboard and touch</h2>
      <p>
        Use Tab to reach controls, Enter to activate links and Space to toggle
        buttons or disclosure panels. Escape closes navigation menus. The mobile
        menu offers the same destinations as desktop.
      </p>
      <h2>Evidence and readability</h2>
      <p>
        Demo labels, timestamps, uncertainty and reviewer context remain visible
        on mobile. Charts have data summaries; colour is paired with words and
        icons. Narrow evidence tables can be scrolled within their own region.
      </p>
      <h2>Known limits</h2>
      <p>
        Generated concept illustrations are decorative or supplementary;
        essential facts are available as text. This is a prototype, not a formal
        accessibility certification. Contact delivery is unconnected.
      </p>
      <Button to="/contact">Open contact preview</Button>
    </section>
  );
}
export function AccessHelp() {
  return (
    <>
      <InnerHero
        eyebrow="Access help"
        title={
          <>
            No password needed.
            <br />
            <em>Follow a sample case.</em>
          </>
        }
        copy="The current preview has no real accounts, identity provider, SSO or password recovery. Open the synthetic demo directly to explore the workflow."
        label="Access help"
        image="packet-v2.webp"
        to="/demo/workbench"
        cta="Open the synthetic workbench"
      />
      <section className="reading-section wrap">
        <h2>What resets?</h2>
        <p>
          Review actions change only local demo state. Reset restores the
          original ten-case queue; refreshing the page also starts again.
          Nothing is written to a facility system.
        </p>
        <h2>Interested in a walkthrough?</h2>
        <p>
          The request form is a frontend preview. It shows the intended intake
          and consent states without sending a request.
        </p>
        <Button to="/request-demo" text>
          Preview walkthrough request
        </Button>
      </section>
    </>
  );
}

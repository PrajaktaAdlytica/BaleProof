import React, { useState } from "react";
import Intro from "./Intro";
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import {
  products,
  roles,
  scorecard,
  protocol,
  sources,
  disclaimer,
} from "./data";
import {
  Button,
  Eyebrow,
  Badge,
  Logo,
  Image,
  InnerHero,
  SectionHeading,
  FinalCTA,
  Faq,
  Coverage,
  ProductsRail,
  ProductVisual,
  Steps,
  PriceTable,
  Arrow,
  ArrowRight,
  ArrowUpRight,
  WarningCircle,
  CheckCircle,
  Camera,
  Eye,
  Files,
  LockSimple,
  Clock,
  FileText,
  UserCircle,
  LinkSimple,
} from "./components";
export function Home({ motion }) {
  return (
    <>
      <Intro motion={motion} />
      <section className="home-hero" id="home-story">
        <Image
          name="home-hero.webp"
          alt="Illustrative compressed recyclable bale with an evidence sleeve in an ivory inspection space"
          className="hero-background"
          eager
          fetchPriority="high"
        />
        <div className="wrap home-hero-content">
          <Eyebrow>
            Materials recovery / quality intelligence
            <span className="hero-data-label">DEMO · SIMULATED DATA</span>
          </Eyebrow>
          <h1 tabIndex="-1">
            Every bale
            <br className="hero-break" /> has a story.
            <br />
            <em>Show the source.</em>
          </h1>
          <p>
            Connect contamination evidence to the bale buyers actually inspect.
          </p>
          <p className="hero-audience">
            For MRF operations and commodity sales.
          </p>
          <div className="button-row">
            <Button to="/request-evaluation">Request a paid evaluation</Button>
            <Button to="/demo" text>
              Explore synthetic demo
            </Button>
          </div>
        </div>
        <div className="hero-source source-one">
          <span>01</span>Conveyor sample
        </div>
        <div className="hero-source source-two">
          <span>02</span>Bale QC
        </div>
        <div className="hero-source source-three">
          <span>03</span>Shipment note
        </div>
        <div className="hero-bottom wrap">
          <a href="#coverage" className="scroll-cue">
            Follow the evidence
            <ArrowRight size={15} />
          </a>
          <span>Illustrative material · DEMO / SIMULATED DATA</span>
        </div>
      </section>
      <section className="coverage-section wrap section" id="coverage">
        <div className="coverage-copy" data-reveal>
          <Eyebrow>Conveyor visibility</Eyebrow>
          <h2>
            Look closer before
            <br />
            <em>you conclude.</em>
          </h2>
          <p>
            Understand where the cameras see material, where visibility is
            limited, and where human review adds context.
          </p>
          <div className="score-pair">
            <div>
              <span>Illustrative score</span>
              <strong>0.73</strong>
            </div>
            <div>
              <span>Review threshold</span>
              <strong>0.85</strong>
            </div>
          </div>
          <small>Simulated, uncalibrated score</small>
        </div>
        <div className="coverage-composition">
          <Image
            name="material-sample.webp"
            alt="Illustrative PET and paper sample with ambiguous thin film"
            className="macro-sample"
          />
          <Coverage />
        </div>
      </section>
      <section className="evidence-chapter">
        <div className="wrap evidence-inner">
          <div className="evidence-copy" data-reveal>
            <Eyebrow>Evidence packet</Eyebrow>
            <h2>
              The source behind
              <br />
              <em>every statement.</em>
            </h2>
            <p>
              Bring together visual evidence, bale records and human review in
              one packet.
            </p>
            <div className="evidence-boundary">
              <Eye size={18} />
              <span>Human review. No equipment control.</span>
            </div>
            <Button to="/resources/example-bale-packet" secondary>
              Explore example packet
            </Button>
          </div>
          <Link
            to="/resources/example-bale-packet"
            className="packet-image-link"
            aria-label="Open the synthetic bale evidence packet"
          >
            <Image
              name="packet-v2.webp"
              alt="Illustrative BaleProof evidence packet, DEMO-C004, with unresolved linkage"
            />
            <span className="packet-hover">
              Open the source-linked example
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </section>
      <ProductsRail motion={motion} />
      <section className="platform-chapter section" id="after-products">
        <div className="wrap">
          <SectionHeading
            eyebrow="The shared foundation"
            title={
              <>
                Separate observations.
                <br />
                <em>One reviewable case.</em>
              </>
            }
            copy="Footage, samples and shipment notes answer different questions. Keep their sources together without hiding the gaps between them."
          />
          <div className="platform-flow">
            {[
              [Camera, "Existing sources", "Video / samples / records"],
              [LinkSimple, "A linked case", "Timestamps / annotations / gaps"],
              [UserCircle, "Human review", "Alternatives / decision / owner"],
              [Files, "Evidence packet", "Sources / limitations / export"],
            ].map(([Icon, title, sub], i) => (
              <React.Fragment key={title}>
                <div data-reveal>
                  <Icon size={35} weight="light" />
                  <span className="flow-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{sub}</p>
                </div>
                {i < 3 && <ArrowRight className="flow-arrow" size={23} />}
              </React.Fragment>
            ))}
          </div>
          <div className="section-end">
            <span className="tiny">
              A proposed evidence model. All production connectors are future
              work.
            </span>
            <Button to="/platform" text>
              Explore the platform
            </Button>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="The workbench"
          title={
            <>
              One observation.
              <br />
              <em>Every question in view.</em>
            </>
          }
          copy="Follow a suspected contamination event through coverage, a sample audit and an unresolved shipment association. Make a local review decision in the demo."
        />
        <div className="workbench-teaser" data-reveal>
          <div className="teaser-header">
            <Logo />
            <Badge>Demo · synthetic data</Badge>
            <Link to="/demo/workbench">
              Open workbench
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="teaser-grid">
            <div className="teaser-queue">
              <Eyebrow>Review queue</Eyebrow>
              {[
                ["DEMO-C003", "Source unavailable", "Blocked"],
                ["DEMO-C004", "Bale association", "Pending"],
                ["DEMO-C005", "Review complete", "Completed"],
              ].map(([n, t, s]) => (
                <Link
                  key={n}
                  to={`/demo/cases/${n}`}
                  className={n.endsWith("004") ? "selected" : ""}
                >
                  <span>{n}</span>
                  <strong>{t}</strong>
                  <small>{s}</small>
                </Link>
              ))}
            </div>
            <div className="teaser-main">
              <Eyebrow>DEMO-C004 / Line A</Eyebrow>
              <h3>
                Suspected film.
                <br />
                Unconfirmed bale link.
              </h3>
              <Image
                name="material-sample.webp"
                alt="Invented source observation"
              />
              <span className="tiny">
                16 Sep 2026 · 08:14:22 UTC · Synthetic source
              </span>
            </div>
            <div className="teaser-evidence">
              <Eyebrow>What we know</Eyebrow>
              <p>
                <CheckCircle />
                Camera source available
              </p>
              <p>
                <CheckCircle />
                QC sample linked for review
              </p>
              <p>
                <WarningCircle />
                Bale association unresolved
              </p>
              <p>
                <WarningCircle />
                Buyer outcome missing
              </p>
              <div className="teaser-score">
                <span>Illustrative score</span>
                <strong>
                  0.73 <small>/ 0.85 threshold</small>
                </strong>
              </div>
              <Button to="/demo/cases/DEMO-C004">Review the demo case</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="roles-chapter section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Shared evidence. Distinct jobs."
            title={
              <>
                Built around the
                <br />
                <em>people making the decision.</em>
              </>
            }
          />
          <div className="roles-grid">
            {roles.map((r, i) => (
              <Link to={`/solutions/${r.id}`} key={r.id} data-reveal>
                <span className="role-index">
                  0{i + 1} / {i === 2 ? "Adjacent audience" : "Primary team"}
                </span>
                <h3>{r.label}</h3>
                <p>{r.desc}</p>
                <span className="inline-link">
                  Explore the workflow
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section evaluation-preview">
        <div data-reveal>
          <Eyebrow>Evidence before claims</Eyebrow>
          <h2>
            Define useful.
            <br />
            <em>Then measure it.</em>
          </h2>
          <p>
            Independently compare packet completeness and reviewer time—or
            documented buyer disputes—with the historical manual process.
          </p>
          <Button to="/evaluation" text>
            See the evaluation method
          </Button>
        </div>
        <div className="scorecard-sheet" data-reveal>
          <div className="sheet-top">
            <FileText size={22} />
            <span>Evaluation worksheet / not measured</span>
          </div>
          {scorecard.slice(0, 3).map(([a, b, c]) => (
            <div className="scorecard-row" key={a}>
              <strong>{a}</strong>
              <p>{b}</p>
              <span>{c}</span>
            </div>
          ))}
          <small>
            No outcome or performance improvement has been established.
          </small>
        </div>
      </section>
      <section className="trust-strip">
        <div className="wrap">
          <LockSimple size={36} weight="light" />
          <div>
            <Eyebrow>The boundary is part of the product</Eyebrow>
            <h3>
              Your evidence deserves context.
              <br />
              Your equipment stays with its operators.
            </h3>
          </div>
          <Button to="/trust" text>
            Read the boundaries
          </Button>
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="The pilot"
          title={
            <>
              A small beginning.
              <br />
              <em>A specific comparison.</em>
            </>
          }
          copy="Select one offer. Name the operator and data owner. Agree permissions, baseline and success criteria before any real records are used."
        />
        <Steps items={protocol.slice(0, 3)} />
        <div className="section-end">
          <span className="tiny">
            Paid SOW and signed sharing terms required for a future real
            evaluation.
          </span>
          <Button to="/evaluation/pilot-protocol" text>
            See the full protocol
          </Button>
        </div>
      </section>
      <section className="pricing-section section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Commercial starting points"
            title={
              <>
                Five separate offers.
                <br />
                <em>Five test hypotheses.</em>
              </>
            }
            copy="Discuss scope, data costs and procurement appetite. These figures are interview prompts, not confirmed market rates or active checkout plans."
          />
          <PriceTable />
          <Button to="/pricing" text>
            Explore scope and pricing
          </Button>
        </div>
      </section>
      <Faq />
      <FinalCTA />
    </>
  );
}
export function ProductPage() {
  const { slug } = useParams(),
    p = products.find((x) => x.id === slug);
  if (!p) return <NotFound />;
  return (
    <>
      <InnerHero
        eyebrow={`BaleProof / ${p.name}`}
        label={p.name}
        parent={["Products", "/products"]}
        title={p.headline}
        copy={p.intro}
        image={p.asset}
      >
        <div className="button-row">
          <Button to={`/request-evaluation?offer=${p.id}`}>
            Discuss {p.name}
          </Button>
          <Button to="/demo" text>
            Explore the demo
          </Button>
        </div>
      </InnerHero>
      <div className="product-summary-strip wrap">
        <span>{p.num} / Proposed module</span>
        <strong>{p.scope}</strong>
        <div>
          {p.price}
          <small>{p.unit} · Test hypothesis</small>
        </div>
      </div>
      <section className="wrap section">
        <SectionHeading
          eyebrow="The job it owns"
          title={
            <>
              Specific inputs.
              <br />
              <em>A reviewable output.</em>
            </>
          }
          copy={p.output}
        />
        <div className="input-output">
          <div>
            <Eyebrow>Bring to the review</Eyebrow>
            {p.inputs.map((s, i) => (
              <p key={s}>
                <span>0{i + 1}</span>
                {s}
              </p>
            ))}
          </div>
          <div className="output-panel">
            <Files size={36} weight="light" />
            <h3>{p.output}</h3>
            <Badge>Human-reviewed · proposed output</Badge>
          </div>
        </div>
      </section>
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="The workflow"
            title={
              <>
                A careful path
                <br />
                <em>from source to review.</em>
              </>
            }
          />
          <Steps items={p.steps} />
          <div className="product-detail-visual">
            {p.id === "material-review" ? (
              <Coverage />
            ) : (
              <ProductVisual product={p} large />
            )}
            <div>
              <Eyebrow>A question for evaluation</Eyebrow>
              <h3>{p.question}</h3>
              <p>
                Confirm an independent comparator and enough usable ground truth
                before treating the output as decision support.
              </p>
              <Button to="/evaluation" text>
                Read the measurement plan
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="Designed for the work"
          title={
            <>
              The detail behind
              <br />
              <em>the decision.</em>
            </>
          }
        />
        <div className="feature-rows">
          {p.features.map(([a, b], i) => (
            <article data-reveal key={a}>
              <span>0{i + 1}</span>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="boundary-section">
        <div className="wrap boundary-inner">
          <WarningCircle size={34} weight="light" />
          <div>
            <Eyebrow>Explicit boundaries</Eyebrow>
            <h3>{p.limits}</h3>
            <p>
              All production connectors are future work. Certified operators and
              OEMs retain physical authority.
            </p>
          </div>
        </div>
      </section>
      <section className="wrap section product-commercial">
        <div>
          <Eyebrow>Indicative evaluation hypothesis</Eyebrow>
          <h2>
            {p.price}
            <small>{p.unit}</small>
          </h2>
          <p>
            Proposed price to test in interviews and a conditional paid SOW.
            Labeling/video costs and services are separately scoped.
          </p>
          <Button to={`/request-evaluation?offer=${p.id}`}>
            Discuss this proposed offer
          </Button>
        </div>
        <div>
          <Eyebrow>Part of the evidence platform</Eyebrow>
          <h3>
            One shared source model.
            <br />A distinct job and quote.
          </h3>
          <p>
            Provenance, missingness, reviewer ownership and export context
            connect the suite. Each offer keeps its own scope.
          </p>
          <Button to="/platform" text>
            Explore the shared foundation
          </Button>
        </div>
      </section>
      <Faq
        items={[
          [`What does ${p.name} produce?`, p.output],
          ["What is excluded?", p.limits],
          [
            "What makes an evaluation ready?",
            "A named operator, data owner, permissions, a signed paid scope and an agreed historical comparison with adequate bale-level ground truth.",
          ],
        ]}
      />
      <FinalCTA />
    </>
  );
}
export function ProductsPage() {
  return (
    <>
      <InnerHero
        eyebrow="The product portfolio"
        title={
          <>
            Five offers.
            <br />
            <em>One evidence trail.</em>
          </>
        }
        copy="Each proposed module owns a specific job—from understanding feedstock to preparing a buyer packet. Start with one evaluation, not an assumed suite-wide rollout."
        label="Products"
        image="archive-bale.webp"
        to="/request-evaluation"
        cta="Discuss the right starting point"
      />
      <section className="wrap product-index">
        {products.map((p) => (
          <article className="product-index-row" key={p.id} data-reveal>
            <div>
              <Eyebrow>
                {p.num} / {p.tag}
              </Eyebrow>
              <h2>{p.name}</h2>
              <p className="lead">{p.scope}</p>
              <p>{p.intro}</p>
              <p className="index-price">
                {p.price} <span>{p.unit} · Test hypothesis</span>
              </p>
              <Button to={`/products/${p.id}`}>Explore {p.name}</Button>
            </div>
            <div className="product-index-art">
              <ProductVisual product={p} large />
            </div>
          </article>
        ))}
      </section>
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Shared foundation"
            title={
              <>
                Keep the job specific.
                <br />
                <em>Keep the sources connected.</em>
              </>
            }
            copy="The proposed platform shares provenance, annotations, exceptions, reviewer ownership and reversible exports. It does not turn five separate offers into five CRM tabs."
          />
          <Button to="/platform" text>
            Explore the platform
          </Button>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function Pricing() {
  return (
    <>
      <InnerHero
        eyebrow="Commercial starting points"
        title={
          <>
            Specific scope.
            <br />
            <em>Transparent hypotheses.</em>
          </>
        }
        copy="Five independently quotable offers. Each figure is a starting point for interviews and a conditional paid evaluation—not a verified market rate, active plan or savings promise."
        image="packet-v2.webp"
        label="Pricing"
        to="/request-evaluation"
        cta="Discuss an evaluation"
      />
      <section className="wrap section">
        <Badge>Proposed pricing · Test hypotheses only</Badge>
        <PriceTable />
      </section>
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="What belongs in the quote"
            title={
              <>
                Agree the work.
                <br />
                <em>Then agree the price.</em>
              </>
            }
          />
          <Steps
            items={[
              [
                "One selected module",
                "Define the plant, line, program or bale-batch scope. A bale batch is defined in the SOW, not assumed to mean one bale.",
              ],
              [
                "Data and review effort",
                "Quote footage preparation, labeling, video processing and any integration/services effort separately.",
              ],
              [
                "The comparison",
                "Agree evaluator, baseline, observation window, usable coverage and a failure threshold before work begins.",
              ],
            ]}
          />
        </div>
      </section>
      <Faq />
      <FinalCTA />
    </>
  );
}
export function Solutions() {
  const { slug } = useParams();
  const role = roles.find((x) => x.id === slug);
  if (slug && !role) return <NotFound />;
  if (role)
    return (
      <>
        <InnerHero
          eyebrow={`Solutions / ${role.label}`}
          title={role.short}
          copy={role.desc}
          label={role.label}
          parent={["Solutions", "/solutions"]}
          image={role.asset}
          to={`/request-evaluation?role=${role.id}`}
          cta="Discuss this workflow"
        />
        <section className="wrap section">
          <SectionHeading
            eyebrow={
              role.id === "collection-programs"
                ? "Adjacent buyer segment"
                : "The primary operating team"
            }
            title={
              <>
                Put the evidence
                <br />
                <em>in the right hands.</em>
              </>
            }
            copy={
              role.id === "collection-programs"
                ? "Source-program feedback requires a defensible program association. Municipal and EPR opportunities are counted separately from MRF paid demand."
                : "The operations manager and commodity-sales lead share the evaluation. A named day-to-day operator and data/integration owner join before real records are used."
            }
          />
          <Steps
            items={
              role.id === "commodity-sales"
                ? [
                    [
                      "Start with the buyer question",
                      "Identify the statement that needs source support.",
                    ],
                    [
                      "Inspect the association",
                      "Review sample representativeness, QC and shipment notes.",
                    ],
                    [
                      "Carry limitations forward",
                      "An evidence packet is not a quality certificate or guaranteed acceptance.",
                    ],
                  ]
                : [
                    [
                      "Define the question",
                      "Agree which operational decision the evidence could support.",
                    ],
                    [
                      "Review what is available",
                      "Map permissions, coverage, timestamps and missing ground truth.",
                    ],
                    [
                      "Make the comparison",
                      "Use an independently reviewed paid scope and historical baseline.",
                    ],
                  ]
            }
          />
        </section>
        <section className="chapter-tint section">
          <div className="wrap">
            <SectionHeading
              eyebrow="Relevant proposed offers"
              title="A focused place to begin."
            />
            <div className="solution-products">
              {role.modules.map((id) => {
                const p = products.find((x) => x.id === id);
                return (
                  <Link to={`/products/${id}`} key={id}>
                    <Eyebrow>{p.num}</Eyebrow>
                    <h3>{p.name}</h3>
                    <p>{p.scope}</p>
                    <ArrowUpRight size={24} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <FinalCTA />
      </>
    );
  return (
    <>
      <InnerHero
        eyebrow="Solutions"
        title={
          <>
            Different jobs.
            <br />
            <em>Shared evidence.</em>
          </>
        }
        copy="BaleProof starts with the MRF operations manager and commodity-sales lead. Each supporting role sees the source and the limits behind the same case."
        image="archive-bale.webp"
        label="Solutions"
      />
      <section className="wrap section">
        {roles.map((r, i) => (
          <article className="solution-row" key={r.id}>
            <span className="step-number">0{i + 1}</span>
            <div>
              <Eyebrow>
                {i === 2 ? "Adjacent audience" : "Primary team"}
              </Eyebrow>
              <h2>{r.label}</h2>
            </div>
            <div>
              <h3>{r.short}</h3>
              <p>{r.desc}</p>
              <Button to={`/solutions/${r.id}`} text>
                Explore the workflow
              </Button>
            </div>
          </article>
        ))}
      </section>
      <FinalCTA />
    </>
  );
}
export function Platform() {
  return (
    <>
      <InnerHero
        eyebrow="The evidence platform"
        title={
          <>
            Bring the sources together.
            <br />
            <em>Keep the uncertainty visible.</em>
          </>
        }
        copy="A proposed workspace around one concrete record and decision. Inputs, exceptions, reviewer ownership and a dated next action stay in view."
        image="packet-v2.webp"
        label="Platform"
      />
      <section className="wrap section">
        <SectionHeading
          eyebrow="From source to packet"
          title={
            <>
              An evidence trail.
              <br />
              <em>Not an autonomous decision.</em>
            </>
          }
        />
        <Steps
          items={[
            [
              "Source register",
              "Input timestamps, permission status and original references.",
            ],
            [
              "Linked case",
              "Observations, sample classifications, annotations and alternative explanations.",
            ],
            [
              "Review checkpoint",
              "Named reviewer, explicit decision, rationale and dated next action.",
            ],
            [
              "Reversible export",
              "An evidence packet with source links, limitations and review state.",
            ],
          ]}
        />
      </section>
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Visibility before interpretation"
            title="Start with what can be observed."
          />
          <Coverage />
        </div>
      </section>
      <section className="wrap section">
        <SectionHeading
          eyebrow="Shared controls"
          title={
            <>
              Context stays
              <br />
              <em>with the record.</em>
            </>
          }
        />
        <div className="feature-rows">
          {[
            [
              "Missingness is information",
              "Absent buyer outcomes and camera blind spots remain visible. Missing data never becomes a zero.",
            ],
            [
              "Human-owned decisions",
              "Reviewers can prepare a packet with limitations, request evidence or reject an association.",
            ],
            [
              "Portable evidence",
              "The local demo exports a reversible source-linked packet. Production portability must be tested; no current connector is claimed.",
            ],
          ].map(([a, b], i) => (
            <article key={a}>
              <span>0{i + 1}</span>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
        <Button to="/integrations" text>
          Inspect the data requirements
        </Button>
      </section>
      <FinalCTA />
    </>
  );
}
export function Evaluation() {
  const { sub } = useParams();
  return (
    <>
      <InnerHero
        eyebrow={sub ? "Paid evaluation protocol" : "Evidence before claims"}
        title={
          sub ? (
            <>
              One consenting MRF.
              <br />
              <em>One careful comparison.</em>
            </>
          ) : (
            <>
              Define useful.
              <br />
              <em>Then measure it.</em>
            </>
          )
        }
        copy="Shadow an existing workflow using permissioned video, quality samples and sale or rejection records. Compare packet completeness and reviewer time—or documented buyer disputes—with the historical manual process."
        image="packet-v2.webp"
        label={sub ? "Pilot protocol" : "Evaluation"}
        to="/request-evaluation"
        cta="Request a paid evaluation"
      />
      {!sub && (
        <section className="wrap section">
          <SectionHeading
            eyebrow="The scorecard"
            title={
              <>
                The criteria are agreed.
                <br />
                <em>The results are not assumed.</em>
              </>
            }
            copy="There are no measured BaleProof results to report. Baseline, evaluator, comparison method, observation window and failure threshold are agreed in the pilot SOW."
          />
          <div className="scorecard-table">
            {scorecard.map(([a, b, c]) => (
              <div key={a}>
                <strong>{a}</strong>
                <p>{b}</p>
                <Badge>{c}</Badge>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="chapter-tint section">
        <div className="wrap">
          <SectionHeading
            eyebrow="The protocol"
            title={
              <>
                From a specific question
                <br />
                <em>to a go / no-go decision.</em>
              </>
            }
          />
          <Steps items={protocol} />
        </div>
      </section>
      <section className="wrap section">
        <div className="gate-columns">
          <article>
            <CheckCircle size={30} />
            <h3>Proceed when</h3>
            <p>
              The operator signs a paid evaluation and footage/bale-data
              permissions. The commodity lead agrees the comparator. Sample
              coverage is adequate and required safety sign-off is available.
            </p>
          </article>
          <article>
            <WarningCircle size={30} />
            <h3>Pause when</h3>
            <p>
              Permission, safety sign-off or a historical comparator is
              unavailable. Fail the proposed comparison if usable bale-level
              ground truth is missing.
            </p>
          </article>
        </div>
        <p className="tiny">
          Track distinct qualified buyers, named operators, authorized datasets
          and actual paid commitments separately. Traffic and waitlist entries
          are weak signals.
        </p>
      </section>
      <FinalCTA />
    </>
  );
}
export function RequestForm() {
  const location = useLocation(),
    [search] = useSearchParams();
  const kind =
    location.pathname === "/contact"
      ? "contact"
      : location.pathname === "/request-demo"
        ? "demo"
        : "evaluation";
  const [done, setDone] = useState(false),
    [error, setError] = useState(""),
    [selected, setSelected] = useState(search.get("offer") || "");
  const title =
    kind === "contact" ? (
      <>
        Start a conversation.
        <br />
        <em>Bring your context.</em>
      </>
    ) : kind === "demo" ? (
      <>
        See the evidence
        <br />
        <em>in context.</em>
      </>
    ) : (
      <>
        Start with one line.
        <br />
        <em>Agree what proof means.</em>
      </>
    );
  function submit(e) {
    e.preventDefault();
    setError("");
    if (!e.currentTarget.checkValidity()) {
      setError("Please complete the required fields and follow-up permission.");
      e.currentTarget.reportValidity();
      return;
    }
    setDone(true);
  }
  return (
    <section className="wrap request-page">
      <div className="request-intro">
        <Eyebrow>
          {kind === "evaluation"
            ? "Request a paid evaluation"
            : kind === "demo"
              ? "Request a walkthrough"
              : "Contact BaleProof"}
        </Eyebrow>
        <h1>{title}</h1>
        <p className="lead">
          {kind === "evaluation"
            ? "Bring an operations manager, commodity-sales lead, named operator and data/integration owner. Start by discussing a single proposed offer."
            : "Explore the proposed workflow and the questions an evaluation would need to answer."}
        </p>
        <div className="request-steps">
          {[
            ["01", "Choose the job", "Keep the first evaluation specific."],
            [
              "02",
              "Check the evidence",
              "Discuss permissions and a historical comparator.",
            ],
            [
              "03",
              "Agree the next step",
              "A human review precedes any real-record access.",
            ],
          ].map(([n, a, b]) => (
            <div key={n}>
              <span>{n}</span>
              <div>
                <strong>{a}</strong>
                <p>{b}</p>
              </div>
            </div>
          ))}
        </div>
        <Image name="archive-bale.webp" alt="Illustrative material bale" />
        <p className="tiny">
          No operational uploads, payments or sensitive records are accepted
          here.
        </p>
      </div>
      <div className="request-form-wrap">
        <Badge>Preview form · nothing is sent or saved</Badge>
        {done ? (
          <div className="form-complete" role="status">
            <CheckCircle size={42} weight="light" />
            <h2>Preview complete.</h2>
            <p>
              Your entries passed the local preview check.{" "}
              <strong>No request was sent, stored or booked.</strong>
            </p>
            <p>
              A future connected form will hand evaluation requests to a human
              for scope and permissions review.
            </p>
            <Button onClick={() => setDone(false)}>Back to the form</Button>
            <Button to="/demo" text>
              Explore the synthetic demo
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <h2>
              {kind === "contact"
                ? "Your inquiry"
                : kind === "demo"
                  ? "Your walkthrough"
                  : "Your evaluation"}
            </h2>
            <p>
              Use sample details to try this form. A delivery service is not
              connected.
            </p>
            <div className="form-grid">
              <label>
                <span>Work email *</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="off"
                />
              </label>
              <label>
                <span>Organization *</span>
                <input
                  name="organization"
                  placeholder="Example MRF"
                  required
                  autoComplete="off"
                />
              </label>
              <label>
                <span>Your role *</span>
                <select
                  name="role"
                  defaultValue={search.get("role") || ""}
                  required
                >
                  <option value="">Choose a role</option>
                  <option value="mrf-operations">MRF operations manager</option>
                  <option value="commodity-sales">Commodity-sales lead</option>
                  <option>Day-to-day operator</option>
                  <option>Data / integration owner</option>
                  <option value="collection-programs">
                    Collection-program team
                  </option>
                  <option>OEM / EPR partner</option>
                  <option>Other role</option>
                </select>
              </label>
              <label>
                Number of sites
                <select defaultValue="">
                  <option value="">Choose a range</option>
                  <option>1 site</option>
                  <option>2–5 sites</option>
                  <option>6+ sites</option>
                  <option>Not an MRF</option>
                </select>
              </label>
            </div>
            <label>
              <span>Proposed offer *</span>
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                required
              >
                <option value="">Choose a starting point</option>
                {products.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.name} — {p.scope}
                  </option>
                ))}
                <option value="unsure">
                  Help me choose / full platform walkthrough
                </option>
              </select>
            </label>
            {selected && products.some((x) => x.id === selected) && (
              <p className="selected-price">
                Price test hypothesis:{" "}
                {products.find((x) => x.id === selected).price}{" "}
                {products.find((x) => x.id === selected).unit}. Additional costs
                separately scoped.
              </p>
            )}
            <label>
              <span>Current workflow or question *</span>
              <textarea
                rows="3"
                placeholder="Briefly describe the question. Do not include real operational or personal records."
                required
              />
            </label>
            <div className="form-grid">
              <label>
                Evaluation timeframe
                <select required defaultValue="">
                  <option value="">Choose a timeframe</option>
                  <option>Within 3 months</option>
                  <option>3–6 months</option>
                  <option>Exploring only / optional waitlist</option>
                </select>
              </label>
              <label>
                Existing evidence available?
                <select defaultValue="Unknown">
                  <option>Unknown</option>
                  <option>Video + QC + outcomes</option>
                  <option>Partial records</option>
                  <option>No usable records yet</option>
                </select>
              </label>
            </div>
            {kind === "evaluation" && (
              <fieldset>
                <legend>Readiness for a future evaluation</legend>
                {[
                  "Named day-to-day operator identified",
                  "Commodity-sales lead identified",
                  "Data / integration owner identified",
                  "Authority to discuss data permissions",
                ].map((s) => (
                  <label className="readiness-row" key={s}>
                    <span>{s}</span>
                    <select aria-label={s} defaultValue="Unknown">
                      <option>Unknown</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </label>
                ))}
              </fieldset>
            )}
            <label className="checkbox">
              <input type="checkbox" required />
              <span>
                You may contact me about this request.{" "}
                <span className="required">*</span> This preview does not send
                or retain consent.
              </span>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                Send me occasional BaleProof product updates. Optional, separate
                marketing consent.
              </span>
            </label>
            <p className="tiny">
              Read the <Link to="/legal/privacy">draft privacy notice</Link>.
              Real-data requests require human security/legal review.
            </p>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <Button type="submit">Preview request</Button>
            <p className="tiny">
              Nothing is transmitted. No meeting is booked.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
export function SignIn() {
  const [email, setEmail] = useState(""),
    [message, setMessage] = useState("");
  return (
    <section className="sign-in-page wrap">
      <div className="signin-form">
        <Eyebrow>Workspace access / concept preview</Eyebrow>
        <h1>
          Welcome to
          <br />
          <em>the evidence.</em>
        </h1>
        <p>
          The current workspace is an isolated synthetic demo. No account or
          password is needed.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMessage(
              "Preview only: no access email was sent. Open the synthetic demo below.",
            );
          }}
        >
          <label>
            Example work email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>
          <Button type="submit">Preview access request</Button>
        </form>
        {message && (
          <p role="status" className="notice">
            {message}
          </p>
        )}
        <div className="signin-divider">or explore without an account</div>
        <Button to="/demo/workbench" secondary>
          Open synthetic demo
        </Button>
        <Link className="inline-link" to="/access-help">
          Access help
          <Arrow />
        </Link>
        <p className="tiny">
          Authentication and SSO are not connected. Do not enter a password or
          production credentials.
        </p>
      </div>
      <div className="signin-art">
        <Image
          name="archive-bale.webp"
          alt="Illustrative material evidence specimen"
        />
        <div>
          <Eyebrow>One source at a time</Eyebrow>
          <h2>
            Clarity is part
            <br />
            <em>of the process.</em>
          </h2>
        </div>
      </div>
    </section>
  );
}
export function NotFound() {
  return (
    <section className="not-found wrap">
      <Eyebrow>404 / A missing link</Eyebrow>
      <h1>
        This source
        <br />
        <em>is out of reach.</em>
      </h1>
      <p>The page may have moved, or the link may be incomplete.</p>
      <div className="button-row">
        <Button to="/">Return home</Button>
        <Button to="/products" secondary>
          Explore the products
        </Button>
      </div>
      <Image name="archive-bale.webp" alt="BaleProof material specimen" />
    </section>
  );
}

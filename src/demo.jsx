import React, { createContext, useContext, useState, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { seedCases } from "./data";
import {
  Button,
  Eyebrow,
  Badge,
  Image,
  InnerHero,
  FinalCTA,
  Coverage,
  Arrow,
  ArrowRight,
  WarningCircle,
  CheckCircle,
  Clock,
  FileText,
  UserCircle,
  DownloadSimple,
  Files,
  Eye,
  X,
} from "./components";
import { NotFound } from "./pages";
const DemoContext = createContext();
export function DemoProvider({ children }) {
  const [cases, setCases] = useState(seedCases),
    [decisions, setDecisions] = useState({}),
    [activity, setActivity] = useState([]);
  function decide(id, decision, note) {
    const state =
      decision === "prepare"
        ? "completed"
        : decision === "reject"
          ? "rejected"
          : "pending";
    setCases((v) =>
      v.map((c) =>
        c.id === id
          ? {
              ...c,
              state:
                decision === "request" && c.state === "blocked"
                  ? "blocked"
                  : state,
              next:
                decision === "prepare"
                  ? "Packet QA with limitations"
                  : decision === "reject"
                    ? "Retain rejection rationale"
                    : "Check requested evidence",
              due: "17 Sep · 09:00",
            }
          : c,
      ),
    );
    setDecisions((v) => ({
      ...v,
      [id]: {
        decision,
        note,
        reviewer: "DEMO Ellis Ward",
        at: "2026-09-16T11:35:00Z",
      },
    }));
    setActivity((v) => [
      ...v,
      { id, decision, note, at: "16 Sep 2026 · 11:35 UTC" },
    ]);
  }
  function reset() {
    setCases(seedCases);
    setDecisions({});
    setActivity([]);
  }
  return (
    <DemoContext.Provider value={{ cases, decisions, activity, decide, reset }}>
      {children}
    </DemoContext.Provider>
  );
}
function DemoBar() {
  const { reset } = useContext(DemoContext);
  const dialog = useRef(null);
  return (
    <>
      <div className="demo-bar">
        <div>
          <Badge>Demo — synthetic data</Badge>
          <span>Concept preview · No equipment control</span>
        </div>
        <button onClick={() => dialog.current.showModal()}>Reset demo</button>
      </div>
      <dialog className="reset-dialog" ref={dialog}>
        <div>
          <Eyebrow>Local demo state</Eyebrow>
          <h2>Start the example again?</h2>
          <p>
            This restores the original ten records and removes local review
            decisions. No source system is affected.
          </p>
          <div className="button-row">
            <button
              className="button"
              onClick={() => {
                reset();
                dialog.current.close();
              }}
            >
              Reset the example
            </button>
            <button
              className="button secondary"
              onClick={() => dialog.current.close()}
            >
              Keep reviewing
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
function DemoNav() {
  const path = useLocation().pathname;
  return (
    <nav className="demo-nav" aria-label="Demo navigation">
      <Link
        className={path === "/demo/workbench" ? "active" : ""}
        to="/demo/workbench"
      >
        Review queue
      </Link>
      <Link
        className={path.includes("/cases") ? "active" : ""}
        to="/demo/cases/DEMO-C004"
      >
        Sample case
      </Link>
      <Link
        className={path.includes("/packets") ? "active" : ""}
        to="/demo/packets/DEMO-P004"
      >
        Buyer packet
      </Link>
      <Link className={path === "/demo/pilot" ? "active" : ""} to="/demo/pilot">
        Pilot opportunity
      </Link>
    </nav>
  );
}
export function DemoLanding() {
  return (
    <>
      <InnerHero
        eyebrow="An isolated product preview"
        title={
          <>
            One sample.
            <br />
            <em>A trail you can inspect.</em>
          </>
        }
        copy="Explore an invented MRF case from camera coverage to buyer packet. Make a local review decision, inspect the gaps and export the synthetic evidence. No account or actual records are needed."
        label="Synthetic demo"
        image="packet-v2.webp"
        to="/demo/workbench"
        cta="Enter the synthetic workbench"
      />
      <section className="wrap demo-intro-grid">
        <div>
          <Eyebrow>The setting</Eyebrow>
          <h3>DEMO Alder Loop Recovery</h3>
          <p>
            DEMO Plant 01 · Line A<br />
            16 September 2026 · All timestamps UTC
          </p>
        </div>
        <div>
          <Eyebrow>The question</Eyebrow>
          <h3>Which bale does this observation explain?</h3>
          <p>
            A suspected film event, a QC sample and a shipment note. The bale
            association remains unresolved.
          </p>
        </div>
        <div>
          <Eyebrow>The boundary</Eyebrow>
          <h3>Local review. No control.</h3>
          <p>
            Every person, organization and record is invented. Actions reset
            when the page reloads.
          </p>
        </div>
      </section>
      <section className="wrap section">
        <Badge>Demo · simulated data on every record and export</Badge>
        <p className="notice">
          The only operating behavior here is a deterministic frontend
          simulation. It does not demonstrate an integration, a classifier or
          production capability.
        </p>
      </section>
    </>
  );
}
export function DemoQueue() {
  const { cases } = useContext(DemoContext);
  const [filter, setFilter] = useState("all"),
    [search, setSearch] = useState(""),
    [sort, setSort] = useState("oldest");
  const shown = cases
    .filter(
      (c) =>
        (filter === "all" || c.state === filter) &&
        `${c.id} ${c.issue} ${c.owner}`
          .toLowerCase()
          .includes(search.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "oldest"
        ? a.time.localeCompare(b.time)
        : b.time.localeCompare(a.time),
    );
  return (
    <>
      <DemoBar />
      <div className="wrap demo-page">
        <DemoNav />
        <div className="demo-page-heading">
          <div>
            <Eyebrow>DEMO Alder Loop Recovery / Plant 01 / Line A</Eyebrow>
            <h1>Evidence for review.</h1>
            <p>16 September 2026 · UTC · Invented operational records</p>
          </div>
          <Link className="inline-link" to="/demo/pilot">
            Pilot readiness
            <Arrow />
          </Link>
        </div>
        <div className="queue-counts">
          {["all", "pending", "blocked", "completed", "rejected"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={filter === s ? "active" : ""}
            >
              <strong>
                {s === "all"
                  ? cases.length
                  : cases.filter((c) => c.state === s).length}
              </strong>
              <span>{s === "all" ? "All cases" : s}</span>
            </button>
          ))}
        </div>
        <div className="queue-tools">
          <label>
            Search cases
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Case ID, issue or reviewer"
            />
          </label>
          <label>
            Order
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="oldest">Oldest first</option>
              <option value="newest">Newest first</option>
            </select>
          </label>
          <span className="tiny">
            Completed = review task complete, not buyer acceptance.
          </span>
        </div>
        <div
          className="queue-table"
          role="region"
          aria-label="Synthetic case queue"
          tabIndex="0"
        >
          <table>
            <thead>
              <tr>
                <th>Record</th>
                <th>Observed UTC</th>
                <th>Question / exception</th>
                <th>Review state</th>
                <th>Owner & next action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shown.map((c) => (
                <tr key={c.id}>
                  <td>
                    <Link to={`/demo/cases/${c.id}`}>{c.id}</Link>
                    <small>DEMO / SIMULATED</small>
                  </td>
                  <td>
                    {c.time}
                    {c.id.endsWith("004") ? ":22" : ":00"}
                  </td>
                  <td>{c.issue}</td>
                  <td>
                    <span className={`status ${c.state}`}>{c.state}</span>
                  </td>
                  <td>
                    <strong>{c.owner}</strong>
                    <small>
                      {c.next} · {c.due} UTC
                    </small>
                  </td>
                  <td>
                    <Link
                      aria-label={`Open ${c.id}`}
                      className="icon-button"
                      to={`/demo/cases/${c.id}`}
                    >
                      <ArrowRight size={21} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {shown.length === 0 && (
            <div className="empty-state">
              <h3>No matching synthetic cases.</h3>
              <p>Try another record ID or clear your filters.</p>
              <button
                className="button secondary"
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export function DemoCase() {
  const { id } = useParams();
  const { cases, decisions, activity, decide } = useContext(DemoContext);
  const c = cases.find((x) => x.id === id);
  const [tab, setTab] = useState("coverage"),
    [note, setNote] = useState(""),
    [feedback, setFeedback] = useState("");
  if (!c) return <NotFound />;
  const primary = id === "DEMO-C004",
    decision = decisions[id],
    blocked = ["003", "008"].includes(c.n),
    missingQc = c.n === "010";
  const reviewed = primary ? "Bale association unresolved" : c.issue;
  function act(d) {
    if (!note.trim()) {
      setFeedback("Add a review rationale before recording a local decision.");
      return;
    }
    decide(id, d, note.trim());
    setFeedback(
      d === "prepare"
        ? "Packet prepared with limitations. No bale-quality approval or external send occurred."
        : d === "reject"
          ? "Association rejected in this local demo. The source record is unchanged."
          : "More evidence requested in local demo state. No message or request was sent.",
    );
  }
  return (
    <>
      <DemoBar />
      <div className="wrap demo-page">
        <DemoNav />
        <div className="case-heading">
          <div>
            <Link className="inline-link" to="/demo/workbench">
              Review queue
              <Arrow />
            </Link>
            <Eyebrow>{id} / DEMO Line A / 16 September 2026 UTC</Eyebrow>
            <h1>
              {primary ? (
                <>
                  Suspected film.
                  <br />
                  <em>Unconfirmed bale link.</em>
                </>
              ) : (
                c.issue
              )}
            </h1>
          </div>
          <span className={`status ${c.state}`}>{c.state}</span>
        </div>
        <div className="case-layout">
          <div className="case-main">
            <div
              className="case-tabs"
              role="tablist"
              aria-label="Evidence sections"
            >
              {["coverage", "observation", "quality", "shipment"].map(
                (x, i) => (
                  <button
                    role="tab"
                    aria-selected={tab === x}
                    className={tab === x ? "active" : ""}
                    key={x}
                    id={`evidence-tab-${x}`}
                    aria-controls="evidence-panel"
                    tabIndex={tab === x ? 0 : -1}
                    onKeyDown={(e) => {
                      const names = [
                        "coverage",
                        "observation",
                        "quality",
                        "shipment",
                      ];
                      const next =
                        e.key === "ArrowRight"
                          ? (i + 1) % 4
                          : e.key === "ArrowLeft"
                            ? (i + 3) % 4
                            : e.key === "Home"
                              ? 0
                              : e.key === "End"
                                ? 3
                                : null;
                      if (next !== null) {
                        e.preventDefault();
                        setTab(names[next]);
                        e.currentTarget.parentElement.children[next].focus();
                      }
                    }}
                    onClick={() => setTab(x)}
                  >
                    0{i + 1} {x}
                  </button>
                ),
              )}
            </div>
            <section
              className="source-pane"
              role="tabpanel"
              id="evidence-panel"
              aria-labelledby={`evidence-tab-${tab}`}
              tabIndex="0"
              aria-label={`${tab} evidence`}
            >
              <div className="source-pane-top">
                <Eyebrow>Source evidence</Eyebrow>
                <Badge>Demo / simulated</Badge>
              </div>
              {tab === "coverage" ? (
                <>
                  <h2>Know what was observed.</h2>
                  <Coverage compact />
                  <div className="source-note">
                    <WarningCircle size={21} />
                    <p>
                      Camera DEMO-CAM-A illustrates central-belt coverage. The
                      far edge is unobserved. This is a schematic, not a
                      surveyed optical map.
                    </p>
                  </div>
                  <button
                    className="button secondary"
                    onClick={() => setTab("observation")}
                  >
                    Inspect the observation
                    <Arrow />
                  </button>
                </>
              ) : tab === "observation" ? (
                <>
                  <h2>
                    {blocked
                      ? "Source not available."
                      : "An interpretation, not a conclusion."}
                  </h2>
                  {blocked ? (
                    <div className="empty-state">
                      <WarningCircle size={34} />
                      <p>
                        {c.issue}. No source content is shown for this blocked
                        record.
                      </p>
                    </div>
                  ) : (
                    <Image
                      name="material-sample.webp"
                      alt="Synthetic example of PET, paper and ambiguous film"
                      className="source-photo"
                    />
                  )}
                  <dl className="source-meta">
                    <div>
                      <dt>Source ID</dt>
                      <dd>DEMO-E{c.n}-CAM</dd>
                    </div>
                    <div>
                      <dt>Captured</dt>
                      <dd>
                        16 Sep 2026 · {c.time}
                        {primary ? ":22" : ":00"} UTC
                      </dd>
                    </div>
                    <div>
                      <dt>Interpretation</dt>
                      <dd>
                        {primary
                          ? "Suspected flexible film"
                          : "Requires case-specific review"}
                      </dd>
                    </div>
                    <div>
                      <dt>Coverage</dt>
                      <dd>Incomplete / far edge unobserved</dd>
                    </div>
                  </dl>
                  {primary && (
                    <div className="score-box">
                      <div>
                        <span>Illustrative score</span>
                        <strong>0.73</strong>
                      </div>
                      <div>
                        <span>Review threshold</span>
                        <strong>0.85</strong>
                      </div>
                      <p>
                        Below threshold — manual review required. Invented
                        display band 0.61–0.84; not a statistical confidence
                        interval or calibrated probability.
                      </p>
                    </div>
                  )}
                </>
              ) : tab === "quality" ? (
                <>
                  <h2>
                    {missingQc
                      ? "QC sample missing."
                      : "A sample has a boundary."}
                  </h2>
                  {primary ? (
                    <>
                      <dl className="source-meta">
                        <div>
                          <dt>QC source</dt>
                          <dd>DEMO-E004-QC</dd>
                        </div>
                        <div>
                          <dt>Sample time</dt>
                          <dd>16 Sep 2026 · 08:32:00 UTC</dd>
                        </div>
                        <div>
                          <dt>Sample mass</dt>
                          <dd>10.0 kg</dd>
                        </div>
                        <div>
                          <dt>Non-target material</dt>
                          <dd>0.32 kg</dd>
                        </div>
                      </dl>
                      <div className="sample-metric">
                        <strong>
                          3.2<span>%</span>
                        </strong>
                        <p>
                          Of this synthetic sample only.
                          <br />
                          Not a line-wide or bale-wide rate.
                        </p>
                      </div>
                      <p className="notice">
                        Sample representativeness is not established. The
                        candidate link to DEMO-B004 is not independently
                        confirmed.
                      </p>
                    </>
                  ) : (
                    <div className="empty-state">
                      <WarningCircle size={30} />
                      <p>
                        {missingQc
                          ? "The QC sample reference is absent."
                          : "Detailed QC values are not supplied for this secondary example."}{" "}
                        The preview does not invent a usable result.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h2>The shipment does not close the gap.</h2>
                  <dl className="source-meta">
                    <div>
                      <dt>Shipment reference</dt>
                      <dd>DEMO-S{c.n}</dd>
                    </div>
                    <div>
                      <dt>Candidate bale</dt>
                      <dd>DEMO-B{c.n}</dd>
                    </div>
                    <div>
                      <dt>Note time</dt>
                      <dd>
                        {primary
                          ? "16 Sep 2026 · 10:05:00 UTC"
                          : "Not supplied"}
                      </dd>
                    </div>
                    <div>
                      <dt>Buyer outcome</dt>
                      <dd>Missing — no acceptance assumed</dd>
                    </div>
                  </dl>
                  <p className="notice">
                    Timestamp proximity is a candidate association, not
                    confirmed causality. Historical dispute comparators are not
                    present in the demo.
                  </p>
                </>
              )}
            </section>
            <section className="exceptions-panel">
              <Eyebrow>Exceptions & alternative explanations</Eyebrow>
              <h3>Keep the unresolved questions visible.</h3>
              <ul>
                <li>{reviewed}.</li>
                <li>Occlusion may distort the apparent material.</li>
                <li>The sample may not represent the full bale.</li>
                <li>The timestamp-to-bale association may be incorrect.</li>
              </ul>
            </section>
            <section className="activity-panel">
              <Eyebrow>Illustrative activity timeline</Eyebrow>
              {[
                [c.time, "Source observation captured"],
                ...(primary
                  ? [
                      ["08:32", "Synthetic QC sample recorded"],
                      ["10:05", "Shipment note referenced"],
                      ["10:24", "Analyst flags an uncertain bale join"],
                    ]
                  : [["10:50", "Case entered into review queue"]]),
              ].map(([t, s]) => (
                <div key={t + s}>
                  <time>{t} UTC</time>
                  <p>{s}</p>
                  <Badge>Demo</Badge>
                </div>
              ))}
              {activity
                .filter((a) => a.id === id)
                .map((a, i) => (
                  <div key={i}>
                    <time>{a.at}</time>
                    <p>
                      {a.decision === "prepare"
                        ? "Packet prepared with limitations"
                        : a.decision === "reject"
                          ? "Association rejected"
                          : "More evidence requested"}
                      <small>{a.note}</small>
                    </p>
                    <Badge>Local demo</Badge>
                  </div>
                ))}
            </section>
          </div>
          <aside className="review-panel">
            <Eyebrow>Human review</Eyebrow>
            <h3>A decision with context.</h3>
            <dl>
              <div>
                <dt>Reviewer</dt>
                <dd>DEMO Ellis Ward</dd>
              </div>
              <div>
                <dt>Record owner</dt>
                <dd>{c.owner}</dd>
              </div>
              <div>
                <dt>Next action</dt>
                <dd>{c.next}</dd>
              </div>
              <div>
                <dt>Due</dt>
                <dd>{c.due} UTC</dd>
              </div>
            </dl>
            <label>
              Review rationale
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="4"
                placeholder="Use a synthetic note. For example: prepare for discussion; bale linkage remains unresolved."
              />
            </label>
            <Button
              disabled={blocked || missingQc}
              onClick={() => act("prepare")}
            >
              Prepare with limitations
            </Button>
            <button className="button secondary" onClick={() => act("request")}>
              Request more evidence
            </button>
            <button className="reject-button" onClick={() => act("reject")}>
              Reject association
            </button>
            {(blocked || missingQc) && (
              <p className="tiny">
                Packet preparation is blocked while essential evidence or
                permission is missing.
              </p>
            )}
            {feedback && (
              <p className="review-feedback" role="status">
                {feedback}
              </p>
            )}
            {decision && (
              <p className="tiny">
                Local review recorded at 16 Sep 2026 · 11:35 UTC.
              </p>
            )}
            <div className="review-boundary">
              <Eye size={18} />
              <p>
                No equipment control, external message, dispatch or writeback.
              </p>
            </div>
            {primary && (
              <Link className="inline-link" to="/demo/packets/DEMO-P004">
                Inspect the packet
                <Arrow />
              </Link>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
const sourceRows = [
  [
    "DEMO-E004-CAM",
    "08:14:22",
    "Visible sample observation",
    "Occluded objects and full-stream composition",
  ],
  [
    "DEMO-E004-QC",
    "08:32:00",
    "0.32 kg non-target material in a 10.0 kg sample",
    "Bale-wide composition or representativeness",
  ],
  [
    "DEMO-E004-SHIP",
    "10:05:00",
    "Shipment note naming DEMO-B004",
    "Buyer acceptance or confirmed causality",
  ],
  [
    "DEMO-E004-ANN",
    "10:24:00",
    "Analyst interpretation and uncertainty",
    "Calibrated accuracy or confirmed bale linkage",
  ],
];
export function Packet({ resource = false }) {
  const { decisions } = useContext(DemoContext);
  const decision = decisions["DEMO-C004"];
  const label =
    decision?.decision === "prepare"
      ? "Prepared with limitations"
      : decision?.decision === "reject"
        ? "Association rejected"
        : decision?.decision === "request"
          ? "More evidence required"
          : "Pending review";
  const [message, setMessage] = useState("");
  const packet = {
    packet_id: "DEMO-P004",
    version: "0.1",
    is_synthetic: true,
    label: "DEMO — SYNTHETIC DATA · CONCEPT PREVIEW · NOT FOR OPERATIONAL USE",
    case_id: "DEMO-C004",
    account: "DEMO Alder Loop Recovery",
    line: "DEMO Line A",
    review_state: label,
    reviewer: "DEMO Ellis Ward",
    decision: decision || null,
    sources: sourceRows.map(([id, time, supports, excludes]) => ({
      id,
      captured_at: `2026-09-16T${time}Z`,
      supports,
      does_not_establish: excludes,
    })),
    missingness: [
      "Far-edge camera blind spot",
      "Bale timing association unconfirmed",
      "Buyer acceptance/rejection outcome absent",
      "Historical comparator absent",
      "QC representativeness unestablished",
    ],
    next_action: decision
      ? {
          owner: "DEMO Ellis Ward",
          at: "2026-09-17T09:00:00Z",
          task:
            decision.decision === "prepare"
              ? "Packet QA with limitations"
              : decision.decision === "reject"
                ? "Retain rejection rationale"
                : "Check requested evidence",
        }
      : {
          owner: "DEMO Ellis Ward",
          at: "2026-09-16T11:30:00Z",
          task: "Compare source and QC",
        },
    boundary: "No quality approval, equipment control or external submission",
  };
  function download() {
    const blob = new Blob([JSON.stringify(packet, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "DEMO-P004-synthetic-evidence-packet.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage(
      "Synthetic packet downloaded locally. Labels and limitations are retained; nothing was sent externally.",
    );
  }
  return (
    <>
      {!resource && <DemoBar />}
      <div
        className={`wrap packet-page ${resource ? "resource-packet-page" : ""}`}
      >
        {!resource && <DemoNav />}
        <div className="packet-heading">
          <div>
            <Eyebrow>
              {resource
                ? "Example artifact / synthetic evidence"
                : "DEMO-P004 / version 0.1"}
            </Eyebrow>
            <h1>
              A packet you
              <br />
              <em>can inspect.</em>
            </h1>
          </div>
          <div className="packet-actions">
            <button className="button" onClick={download}>
              Export synthetic JSON
              <DownloadSimple size={20} />
            </button>
            <button className="button secondary" onClick={() => window.print()}>
              Print / save PDF
              <FileText size={20} />
            </button>
          </div>
        </div>
        {message && (
          <p className="notice" role="status">
            {message}
          </p>
        )}
        <article className="packet-document" id="print-packet">
          <div className="document-header">
            <div>
              <img className="brand-lockup" src="/brand/baleproof-horizontal-burgundy.svg" width="190" height="66" alt="BaleProof" />
            </div>
            <Badge>Demo — synthetic data</Badge>
          </div>
          <Eyebrow>Concept preview · Not for operational use</Eyebrow>
          <h2>Bale quality evidence packet</h2>
          <div className="packet-meta">
            <span>DEMO-P004 · v0.1</span>
            <span>16 September 2026 · UTC</span>
            <span className="status pending">{label}</span>
          </div>
          <div className="packet-question">
            <Eyebrow>Question under review</Eyebrow>
            <h3>
              Does the suspected flexible-film event have a defensible
              relationship to DEMO-B004 and shipment note DEMO-S004?
            </h3>
          </div>
          <div className="packet-source-summary">
            <Image
              name="material-sample.webp"
              alt="Illustrative synthetic source material"
            />
            <dl>
              <div>
                <dt>Prepared for</dt>
                <dd>DEMO Morgan Ellis / Commodity sales</dd>
              </div>
              <div>
                <dt>Account</dt>
                <dd>DEMO Alder Loop Recovery / Plant 01</dd>
              </div>
              <div>
                <dt>Reviewer</dt>
                <dd>DEMO Ellis Ward</dd>
              </div>
              <div>
                <dt>Source case</dt>
                <dd>
                  <Link to="/demo/cases/DEMO-C004">DEMO-C004 / Line A</Link>
                </dd>
              </div>
            </dl>
          </div>
          <h3>Evidence register</h3>
          <div
            className="table-scroll"
            tabIndex="0"
            role="region"
            aria-label="Synthetic packet source register"
          >
            <table>
              <thead>
                <tr>
                  <th>Source / UTC</th>
                  <th>What it supports</th>
                  <th>What it does not establish</th>
                </tr>
              </thead>
              <tbody>
                {sourceRows.map(([id, time, a, b]) => (
                  <tr key={id}>
                    <td>
                      <strong>{id}</strong>
                      <small>16 Sep 2026 · {time}Z</small>
                      <small>DEMO / SIMULATED</small>
                    </td>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="packet-two-columns">
            <section>
              <h3>Missingness & exceptions</h3>
              <ul>
                {packet.missingness.map((s) => (
                  <li key={s}>{s}.</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Alternative explanations</h3>
              <p>
                Occlusion may distort the observed material. The sample may not
                represent the full bale. The timestamp match may associate the
                wrong bale.
              </p>
              <p>Correlation is not confirmed causation.</p>
            </section>
          </div>
          <section className="packet-review">
            <Eyebrow>Reviewer disposition</Eyebrow>
            <h3>{label}</h3>
            <p>
              {decision?.note ||
                "No review decision has been recorded. Inspect the source case before preparing this packet."}
            </p>
            <p>
              For discussion only. Linkage remains unresolved. This packet does
              not approve bale quality, confirm buyer acceptance or initiate any
              external action.
            </p>
          </section>
          <h3>Dated next action</h3>
          <p>
            {decision
              ? "DEMO Ellis Ward: " +
                packet.next_action.task +
                " on 17 September 2026 at 09:00 UTC."
              : "DEMO Ellis Ward to compare source/QC timing and request the missing bale linkage at 16 September 2026 11:30 UTC."}{" "}
            No automated message is sent.
          </p>
          <div className="document-footer">
            DEMO — SYNTHETIC DATA · All records invented · No equipment control
            · Reversible local export
          </div>
        </article>
        <div className="button-row packet-end">
          <Button to="/demo/cases/DEMO-C004">Open the reviewer case</Button>
          <Button to="/request-evaluation" text>
            Discuss a paid evaluation
          </Button>
        </div>
      </div>
    </>
  );
}
export function Pilot() {
  return (
    <>
      <DemoBar />
      <div className="wrap demo-page">
        <DemoNav />
        <div className="demo-page-heading">
          <div>
            <Eyebrow>DEMO-OPP-001 / illustrative opportunity</Eyebrow>
            <h1>One MRF shadow audit.</h1>
            <p>
              Permission and baseline scoping. Not a real pipeline or revenue
              claim.
            </p>
          </div>
          <Badge>No paid commitment</Badge>
        </div>
        <div className="pilot-grid">
          <section className="pilot-account">
            <Eyebrow>DEMO Alder Loop Recovery</Eyebrow>
            <h2>
              The people
              <br />
              <em>behind the evaluation.</em>
            </h2>
            {[
              ["DEMO Avery Chen", "MRF operations / budget owner"],
              ["DEMO Morgan Ellis", "Commodity-sales lead"],
              ["DEMO Rowan Vale", "Day-to-day operator"],
              ["DEMO Casey Noor", "Data / integration owner"],
              ["DEMO Ellis Ward", "Analyst / independent review role"],
            ].map(([a, b]) => (
              <div className="pilot-person" key={a}>
                <UserCircle size={24} />
                <div>
                  <strong>{a}</strong>
                  <p>{b}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="pilot-tasks">
            <Eyebrow>Next steps / synthetic tasks</Eyebrow>
            {[
              ["Operator data-sharing request", "Pending"],
              ["Commodity buyer-dispute baseline", "Not supplied"],
              ["Comparator and sample coverage", "Unconfirmed"],
              ["Material Proof quote scope", "Proposed only"],
              ["Paid evaluation SOW", "Not signed"],
            ].map(([a, b]) => (
              <div key={a}>
                <span>{a}</span>
                <Badge>{b}</Badge>
              </div>
            ))}
            <div className="pilot-quote">
              <Eyebrow>Selected proposed offer</Eyebrow>
              <h3>Material Proof</h3>
              <p>$20 / bale batch · Pricing test hypothesis</p>
              <small>
                Batch definition, review scope and labeling/video cost are not
                agreed. Signed revenue: none.
              </small>
            </div>
            <p className="notice">
              Proceed beyond the demo only with a paid evaluation, video/bale
              permissions, agreed comparator, usable coverage and required
              safety sign-off.
            </p>
            <Button to="/evaluation/pilot-protocol" text>
              Read the real evaluation protocol
            </Button>
          </section>
        </div>
      </div>
    </>
  );
}

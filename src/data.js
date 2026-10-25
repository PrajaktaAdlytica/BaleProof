export const products = [
  {
    id: "material-desk",
    name: "Material Desk",
    num: "01",
    tag: "Understand the input",
    scope: "Feedstock composition audit",
    headline: "Understand the material you can actually observe.",
    intro:
      "Bring existing sampling records and permissioned footage into one careful feedstock audit. Every classification stays connected to its source—and to what the sample cannot tell you.",
    price: "$2,500",
    unit: "/ plant",
    asset: "archive-bale.webp",
    icon: "Stack",
    output:
      "A composition audit with source references, observed denominators and explicit limitations.",
    inputs: [
      "Existing sampling records or permissioned camera footage",
      "Line, shift and capture timestamps",
      "A documented labeling and sampling protocol",
    ],
    steps: [
      "Map the available coverage",
      "Classify the observed sample",
      "Review uncertainty and missing material",
      "Prepare a source-linked composition audit",
    ],
    features: [
      [
        "See the whole sample",
        "Keep known materials and unclassified observations in the same denominator.",
      ],
      [
        "Keep the source in reach",
        "Return to the capture, timestamp and analyst annotation behind an observation.",
      ],
      [
        "Show where evidence ends",
        "Keep blind spots and sampling limits beside the findings.",
      ],
    ],
    limits:
      "No full-stream certainty, classification of unseen material or certified composition claim.",
    question:
      "Is the available sample representative enough for the agreed audit?",
  },
  {
    id: "material-review",
    name: "Material Review",
    num: "02",
    tag: "Make the next shift clearer",
    scope: "Contamination episodes and shift brief",
    headline: "A contamination brief the next shift can inspect.",
    intro:
      "Review suspected contamination episodes in their shift context. Link observations to coverage, source timestamps and reviewer notes before deciding what belongs in the handoff.",
    price: "$750",
    unit: "/ month / line",
    asset: "material-sample.webp",
    icon: "Scan",
    output: "A manually reviewed contamination episode record and shift brief.",
    inputs: [
      "Time-indexed footage or sample observations",
      "Shift context and camera coverage",
      "Operator notes and a human review threshold",
    ],
    steps: [
      "Check the camera field",
      "Inspect a suspected episode",
      "Compare notes and alternative explanations",
      "Prepare the shift handoff",
    ],
    features: [
      [
        "Start with coverage",
        "A camera field and its blind spots appear before the interpretation.",
      ],
      [
        "Make uncertainty useful",
        "A score below the agreed threshold is a prompt for review, not a conclusion.",
      ],
      [
        "Carry exceptions forward",
        "Unresolved observations stay visible in the next shift brief.",
      ],
    ],
    limits:
      "No live alerts, autonomous dispatch, guaranteed detection or equipment actuation.",
    question:
      "Can a reviewer prepare a more complete brief within the agreed comparison?",
  },
  {
    id: "material-proof",
    name: "Material Proof",
    num: "03",
    tag: "Bring the source to the buyer",
    scope: "Bale quality evidence package",
    headline: "The source behind every bale-quality statement.",
    intro:
      "Assemble observations, bale QC and shipment notes into a packet a human can review. Put the evidence, missing links and alternative explanations beside the buyer’s question.",
    price: "$20",
    unit: "/ bale batch",
    asset: "packet-v2.webp",
    icon: "Files",
    output:
      "An exportable buyer evidence packet with provenance, reviewer notes and visible limitations.",
    inputs: [
      "Source-linked observations and quality samples",
      "Bale audit and shipment references",
      "Permissioned sale or rejection records, where available",
    ],
    steps: [
      "Open the buyer question",
      "Connect sample, QC and shipment sources",
      "Review the association and its gaps",
      "Prepare a packet with limitations",
    ],
    features: [
      [
        "Follow the association",
        "Distinguish a candidate timestamp match from a confirmed bale link.",
      ],
      [
        "Make missingness visible",
        "An absent buyer outcome stays absent. It never becomes an assumed acceptance.",
      ],
      [
        "Carry context into export",
        "Source references, review state and limitations stay with the packet.",
      ],
    ],
    limits:
      "No quality certification, guaranteed buyer acceptance or promised reduction in disputes. Define bale batch and review scope in the SOW.",
    question: "Is the packet complete enough for the agreed buyer discussion?",
  },
  {
    id: "material-signal",
    name: "Material Signal",
    num: "04",
    tag: "Examine the assumptions",
    scope: "Bottleneck and line-change simulation",
    headline: "Explore a line change before the conversation on the floor.",
    intro:
      "A facilitated workshop to compare throughput and bottleneck scenarios. Keep inputs, assumptions and uncertainty visible so operators can examine the comparison together.",
    price: "$3,000",
    unit: "/ plant",
    asset: "scenario-workshop.webp",
    icon: "ChartLine",
    output:
      "A scenario comparison and workshop report, reviewed by the responsible operator.",
    inputs: [
      "Permissioned historical throughput records",
      "Line configuration and operational context",
      "Explicit scenario assumptions and review scope",
    ],
    steps: [
      "Document the baseline assumptions",
      "Identify the proposed constraint",
      "Compare a line-change scenario",
      "Review and export the workshop findings",
    ],
    features: [
      [
        "One assumption register",
        "Make it clear what comes from history and what is a scenario input.",
      ],
      [
        "Compare, do not command",
        "Explore the line-change question without sending instructions to equipment.",
      ],
      [
        "Keep the operator involved",
        "The workshop supports a conversation; it does not replace operational judgment.",
      ],
    ],
    limits:
      "No digital-twin accuracy claim, production optimization, robotic picks, conveyor commands or safety-interlock changes.",
    question:
      "Are the available inputs adequate for a useful scenario comparison?",
  },
  {
    id: "material-report",
    name: "Material Report",
    num: "05",
    tag: "Return feedback to its source",
    scope: "Source-program contamination feedback",
    headline: "Feedback that stays connected to the observed sample.",
    intro:
      "Prepare contamination feedback for municipal collection teams using permissioned, attributable samples. Separate observed patterns from assumptions about where they came from.",
    price: "$1,000",
    unit: "/ month / program",
    asset: "material-sample.webp",
    icon: "GridFour",
    output:
      "A reviewed source-program feedback report with attribution limits and sample references.",
    inputs: [
      "Permissioned source-program metadata",
      "Samples with a defensible program association",
      "Reviewer context and a defined feedback audience",
    ],
    steps: [
      "Check source attribution",
      "Review the sample coverage",
      "Prepare a limited feedback draft",
      "Approve the program handoff",
    ],
    features: [
      [
        "Account for the gaps",
        "A program without usable samples remains a gap in the report.",
      ],
      [
        "Avoid unsupported attribution",
        "Do not turn a pattern into blame without a defensible source association.",
      ],
      [
        "Keep buyer segments separate",
        "Collection-program interest is tracked separately from MRF demand.",
      ],
    ],
    limits:
      "No household profiling, unsupported blame or municipal interest counted as MRF customer demand.",
    question:
      "Does the source attribution support a useful, appropriately limited report?",
  },
];
export const faq = [
  [
    "Is BaleProof an operating product?",
    "BaleProof is a research-stage concept. This website includes an isolated, deterministic product preview with invented records. The proposed modules are not live services.",
  ],
  [
    "What would an evaluation use?",
    "Existing video, quality samples and sale or rejection records from one consenting MRF. Procurement, legal and data-sharing permission are required before any real records are used.",
  ],
  [
    "Does it control sorting equipment?",
    "No. Conveyor speed, robotic picks and safety interlocks remain with certified operators and OEMs. The proposed workflow is read-only decision support.",
  ],
  [
    "Are the prices confirmed?",
    "No. Each price is an interview and paid-SOW test hypothesis, not a verified market rate or active checkout. Labeling, video and integration/services costs are separately scoped.",
  ],
  [
    "What happens when evidence is missing?",
    "The gap remains visible. A reviewer can request more evidence or reject an association. A future pilot pauses if permissions, safety sign-off, historical comparators or adequate bale-level ground truth are unavailable.",
  ],
  [
    "Can I upload facility footage here?",
    "No. This public preview accepts no operational uploads. Real-data requests need a human security/legal review and signed sharing terms.",
  ],
  [
    "How does this relate to OEM analytics?",
    "AMP, Glacier and other suppliers already offer hardware and analytics. A standalone evidence workflow must demonstrate incremental value beyond a facility’s existing dashboards and manual process.",
  ],
];
export const roles = [
  {
    id: "mrf-operations",
    label: "MRF operations",
    short: "A clearer shift handoff.",
    desc: "Connect variable incoming material, observations and quality samples without losing the limits of what was seen.",
    modules: ["material-desk", "material-review", "material-signal"],
    asset: "coverage-map.webp",
  },
  {
    id: "commodity-sales",
    label: "Commodity sales",
    short: "A reviewable buyer conversation.",
    desc: "Bring the source behind a bale-quality statement into the same discussion as the shipment note.",
    modules: ["material-proof"],
    asset: "packet-v2.webp",
  },
  {
    id: "collection-programs",
    label: "Collection programs",
    short: "Feedback with an attributable source.",
    desc: "Review source-program observations separately from assumptions, with a distinct qualification path.",
    modules: ["material-report"],
    asset: "material-sample.webp",
  },
];
export const seedCases = [
  [
    "001",
    "07:05",
    "completed",
    "Packet prepared with sample limitations",
    "Ellis Ward",
    "17 Sep · 09:00",
    "Packet QA",
  ],
  [
    "002",
    "07:23",
    "pending",
    "QC note awaiting review",
    "Rowan Vale",
    "16 Sep · 11:00",
    "Review QC source",
  ],
  [
    "003",
    "07:48",
    "blocked",
    "Camera source unavailable",
    "Casey Noor",
    "16 Sep · 11:15",
    "Resolve missing source",
  ],
  [
    "004",
    "08:14",
    "pending",
    "Below threshold; bale join unconfirmed",
    "Ellis Ward",
    "16 Sep · 11:30",
    "Compare source and QC",
  ],
  [
    "005",
    "08:39",
    "completed",
    "Insufficient support for escalation",
    "Ellis Ward",
    "17 Sep · 09:15",
    "Archive review note",
  ],
  [
    "006",
    "09:02",
    "rejected",
    "Bale association contradicted by shift note",
    "Rowan Vale",
    "16 Sep · 12:00",
    "Retain rejection reason",
  ],
  [
    "007",
    "09:27",
    "pending",
    "Commodity-sales context needed",
    "Morgan Ellis",
    "16 Sep · 12:15",
    "Review buyer question",
  ],
  [
    "008",
    "09:51",
    "blocked",
    "Illustrative permission unresolved",
    "Casey Noor",
    "16 Sep · 12:30",
    "Inspect permission task",
  ],
  [
    "009",
    "10:16",
    "completed",
    "Packet prepared; buyer outcome missing",
    "Ellis Ward",
    "17 Sep · 09:30",
    "Outcome follow-up",
  ],
  [
    "010",
    "10:41",
    "pending",
    "QC sample reference absent",
    "Rowan Vale",
    "16 Sep · 12:45",
    "Request sample reference",
  ],
].map(([n, time, state, issue, owner, due, next]) => ({
  id: `DEMO-C${n}`,
  n,
  time,
  state,
  issue,
  owner: `DEMO ${owner}`,
  due,
  next,
}));
export const scorecard = [
  [
    "Packet completeness",
    "Required evidence fields present / agreed required fields. Critical missing items remain separately flagged.",
    "Not measured",
  ],
  [
    "Reviewer time",
    "Active review minutes per comparable packet, against the historical manual process.",
    "Baseline to agree",
  ],
  [
    "Dispute resolution",
    "Documented time/outcome for eligible comparable buyer disputes, if this is the selected metric.",
    "Comparator to agree",
  ],
  [
    "Bale-level ground truth",
    "Usable QC/outcome references linking the sample to the bale.",
    "Required",
  ],
  [
    "Sample coverage",
    "Minimum usable footage and sample coverage for the chosen decision.",
    "Threshold to agree",
  ],
  [
    "Paid commitment",
    "Distinct qualified MRF budget owner agreeing a paid evaluation and permissions.",
    "Not established",
  ],
];
export const protocol = [
  [
    "Choose one job",
    "Select one proposed module, with the MRF operations manager and commodity-sales lead.",
  ],
  [
    "Name the people",
    "Identify the day-to-day operator, data/integration owner and independent evaluator.",
  ],
  [
    "Check the permission",
    "Establish footage ownership, procurement/legal permission, data-sharing terms and the physical safety boundary.",
  ],
  [
    "Agree the comparison",
    "Pre-register baseline, metric, evaluator, observation window, sample adequacy and failure threshold in the paid SOW.",
  ],
  [
    "Shadow the workflow",
    "Review existing video, QC samples and sale/rejection records without changing production systems.",
  ],
  [
    "Make a go / no-go decision",
    "Compare the evidence with the agreed baseline. Stop when permissions, ground truth or the comparator are inadequate.",
  ],
];
export const sources = [
  [
    "AMP Vision",
    "https://ampsortation.com/technologies/vision",
    "Material identification, analytics and bale-QC context.",
  ],
  [
    "AMP ONE",
    "https://ampsortation.com/products/amp-one",
    "Facility-scale sorting and bale-related data.",
  ],
  [
    "Glacier robotics",
    "https://endwaste.io/robot/",
    "Hardware sorting context.",
  ],
  [
    "Glacier DataMap",
    "https://endwaste.io/glacier-datamap-mrf-intelligence/",
    "Facility and material visibility.",
  ],
];
export const disclaimer =
  "BaleProof is a research-stage concept. All product-preview records are invented. Proposed modules and prices are test hypotheses. No live integrations, equipment control, actual customers or measured outcomes are represented.";

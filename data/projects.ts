export type Project = {
  slug: string;
  title: string;
  tagline: string;
  highlights: string[]; // 2–4 bullets max
  tags: string[]; // 4–8 tags max
  links: {
    github?: string;
    demo?: string;
  };
  image?: string; // path under /public, e.g. "/images/brewhand.png"
  emphasis?: "primary" | "standard";
};

export const projects: Project[] = [
  {
    slug: "brewhand",
    title: "BrewHand",
    tagline:
      "Full-stack mobile application for guided brewing workflows, history, and sharing.",
    highlights: [
      "Implemented step-based brewing flows with asynchronous timers and state transitions.",
      "Persisted brew history with ratings/notes and surfaced aggregate statistics.",
      "Integrated authentication, storage, and realtime updates via hosted backend services.",
    ],
    tags: ["Flutter", "Dart", "Full-Stack", "Async State", "PostgreSQL", "Supabase"],
    links: {
      github: "https://github.com/jaredleoa/Brewhand",
    },
    image: "/images/brewhand.jpg",
    emphasis: "primary",
  },
  {
    slug: "transaction-risk-scoring",
    title: "Transaction Risk Scoring Service",
    tagline: "Backend REST API for deterministic transaction risk evaluation.",
    highlights: [
      "Implemented rule-based scoring with validation and structured error handling.",
      "Added unit tests for scoring behavior and endpoint correctness.",
      "Containerised runtime and automated test/build via CI.",
    ],
    tags: ["Python", "FastAPI", "REST", "Testing", "Docker", "CI"],
    links: {
      github: "https://github.com/jaredleoa/transaction-risk-service",
    },
    image: "/images/transaction_service_primary.png",
  },
  {
    slug: "payments-event-pipeline",
    title: "Payments Event Pipeline",
    tagline: "Cloud event ingestion pipeline persisting structured payment events.",
    highlights: [
      "Implemented Lambda logic to validate and persist events into DynamoDB.",
      "Provisioned reproducible infrastructure using Terraform (IaC).",
      "Verified end-to-end behavior using AWS tooling and controlled test events.",
    ],
    tags: ["AWS", "Lambda", "DynamoDB", "Terraform", "Python", "IaC"],
    links: {
      github: "https://github.com/jaredleoa/payments-pipeline",
    },
    image: "/images/payments_pipeline_primary.png",
  },
  {
    slug: "east-asia-birthrate-viz",
    title: "East Asia Birth Rate Decline",
    tagline: "Data visualisation project analysing demographic decline across East Asia.",
    highlights: [
      "Built comparative charts to show birth-rate changes across countries over time.",
      "Focused on insight-driven visual storytelling and clean chart design.",
      "Packaged analysis into a shareable report-style output.",
    ],
    tags: ["Data Visualisation", "Analysis", "Storytelling", "Charts"],
    links: { demo: "/dashboards/east-asia-birthrate/" },
    image: "/images/east_asia_birthrate.png",
  },
  {
    slug: "secure-file-transfer",
    title: "Secure File-Transfer Server",
    tagline: "Multi-threaded POSIX socket server with authenticated file transfer.",
    highlights: [
      "Implemented concurrent client handling with mutex-protected writes.",
      "Stress-tested under load to reduce race conditions and instability.",
    ],
    tags: ["C", "POSIX", "Sockets", "pthreads", "Concurrency"],
    links: {
    demo: "/reports/secure_file_transfer_report.pdf",
  },
  },
  {
    slug: "distributed-marketplace",
    title: "Distributed Marketplace",
    tagline: "Threaded buyer-server architecture with custom protocol and shared state.",
    highlights: [
      "Designed custom protocol and implemented request routing and shared-state updates.",
      "Implemented graceful disconnect handling and basic failure handling paths.",
    ],
    tags: ["Python", "Distributed Systems", "Networking", "Threads"],
    links: {
    demo: "/reports/distributed_marketplace_report.pdf",
  },
}
];

"use client";

import { motion } from "framer-motion";

const LINKS = [
  { label: "GitHub", href: "https://github.com/jaredleoa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jaredleonard/" },
  { label: "CV (PDF)", href: "/Jared_Leonard_CV_copy.pdf" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.12),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative w-full max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Computer Science Graduate
        </div>

        <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
          Jared Leonard
        </h1>

        <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-300">
          Building full-stack applications, backend systems, and data-driven
          projects — with an emphasis on correctness, state, and practical
          engineering.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center rounded-xl border border-emerald-500/25 bg-neutral-900/60 px-4 py-2 text-sm font-medium text-neutral-100 transition
                         hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-neutral-900 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.25)]"
            >
              <span className="transition group-hover:text-emerald-200">
                {l.label}
              </span>
              <span className="ml-2 text-neutral-500 transition group-hover:text-emerald-300">
                ↗
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <StatCard
            title="Flagship"
            value="BrewHand"
            note="Full-stack mobile app"
          />
          <StatCard
            title="Backend"
            value="FinTech API"
            note="Risk scoring service"
          />
          <StatCard
            title="Cloud"
            value="Event Pipeline"
            note="AWS + Terraform"
          />
        </div>

        <div className="mt-14 flex items-center gap-3 text-sm text-neutral-500">
          <span className="h-px w-10 bg-neutral-800" />
          Scroll to projects
        </div>
      </motion.div>
    </section>
  );
}

function StatCard(props: { title: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition hover:border-emerald-500/25 hover:bg-neutral-900/60">
      <div className="text-xs uppercase tracking-wide text-neutral-500">
        {props.title}
      </div>
      <div className="mt-2 text-lg font-semibold text-neutral-100">
        {props.value}
      </div>
      <div className="mt-1 text-sm text-neutral-400">{props.note}</div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isPrimary = project.emphasis === "primary";

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.18 }}
      className={[
        "group relative overflow-hidden rounded-2xl border bg-neutral-950/30",
        "border-emerald-500/15 hover:border-emerald-400/40",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.2)]",
        isPrimary ? "md:col-span-2" : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.16),transparent_55%)]" />

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-100">
              {project.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-300">
              {project.tagline}
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-emerald-500/20 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-100 transition hover:border-emerald-400/50 hover:text-emerald-200"
              >
                GitHub ↗
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target={project.links.demo.startsWith("/") ? undefined : "_blank"}
                rel={project.links.demo.startsWith("/") ? undefined : "noreferrer"}
                className="rounded-lg border border-emerald-500/20 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-100 transition hover:border-emerald-400/50 hover:text-emerald-200"
              >
                Demo ↗
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className="mt-4 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-48 w-full object-cover opacity-90 transition duration-200 group-hover:opacity-100"
              loading="lazy"
            />
          </div>
        )}

        <ul className="mt-4 space-y-2 text-sm text-neutral-300">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 8).map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-800 bg-neutral-900/40 px-2.5 py-1 text-xs text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsCarousel3D() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
              Projects
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-300">
              Academic and portfolio builds focused on stateful systems, backend
              correctness, and practical engineering.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

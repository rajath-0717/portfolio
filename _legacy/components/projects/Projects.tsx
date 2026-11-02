"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, end-to-end."
          description="Production SaaS, AI-driven tools, and university-grade systems, designed, built and shipped from scratch."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 px-2"
        >
          <LayoutGroup>
            {projectCategories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "relative inline-flex items-center rounded-full border px-4 py-1.5 text-sm transition-colors",
                    active
                      ? "border-white/30 text-white"
                      : "border-white/10 text-white/60 hover:text-white hover:border-white/20",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{c}</span>
                </button>
              );
            })}
          </LayoutGroup>
        </motion.div>

        <LayoutGroup>
          <motion.div
            layout
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}

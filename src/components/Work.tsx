"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Lock, Radio } from "lucide-react";
import { categories, projects, type Project, type Tone } from "@/data/projects";
import { Reveal, SectionTitle } from "./Reveal";

const TONES: Record<Tone, { bar: string; shadow: string }> = {
  lime: { bar: "bg-lime", shadow: "hover:shadow-pop" },
  tang: { bar: "bg-tang", shadow: "hover:shadow-pop-tang" },
  cream: { bar: "bg-cream", shadow: "hover:shadow-pop-cream" },
  bubble: { bar: "bg-bubble", shadow: "hover:shadow-[6px_6px_0_0_#FF7AC6]" },
};

function AccessBadge({ a }: { a: Project["access"] }) {
  if (a === "live")
    return (
      <span className="chip !border-lime/40 !text-lime">
        <Radio size={12} /> live
      </span>
    );
  if (a === "public")
    return (
      <span className="chip">
        <Github size={12} /> open source
      </span>
    );
  return (
    <span className="chip">
      <Lock size={12} /> internal
    </span>
  );
}

function Card({ p, big }: { p: Project; big: boolean }) {
  const t = TONES[p.tone];
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={big ? "md:col-span-2" : ""}
    >
      <Link
        href={`/projects/${p.slug}`}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-cream/15 bg-ink-2 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-ink ${t.shadow}`}
      >
        <div className={`h-3 ${t.bar}`} />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-center justify-between gap-2">
            <span className="font-mono text-xs text-cream-mute">{p.category}</span>
            <AccessBadge a={p.access} />
          </div>
          <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{p.title}</h3>
          <p className="mt-1 font-mono text-sm text-tang">{p.tagline}</p>
          <p className="mt-4 line-clamp-4 text-[15px] leading-relaxed text-cream-dim">{p.hook}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.facts.slice(0, 3).map((f) => (
              <span key={f} className="rounded-md bg-lime/10 px-2 py-0.5 font-mono text-[11px] font-bold text-lime">
                {f}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.stack.slice(0, big ? 7 : 4).map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
          <span className="mt-auto flex items-center gap-1 pt-6 font-display text-sm font-bold text-lime">
            case study
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function Work() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = projects.filter((p) => cat === "All" || p.category === cat);

  return (
    <section id="work" aria-labelledby="work-h" className="section">
      <div className="wrap">
        <Reveal>
          <SectionTitle id="work-h" kicker="selected work" title="Stuff I've shipped" accent={`(${projects.length})`} />
        </Reveal>

        <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`rounded-full border-2 px-4 py-1.5 font-mono text-sm transition-colors ${
                cat === c
                  ? "border-lime bg-lime text-ink"
                  : "border-cream/20 text-cream-dim hover:border-lime hover:text-lime"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 [grid-auto-flow:dense] md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <Card key={p.slug} p={p} big={!!p.featured && cat === "All"} />
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 font-mono text-sm text-cream-mute">
          * &quot;internal&quot; = built at MicroDegree, so the source is private. The case studies tell you what it solves, what it does and how I built it.
        </p>
      </div>
    </section>
  );
}

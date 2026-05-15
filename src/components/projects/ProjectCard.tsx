"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/effects/TiltCard";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="h-full">
      <motion.div
        layout
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-700 bg-gradient-to-br",
            project.accent,
          )}
        />
        <div
          aria-hidden
          className="absolute inset-0 grid-bg opacity-30"
        />

        <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-90",
              project.accent,
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-30">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-white/90 mix-blend-overlay tracking-tighter"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.4)" }}
            >
              {project.title[0]}
            </motion.span>
          </div>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Badge variant="solid" className="bg-black/40 text-white border-white/20 backdrop-blur-md">
              {project.category}
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[10px] font-mono text-white/80">
              <Sparkles className="h-3 w-3" />
              {project.slug}
            </span>
          </div>
        </div>

        <div className="relative p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs text-white/50 mt-0.5">{project.subtitle}</p>
            </div>
            <div
              aria-hidden
              className="h-9 w-9 shrink-0 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors"
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <p className="mt-4 text-sm text-white/65 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <ul className="mt-4 space-y-1.5">
            {project.features.slice(0, 3).map((f) => (
              <li
                key={f}
                className="text-xs text-white/55 pl-3 relative before:absolute before:left-0 before:top-1.5 before:h-1 before:w-1 before:rounded-full before:bg-brand-violet"
              >
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            {project.stack.length > 5 && (
              <Badge variant="outline">+{project.stack.length - 5}</Badge>
            )}
          </div>

          <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

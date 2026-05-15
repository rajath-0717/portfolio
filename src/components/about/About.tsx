"use client";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Sparkles, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { stats } from "@/data/achievements";
import { StatCounter } from "./StatCounter";
import { stagger, fadeUp, viewportOnce, slideInLeft, slideInRight } from "@/lib/animations";
import { PROFILE } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="About"
          title="A developer obsessed with shipping premium experiences."
          description="MCA Gold Medalist with production-grade SaaS experience. I love clean architecture, motion-driven UI, and the kind of polish that makes a product feel inevitable."
        />

        <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 lg:grid-cols-5">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 overflow-hidden gradient-border h-full">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-violet/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-violet via-brand-fuchsia to-brand-blue flex items-center justify-center font-display text-2xl font-bold text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)]">
                    R
                  </div>
                  <div>
                    <div className="font-display font-semibold text-lg">{PROFILE.name}</div>
                    <div className="text-xs text-white/50 font-mono">Full Stack · AI · SaaS</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                  <p>
                    Results-oriented full-stack developer building production-grade web applications across the full SDLC.
                  </p>
                  <p>
                    Currently engineering two live SaaS products at MicroDegree,
                    integrating AI APIs (Claude, Gemini), Zoom, and real-time
                    workflows that thousands rely on.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center gap-2 text-white/50">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Degree
                    </div>
                    <div className="mt-1 font-medium">MCA Gold Medalist</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center gap-2 text-white/50">
                      <Trophy className="h-3.5 w-3.5" />
                      CGPA
                    </div>
                    <div className="mt-1 font-medium">9.82 / 10, Rank 1</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center gap-2 text-white/50">
                      <Sparkles className="h-3.5 w-3.5" />
                      Focus
                    </div>
                    <div className="mt-1 font-medium">AI · SaaS · DevX</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center gap-2 text-white/50">
                      <MapPin className="h-3.5 w-3.5" />
                      Based in
                    </div>
                    <div className="mt-1 font-medium">Mangalore, IN</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-3 grid gap-6"
          >
            <motion.div variants={slideInRight}>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                The short story.
              </h3>
              <div className="mt-4 space-y-4 text-white/65 leading-relaxed">
                <p>
                  I started building for the web in college, picked up
                  production-grade habits across BCA and MCA, and graduated as
                  University Gold Medalist with a CGPA of <span className="text-white font-medium">9.82 / 10</span>.
                </p>
                <p>
                  Today I split my time between two live SaaS products at
                  MicroDegree, a multi-role Hiring Portal and a Certificate
                  Automation Platform, both deployed via Docker on DigitalOcean
                  with full CI/CD.
                </p>
                <p>
                  I obsess over the micro: an extra 60ms of stagger, the
                  right curve on a hover, a button that snaps. I think those
                  details are what separates a portfolio from a product.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-2">
              {stats.map((s) => (
                <StatCounter key={s.label} stat={s} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

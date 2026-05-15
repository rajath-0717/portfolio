"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { achievements } from "@/data/achievements";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { SpotlightArea } from "@/components/effects/Spotlight";

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Recognition"
          title="Wins, medals & moments that mattered."
          description="A collection of academic awards and competitive victories, the byproducts of caring about details."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 md:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <motion.div key={a.title + a.description} variants={fadeUp}>
                <SpotlightArea className="rounded-2xl h-full" size={500}>
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 overflow-hidden hover:border-white/20 transition-colors">
                    <div
                      aria-hidden
                      className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br from-brand-violet/30 via-brand-fuchsia/20 to-transparent blur-3xl"
                    />
                    <div className="relative flex items-start gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 border border-amber-400/20 flex items-center justify-center shadow-[0_8px_30px_-10px_rgba(251,191,36,0.5)]">
                        <Icon className="h-5 w-5 text-amber-300" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-base font-semibold tracking-tight leading-snug">
                          {a.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                          {a.description}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          {a.highlight && (
                            <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-amber-200">
                              {a.highlight}
                            </span>
                          )}
                          {a.year && (
                            <span className="text-[10px] font-mono text-white/40">
                              {a.year}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightArea>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

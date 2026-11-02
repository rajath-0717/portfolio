"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { SpotlightArea } from "@/components/effects/Spotlight";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Experience"
          title="Production systems, not side projects."
          description="Where I've shipped real software for real users, with all the rough edges that come with it."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12 md:mt-16 grid gap-6"
        >
          <div
            aria-hidden
            className="absolute left-5 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          />

          {experience.map((item, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={item.role}
                variants={fadeUp}
                className="relative grid md:grid-cols-2 gap-6"
              >
                <div className="absolute left-5 md:left-1/2 top-7 md:top-8 -translate-x-1/2 z-10">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inset-0 rounded-full bg-brand-violet animate-ping opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-violet shadow-[0_0_15px_2px_rgba(139,92,246,0.7)]" />
                  </span>
                </div>

                <div
                  className={`pl-10 sm:pl-14 md:pl-0 ${
                    right
                      ? "md:col-start-2 md:pl-12"
                      : "md:col-start-1 md:pr-12"
                  }`}
                >
                  <SpotlightArea className="rounded-2xl">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-7 hover:border-white/20 transition-all duration-500 group">
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="h-4 w-4 text-brand-violet" />
                        <span className="text-xs font-mono text-white/50">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      <div className="mt-1 text-sm text-white/60 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-brand-violet/90 font-medium">
                          {item.company}
                        </span>
                        {item.location && (
                          <>
                            <span className="text-white/20">·</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>

                      <p className="mt-4 text-sm text-white/70 leading-relaxed">
                        {item.summary}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm text-white/60 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-brand-violet/70"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {item.stack.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </SpotlightArea>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

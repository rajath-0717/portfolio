"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { skillGroups, marqueeSkills } from "@/data/skills";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { Marquee } from "@/components/effects/Marquee";
import { SpotlightArea } from "@/components/effects/Spotlight";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Tech Stack"
          title="A toolkit tuned for shipping."
          description="A pragmatic stack: TypeScript on the front, Python and Node on the back, AI sprinkled where it earns its keep."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 md:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div key={group.category} variants={fadeUp}>
                <SpotlightArea className="rounded-2xl h-full" color="rgba(139, 92, 246, 0.16)">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 overflow-hidden hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-violet/30 to-brand-blue/30 border border-white/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-brand-violet" />
                      </div>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((s) => (
                        <span
                          key={s.name}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-white/75 hover:border-white/25 hover:bg-white/[0.05] hover:text-white transition-colors cursor-default"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-violet to-brand-blue" />
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightArea>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 space-y-3"
        >
          <Marquee items={marqueeSkills} speed={45} />
          <Marquee items={[...marqueeSkills].reverse()} reverse speed={50} />
        </motion.div>
      </div>
    </section>
  );
}

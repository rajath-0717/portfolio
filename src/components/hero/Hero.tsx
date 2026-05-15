"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { PROFILE, HERO_PILLS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/common/MagneticButton";
import { blurUp, fadeUp, stagger } from "@/lib/animations";
import { Marquee } from "@/components/effects/Marquee";
import { ProfileAvatar } from "./ProfileAvatar";

const ParticleField = dynamic(
  () =>
    import("@/components/effects/ParticleField").then((m) => m.ParticleField),
  { ssr: false },
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex flex-col justify-center overflow-x-clip overflow-y-hidden px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 md:min-h-[100svh] md:pt-32 md:pb-20 w-full max-w-[100vw]"
    >
      <ParticleField />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-brand-violet/10 via-transparent to-transparent"
      />

      <div className="container-tight relative z-10 w-full max-w-full min-w-0">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center w-full max-w-full min-w-0"
        >
          {/* Avatar */}
          <motion.div variants={fadeUp}>
            <ProfileAvatar />
          </motion.div>

          {/* Status badge */}
          <motion.div variants={fadeUp} className="mt-5 sm:mt-6 max-w-full">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 sm:px-3.5 py-1.5 text-[10px] xs:text-[11px] sm:text-xs font-mono text-white/70 backdrop-blur-md whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Software Engineer roles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={blurUp}
            className="mt-5 sm:mt-6 font-display font-bold tracking-tight leading-[1.05] text-[2rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gradient w-full max-w-full sm:max-w-5xl text-center break-words"
          >
            Hi, I&apos;m{" "}
            <br className="block sm:hidden" />
            <span className="relative inline-block text-gradient-brand animate-gradient-x">
              {PROFILE.name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-5 font-display text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl text-white/85 w-full max-w-3xl font-medium tracking-tight text-center px-2 break-words"
          >
            Software Engineer &amp; Full Stack Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-white/55 w-full max-w-2xl leading-relaxed text-center px-2 break-words"
          >
            Building modern, scalable digital experiences powered by AI.{" "}
            MCA Gold Medalist · CGPA 9.82 · Crafting production-grade SaaS.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-7 sm:mt-9 w-full max-w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            <MagneticButton>
              <Link href="#projects" className="group">
                <Button variant="primary" size="md" className="sm:h-13 sm:px-8 sm:text-base">
                  <Sparkles className="h-4 w-4" />
                  View My Work
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={PROFILE.resumeUrl} download>
                <Button variant="ghost" size="md" className="sm:h-13 sm:px-8 sm:text-base">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </MagneticButton>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <MagneticButton strength={0.4}>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/25 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.4}>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/25 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Marquee */}
          <motion.div
            variants={fadeUp}
            className="mt-10 sm:mt-12 lg:mt-14 w-full max-w-5xl"
          >
            <Marquee items={HERO_PILLS} speed={35} />
          </motion.div>

          {/* Scroll indicator (desktop only) */}
          <motion.div
            variants={fadeUp}
            className="mt-10 lg:mt-12 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-6 rounded-full border border-white/20 flex items-start justify-center p-1.5"
            >
              <span className="h-1.5 w-1 rounded-full bg-white/50" />
            </motion.div>
            <ArrowDown className="h-3 w-3 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

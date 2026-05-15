"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { blurUp, fadeUp, stagger, viewportOnce } from "@/lib/animations";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet shadow-[0_0_10px] shadow-brand-violet" />
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2 variants={blurUp} className="heading-lg text-gradient">
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed px-2 sm:px-0"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

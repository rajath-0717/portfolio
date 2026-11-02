"use client";
import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  id,
  kicker,
  title,
  accent,
}: {
  id?: string;
  kicker: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="mb-3 font-mono text-sm text-lime">{`// ${kicker}`}</p>
      <h2 id={id} className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
        {title}
        {accent && <span className="text-tang"> {accent}</span>}
      </h2>
    </div>
  );
}

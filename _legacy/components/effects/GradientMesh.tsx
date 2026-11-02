"use client";
import { motion } from "framer-motion";

export function GradientMesh() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/4 h-[40rem] w-[40rem] rounded-full bg-brand-violet/30 blur-[160px]"
      />
      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full bg-brand-blue/25 blur-[140px]"
      />
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-brand-fuchsia/25 blur-[140px]"
      />
      <div className="absolute inset-0 grid-bg opacity-50" />
    </div>
  );
}

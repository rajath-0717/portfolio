"use client";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "@/hooks/useCountUp";
import type { Stat } from "@/types";

export function StatCounter({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const value = useCountUp(stat.value, 1600, inView);
  const display =
    stat.value % 1 === 0 ? Math.round(value).toString() : value.toFixed(2);

  return (
    <div ref={ref} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-6 overflow-hidden">
      <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-brand-violet/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
        {display}
        {stat.suffix ?? ""}
      </div>
      <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-white/50 leading-tight">
        {stat.label}
      </div>
    </div>
  );
}

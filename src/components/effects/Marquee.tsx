"use client";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: number; // seconds per loop
  className?: string;
}

export function Marquee({
  items,
  reverse = false,
  speed = 30,
  className,
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("relative flex overflow-hidden mask-fade-edges", className)}>
      <div
        className="flex shrink-0 items-center gap-3 sm:gap-6 pr-3 sm:pr-6"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm text-white/70 backdrop-blur-md hover:text-white hover:border-white/25 transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-violet to-brand-blue" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

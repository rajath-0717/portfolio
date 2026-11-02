"use client";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  size?: number;
  color?: string;
}

export function SpotlightArea({
  className,
  size = 600,
  color = "rgba(139, 92, 246, 0.18)",
  children,
}: SpotlightProps & { children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn("group/spotlight relative", className)}
      style={
        {
          // ts hack for custom prop
          "--spot-color": color,
          "--spot-size": `${size}px`,
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(var(--spot-size) circle at var(--x) var(--y), var(--spot-color), transparent 50%)",
        }}
      />
      {children}
    </div>
  );
}

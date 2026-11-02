import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "solid";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-colors",
        variant === "default" &&
          "bg-white/[0.04] border border-white/10 text-white/80 backdrop-blur",
        variant === "outline" &&
          "border border-white/15 text-white/70",
        variant === "solid" &&
          "bg-brand-violet/20 text-brand-violet border border-brand-violet/30",
        className,
      )}
      {...props}
    />
  );
}

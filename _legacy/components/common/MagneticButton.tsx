"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number;
  children: React.ReactNode;
}

export function MagneticButton({
  strength = 0.3,
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useMagneticEffect<HTMLDivElement>(strength);

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex transition-transform duration-300 ease-out will-change-transform", className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}

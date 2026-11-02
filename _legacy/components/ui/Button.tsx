"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-brand-violet via-brand-fuchsia to-brand-blue text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.8)] hover:-translate-y-0.5",
        ghost:
          "bg-white/[0.04] border border-white/10 text-foreground hover:bg-white/[0.08] backdrop-blur-xl",
        outline:
          "border border-white/15 text-foreground hover:bg-white/[0.04]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-12 sm:h-13 px-7 sm:px-8 text-sm sm:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {variant === "primary" && (
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-full"
          />
        )}
        <span className="relative z-[1] flex items-center gap-2">{children}</span>
      </button>
    );
  },
);
Button.displayName = "Button";

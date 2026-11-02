"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function ProfileAvatar({
  src = "/images/rajath.jpg",
  alt = "Rajath",
  className,
}: ProfileAvatarProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={cn(
        "relative mx-auto h-24 w-24 xs:h-28 xs:w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
        className,
      )}
    >
      {/* soft glow halo */}
      <div
        aria-hidden
        className="absolute -inset-5 sm:-inset-6 rounded-full bg-gradient-to-br from-brand-violet/40 via-brand-fuchsia/30 to-brand-blue/40 blur-2xl opacity-60 animate-pulse-glow"
      />

      {/* spinning conic ring */}
      <div
        aria-hidden
        className="absolute -inset-[3px] rounded-full conic-glow opacity-80"
      />

      {/* gentle float wrapper */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full rounded-full overflow-hidden ring-2 ring-white/15"
      >
        {/* fallback ALWAYS rendered behind — visible when no image dropped yet */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-violet via-brand-fuchsia to-brand-blue">
          <span className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            R
          </span>
        </div>

        {/* image overlays on top when it loads */}
        {!errored && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            onError={() => setErrored(true)}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        )}
      </motion.div>

      {/* presence dot */}
      <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-emerald-400 ring-4 ring-background shadow-[0_0_15px_rgba(74,222,128,0.7)] z-10" />
    </div>
  );
}

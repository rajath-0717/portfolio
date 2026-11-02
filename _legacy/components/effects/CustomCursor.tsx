"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  const dotX = useSpring(x, { stiffness: 800, damping: 30, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 800, damping: 30, mass: 0.2 });

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const interactiveSelector = useRef(
    "a, button, [data-cursor='hover'], input, textarea, [role='button']",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const evaluate = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const noHover = !window.matchMedia("(hover: hover)").matches;
      const isNarrow = window.innerWidth < 768;
      const ok = !isTouch && !noHover && !isNarrow;
      setEnabled(ok);
      document.documentElement.style.cursor = ok ? "none" : "";
    };

    evaluate();
    window.addEventListener("resize", evaluate);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest(interactiveSelector.current));
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", evaluate);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.5 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-white/60"
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100]"
        style={{ x: dotX, y: dotY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.6)]" />
      </motion.div>
    </>
  );
}

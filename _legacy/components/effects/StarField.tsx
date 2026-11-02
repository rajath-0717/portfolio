"use client";
import { useEffect, useState } from "react";

interface Star {
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

function genStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    });
  }
  return stars;
}

export function StarField() {
  const [reduced, setReduced] = useState(false);
  // Generate stars only after mount. Doing this during render would call
  // Math.random() on both the server and the client, producing mismatched
  // inline styles and a hydration error. Server + first client render = empty.
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(genStars(120));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const apply = () => setReduced(mq.matches);
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: reduced
              ? undefined
              : `pulse-glow ${s.duration}s ease-in-out ${s.delay}s infinite`,
            boxShadow: `0 0 ${s.size * 2}px rgba(167, 139, 250, 0.5)`,
          }}
        />
      ))}
    </div>
  );
}

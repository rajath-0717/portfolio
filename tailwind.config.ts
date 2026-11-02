import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0C0B0A", 2: "#151412", 3: "#1E1C19", 4: "#2A2724" },
        cream: { DEFAULT: "#F4EFE6", dim: "#B9B2A5", mute: "#7C766B" },
        lime: { DEFAULT: "#C8FF2E", dark: "#9AD400" },
        tang: { DEFAULT: "#FF5B2E", soft: "#FF8A63" },
        bubble: "#FF7AC6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        pop: "6px 6px 0 0 #C8FF2E",
        "pop-tang": "6px 6px 0 0 #FF5B2E",
        "pop-cream": "6px 6px 0 0 #F4EFE6",
        "pop-sm": "3px 3px 0 0 #C8FF2E",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        wiggle: {
          "0%,100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0) rotate(var(--r,0deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--r,0deg))" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        blink: "blink 1s steps(1) infinite",
        wiggle: "wiggle 2.4s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

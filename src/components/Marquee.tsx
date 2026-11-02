const WORDS = [
  "React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python", "Supabase", "PostgreSQL",
  "Astro", "Docker", "Claude API", "Gemini API", "Playwright", "Tailwind", "DigitalOcean", "Recharts",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div
      aria-hidden
      className="-rotate-1 overflow-hidden border-y-4 border-ink bg-lime py-3 text-ink"
    >
      <div className="flex w-max animate-marquee gap-8 font-display text-2xl font-extrabold uppercase">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            {w} <span className="text-tang">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

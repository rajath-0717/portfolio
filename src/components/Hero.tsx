"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, MapPin } from "lucide-react";
import { PROFILE } from "@/lib/site";

const LINES = [
  "full stack developer",
  "dashboard builder",
  "automation nerd",
  "AI tinkerer",
  "MCA gold medalist",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = LINES[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1100);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((i + 1) % LINES.length);
          }
        }
      },
      del ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-lime">
      {text}
      <span className="animate-blink">▌</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-lime/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-tang/10 blur-3xl" />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="chip mb-6">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime" /> open to work · {PROFILE.location.split(",")[0]}
          </p>

          <h1 className="font-display text-[clamp(3.4rem,13vw,9.5rem)] font-extrabold leading-[0.82] tracking-tighter">
            <span className="block">Hi, I&apos;m</span>
            <span className="relative block text-lime">
              Rajath
              <span className="text-tang">.</span>
            </span>
          </h1>

          <p className="mt-8 font-mono text-lg text-cream-dim sm:text-xl">
            <span className="text-tang">$</span> whoami → <Typewriter />
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-dim">
            {PROFILE.tagline} Full Stack Developer &amp; Software Engineer in Mangalore, India, working with React, Next.js,
            Node.js, FastAPI and the Claude &amp; Gemini APIs.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#work" className="btn-lime">
              See the work <ArrowUpRight size={18} />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github size={18} /> GitHub
            </a>
            <a href="#contact" className="btn-ghost">
              Say hi
            </a>
          </div>
        </div>

        {/* sticker-style portrait */}
        <div className="relative mx-auto w-full max-w-[340px]">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-[2rem] bg-tang" aria-hidden />
          <div className="relative -rotate-2 overflow-hidden rounded-[2rem] border-4 border-cream bg-ink-2">
            <Image
              src={PROFILE.photo}
              alt="Portrait of Rajath, Full Stack Developer from Mangalore"
              width={680}
              height={800}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <span className="absolute -left-5 top-8 animate-wiggle rounded-lg border-2 border-ink bg-lime px-3 py-1 font-mono text-xs font-bold text-ink shadow-pop-cream">
            9.82 CGPA 🏅
          </span>
          <span className="absolute -right-3 bottom-16 animate-wiggle rounded-lg border-2 border-ink bg-bubble px-3 py-1 font-mono text-xs font-bold text-ink [animation-delay:-1.2s]">
            ships on fridays 😅
          </span>
          <span className="absolute -bottom-6 left-6 flex items-center gap-1 rounded-lg border-2 border-cream/30 bg-ink px-3 py-1 font-mono text-xs text-cream-dim">
            <MapPin size={12} className="text-tang" /> {PROFILE.location.split(",")[0]}, IN
          </span>
        </div>
      </div>
    </section>
  );
}

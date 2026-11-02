import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { FLAGSHIP_SLUG, getProject } from "@/data/projects";
import { Reveal } from "./Reveal";

const BIG = [
  { n: "20+", l: "live dashboards" },
  { n: "60+", l: "backend services" },
  { n: "9", l: "systems wired together" },
  { n: "270+", l: "commits and counting" },
];

export function Flagship() {
  const p = getProject(FLAGSHIP_SLUG);
  if (!p) return null;

  return (
    <section id="flagship" aria-labelledby="flagship-h" className="section !pb-6">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-cream bg-ink-2 p-6 shadow-pop sm:p-12">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-tang/20 blur-3xl" />

            <div className="relative flex flex-wrap items-center gap-3">
              <span className="rotate-[-2deg] rounded-lg border-2 border-ink bg-tang px-3 py-1 font-mono text-xs font-bold uppercase text-ink">
                ★ flagship project
              </span>
              <span className="chip">
                <Lock size={12} /> built at MicroDegree
              </span>
            </div>

            <h2 id="flagship-h" className="relative mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
              The marketing team&apos;s <span className="text-lime">mission control.</span>
            </h2>
            <p className="relative mt-6 max-w-3xl text-lg leading-relaxed text-cream-dim sm:text-xl">{p.hook}</p>

            <dl className="relative mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {BIG.map((b, i) => (
                <div key={b.l} className="rounded-2xl border-2 border-cream/15 bg-ink p-5">
                  <dt className="sr-only">{b.l}</dt>
                  <dd>
                    <span className={`block font-display text-5xl font-extrabold tracking-tighter ${["text-lime", "text-tang", "text-bubble", "text-cream"][i]}`}>
                      {b.n}
                    </span>
                    <span className="font-mono text-xs uppercase text-cream-mute">{b.l}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-10 grid gap-4 md:grid-cols-3">
              {[
                { h: "Why it exists", t: "Performance data lived in dozens of disconnected reports. One honest number took hours. Now it takes one click." },
                { h: "What you get", t: "Live ad spend, cost per lead, funnel conversion and closures by channel, on the company's real reporting cycle." },
                { h: "The plot twist", t: "Half the job was data trust: catching a silent wrong-column bug and flagging an outage's missing leads right on the charts." },
              ].map((c) => (
                <div key={c.h} className="rounded-2xl border-2 border-dashed border-cream/20 p-5">
                  <h3 className="font-mono text-sm font-bold text-lime">{c.h}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-cream-dim">{c.t}</p>
                </div>
              ))}
            </div>

            <Link href={`/projects/${p.slug}`} className="btn-lime relative mt-10">
              Read the full story <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

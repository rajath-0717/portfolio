import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Lock } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { projectGraph } from "@/lib/jsonld";
import { PROFILE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title}: ${p.tagline}`;
  return {
    title,
    description: p.summary,
    keywords: [...p.keywords, ...p.stack],
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { type: "article", title, description: p.summary, url: `/projects/${p.slug}` },
    twitter: { card: "summary_large_image", title, description: p.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="wrap max-w-4xl pb-24 pt-28 sm:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectGraph(p)) }} />

      <Link href="/#work" className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-cream-dim hover:text-lime">
        <ArrowLeft size={16} /> cd ../work
      </Link>

      <p className="font-mono text-sm text-lime">{`// ${p.category}`}</p>
      <h1 className="mt-2 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">{p.title}</h1>
      <p className="mt-3 font-mono text-lg text-tang">{p.tagline}</p>

      <p className="mt-8 text-xl leading-relaxed text-cream">{p.hook}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {p.facts.map((f) => (
          <li key={f} className="rounded-md bg-lime/10 px-3 py-1 font-mono text-xs font-bold text-lime">
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-4">
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-lime">
            Live site <ArrowUpRight size={18} />
          </a>
        )}
        {p.repoUrl && (
          <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Github size={18} /> Source
          </a>
        )}
        {p.access === "internal" && (
          <span className="chip">
            <Lock size={12} /> built at {PROFILE.employer}, source is private
          </span>
        )}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <section className="card p-6">
          <h2 className="font-mono text-sm font-bold text-tang">01 / why it exists</h2>
          <p className="mt-3 leading-relaxed text-cream-dim">{p.why}</p>
        </section>
        <section className="card p-6">
          <h2 className="font-mono text-sm font-bold text-tang">02 / who uses it</h2>
          <p className="mt-3 leading-relaxed text-cream-dim">{p.audience}</p>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-extrabold">What you get</h2>
        <ul className="mt-5 space-y-3">
          {p.outcome.map((h) => (
            <li key={h} className="card flex gap-3 p-4 text-cream-dim">
              <span className="font-mono text-lime">✓</span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-extrabold">How I built it</h2>
        <ul className="mt-5 space-y-3">
          {p.how.map((h) => (
            <li key={h} className="flex gap-3 text-cream-dim">
              <span className="font-mono text-tang">→</span>
              {h}
            </li>
          ))}
        </ul>
      </section>

      {p.twists && (
        <section className="mt-12">
          <h2 className="font-display text-3xl font-extrabold">
            Plot twists <span className="text-tang">&amp; hard problems</span>
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {p.twists.map((t, i) => (
              <div key={t.title} className="card p-6">
                <span className="font-mono text-xs text-lime">twist #{i + 1}</span>
                <h3 className="mt-1 font-display text-xl font-extrabold">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-cream-dim">{t.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="font-display text-2xl font-extrabold">Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-lg border-2 border-cream/20 px-3 py-1.5 font-display text-sm font-bold">
              {s}
            </span>
          ))}
        </div>
      </section>

      <Link
        href={`/projects/${next.slug}`}
        className="card group mt-16 flex items-center justify-between p-6 transition-colors hover:border-lime"
      >
        <span>
          <span className="block font-mono text-xs text-cream-mute">next project</span>
          <span className="font-display text-2xl font-extrabold">{next.title}</span>
        </span>
        <ArrowUpRight className="text-lime transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

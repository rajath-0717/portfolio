import { Reveal, SectionTitle } from "./Reveal";
import { achievements, experience, faq, stackGroups, stats } from "@/data/profile";
import { PROFILE } from "@/lib/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="section">
      <div className="wrap">
        <Reveal>
          <SectionTitle id="about-h" kicker="about" title="README.md" accent="(about me)" />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="card overflow-hidden">
              <div className="flex items-center gap-2 border-b-2 border-cream/10 bg-ink-3 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-tang" />
                <span className="h-3 w-3 rounded-full bg-lime" />
                <span className="h-3 w-3 rounded-full bg-bubble" />
                <span className="ml-3 font-mono text-xs text-cream-mute">~/rajath/README.md</span>
              </div>
              <div className="space-y-4 p-6 text-[17px] leading-relaxed text-cream-dim sm:p-8">
                <p>
                  I&apos;m <strong className="text-cream">Rajath</strong>, a Junior Software Engineer at {PROFILE.employer} and a Full Stack Developer from
                  Mangalore. I finished my MCA at {PROFILE.university} with a{" "}
                  <strong className="text-lime">University Gold Medal, First Rank and a 9.82 CGPA</strong>, then went straight into building software
                  that a whole company runs on.
                </p>
                <p>
                  My favourite kind of problem: a team is making decisions on slow, scattered or untrusted information. I build the thing that fixes it.
                  Lately that&apos;s a <span className="text-cream">20+ dashboard analytics platform</span> that tells a growth team exactly what&apos;s
                  working, and a <span className="text-cream">five-role hiring platform</span> that moves students from sign-up to offer.
                </p>
                <p>
                  I sweat the unglamorous stuff too: data you can trust, role-based security, Lighthouse scores, conversion tracking, and code the next
                  person can actually read.
                </p>
                <p className="font-mono text-sm text-cream-mute">
                  <span className="text-tang">$</span> git log --oneline | head -1 <br />
                  <span className="text-lime">a1b2c3d</span> currently learning: agents, evals and better tests
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div
                  className={`rounded-2xl border-2 border-ink p-5 ${
                    ["bg-lime text-ink", "bg-tang text-ink", "bg-cream text-ink", "bg-bubble text-ink"][i % 4]
                  }`}
                >
                  <div className="font-display text-5xl font-extrabold tracking-tighter">{s.value}</div>
                  <div className="mt-1 font-mono text-xs font-bold uppercase leading-tight">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="section">
      <div className="wrap">
        <Reveal>
          <SectionTitle id="exp-h" kicker="experience" title="Where I've" accent="been shipping" />
        </Reveal>
        <ol className="relative space-y-8 border-l-4 border-dashed border-cream/15 pl-6 sm:pl-10">
          {experience.map((e, i) => (
            <li key={e.company} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[38px] top-2 h-5 w-5 rounded-full border-4 border-ink sm:-left-[54px] ${i === 0 ? "bg-lime" : "bg-tang"}`}
              />
              <Reveal>
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {e.role} <span className="text-tang">@ {e.company}</span>
                    </h3>
                    <span className="font-mono text-sm text-lime">{e.period}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-cream-mute">{e.location}</p>
                  <p className="mt-4 text-cream-dim">{e.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-cream-dim">
                        <span className="mt-0.5 font-mono text-lime">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-h" className="section">
      <div className="wrap">
        <Reveal>
          <SectionTitle id="stack-h" kicker="toolbox" title="My" accent="stack" />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.05}>
              <div className="card h-full p-6 transition-colors hover:border-lime/60">
                <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-lime">{g.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border-2 border-cream/15 px-3 py-1.5 font-display text-sm font-bold transition-colors hover:border-tang hover:text-tang"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="ach-h" className="section">
      <div className="wrap">
        <Reveal>
          <SectionTitle id="ach-h" kicker="trophies" title="Achievement" accent="unlocked" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="card flex h-full gap-5 p-6">
                <div
                  className={`flex h-16 w-16 shrink-0 rotate-3 items-center justify-center rounded-xl border-2 border-ink text-center font-display text-xs font-extrabold leading-tight text-ink ${
                    ["bg-lime", "bg-tang", "bg-cream", "bg-bubble"][i % 4]
                  }`}
                >
                  {a.badge}
                </div>
                <div>
                  <h3 className="font-display text-lg font-extrabold leading-snug">{a.title}</h3>
                  <p className="mt-1 text-[15px] text-cream-dim">{a.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-h" className="section">
      <div className="wrap max-w-3xl">
        <Reveal>
          <SectionTitle id="faq-h" kicker="faq" title="Questions," accent="answered" />
        </Reveal>
        <div className="space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="group card open:border-lime/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-lg font-bold">
                {f.q}
                <span className="font-mono text-2xl text-lime transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-cream-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

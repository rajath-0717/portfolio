"use client";
import { useState } from "react";
import { Github, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { PROFILE } from "@/lib/site";
import { Reveal, SectionTitle } from "./Reveal";

type Status = "idle" | "sending" | "ok" | "err";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [f, setF] = useState({ name: "", email: "", message: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus("err");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Portfolio message from ${f.name}`,
          from_name: f.name,
          ...f,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        setF({ name: "", email: "", message: "" });
      } else setStatus("err");
    } catch {
      setStatus("err");
    }
  }

  const input =
    "w-full rounded-xl border-2 border-cream/20 bg-ink px-4 py-3 text-cream placeholder:text-cream-mute focus:border-lime focus:outline-none";

  return (
    <section id="contact" aria-labelledby="contact-h" className="section">
      <div className="wrap">
        <Reveal>
          <SectionTitle id="contact-h" kicker="contact" title="Let's build" accent="something loud." />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              <a href={`mailto:${PROFILE.email}`} className="card flex items-center gap-4 p-5 transition-colors hover:border-lime">
                <Mail className="text-lime" /> <span className="break-all font-mono text-sm">{PROFILE.email}</span>
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 p-5 transition-colors hover:border-lime">
                <Github className="text-lime" /> <span className="font-mono text-sm">github.com/{PROFILE.handle}</span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 p-5 transition-colors hover:border-lime">
                <Linkedin className="text-lime" /> <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <div className="card flex items-center gap-4 p-5">
                <MapPin className="text-tang" /> <span className="font-mono text-sm">{PROFILE.location}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={submit} className="card space-y-4 p-6 sm:p-8">
              <label className="block">
                <span className="mb-1 block font-mono text-xs text-cream-mute">name</span>
                <input required className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="Ada Lovelace" />
              </label>
              <label className="block">
                <span className="mb-1 block font-mono text-xs text-cream-mute">email</span>
                <input required type="email" className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} placeholder="ada@example.com" />
              </label>
              <label className="block">
                <span className="mb-1 block font-mono text-xs text-cream-mute">message</span>
                <textarea required minLength={10} rows={5} className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} placeholder="I have a dashboard problem..." />
              </label>
              <button type="submit" disabled={status === "sending"} className="btn-lime w-full disabled:opacity-60">
                {status === "sending" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                {status === "sending" ? "Sending…" : "Send it"}
              </button>
              <p role="status" aria-live="polite" className="min-h-5 font-mono text-sm">
                {status === "ok" && <span className="text-lime">✓ Sent. I&apos;ll reply within a day.</span>}
                {status === "err" && (
                  <span className="text-tang">
                    ✗ Couldn&apos;t send. Email me at {PROFILE.email} instead.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

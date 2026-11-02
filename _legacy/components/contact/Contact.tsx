"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Loader2, Check, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PROFILE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/common/MagneticButton";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (f: FormState) => {
    const e: Partial<FormState> = {};
    if (!f.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email.";
    if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("Missing NEXT_PUBLIC_WEB3FORMS_KEY env var");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio message from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit failed:", err);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something premium."
          description="Have a role, an idea or a project? Drop a message and I'll get back to you within a day."
        />

        <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 lg:grid-cols-5">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-2 space-y-4"
          >
            <motion.a
              variants={fadeUp}
              href={`mailto:${PROFILE.email}`}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:border-white/20 transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-violet/15 border border-brand-violet/20 flex items-center justify-center">
                <Mail className="h-4 w-4 text-brand-violet" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/40">Email</div>
                <div className="mt-1 text-sm text-white/90 group-hover:text-white transition-colors">
                  {PROFILE.email}
                </div>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href={`mailto:${PROFILE.emailAlt}`}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:border-white/20 transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-fuchsia/15 border border-brand-fuchsia/20 flex items-center justify-center">
                <Mail className="h-4 w-4 text-brand-fuchsia" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/40">Alt Email</div>
                <div className="mt-1 text-sm text-white/90 group-hover:text-white transition-colors">
                  {PROFILE.emailAlt}
                </div>
              </div>
            </motion.a>

            <motion.div
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-brand-blue" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/40">Based in</div>
                <div className="mt-1 text-sm text-white/90">{PROFILE.location}</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3 pt-2">
              <MagneticButton strength={0.4}>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/25 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.4}>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/25 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="lg:col-span-3 relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-7 md:p-9 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-violet/20 blur-3xl"
            />

            <div className="relative grid gap-5">
              <Field
                label="Name"
                error={errors.name}
                input={
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name"
                    className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-base sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-violet/60 focus:ring-2 focus:ring-brand-violet/20 transition-all"
                  />
                }
              />
              <Field
                label="Email"
                error={errors.email}
                input={
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@company.com"
                    className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.02] px-4 text-base sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-violet/60 focus:ring-2 focus:ring-brand-violet/20 transition-all"
                  />
                }
              />
              <Field
                label="Message"
                error={errors.message}
                input={
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about the role, idea or project…"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-base sm:text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-violet/60 focus:ring-2 focus:ring-brand-violet/20 transition-all resize-none"
                  />
                }
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-white/40">
                  I usually respond within a day.
                </p>
                <MagneticButton>
                  <Button type="submit" disabled={status === "submitting"}>
                    {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
                    {status === "success" && <Check className="h-4 w-4" />}
                    {status === "idle" && <Send className="h-4 w-4" />}
                    {status === "error" && <AlertCircle className="h-4 w-4" />}
                    {status === "submitting"
                      ? "Sending…"
                      : status === "success"
                        ? "Sent, thank you!"
                        : status === "error"
                          ? "Failed, try again"
                          : "Send message"}
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">
        {label}
      </span>
      {input}
      <span
        className={cn(
          "block text-xs text-red-400/90 mt-1.5 h-4 transition-opacity",
          error ? "opacity-100" : "opacity-0",
        )}
      >
        {error ?? "."}
      </span>
    </label>
  );
}

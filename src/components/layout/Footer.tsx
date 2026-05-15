import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { PROFILE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-32">
      <div className="container-tight py-12 md:py-16 px-5 sm:px-6">
        <div className="grid gap-10 md:gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet via-brand-fuchsia to-brand-blue">
                <span className="text-sm font-bold text-white font-display">R</span>
              </span>
              <span className="font-display text-lg font-semibold">{PROFILE.name}</span>
            </div>
            <p className="text-sm text-white/55 max-w-xs leading-relaxed">
              {PROFILE.tagline}
            </p>
            <p className="text-xs text-white/40 font-mono">{PROFILE.location}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Elsewhere
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:bg-white/[0.08] hover:border-white/25 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:bg-white/[0.08] hover:border-white/25 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:bg-white/[0.08] hover:border-white/25 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {PROFILE.name}. Crafted with Next.js, Tailwind & a lot of coffee.
          </p>
          <p className="text-xs text-white/40 font-mono">v1.0.0 · Built for the web.</p>
        </div>
      </div>
    </footer>
  );
}

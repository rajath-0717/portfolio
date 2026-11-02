"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV, PROFILE } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b-2 border-cream/10 bg-ink/90 backdrop-blur" : ""
      }`}
    >
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight">
          <span className="text-lime">&lt;</span>rajath<span className="text-tang">/</span>
          <span className="text-lime">&gt;</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={`/${n.href}`}
                className="rounded-lg px-3 py-2 font-mono text-sm text-cream-dim transition-colors hover:bg-ink-3 hover:text-lime"
              >
                ./{n.label}
              </a>
            </li>
          ))}
          <li>
            <a href={PROFILE.resumeUrl} download className="btn-lime ml-3 !px-4 !py-2">
              résumé.docx
            </a>
          </li>
        </ul>

        <button
          className="rounded-lg border-2 border-cream/20 p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="wrap space-y-1 pb-5 md:hidden">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={`/${n.href}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-mono text-base text-cream hover:bg-ink-3 hover:text-lime"
              >
                ./{n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

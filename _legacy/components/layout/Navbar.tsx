"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4"
      >
        <nav
          className={cn(
            "flex items-center gap-1 rounded-full transition-all duration-500",
            scrolled
              ? "border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] px-2 py-1.5"
              : "border border-transparent bg-transparent px-2 py-1.5",
          )}
        >
          <Link
            href="#"
            className="group flex items-center gap-2 pl-2 pr-3 sm:pl-3 sm:pr-4 py-1.5"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet via-brand-fuchsia to-brand-blue shadow-[0_0_20px_-2px_rgba(139,92,246,0.7)]">
              <span className="text-[11px] font-bold text-white font-display">R</span>
            </span>
            <span className="font-display font-semibold text-sm tracking-tight">
              {PROFILE.name}
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 mx-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/[0.05]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2 ml-1">
            {/* <ThemeToggle /> */}
            <a
              href={PROFILE.resumeUrl}
              className="inline-flex h-9 items-center rounded-full bg-white text-black px-4 text-xs font-medium hover:bg-white/90 transition-colors"
              download
            >
              Resume
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(true)}
            className="md:hidden h-9 w-9 rounded-full border border-white/10 flex items-center justify-center"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm border-l border-white/10 bg-black/85 backdrop-blur-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="mt-10 space-y-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-2xl font-display font-semibold text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <a
                href={PROFILE.resumeUrl}
                className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-full bg-white text-black px-5 text-sm font-medium"
                download
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

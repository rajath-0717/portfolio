import Link from "next/link";
import { PROFILE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-10 overflow-hidden border-t-4 border-lime">
      <div className="wrap py-12">
        <p
          aria-hidden
          className="stroke-text select-none font-display text-[clamp(4rem,19vw,15rem)] font-extrabold leading-[0.8] tracking-tighter"
        >
          RAJATH
        </p>
        <div className="mt-10 flex flex-col justify-between gap-4 font-mono text-sm text-cream-mute sm:flex-row">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js, Tailwind &amp; too much coffee.
          </p>
          <nav aria-label="Footer" className="flex gap-5">
            <a href={PROFILE.github} className="hover:text-lime" target="_blank" rel="noopener noreferrer">github</a>
            <a href={PROFILE.linkedin} className="hover:text-lime" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-lime">email</a>
            <Link href="/llms.txt" className="hover:text-lime">llms.txt</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

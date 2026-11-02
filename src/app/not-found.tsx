import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[80vh] flex-col items-start justify-center">
      <p className="font-mono text-tang">$ cd /this-page</p>
      <h1 className="font-display text-[clamp(5rem,20vw,14rem)] font-extrabold leading-none text-lime">404</h1>
      <p className="mt-2 font-mono text-cream-dim">bash: no such page. Probably my fault.</p>
      <Link href="/" className="btn-lime mt-8">
        Take me home
      </Link>
    </div>
  );
}

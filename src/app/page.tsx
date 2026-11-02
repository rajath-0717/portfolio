import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Flagship } from "@/components/Flagship";
import { Work } from "@/components/Work";
import { About, Achievements, Experience, Faq, Stack } from "@/components/Sections";
import { Contact } from "@/components/Contact";
import { homeGraph } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph()) }} />
      <Hero />
      <Marquee />
      <Flagship />
      <Work />
      <About />
      <Experience />
      <Stack />
      <Achievements />
      <Faq />
      <Contact />
    </>
  );
}

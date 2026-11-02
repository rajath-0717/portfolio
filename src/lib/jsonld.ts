import { faq, experience } from "@/data/profile";
import { projects, type Project } from "@/data/projects";
import { PROFILE, SEO, SITE_URL } from "./site";

const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;

export const personNode = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PROFILE.name,
  alternateName: PROFILE.handle,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE.photo}`,
  jobTitle: PROFILE.role,
  description: SEO.description,
  email: `mailto:${PROFILE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [PROFILE.github, PROFILE.linkedin],
  worksFor: { "@type": "Organization", name: PROFILE.employer },
  alumniOf: { "@type": "CollegeOrUniversity", name: PROFILE.university },
  award: [
    "University Gold Medal and First Rank, MCA, Srinivas University",
    "Excellent Academic Achievement of the Year 2024-25, Srinivas University",
    "1st Place, National Web Designing, St. Joseph Engineering College",
  ],
  knowsAbout: [
    "Full Stack Development", "React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python",
    "PostgreSQL", "Supabase", "Data dashboards", "Web scraping", "Workflow automation",
    "Technical SEO", "Claude API", "Gemini API", "Computer vision",
  ],
  hasOccupation: experience.map((e) => ({
    "@type": "Occupation",
    name: e.role,
    occupationLocation: { "@type": "City", name: e.location },
  })),
};

export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE_URL,
        name: "Rajath | Developer Portfolio",
        description: SEO.description,
        inLanguage: "en-IN",
        publisher: { "@id": PERSON_ID },
      },
      personNode,
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: SEO.title,
        isPartOf: { "@id": SITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      {
        "@type": "ItemList",
        name: "Projects by Rajath",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/projects/${p.slug}`,
          name: p.title,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function projectGraph(p: Project) {
  const url = `${SITE_URL}/projects/${p.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/#work` },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        url,
        name: p.title,
        headline: p.tagline,
        description: p.summary,
        keywords: [...p.keywords, ...p.stack].join(", "),
        author: { "@id": PERSON_ID },
        creator: { "@id": PERSON_ID },
        about: p.category,
        ...(p.liveUrl ? { sameAs: [p.liveUrl] } : {}),
        ...(p.repoUrl ? { codeRepository: p.repoUrl } : {}),
      },
    ],
  };
}

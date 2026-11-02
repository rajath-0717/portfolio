import { faq, experience } from "@/data/profile";
import { projects } from "@/data/projects";
import { PROFILE, SEO, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt: a plain-text brief for LLM crawlers and answer engines.
export function GET() {
  const body = `# ${PROFILE.name}: ${PROFILE.role}

> ${SEO.description}

Location: ${PROFILE.location}
Email: ${PROFILE.email}
GitHub: ${PROFILE.github}
LinkedIn: ${PROFILE.linkedin}
Site: ${SITE_URL}

## Experience
${experience.map((e) => `- ${e.role}, ${e.company} (${e.period}): ${e.summary}`).join("\n")}

## Projects
${projects.map((p) => `- [${p.title}](${SITE_URL}/projects/${p.slug}): ${p.summary}`).join("\n")}

## FAQ
${faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

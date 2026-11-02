export const experience = [
  {
    role: "Junior Software Engineer",
    company: "MicroDegree",
    period: "Feb 2026 – Present",
    location: "Mangalore",
    summary:
      "Owning the engineering behind a growth-stage ed-tech company's data, hiring and learning products. My flagship: a marketing analytics platform that the whole growth team now runs on.",
    highlights: [
      "Built and own the Marketing Analytics Platform: 20+ live dashboards, 60+ backend services and 9 integrations (Meta Ads, Google Ads, CRM, WhatsApp, Zoom, GA4 and more) behind role-based access.",
      "Designed and shipped a 5-role hiring and placement platform with Claude-assisted HR workflows and live Zoom interview-prep sessions.",
      "Delivered the learner site with single sign-on into the LMS, the gated Resources Hub, and high-speed Astro landing pages with full conversion tracking.",
      "Automated recurring operations (class-recording publishing, certificate delivery) with human approval built in. Deployed with Docker on DigitalOcean and Netlify, CI/CD through GitHub Actions.",
    ],
    stack: ["Next.js", "React", "Node.js", "FastAPI", "Supabase", "Astro", "Docker", "Claude API", "Meta & Google Ads APIs"],
  },
  {
    role: "Software Engineering Intern",
    company: "Abhimo Technologies Pvt. Ltd.",
    period: "Jun 2025 – Aug 2025",
    location: "Mangalore",
    summary: "Built the company's official website and an internship application management system.",
    highlights: [
      "Developed the website in PHP, MySQL, Tailwind and Bootstrap.",
      "Built an application system with secure file uploads, Google reCAPTCHA and automated email notifications, plus an admin review panel.",
    ],
    stack: ["PHP", "MySQL", "Tailwind", "Bootstrap", "JavaScript"],
  },
];

export const stackGroups = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Astro", "Preact", "Tailwind CSS", "Framer Motion", "Recharts"] },
  { name: "Backend", items: ["Node.js", "Express", "FastAPI", "Flask", "Python", "PHP", "REST APIs", "Webhooks"] },
  { name: "Data", items: ["PostgreSQL", "Supabase", "MySQL", "Drizzle", "Prisma", "SQLite", "Data pipelines", "Pandas"] },
  { name: "Cloud & DevOps", items: ["Docker", "GitHub Actions", "DigitalOcean", "Netlify", "Vercel", "Cloudflare Pages", "Git"] },
  { name: "AI & Automation", items: ["Claude API", "Gemini API", "YOLO", "MediaPipe", "Playwright", "Zoom API", "LMS APIs"] },
  { name: "Growth & SEO", items: ["Technical SEO", "Lighthouse", "GTM", "GA4", "Meta & Google Ads APIs", "UTM attribution"] },
];

export const achievements = [
  { title: "University Gold Medal & First Rank", detail: "MCA, Srinivas University. CGPA 9.82 / 10, Class of 2025.", badge: "9.82 CGPA" },
  { title: "Excellent Academic Achievement of the Year", detail: "Awarded by Srinivas University, 2024-25.", badge: "Top honour" },
  { title: "1st Place, National Web Designing", detail: "St. Joseph Engineering College, Vamanjoor.", badge: "Gold" },
  { title: "2nd Place, National Web Designing x3", detail: "Sri Devi College of Engineering & Technology; St. Aloysius College; St. Joseph Engineering College.", badge: "Silver x3" },
];

export const stats = [
  { value: "9.82", label: "MCA CGPA" },
  { value: "20+", label: "live dashboards shipped" },
  { value: "9", label: "systems integrated" },
  { value: "25", label: "projects in the lab" },
];

// Question-and-answer pairs. Rendered on the page AND emitted as FAQPage JSON-LD for answer engines.
export const faq = [
  {
    q: "Who is Rajath?",
    a: "Rajath is a Junior Software Engineer and Full Stack Developer based in Mangalore, Karnataka, India, working at MicroDegree. Rajath holds an MCA from Srinivas University (CGPA 9.82, University Gold Medal and First Rank) and builds production web platforms, data dashboards and automations.",
  },
  {
    q: "What is Rajath's biggest project?",
    a: "A marketing analytics platform at MicroDegree: 20+ live dashboards covering lead volume, Meta and Google Ads spend and cost per lead, masterclass and demo funnels, CRM pipeline, sales closures and website traffic. It has 60+ backend services, integrates nine external systems, and is used daily by the marketing team.",
  },
  {
    q: "What does Rajath build?",
    a: "Data and analytics dashboards (Next.js, Recharts, Supabase), role-based platforms such as a hiring portal, e-learning and single sign-on integrations, Astro landing pages for paid campaigns, workflow automations with FastAPI and Node.js, and AI tools using the Claude and Gemini APIs.",
  },
  {
    q: "Which technologies does Rajath work with?",
    a: "React, Next.js, TypeScript, Astro, Node.js, Express, FastAPI, Flask, Python, PostgreSQL, Supabase, Docker, GitHub Actions, DigitalOcean, Netlify, Vercel, Claude API, Gemini API and Playwright.",
  },
  {
    q: "Has Rajath built a data dashboard?",
    a: "Yes. The Marketing Analytics Platform is a production data dashboard suite with live ad-platform APIs, a sync pipeline into Postgres, data-quality safeguards and three access levels. Rajath also built a browser-only Meta Ads dashboard that generates written insights with the Claude API.",
  },
  {
    q: "Has Rajath built an e-learning platform or hiring portal?",
    a: "Yes. Rajath built the MicroDegree learner site with Supabase authentication and single sign-on into the Graphy LMS, and a five-role hiring and placement portal (Student, HR, Reviewer, Ops, Super Admin) on React, Express and Supabase.",
  },
  {
    q: "How can I contact Rajath about a role or project?",
    a: "Email rajath.connectme@gmail.com or use the contact form on this page. Rajath replies within about a day.",
  },
  {
    q: "Where can I see Rajath's code?",
    a: "Public projects are on GitHub at github.com/rajath-0717, including Job Scout, CarVault, Idea-to-Task Generator and the computer-vision experiments. Work built at MicroDegree is internal, so it is described in detail on this site rather than linked.",
  },
];

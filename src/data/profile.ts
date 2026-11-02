export const experience = [
  {
    role: "Software Engineer Intern",
    company: "MicroDegree",
    period: "Feb 2026 – Present",
    location: "Mangalore",
    summary:
      "Shipping production software for an ed-tech company: hiring and placement platform, marketing data dashboards, learner-facing site, landing pages and internal automations.",
    highlights: [
      "Built a 5-role hiring platform (React + Express + Supabase) with Claude-assisted HR comments and Zoom interview-prep sessions.",
      "Replaced 30+ marketing Google Sheets with synced Postgres data and live Next.js dashboards for leads, ad spend, masterclasses and closures.",
      "Built the e-learning landing site with Supabase auth and SSO into the Graphy LMS, plus the gated Resources Hub and Astro Google Ads landing pages.",
      "Automated certificates and Zoom-to-Thinkific recording uploads with human-approval steps. Deployed with Docker on DigitalOcean and Netlify, CI with GitHub Actions.",
    ],
    stack: ["React", "Next.js", "Node.js", "FastAPI", "Supabase", "Astro", "Docker", "Claude API", "Zoom API"],
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
  { name: "Data", items: ["PostgreSQL", "Supabase", "MySQL", "Drizzle", "Prisma", "SQLite", "Google Sheets API", "Pandas"] },
  { name: "Cloud & DevOps", items: ["Docker", "GitHub Actions", "DigitalOcean", "Netlify", "Vercel", "Cloudflare Pages", "Git"] },
  { name: "AI & Automation", items: ["Claude API", "Gemini API", "YOLO", "MediaPipe", "Playwright", "Zoom API", "Graphy / Thinkific APIs"] },
  { name: "Growth & SEO", items: ["Technical SEO", "Lighthouse", "GTM", "GA4", "Google Ads tracking", "UTM attribution"] },
];

export const achievements = [
  { title: "University Gold Medal & First Rank", detail: "MCA, Srinivas University. CGPA 9.82 / 10, Class of 2025.", badge: "9.82 CGPA" },
  { title: "Excellent Academic Achievement of the Year", detail: "Awarded by Srinivas University, 2024-25.", badge: "Top honour" },
  { title: "1st Place, National Web Designing", detail: "St. Joseph Engineering College, Vamanjoor.", badge: "Gold" },
  { title: "2nd Place, National Web Designing x3", detail: "Sri Devi College of Engineering & Technology; St. Aloysius College; St. Joseph Engineering College.", badge: "Silver x3" },
];

export const stats = [
  { value: "9.82", label: "MCA CGPA" },
  { value: "25+", label: "projects explored" },
  { value: "10+", label: "production apps shipped" },
  { value: "30+", label: "sheets replaced by dashboards" },
];

// Question-and-answer pairs. Rendered on the page AND emitted as FAQPage JSON-LD for answer engines.
export const faq = [
  {
    q: "Who is Rajath?",
    a: "Rajath is a Full Stack Developer and Software Engineer based in Mangalore, Karnataka, India. He holds an MCA from Srinivas University (CGPA 9.82, University Gold Medal and First Rank) and works at MicroDegree building production web platforms, data dashboards and automations.",
  },
  {
    q: "What does Rajath build?",
    a: "Data and analytics dashboards (Next.js, Recharts, Supabase), role-based platforms such as a hiring portal, e-learning and SSO integrations, Astro landing pages for Google Ads, workflow automations with FastAPI and Node.js, and AI tools using the Claude and Gemini APIs.",
  },
  {
    q: "Which technologies does Rajath work with?",
    a: "React, Next.js, TypeScript, Astro, Node.js, Express, FastAPI, Flask, Python, PostgreSQL, Supabase, Docker, GitHub Actions, DigitalOcean, Netlify, Vercel, Claude API, Gemini API and Playwright.",
  },
  {
    q: "Has Rajath built a data dashboard?",
    a: "Yes. He built a marketing lead-analytics platform that replaced 30+ Google Sheets with Postgres-backed Next.js dashboards covering lead quantity, ad spend and CPL, masterclass and demo conversion, and sales closures. He also built a browser-only Meta Ads dashboard with AI-written insights from the Claude API.",
  },
  {
    q: "Has Rajath built an e-learning platform or hiring portal?",
    a: "Yes. He built the MicroDegree learner site with Supabase authentication and single sign-on into the Graphy LMS, and a five-role hiring and placement portal (Student, HR, Reviewer, Ops, Super Admin) on React, Express and Supabase.",
  },
  {
    q: "Is Rajath available for work?",
    a: "Rajath is open to full-time software engineering roles and selected freelance projects. The fastest way to reach him is by email at rajath.connectme@gmail.com or through the contact form on this page.",
  },
  {
    q: "Where can I see Rajath's code?",
    a: "Public projects are on GitHub at github.com/rajath-0717, including Job Scout, CarVault, Idea-to-Task Generator and the computer-vision experiments. Work built at MicroDegree is internal, so it is described in detail on this site rather than linked.",
  },
];

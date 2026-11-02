export type Category = "Platforms" | "Dashboards" | "AI & Automation" | "Web & Fun";
export type Access = "internal" | "public" | "live";
export type Tone = "lime" | "tang" | "cream" | "bubble";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  access: Access;
  tone: Tone;
  featured?: boolean;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
  keywords: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const gh = (repo: string) => `https://github.com/rajath-0717/${repo}`;

export const categories: ("All" | Category)[] = [
  "All",
  "Platforms",
  "Dashboards",
  "AI & Automation",
  "Web & Fun",
];

export const projects: Project[] = [
  {
    slug: "hiring-portal",
    title: "Hiring Portal",
    tagline: "5 role-based portals, 1 codebase",
    category: "Platforms",
    access: "internal",
    tone: "lime",
    featured: true,
    summary:
      "A role-based placement platform that takes a student from profile setup through career readiness, real-job applications and HR-managed hiring pipelines. One React SPA and one Express API serve five portals: Student, Admin/HR, Resume Reviewer, Ops and Super Admin.",
    problem:
      "Placement work was scattered across sheets and chats. The portal gives students, HR, reviewers and ops one workflow with role guards on both frontend and backend.",
    highlights: [
      "Career-readiness engine reused across jobs, applications and email-subscription gating",
      "Claude API suggestions for HR comments on applications",
      "Zoom daily interview-prep sessions with registration, join-link caching and a feedback window",
      "Multi-round resume review queue with approve / send-back / edit-comment flow",
      "Cloud drive registrations, external jobs feed, referrals, broadcast notifications with read receipts",
      "Super Admin analytics from DB aggregates, staff management for HR, Reviewer and Ops roles",
      "Cookie + Bearer auth with refresh-token session restore, Google OAuth (PKCE), deep-link redirects",
      "Netlify SPA proxying /api/* to a DigitalOcean-hosted Express backend so auth cookies stay first-party",
    ],
    stack: ["React 19", "Vite", "Tailwind 4", "Express 5", "Supabase", "PostgreSQL", "Claude API", "Zoom API", "Recharts", "Netlify", "DigitalOcean"],
    keywords: ["hiring portal", "placement portal", "role based access control", "React Express Supabase"],
  },
  {
    slug: "lead-analytics-dashboards",
    title: "Lead Analytics Dashboards",
    tagline: "30+ Google Sheets, replaced",
    category: "Dashboards",
    access: "internal",
    tone: "tang",
    featured: true,
    summary:
      "A centralised analytics platform for the marketing team. Sheets that were glued together with IMPORTRANGE and COUNTIF are now synced into Postgres, normalised through a column-mapping layer and served as live dashboards.",
    problem:
      "30+ spreadsheets with inconsistent headers did not scale and offered no history or source comparison. The sheets stay read-only; the platform is a mirror with analytics on top.",
    highlights: [
      "Three-layer sync pipeline: read-only Sheets, column mapping, Supabase Postgres, thin Express API",
      "MTD dashboards framed on the company cycle (28th to 27th): lead quantity, masterclass and demo analysis, closures insights",
      "Live Meta and Google Ads spend and CPL, with campaign badges: Scale / Watch / Pause-Review",
      "Closures broken down by plan, course type, work experience and sales agent",
      "Cron-driven syncs, attribution warm-ups and diagnostic scripts",
      "Next.js 14 + Recharts frontend with filters, KPIs and growth panels",
    ],
    stack: ["Next.js 14", "Express", "Supabase", "PostgreSQL", "Recharts", "Tailwind", "Google Sheets API", "Meta Ads API", "node-cron"],
    keywords: ["data dashboard", "marketing analytics", "lead analytics dashboard", "Google Sheets to Postgres"],
  },
  {
    slug: "lead-intelligence-platform",
    title: "Lead Intelligence Platform",
    tagline: "One phone number = one unified lead",
    category: "Dashboards",
    access: "internal",
    tone: "cream",
    summary:
      "A standalone marketing-intelligence app that ingests leads from 30+ Google Sheet sources, de-duplicates them on phone number, scores every lead on cross-source engagement and surfaces funnel health.",
    problem:
      "The same person showed up across many sheets with no single view. This layer watches, scores and surfaces. It deliberately is not a CRM.",
    highlights: [
      "Phone-number master key for a single unified lead profile",
      "Engagement-based lead scoring across sources",
      "Funnel health, segment distribution and top-leads views",
      "Export of lead lists back to Sheets for sales and marketing",
      "Dockerised app plus a separate sync-cron image, Vitest test setup",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Vitest", "Docker"],
    keywords: ["lead scoring", "deduplication", "funnel dashboard", "marketing intelligence"],
  },
  {
    slug: "meta-ads-dashboard",
    title: "Meta Ads Intelligence Dashboard",
    tagline: "Drop a CSV, get AI insights",
    category: "Dashboards",
    access: "internal",
    tone: "bubble",
    summary:
      "A browser-only tool: upload a CSV exported from Meta Ads Manager and it parses, analyses and visualises campaign performance, then asks Claude for written insights.",
    problem:
      "Reading raw Ads Manager exports by hand is slow. This turns an export into CPL by vertical, active-campaign tables and recommendations in seconds, with no backend.",
    highlights: [
      "PapaParse CSV ingestion with client-side analysis",
      "Overview cards, CPL by vertical and active-campaign views in Recharts",
      "AI-generated insights through the Claude API",
      "Runs fully in the browser, API key kept in localStorage",
    ],
    stack: ["React 18", "Vite", "TypeScript", "Tailwind", "Recharts", "PapaParse", "Claude API"],
    keywords: ["Meta Ads dashboard", "CPL analysis", "CSV analytics", "AI insights"],
  },
  {
    slug: "elearning-platform",
    title: "MicroDegree E-Learning Platform",
    tagline: "Landing site + SSO into the LMS",
    category: "Platforms",
    access: "internal",
    tone: "lime",
    featured: true,
    summary:
      "The learner-facing site for MicroDegree: a long-scroll marketing page plus a Supabase auth layer that single-signs-on learners into Graphy, the LMS that hosts the courses.",
    problem:
      "Every CTA needed to land learners in the right place in the LMS (dashboard, checkout, free plan or referral) without a second login.",
    highlights: [
      "Supabase password and Google OAuth login, then a signed HS256 JWT hand-off into Graphy",
      "One /api/graphy-sso funnel for every CTA, with a trusted-host check on return URLs",
      "Graphy webhooks and sync scripts that reconcile learners, transactions, products and memberships",
      "CSV importers to backfill UTM, segment and referral fields the API omits",
      "Plans, price toggle, testimonials, FAQ and referral sections driven from a typed content file",
      "UTM capture, visitor tracking, sitemap, robots and SEO helpers",
    ],
    stack: ["Next.js 16", "React", "TypeScript", "Supabase", "CSS Modules", "Graphy API", "Netlify"],
    keywords: ["e-learning platform", "single sign-on", "LMS integration", "Next.js landing page"],
  },
  {
    slug: "resources-hub",
    title: "Resources Hub",
    tagline: "Gated roadmaps, projects, ebooks, interview prep",
    category: "Platforms",
    access: "internal",
    tone: "tang",
    featured: true,
    summary:
      "A learning-resources site with a marketing landing page, a tabbed resource browser and a content gate (Google or email login, then a one-time profile capture) that turns visitors into leads.",
    problem:
      "Free resources needed to double as a lead engine while still feeling instant to browse. Browsing is open; opening an item triggers the gate.",
    highlights: [
      "Four categories: Roadmap, Project, Ebook, Interview Prep, each with per-item click analytics",
      "Structured roadmap stages with topic chips, authored in an admin dashboard",
      "Profile completion flow stored once, skipped on later logins",
      "Drizzle ORM + Supabase, Dockerfile and DigitalOcean deploy",
      "Design system implemented from a Claude Design prototype",
    ],
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Supabase", "Tailwind", "Docker", "DigitalOcean"],
    keywords: ["resource library", "lead generation", "content gate", "developer roadmaps"],
  },
  {
    slug: "google-ads-landing-pages",
    title: "Google Ads Landing Pages",
    tagline: "Fast Astro pages built to convert",
    category: "Platforms",
    access: "live",
    tone: "cream",
    featured: true,
    summary:
      "Conversion-focused landing pages for Cloud/DevOps and GenAI programmes, built with Astro and Preact and served under the main site's domain through a reverse proxy.",
    problem:
      "Paid traffic needed pages that load fast, track every conversion and keep UTM data attached to each lead.",
    highlights: [
      "Astro 5 + Preact islands, Tailwind, near-zero client JS",
      "Hosted on Cloudflare Pages, proxied to /cloudprograms and /genaiprograms on the main domain",
      "GTM, GA4 and Google Ads conversion tracking, UTM params passed into hidden Tally form fields",
      "Playwright review scripts for visual QA, Lighthouse reports kept per theme",
    ],
    stack: ["Astro 5", "Preact", "Tailwind", "Cloudflare Pages", "GTM", "GA4", "Playwright"],
    keywords: ["landing page developer", "Astro", "Google Ads conversion tracking", "Lighthouse performance"],
  },
  {
    slug: "career-page",
    title: "Careers Site",
    tagline: "Jobs, applications and trainer hiring",
    category: "Platforms",
    access: "internal",
    tone: "bubble",
    summary:
      "A careers site with separate React (Vite) frontend and Express + Supabase backend. Job listings, applications, trainer applications and custom application questions all come from the database.",
    problem: "HR needed to post roles and review candidates without developer help.",
    highlights: [
      "Public jobs and trainer pages, HR and Super Admin dashboards",
      "Custom per-job application questions",
      "Private Supabase storage buckets for candidate and trainer resumes",
      "Complete SQL setup scripts for a fresh Supabase project",
    ],
    stack: ["React", "Vite", "Express", "Supabase", "PostgreSQL"],
    keywords: ["careers page", "job application system", "React Express Supabase"],
  },
  {
    slug: "main-website",
    title: "MicroDegree Main Website",
    tagline: "The company site, tuned with Lighthouse",
    category: "Platforms",
    access: "live",
    tone: "lime",
    summary:
      "Maintained and optimised the company's main marketing website: course pages, forms, testimonials and the reverse-proxy routes that mount other apps under the same domain.",
    problem: "A large React codebase needed performance and SEO tuning plus clean routing to the apps around it.",
    highlights: [
      "Course detail pages and enquiry forms",
      "Desktop and mobile Lighthouse audits tracked",
      "Netlify proxy rules mounting the e-learning and landing apps on one domain",
    ],
    stack: ["React", "Netlify", "Lighthouse"],
    keywords: ["website performance", "Lighthouse", "React website"],
    liveUrl: "https://www.microdegree.work",
  },
  {
    slug: "zoom-thinkific-automation",
    title: "Zoom to Thinkific Automation",
    tagline: "Recordings upload themselves, a human approves",
    category: "AI & Automation",
    access: "internal",
    tone: "tang",
    featured: true,
    summary:
      "An internal platform that moves Zoom cloud recordings into Thinkific lessons with a mandatory approval step: webhook, FastAPI ingest, PM approval in a dashboard, then a worker streams the file to Supabase Storage and on to Thinkific, with an audit trail.",
    problem: "Uploading recordings by hand cost hours every week and left no record of what went where.",
    highlights: [
      "Zoom webhook to FastAPI ingest and recording-to-lesson mapping",
      "Dashboard with super_admin and pm roles, approve / reject / map / upload",
      "Worker streams from Zoom to a Supabase Storage backup, then to Thinkific",
      "SQL schema with a claim function for safe job pickup",
      "Next.js on Netlify, FastAPI web service + worker on DigitalOcean App Platform",
    ],
    stack: ["FastAPI", "Python", "Next.js", "Supabase", "Zoom API", "Thinkific API", "DigitalOcean", "Netlify"],
    keywords: ["workflow automation", "Zoom API", "FastAPI worker", "approval workflow"],
  },
  {
    slug: "certificate-automation",
    title: "Certificate Automation",
    tagline: "Sheet row in, certificate in the inbox",
    category: "AI & Automation",
    access: "internal",
    tone: "cream",
    summary:
      "Reads rows per course from Google Sheets, renders a personalised PNG certificate from a shared template, emails it and marks the row processed only after a human approves.",
    problem: "Hundreds of certificates a cycle were being made by hand with copy-paste errors.",
    highlights: [
      "node-canvas rendering from one shared template",
      "Nodemailer SMTP delivery, status written back to the sheet",
      "Cron jobs plus Supabase / MongoDB / Postgres integrations",
      "Dockerised, human approval before any send",
    ],
    stack: ["Node.js", "node-canvas", "Google Sheets API", "Nodemailer", "node-cron", "Docker"],
    keywords: ["certificate generator", "Google Sheets automation", "email automation"],
  },
  {
    slug: "tech-harate-certificates",
    title: "Tech Harate Certificate Bot",
    tagline: "Fill the form, get the certificate",
    category: "AI & Automation",
    access: "internal",
    tone: "bubble",
    summary:
      "A backend that watches a Google Sheet fed by a Tally form and emails a personalised participation certificate to every new submission, with no dashboard and no manual approval.",
    problem: "A community meetup needed instant certificates for every attendee.",
    highlights: [
      "Tally form to Google Sheet to FastAPI to email",
      "Personalised certificate rendering",
      "Zero-touch: runs unattended",
    ],
    stack: ["FastAPI", "Python", "Google Sheets API", "SMTP", "Tally"],
    keywords: ["event certificates", "FastAPI automation"],
  },
  {
    slug: "job-scout",
    title: "Job Scout",
    tagline: "8 job portals, 1 search box",
    category: "AI & Automation",
    access: "public",
    tone: "lime",
    featured: true,
    summary:
      "A Flask + Playwright web app that scrapes recent job listings from eight portals on demand (LinkedIn, Glassdoor, Indeed, Hirist, Naukri, Foundit, Apna, Shine), shows a sortable list and exports the run to Excel. No accounts, no API keys, no database.",
    problem: "Checking eight job sites every day is tedious. Job Scout runs the search once and normalises the results.",
    highlights: [
      "Per-portal scrapers with portal-specific filters: role, locations, posted-within, apply type, experience, salary band",
      "Sortable results in the browser plus Excel download",
      "Plain-HTTP scraping where possible, Playwright where needed",
    ],
    stack: ["Python", "Flask", "Playwright", "Pandas", "openpyxl"],
    keywords: ["job scraper", "web scraping Playwright", "Flask app"],
    repoUrl: gh("job-scout"),
  },
  {
    slug: "alumni-radar",
    title: "AlumniRadar",
    tagline: "Find the real alumni, not the current students",
    category: "AI & Automation",
    access: "internal",
    tone: "tang",
    summary:
      "A web app that scrapes and analyses LinkedIn alumni data for an institution, verifying true alumni by education end-year, then sorts by graduation year and exports to Excel.",
    problem: "Generic scrapers mix current students with graduates. This one filters out 'Present' enrolments.",
    highlights: [
      "Smart alumni detection from the education section",
      "Experience extraction, SQLite caching for repeat runs",
      "Glassmorphism dark dashboard with CSV / Excel export",
    ],
    stack: ["Python", "Flask", "Playwright", "Pandas", "SQLite"],
    keywords: ["alumni data", "Playwright scraper", "data extraction"],
  },
  {
    slug: "carvault",
    title: "CarVault",
    tagline: "AI-powered car marketplace",
    category: "AI & Automation",
    access: "public",
    tone: "cream",
    featured: true,
    summary:
      "A car dealership platform built across the full SDLC. Gemini identifies vehicle attributes from images so listings need far less manual entry, with test-drive booking and an admin dashboard.",
    problem: "Dealers lose time typing the same vehicle attributes into every listing.",
    highlights: [
      "Gemini-powered vehicle attribute extraction",
      "Clerk role-based authentication",
      "Test-drive booking with conflict detection",
      "Admin dashboard and analytics",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Gemini API", "Clerk", "Vercel"],
    keywords: ["AI car marketplace", "Gemini API", "Next.js Prisma Clerk"],
    repoUrl: gh("CarVault"),
  },
  {
    slug: "idea-to-task-generator",
    title: "Idea-to-Task Generator",
    tagline: "Messy idea in, editable task list out",
    category: "AI & Automation",
    access: "public",
    tone: "bubble",
    summary:
      "A Gemini-powered productivity app that analyses an unstructured business idea and converts it into an editable, structured task workflow.",
    problem: "Ideas stall because turning them into a plan is the hard part.",
    highlights: ["Idea analysis with Gemini", "Editable structured tasks", "Typed TypeScript API contracts and modular components"],
    stack: ["React 18", "TypeScript", "Tailwind", "Node.js", "Express", "Gemini API"],
    keywords: ["AI productivity tool", "Gemini API", "TypeScript"],
    repoUrl: gh("idea-to-task-generator"),
  },
  {
    slug: "pose-detector",
    title: "Cricket Umpire Pose Detector",
    tagline: "Computer vision reads umpire signals",
    category: "AI & Automation",
    access: "public",
    tone: "lime",
    summary:
      "A MediaPipe-based pose detector that recognises cricket umpire signals: six, out, wide and no-ball.",
    problem: "An experiment in turning body landmarks into rule-based gesture classification.",
    highlights: ["MediaPipe pose landmarks", "Signal classification for four umpire calls", "Documented learning guide"],
    stack: ["Python", "MediaPipe", "OpenCV"],
    keywords: ["pose detection", "MediaPipe", "computer vision"],
    repoUrl: gh("pose-detector"),
  },
  {
    slug: "hibiscus-detection",
    title: "Hibiscus Detection",
    tagline: "YOLO that runs on a plain CPU",
    category: "AI & Automation",
    access: "public",
    tone: "tang",
    summary:
      "A YOLO object detector trained on a self-collected dataset of hibiscus flowers, working on images and a live webcam feed, CPU-only.",
    problem: "End-to-end object detection: collect, label, train, evaluate and run it on a laptop.",
    highlights: ["Self-built dataset", "Ultralytics YOLO training", "Webcam and image inference without a GPU"],
    stack: ["Python", "Ultralytics YOLO", "OpenCV"],
    keywords: ["YOLO object detection", "computer vision", "machine learning"],
    repoUrl: gh("hibiscus-detection"),
  },
  {
    slug: "url-filter-extension",
    title: "URL Filter",
    tagline: "A browser extension with an admin panel",
    category: "AI & Automation",
    access: "internal",
    tone: "cream",
    summary:
      "A Chrome extension that blocks listed URLs and shows a block page, backed by a small server and an admin panel for managing the blocklist.",
    problem: "Managing blocked sites on many machines from one place.",
    highlights: ["Manifest-based extension with background blocking", "Admin UI plus server API", "JSON blocklist"],
    stack: ["JavaScript", "Chrome Extensions", "Node.js"],
    keywords: ["Chrome extension", "URL blocker"],
  },
  {
    slug: "mpg-predictor",
    title: "Mileage Predictor",
    tagline: "Regression model behind a web form",
    category: "AI & Automation",
    access: "public",
    tone: "lime",
    summary: "Predicts a car's MPG from its features using a scikit-learn regression model served via a Flask app.",
    problem: "Take a notebook model and make it usable by someone who has never seen a notebook.",
    highlights: ["Regression analysis notebook", "Pickled model behind Flask", "Simple predict form"],
    stack: ["Python", "scikit-learn", "Flask", "Pandas", "Jupyter"],
    keywords: ["machine learning", "regression", "Flask deployment"],
    repoUrl: gh("mpg-app"),
  },
  {
    slug: "sygma-2023",
    title: "Sygma 2023",
    tagline: "National IT fest website",
    category: "Web & Fun",
    access: "live",
    tone: "bubble",
    summary: "Event site for a national-level university IT fest: event details, registration and coordinator workflows.",
    problem: "Hundreds of participants needed one place to see events and register.",
    highlights: ["Participant registration", "Session scheduling", "Responsive layout"],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    keywords: ["event website", "college fest website"],
    liveUrl: "https://sygma-2023.netlify.app/",
    repoUrl: gh("sygma-2023"),
  },
  {
    slug: "cinebites",
    title: "CineBites",
    tagline: "Movie-theatre café management",
    category: "Web & Fun",
    access: "public",
    tone: "tang",
    summary: "Order management, billing and inventory control for a theatre café, with low-stock alerts and daily sales reports.",
    problem: "A café counter needs fast billing and simple stock tracking.",
    highlights: ["Order and billing", "Inventory with low-stock alerts", "Daily sales reporting"],
    stack: ["PHP", "MySQL", "Tailwind", "Bootstrap", "JavaScript"],
    keywords: ["inventory management", "billing system", "PHP MySQL"],
  },
  {
    slug: "social-bingo",
    title: "Social Bingo",
    tagline: "A mixer game built with Copilot",
    category: "Web & Fun",
    access: "live",
    tone: "cream",
    summary: "A Social Bingo game for in-person mixers, built with GitHub Copilot and VS Code.",
    problem: "Break the ice at events with a playable card.",
    highlights: ["Playable bingo grid", "Deployed on GitHub Pages"],
    stack: ["Python", "GitHub Pages", "GitHub Copilot"],
    keywords: ["browser game", "GitHub Pages"],
    liveUrl: "https://rajath-0717.github.io/my-soc-ops-python/",
    repoUrl: gh("my-soc-ops-python"),
  },
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    tagline: "Duo mode and a computer opponent",
    category: "Web & Fun",
    access: "public",
    tone: "lime",
    summary: "A responsive tic-tac-toe with real-time updates, two-player mode and a computer opponent.",
    problem: "A first game-logic project.",
    highlights: ["Duo and vs-computer modes", "Responsive UI"],
    stack: ["HTML", "CSS", "JavaScript"],
    keywords: ["JavaScript game"],
    repoUrl: gh("tic-tac-toe"),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

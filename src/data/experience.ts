import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "MicroDegree",
    period: "Feb 2026 - Present",
    location: "Mangalore",
    summary:
      "Concurrently engineering two live production SaaS systems, a role-based Hiring Portal and a Certificate Automation Platform, actively used by the organisation.",
    highlights: [
      "Designed a 5-role React SPA (Student, HR Admin, Reviewer, Ops, Super Admin) on Node.js/Express + Supabase Postgres.",
      "Integrated Anthropic Claude API for AI-powered HR comment suggestions and Zoom API for daily interview-prep registration with personalised join-URL caching.",
      "Built career-readiness gating, multi-round resume review, broadcast notifications, deep-link OAuth, and a superadmin analytics dashboard.",
      "Shipped a FastAPI + React certificate pipeline that renders personalised PNGs from a Canva template (Pillow), auto-emails via Gmail SMTP, syncs status to Google Sheets.",
      "Deployed the full stack via Docker on DigitalOcean; automated frontend CI/CD to GitHub Pages with GitHub Actions.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Claude API",
      "Zoom API",
      "Docker",
      "DigitalOcean",
      "GitHub Actions",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Abhimo Technologies Pvt. Ltd.",
    period: "Jun 2025 - Aug 2025",
    location: "Mangalore",
    summary:
      "Built the company's official website end-to-end and an internship application management system used by the operations team.",
    highlights: [
      "Developed the official website using PHP, MySQL, TailwindCSS and Bootstrap on MyTrueHost.",
      "Built an internship application management system with secure file uploads, Google reCAPTCHA, and automated email notifications.",
      "Designed an admin panel for application review and optimised backend workflows for future scalability.",
    ],
    stack: ["PHP", "MySQL", "TailwindCSS", "Bootstrap", "JavaScript", "reCAPTCHA"],
  },
];

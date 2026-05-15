import {
  Code2,
  Server,
  Database,
  Cloud,
  Sparkles,
  LineChart,
} from "lucide-react";
import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "Python" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "Prisma ORM" },
      { name: "Neon DB" },
      { name: "Google Sheets API" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "DigitalOcean" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Git" },
    ],
  },
  {
    category: "AI & APIs",
    icon: Sparkles,
    skills: [
      { name: "Gemini API" },
      { name: "Claude API" },
      { name: "Zoom API" },
      { name: "Clerk Auth" },
      { name: "Google OAuth" },
      { name: "Gmail SMTP" },
    ],
  },
  {
    category: "Data Science",
    icon: LineChart,
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
      { name: "Matplotlib" },
      { name: "Jupyter" },
    ],
  },
];

export const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Prisma",
  "Docker",
  "GitHub Actions",
  "DigitalOcean",
  "Vercel",
  "TailwindCSS",
  "Framer Motion",
  "Gemini API",
  "Claude API",
  "Zoom API",
  "Clerk",
];

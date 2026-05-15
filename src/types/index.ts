import type { LucideIcon } from "lucide-react";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "AI" | "SaaS" | "Web" | "Tool";
  features: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  accent: string; // tailwind gradient classes
  cover?: string;
}

export interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
  icon: LucideIcon;
  highlight?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

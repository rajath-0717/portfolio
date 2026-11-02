import { Trophy, Award, Medal, Star, GraduationCap } from "lucide-react";
import type { Achievement, Stat } from "@/types";

export const achievements: Achievement[] = [
  {
    title: "University Gold Medal & First Rank",
    description: "MCA, Srinivas University. CGPA 9.82 / 10, Class of 2025.",
    year: "2025",
    icon: Trophy,
    highlight: "9.82 CGPA",
  },
  {
    title: "Excellent Academic Achievement of the Year",
    description: "Awarded by Srinivas University for the 2024-25 academic year.",
    year: "2024-25",
    icon: Award,
    highlight: "Top Honour",
  },
  {
    title: "1st Place, National Web Designing",
    description:
      "St. Joseph Engineering College, Vamanjoor. National IT Fest.",
    icon: Medal,
    highlight: "Gold",
  },
  {
    title: "2nd Place, National Web Designing",
    description:
      "Sri Devi College of Engineering & Technology, Kenjar.",
    icon: Medal,
    highlight: "Silver",
  },
  {
    title: "2nd Place, National Web Designing",
    description: "St. Aloysius College, Mangaluru. National IT Fest.",
    icon: Medal,
    highlight: "Silver",
  },
  {
    title: "2nd Place, National Web Designing",
    description: "St. Joseph Engineering College, Mangaluru. National IT Fest.",
    icon: Medal,
    highlight: "Silver",
  },
];

export const stats: Stat[] = [
  { label: "Production Systems", value: 2, suffix: "+" },
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "CGPA (MCA)", value: 9.82 },
];

export const educationIcons = { GraduationCap, Star };

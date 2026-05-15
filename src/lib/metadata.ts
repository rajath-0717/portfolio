import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rajath.dev";

export const siteConfig = {
  name: "Rajath · Software Engineer & Full Stack Developer",
  shortName: "Rajath",
  description:
    "Portfolio of Rajath. MCA Gold Medalist, Software Engineer and Full Stack Developer. Building modern, scalable, AI-powered digital products.",
  url: siteUrl,
  ogImage: "/og.png",
  twitterHandle: "@rajath",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | Rajath",
  },
  description: siteConfig.description,
  keywords: [
    "Rajath",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "MCA Gold Medalist",
    "React Developer",
    "FastAPI",
    "AI Developer",
    "Mangalore",
  ],
  authors: [{ name: "Rajath" }],
  creator: "Rajath",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

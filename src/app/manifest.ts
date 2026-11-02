import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rajath | Full Stack Developer Portfolio",
    short_name: "Rajath",
    description: "Portfolio of Rajath, Full Stack Developer in Mangalore, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0B0A",
    theme_color: "#C8FF2E",
    icons: [{ src: "/icon.jpg", sizes: "any", type: "image/jpeg" }],
  };
}

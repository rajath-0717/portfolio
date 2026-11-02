import { ImageResponse } from "next/og";

export const alt = "Rajath | Full Stack Developer, React, Next.js, Node.js & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0C0B0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          color: "#F4EFE6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#C8FF2E" }}>{"<rajath/>"}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 900, lineHeight: 0.9, color: "#C8FF2E", display: "flex" }}>
            Rajath<span style={{ color: "#FF5B2E" }}>.</span>
          </div>
          <div style={{ fontSize: 44, marginTop: 24, display: "flex" }}>Junior Software Engineer & Full Stack Developer</div>
          <div style={{ fontSize: 28, marginTop: 14, color: "#B9B2A5", display: "flex" }}>
            React · Next.js · Node.js · FastAPI · Supabase · AI
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#B9B2A5" }}>
          <span>Mangalore, India</span>
          <span style={{ color: "#FF5B2E" }}>MCA Gold Medalist · 9.82 CGPA</span>
        </div>
      </div>
    ),
    size,
  );
}

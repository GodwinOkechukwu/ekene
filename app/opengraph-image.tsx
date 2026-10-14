import { ImageResponse } from "next/og";
import { profile } from "./data/profile";

export const alt = `${profile.displayName} Godwin — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #080810 0%, #1e1b4b 100%)",
          color: "#f0f0fa",
        }}
      >
        <div style={{ fontSize: 28, color: "#a5b4fc", letterSpacing: 6 }}>
          {"// PORTFOLIO"}
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          {`${profile.displayName} Godwin`}
        </div>
        <div style={{ fontSize: 44, color: "#9ca3af", marginTop: 16 }}>
          {`${profile.role} · React · Next.js · TypeScript`}
        </div>
      </div>
    ),
    size,
  );
}

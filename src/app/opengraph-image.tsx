import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CoverCraft AI - AI Cover Letter Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#ffffff",
            }}
          >
            CoverCraft
          </span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#3b82f6",
              marginLeft: "16px",
            }}
          >
            AI
          </span>
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.4",
            marginBottom: "40px",
          }}
        >
          Professional cover letters tailored to each job in 30 seconds
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e3a5f",
              border: "1px solid #3b82f6",
              borderRadius: "12px",
              padding: "16px 24px",
              color: "#93c5fd",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            $3.99 per letter
          </div>
          <div
            style={{
              background: "#1e3a5f",
              border: "1px solid #3b82f6",
              borderRadius: "12px",
              padding: "16px 24px",
              color: "#93c5fd",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            No subscription
          </div>
          <div
            style={{
              background: "#1e3a5f",
              border: "1px solid #3b82f6",
              borderRadius: "12px",
              padding: "16px 24px",
              color: "#93c5fd",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Free preview
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

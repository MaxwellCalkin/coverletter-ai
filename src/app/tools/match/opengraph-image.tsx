import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Free ATS Resume Match Score - CoverCraft AI";
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
            fontSize: "28px",
            color: "#3b82f6",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          CoverCraft AI
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: "800",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Free ATS Match Score
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: "1.5",
            marginBottom: "40px",
          }}
        >
          See how well your resume matches a job description. Find missing
          keywords before you apply.
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "#166534",
              borderRadius: "20px",
              padding: "10px 20px",
              color: "#86efac",
              fontSize: "16px",
              display: "flex",
            }}
          >
            100% Free
          </div>
          <div
            style={{
              background: "#166534",
              borderRadius: "20px",
              padding: "10px 20px",
              color: "#86efac",
              fontSize: "16px",
              display: "flex",
            }}
          >
            No Signup
          </div>
          <div
            style={{
              background: "#166534",
              borderRadius: "20px",
              padding: "10px 20px",
              color: "#86efac",
              fontSize: "16px",
              display: "flex",
            }}
          >
            Runs in Browser
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

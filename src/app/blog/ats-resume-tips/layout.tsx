import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How to Beat ATS: 7 Tips to Get Your Resume Past Automated Screening in 2026 | CoverCraft AI",
  description:
    "Learn how Applicant Tracking Systems work and get 7 actionable tips to make your resume ATS friendly. Optimize keywords, formatting, and file type to pass automated screening every time.",
  keywords: [
    "ATS resume checker",
    "how to pass ATS screening",
    "ATS friendly resume",
    "resume keyword optimization",
    "applicant tracking system tips",
    "ATS resume format",
    "beat ATS screening",
  ],
};

export default function AtsResumeTipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

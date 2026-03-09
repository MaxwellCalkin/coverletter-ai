import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoverCraft AI - AI Cover Letter Generator | Tailored in Seconds",
  description:
    "Generate professional, tailored cover letters using AI. Paste a job description and your experience, get a perfect cover letter instantly for just $3.99. Save hours on every job application.",
  keywords: [
    "cover letter generator",
    "AI cover letter",
    "AI cover letter generator",
    "cover letter writer",
    "job application help",
    "automated cover letter",
    "professional cover letter",
    "cover letter AI tool",
    "generate cover letter online",
    "best cover letter generator",
  ],
  openGraph: {
    title: "CoverCraft AI - Perfect Cover Letters in 30 Seconds",
    description:
      "Stop spending hours writing cover letters. Our AI generates tailored, professional cover letters for just $3.99. Paste job description + your experience = perfect cover letter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoverCraft AI - AI Cover Letter Generator",
    description:
      "Generate tailored cover letters in seconds with AI. Just $3.99 per letter.",
  },
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_BASE_URL || "https://covercraftai.com").replace(/\/+$/, ""),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CoverCraft AI",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "AI-powered cover letter generator that creates tailored, professional cover letters in seconds.",
              offers: {
                "@type": "Offer",
                price: "3.99",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

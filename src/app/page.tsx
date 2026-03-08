"use client";

import { useState } from "react";

export default function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  async function handlePreview() {
    if (!jobDescription.trim() || !experience.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription, experience }),
      });
      const data = await res.json();
      if (data.preview) setPreview(data.preview);
    } catch {
      setPreview("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  async function handleCheckout() {
    if (!jobDescription.trim() || !experience.trim()) return;
    setCheckoutLoading(true);

    // Save inputs to localStorage so we can retrieve after payment
    localStorage.setItem(
      "covercraft_inputs",
      JSON.stringify({ jobDescription, experience })
    );

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription, experience }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
    }
    setCheckoutLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">
            CoverCraft <span className="text-blue-600">AI</span>
          </h1>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="/" className="text-blue-600">Cover Letters</a>
            <a href="/interview" className="hover:text-slate-900">Interview Prep</a>
            <a href="/tools/match" className="hover:text-slate-900">Match Score</a>
            <a href="/tools/keywords" className="hover:text-slate-900">Keyword Scanner</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Land Your Dream Job with the
            <br />
            <span className="text-blue-600">Perfect Cover Letter</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Paste your job description and experience. Our AI crafts a
            tailored, professional cover letter that highlights exactly why
            you&apos;re the right candidate.
          </p>
        </section>

        {/* How it works */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              step: "1",
              title: "Paste the Job Description",
              desc: "Copy the job posting you want to apply to",
            },
            {
              step: "2",
              title: "Add Your Experience",
              desc: "Share your resume, skills, or relevant experience",
            },
            {
              step: "3",
              title: "Get Your Cover Letter",
              desc: "Receive a tailored, professional cover letter instantly",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-xl border border-slate-200 p-6 text-center"
            >
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Input Form */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Job Description
              </label>
              <textarea
                className="w-full h-64 rounded-lg border border-slate-300 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                placeholder="Paste the full job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Experience / Resume
              </label>
              <textarea
                className="w-full h-64 rounded-lg border border-slate-300 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                placeholder="Paste your resume, list your skills, or describe your relevant experience..."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handlePreview}
              disabled={
                loading || !jobDescription.trim() || !experience.trim()
              }
              className="flex-1 py-3 px-6 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Generating preview..." : "Free Preview"}
            </button>
            <button
              onClick={handleCheckout}
              disabled={
                checkoutLoading ||
                !jobDescription.trim() ||
                !experience.trim()
              }
              className="flex-1 py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {checkoutLoading
                ? "Redirecting to checkout..."
                : "Get Full Cover Letter — $3.99"}
            </button>
          </div>
        </section>

        {/* Preview */}
        {preview && (
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
            <h3 className="font-semibold text-slate-900 mb-2">
              Preview (first paragraph)
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">{preview}</p>
            <div className="relative">
              <div className="h-24 bg-gradient-to-b from-transparent to-white absolute inset-0 z-10" />
              <p className="text-slate-400 italic text-sm blur-[2px]">
                The full cover letter continues with detailed paragraphs
                highlighting your specific qualifications, relevant
                achievements, and a compelling closing statement that
                demonstrates your enthusiasm for the role...
              </p>
            </div>
            <button
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="mt-4 w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              Unlock Full Cover Letter — $3.99
            </button>
          </section>
        )}

        {/* Social Proof / Value Props */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Tailored to Each Job",
              desc: "Every cover letter is uniquely crafted to match the specific job requirements and your experience.",
            },
            {
              title: "Professional Quality",
              desc: "Written in a polished, professional tone that hiring managers love. No generic templates.",
            },
            {
              title: "Instant Delivery",
              desc: "Get your cover letter in under 30 seconds. Copy, paste, and apply immediately.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center p-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Pricing clarity */}
        <section className="text-center mb-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Just $3.99 per cover letter
          </h3>
          <p className="text-slate-600 mb-1">
            No subscription. No hidden fees. Pay only when you need one.
          </p>
          <p className="text-sm text-slate-500">
            Compare to $50-200 for a professional cover letter writing service.
          </p>
        </section>

        {/* FAQ for SEO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How does the AI cover letter generator work?",
                a: "Simply paste the job description and your resume or experience. Our AI analyzes both, identifies the most relevant qualifications, and writes a professional cover letter tailored specifically to that role.",
              },
              {
                q: "Is each cover letter unique?",
                a: "Yes. Every cover letter is generated from scratch based on your specific experience and the job you're applying for. No templates, no recycled content.",
              },
              {
                q: "How long does it take to generate a cover letter?",
                a: "Most cover letters are generated in 15-30 seconds. You can copy it to your clipboard or download it as a text file immediately.",
              },
              {
                q: "Why $3.99 instead of a subscription?",
                a: "We believe you should only pay when you need a cover letter. No monthly fees sitting unused. At $3.99, it's a fraction of what professional cover letter services charge ($50-200).",
              },
              {
                q: "Can I try it before paying?",
                a: "Yes! Click 'Free Preview' to see the opening paragraph of your cover letter before purchasing. This way you can verify the quality and relevance before committing.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-xl border border-slate-200 p-6 group"
              >
                <summary className="font-medium text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500">
          CoverCraft AI &mdash; AI-powered job application tools
          <span className="mx-2">&middot;</span>
          <a href="/interview" className="text-blue-600 hover:underline">Interview Prep</a>
        </div>
      </footer>
    </div>
  );
}

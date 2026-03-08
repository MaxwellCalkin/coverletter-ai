"use client";

import { useState } from "react";

export default function InterviewPrep() {
  const [jobDescription, setJobDescription] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  async function handleCheckout() {
    if (!jobDescription.trim()) return;
    setCheckoutLoading(true);
    localStorage.setItem(
      "covercraft_interview_input",
      JSON.stringify({ jobDescription })
    );
    try {
      const res = await fetch("/api/interview-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Failed to start checkout. Please try again.");
    }
    setCheckoutLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-slate-900">
            CoverCraft <span className="text-blue-600">AI</span>
          </a>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="/" className="hover:text-slate-900">Cover Letters</a>
            <a href="/interview" className="text-blue-600">Interview Prep</a>
            <a href="/tools/match" className="hover:text-slate-900">Match Score</a>
            <a href="/tools/keywords" className="hover:text-slate-900">Keyword Scanner</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            AI Interview
            <span className="text-blue-600"> Prep Guide</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get 10 likely interview questions with expert answer strategies,
            key themes to prepare, questions to ask them, and red flags to
            avoid &mdash; all tailored to your specific job.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Paste the Job Description
          </label>
          <textarea
            className="w-full h-56 rounded-lg border border-slate-300 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            placeholder="Paste the full job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <button
            onClick={handleCheckout}
            disabled={checkoutLoading || !jobDescription.trim()}
            className="mt-4 w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {checkoutLoading
              ? "Redirecting to checkout..."
              : "Get Interview Prep Guide — $4.99"}
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "10 Likely Questions",
              desc: "Behavioral, technical, situational, and curveball questions you'll actually be asked.",
            },
            {
              title: "Answer Strategies",
              desc: "Expert frameworks for each question — what they want to hear and how to structure your answer.",
            },
            {
              title: "Key Themes",
              desc: "The 4-5 themes the interviewer will focus on, extracted from the job requirements.",
            },
            {
              title: "Questions to Ask",
              desc: "5 thoughtful questions that show genuine interest and make you stand out.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <h3 className="font-semibold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="text-center bg-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            $4.99 per interview prep guide
          </h3>
          <p className="text-slate-600 mb-1">
            Tailored to the exact job you&apos;re interviewing for.
          </p>
          <p className="text-sm text-slate-500">
            Compare to $100-300 for a session with a career coach.
          </p>
        </section>

        <section className="text-center">
          <p className="text-slate-600">
            Also need a cover letter?{" "}
            <a href="/" className="text-blue-600 font-medium hover:underline">
              Generate one for $3.99
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500">
          CoverCraft AI &mdash; AI-powered job application tools
        </div>
      </footer>
    </div>
  );
}

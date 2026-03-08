"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function InterviewResultContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [interviewPrep, setInterviewPrep] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setError("No payment session found.");
      setLoading(false);
      return;
    }

    const saved = localStorage.getItem("covercraft_interview_input");
    if (!saved) {
      setError("Input not found. Please try again from the interview prep page.");
      setLoading(false);
      return;
    }

    const { jobDescription } = JSON.parse(saved);

    fetch("/api/interview-generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jobDescription, sessionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setInterviewPrep(data.interviewPrep);
          localStorage.removeItem("covercraft_interview_input");
        }
      })
      .catch(() => setError("Failed to generate interview prep."))
      .finally(() => setLoading(false));
  }, [sessionId]);

  async function handleCopy() {
    await navigator.clipboard.writeText(interviewPrep);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    const blob = new Blob([interviewPrep], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "interview-prep.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Preparing your interview guide...
          </h2>
          <p className="text-slate-500">This usually takes 15-30 seconds</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Something went wrong
          </h2>
          <p className="text-slate-600 mb-4">{error}</p>
          <a
            href="/interview"
            className="inline-block py-2 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Try Again
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-slate-900">
            CoverCraft <span className="text-blue-600">AI</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Your Interview Prep Guide is Ready!
          </h2>
          <p className="text-slate-500">
            Review the questions, practice your answers, and ace that interview
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
          <pre className="whitespace-pre-wrap font-sans text-slate-800 leading-relaxed text-[15px]">
            {interviewPrep}
          </pre>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={handleCopy}
            className="flex-1 py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 py-3 px-6 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
          >
            Download as .md
          </button>
        </div>

        <div className="text-center space-y-2">
          <a
            href="/interview"
            className="text-blue-600 hover:underline text-sm font-medium block"
          >
            Prep for another interview
          </a>
          <a
            href="/"
            className="text-slate-500 hover:underline text-sm block"
          >
            Need a cover letter too? Generate one for $3.99
          </a>
        </div>
      </main>
    </div>
  );
}

export default function InterviewResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <InterviewResultContent />
    </Suspense>
  );
}

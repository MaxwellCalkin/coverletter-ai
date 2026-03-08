"use client";

import { useState } from "react";

const SKILL_PATTERNS = [
  // Programming languages
  /\b(Python|JavaScript|TypeScript|Java|C\+\+|C#|Ruby|Go|Rust|Swift|Kotlin|PHP|Scala|R|SQL|HTML|CSS|Bash)\b/gi,
  // Frameworks & tools
  /\b(React|Angular|Vue|Next\.?js|Node\.?js|Django|Flask|Spring|Rails|Docker|Kubernetes|AWS|Azure|GCP|Git|Jenkins|Terraform|GraphQL|REST|gRPC)\b/gi,
  // Soft skills
  /\b(leadership|communication|collaboration|problem.solving|critical thinking|teamwork|mentoring|stakeholder management|cross.functional)\b/gi,
  // Data & ML
  /\b(machine learning|deep learning|NLP|natural language|computer vision|data analysis|data engineering|ETL|pipeline|TensorFlow|PyTorch|pandas|scikit|Spark|Hadoop|Kafka|Airflow)\b/gi,
  // Databases
  /\b(PostgreSQL|MySQL|MongoDB|Redis|Elasticsearch|DynamoDB|Cassandra|SQLite|Oracle|Snowflake|BigQuery|Redshift)\b/gi,
];

const REQUIREMENT_PATTERNS = [
  /(\d+)\+?\s*(?:years?|yrs?)\s+(?:of\s+)?(?:experience|exp)/gi,
  /(?:bachelor|master|phd|degree)\s*(?:'s)?\s*(?:in\s+[\w\s,]+)?/gi,
  /(?:experience\s+(?:with|in)\s+)([\w\s,/]+?)(?:\.|,|;|\n)/gi,
  /(?:proficien(?:t|cy)\s+(?:in|with)\s+)([\w\s,/]+?)(?:\.|,|;|\n)/gi,
  /(?:strong\s+(?:knowledge|understanding|background)\s+(?:of|in)\s+)([\w\s,/]+?)(?:\.|,|;|\n)/gi,
  /(?:familiar(?:ity)?\s+with\s+)([\w\s,/]+?)(?:\.|,|;|\n)/gi,
];

function extractKeywords(text: string) {
  const skills = new Set<string>();
  const requirements: string[] = [];

  for (const pattern of SKILL_PATTERNS) {
    const matches = text.matchAll(new RegExp(pattern));
    for (const match of matches) {
      skills.add(match[0]);
    }
  }

  for (const pattern of REQUIREMENT_PATTERNS) {
    const matches = text.matchAll(new RegExp(pattern));
    for (const match of matches) {
      const req = match[0].trim();
      if (req.length > 5 && !requirements.includes(req)) {
        requirements.push(req);
      }
    }
  }

  // Extract "nice to have" vs "required"
  const mustHave: string[] = [];
  const niceToHave: string[] = [];
  const lines = text.split(/\n/);
  let inNiceToHave = false;
  for (const line of lines) {
    if (/nice\s+to\s+have|prefer|bonus|plus|ideal/i.test(line)) {
      inNiceToHave = true;
    }
    if (/require|must|essential|mandatory|minimum/i.test(line)) {
      inNiceToHave = false;
    }
    const trimmed = line.replace(/^[\s\-\*•]+/, "").trim();
    if (trimmed.length > 10) {
      if (inNiceToHave) {
        niceToHave.push(trimmed);
      } else if (/^\w/.test(trimmed) && trimmed.length < 200) {
        mustHave.push(trimmed);
      }
    }
  }

  return {
    skills: Array.from(skills),
    requirements: requirements.slice(0, 15),
    mustHave: mustHave.slice(0, 10),
    niceToHave: niceToHave.slice(0, 8),
  };
}

export default function KeywordExtractor() {
  const [jobDescription, setJobDescription] = useState("");
  const [results, setResults] = useState<ReturnType<
    typeof extractKeywords
  > | null>(null);

  function handleExtract() {
    if (!jobDescription.trim()) return;
    setResults(extractKeywords(jobDescription));
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
            <a href="/interview" className="hover:text-slate-900">Interview Prep</a>
            <a href="/tools/keywords" className="text-blue-600">Keyword Scanner</a>
            <a href="/tools/match" className="hover:text-slate-900">Match Score</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Free Job Posting
            <span className="text-blue-600"> Keyword Scanner</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Paste a job description and instantly see the key skills,
            requirements, and keywords you need to include in your resume and
            cover letter to pass ATS screening.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Paste the Job Description
          </label>
          <textarea
            className="w-full h-48 rounded-lg border border-slate-300 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
            placeholder="Paste the full job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <button
            onClick={handleExtract}
            disabled={!jobDescription.trim()}
            className="mt-4 w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Extract Keywords — Free
          </button>
        </section>

        {results && (
          <>
            {results.skills.length > 0 && (
              <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h2 className="font-bold text-slate-900 text-lg mb-3">
                  Technical Skills &amp; Tools Mentioned
                </h2>
                <div className="flex flex-wrap gap-2">
                  {results.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Make sure these appear in your resume and cover letter.
                </p>
              </section>
            )}

            {results.requirements.length > 0 && (
              <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h2 className="font-bold text-slate-900 text-lg mb-3">
                  Key Requirements Detected
                </h2>
                <ul className="space-y-2">
                  {results.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-blue-600 mt-0.5 shrink-0">&#9679;</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* CTA to paid tool */}
            <section className="bg-blue-50 rounded-2xl p-8 text-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Want a cover letter that hits all these keywords?
              </h3>
              <p className="text-slate-600 mb-4">
                Our AI analyzes the job description and your experience to write
                a tailored cover letter that naturally incorporates the right
                keywords and qualifications.
              </p>
              <a
                href="/"
                className="inline-block py-3 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Generate a Tailored Cover Letter — $3.99
              </a>
            </section>
          </>
        )}

        <section className="text-center mt-8">
          <p className="text-sm text-slate-500">
            This tool is 100% free. No signup required. Your data stays in your
            browser.
          </p>
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

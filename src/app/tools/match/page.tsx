"use client";

import { useState } from "react";

const SKILL_PATTERNS = [
  /\b(Python|JavaScript|TypeScript|Java|C\+\+|C#|Ruby|Go|Rust|Swift|Kotlin|PHP|Scala|R|SQL|HTML|CSS|Bash)\b/gi,
  /\b(React|Angular|Vue|Next\.?js|Node\.?js|Django|Flask|Spring|Rails|Docker|Kubernetes|AWS|Azure|GCP|Git|Jenkins|Terraform|GraphQL|REST|gRPC)\b/gi,
  /\b(leadership|communication|collaboration|problem.solving|critical thinking|teamwork|mentoring|stakeholder management|cross.functional)\b/gi,
  /\b(machine learning|deep learning|NLP|natural language|computer vision|data analysis|data engineering|ETL|pipeline|TensorFlow|PyTorch|pandas|scikit|Spark|Hadoop|Kafka|Airflow)\b/gi,
  /\b(PostgreSQL|MySQL|MongoDB|Redis|Elasticsearch|DynamoDB|Cassandra|SQLite|Oracle|Snowflake|BigQuery|Redshift)\b/gi,
  /\b(Agile|Scrum|Kanban|CI\/CD|DevOps|microservices|API|SaaS|B2B|B2C)\b/gi,
];

function extractSkills(text: string): Set<string> {
  const skills = new Set<string>();
  for (const pattern of SKILL_PATTERNS) {
    const matches = text.matchAll(new RegExp(pattern));
    for (const match of matches) {
      skills.add(match[0].toLowerCase());
    }
  }
  return skills;
}

function computeMatch(jobDesc: string, resume: string) {
  const jobSkills = extractSkills(jobDesc);
  const resumeSkills = extractSkills(resume);

  if (jobSkills.size === 0) {
    return { score: 0, matched: [], missing: [], extra: [], jobSkills: [], resumeSkills: [] };
  }

  const matched: string[] = [];
  const missing: string[] = [];

  for (const skill of jobSkills) {
    if (resumeSkills.has(skill)) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  }

  const extra: string[] = [];
  for (const skill of resumeSkills) {
    if (!jobSkills.has(skill)) {
      extra.push(skill);
    }
  }

  const score = Math.round((matched.length / jobSkills.size) * 100);

  return {
    score,
    matched,
    missing,
    extra,
    jobSkills: Array.from(jobSkills),
    resumeSkills: Array.from(resumeSkills),
  };
}

function ScoreRing({ score }: { score: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 75 ? "text-green-500" : score >= 50 ? "text-yellow-500" : "text-red-500";
  const bg =
    score >= 75 ? "text-green-100" : score >= 50 ? "text-yellow-100" : "text-red-100";

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60" cy="60" r={radius}
          fill="none" strokeWidth="10"
          className={`stroke-current ${bg}`}
        />
        <circle
          cx="60" cy="60" r={radius}
          fill="none" strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`stroke-current ${color} transition-all duration-700`}
        />
      </svg>
      <span className="absolute text-3xl font-bold text-slate-900">{score}%</span>
    </div>
  );
}

export default function MatchScorer() {
  const [jobDesc, setJobDesc] = useState("");
  const [resume, setResume] = useState("");
  const [results, setResults] = useState<ReturnType<typeof computeMatch> | null>(null);

  function handleScore() {
    if (!jobDesc.trim() || !resume.trim()) return;
    setResults(computeMatch(jobDesc, resume));
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
            <a href="/tools/keywords" className="hover:text-slate-900">Keyword Scanner</a>
            <a href="/tools/match" className="text-blue-600">Match Score</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Free Resume
            <span className="text-blue-600"> ATS Match Score</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how well your resume matches a job description. Get your ATS
            compatibility score and find out exactly which keywords you&apos;re
            missing — so you can fix gaps before you apply.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Job Description
              </label>
              <textarea
                className="w-full h-48 rounded-lg border border-slate-300 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                placeholder="Paste the job description here..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Resume / Experience
              </label>
              <textarea
                className="w-full h-48 rounded-lg border border-slate-300 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                placeholder="Paste your resume or experience here..."
                value={resume}
                onChange={(e) => setResume(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleScore}
            disabled={!jobDesc.trim() || !resume.trim()}
            className="mt-6 w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Check ATS Match Score — Free
          </button>
        </section>

        {results && (
          <>
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6 text-center">
              <h2 className="font-bold text-slate-900 text-lg mb-4">
                Your ATS Match Score
              </h2>
              <ScoreRing score={results.score} />
              <p className="mt-4 text-slate-600">
                {results.score >= 75
                  ? "Strong match! Your resume aligns well with this job."
                  : results.score >= 50
                    ? "Moderate match. Adding the missing keywords below could significantly improve your chances."
                    : "Low match. Your resume is missing several key skills from this job posting."}
              </p>
            </section>

            {results.missing.length > 0 && (
              <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h2 className="font-bold text-red-700 text-lg mb-3">
                  Missing Keywords — Add These to Your Resume
                </h2>
                <div className="flex flex-wrap gap-2">
                  {results.missing.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  ATS systems scan for these exact terms. Including them increases your chances of passing automated screening.
                </p>
              </section>
            )}

            {results.matched.length > 0 && (
              <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h2 className="font-bold text-green-700 text-lg mb-3">
                  Matched Keywords
                </h2>
                <div className="flex flex-wrap gap-2">
                  {results.matched.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {results.extra.length > 0 && (
              <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6">
                <h2 className="font-bold text-slate-700 text-lg mb-3">
                  Extra Skills (not in this job posting)
                </h2>
                <div className="flex flex-wrap gap-2">
                  {results.extra.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  These skills are on your resume but not mentioned in this job posting. Consider de-emphasizing them to save space.
                </p>
              </section>
            )}

            {/* CTA — the money shot */}
            <section className="bg-blue-50 rounded-2xl p-8 text-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {results.score < 75
                  ? "Bridge the gap with a tailored cover letter"
                  : "Seal the deal with a tailored cover letter"}
              </h3>
              <p className="text-slate-600 mb-4">
                {results.score < 75
                  ? `Your resume is missing ${results.missing.length} key skill${results.missing.length === 1 ? "" : "s"}. A tailored cover letter can highlight transferable experience and demonstrate your fit — even where your resume falls short.`
                  : "You're a strong match on paper. A tailored cover letter will put you over the top by connecting your experience directly to their requirements."}
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
            100% free. No signup. Your data stays in your browser — nothing is
            sent to any server.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500">
          CoverCraft AI &mdash; AI-powered job application tools
          <span className="mx-2">&middot;</span>
          <a href="/tools/keywords" className="text-blue-600 hover:underline">Keyword Scanner</a>
          <span className="mx-2">&middot;</span>
          <a href="/interview" className="text-blue-600 hover:underline">Interview Prep</a>
        </div>
      </footer>
    </div>
  );
}

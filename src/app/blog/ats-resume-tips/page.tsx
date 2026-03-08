"use client";

export default function AtsResumeTipsBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <article className="mx-auto max-w-3xl px-6 py-12">
        <ArticleHeading />
        <div className="prose prose-slate max-w-none">
          <WhatIsAts />
          <TipsList />
          <MatchScoreCallout />
          <CoverLetterCta />
        </div>
      </article>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-slate-900">
          CoverCraft <span className="text-blue-600">AI</span>
        </a>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <a
            href="/tools/match"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Match Score
          </a>
          <a
            href="/tools/keywords"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Keyword Scanner
          </a>
          <a
            href="/"
            className="text-blue-600 hover:underline"
          >
            Try it free
          </a>
        </nav>
      </div>
    </header>
  );
}

function ArticleHeading() {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        How to Beat ATS: 7 Tips to Get Your Resume Past Automated Screening
        in 2026
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Updated March 2026 &middot; 8 min read
      </p>
    </>
  );
}

function WhatIsAts() {
  return (
    <>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        Over 97% of Fortune 500 companies use an Applicant Tracking System
        (ATS) to filter resumes before a human ever sees them. If your resume
        isn&apos;t ATS friendly, it could be rejected automatically &mdash;
        no matter how qualified you are. Here&apos;s what you need to know
        to pass automated screening and land more interviews.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
        What Is an ATS and Why Does It Matter?
      </h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        An Applicant Tracking System is software that employers use to
        collect, sort, and rank job applications. When you submit your resume
        online, the ATS parses it into structured data &mdash; your name,
        contact info, work history, skills, and education &mdash; then scores
        it against the job description.
      </p>
      <p className="text-slate-700 leading-relaxed mb-6">
        Resumes that score below a threshold are filtered out and never
        reviewed by a recruiter. Studies estimate that up to 75% of
        applications are rejected by ATS before reaching human eyes. The
        good news: once you understand how ATS resume screening works,
        optimizing your resume is straightforward.
      </p>
    </>
  );
}

function TipsList() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
        7 Tips to Make Your Resume ATS Friendly
      </h2>

      <TipOne />
      <TipTwo />
      <TipThree />
      <TipFour />
      <TipFive />
      <TipSix />
      <TipSeven />
    </>
  );
}

function TipOne() {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
        1. Mirror Keywords from the Job Description
      </h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Resume keyword optimization is the single most important factor in
        passing ATS screening. The system compares your resume against the
        job posting and scores how many required keywords appear in your
        document. If the posting asks for &ldquo;project management&rdquo;
        and you wrote &ldquo;managed projects,&rdquo; some systems won&apos;t
        count the match.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Use the exact phrases from the job description whenever they
        honestly describe your experience. Pay special attention to hard
        skills, tools, certifications, and job-specific terminology.
      </p>
    </>
  );
}

function TipTwo() {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
        2. Use Standard Section Headings
      </h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        ATS software looks for conventional headings to parse your resume
        into sections. Stick with labels the system expects:
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
        <li>
          <strong>Work Experience</strong> (not &ldquo;Where I&apos;ve
          Been&rdquo;)
        </li>
        <li>
          <strong>Education</strong> (not &ldquo;Academic Journey&rdquo;)
        </li>
        <li>
          <strong>Skills</strong> (not &ldquo;My Toolbox&rdquo;)
        </li>
        <li>
          <strong>Certifications</strong> (not &ldquo;Credentials &amp;
          Badges&rdquo;)
        </li>
      </ul>
      <p className="text-slate-700 leading-relaxed mb-4">
        Creative headings confuse the parser and can cause your entire work
        history to be filed under the wrong category &mdash; or missed
        entirely.
      </p>
    </>
  );
}

function TipThree() {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
        3. Submit as a .docx or PDF (Check the Instructions)
      </h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Most modern ATS platforms can parse both .docx and .pdf files, but
        some older systems still struggle with PDFs. Always check the
        application instructions. If the posting says &ldquo;upload a Word
        document,&rdquo; don&apos;t submit a PDF. When no format is
        specified, .docx is the safest choice because it&apos;s universally
        supported across every major ATS.
      </p>
    </>
  );
}

function TipFour() {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
        4. Keep Formatting Simple and Clean
      </h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Tables, text boxes, columns, headers/footers, and embedded images
        are the most common causes of ATS parsing failures. The system
        reads your document linearly, top to bottom. Multi-column layouts
        can scramble the reading order, and text inside images or graphics
        is completely invisible to the parser.
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
        <li>Use a single-column layout</li>
        <li>Avoid text boxes and tables for content</li>
        <li>Use standard bullet points (round dots or dashes)</li>
        <li>Stick to common fonts like Arial, Calibri, or Times New Roman</li>
        <li>
          Put your contact information in the main body, not in the
          header/footer area
        </li>
      </ul>
    </>
  );
}

function TipFive() {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
        5. Include Both Acronyms and Full Terms
      </h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        If you have a PMP certification, write &ldquo;Project Management
        Professional (PMP)&rdquo; the first time you mention it. Some ATS
        systems search for the acronym, others search for the full phrase.
        By including both, you cover all matching scenarios. The same
        applies to technical terms like &ldquo;Search Engine Optimization
        (SEO)&rdquo; or &ldquo;Customer Relationship Management (CRM).&rdquo;
      </p>
    </>
  );
}

function TipSix() {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
        6. Tailor Your Resume for Each Application
      </h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        A single generic resume sent to every job is the easiest way to fail
        ATS screening. Each job posting uses different keywords, emphasizes
        different skills, and ranks qualifications differently. Adjusting
        your resume to reflect the language of each specific posting
        dramatically increases your match score.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        This doesn&apos;t mean fabricating experience. It means reordering
        bullet points, swapping synonyms for the exact terms used in the
        posting, and emphasizing the qualifications that matter most for
        that role.
      </p>
    </>
  );
}

function TipSeven() {
  return (
    <>
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
        7. Test Your Resume Before Submitting
      </h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Don&apos;t guess whether your resume will pass ATS screening &mdash;
        test it. An ATS resume checker can analyze your resume against a
        job description and show you exactly which keywords are present,
        which are missing, and what your overall match score looks like.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Fixing gaps before you apply is far more effective than wondering
        why you aren&apos;t hearing back. Even small adjustments &mdash;
        adding a missing skill keyword or rephrasing a bullet point &mdash;
        can move your resume from the rejection pile to the interview
        shortlist.
      </p>
    </>
  );
}

function MatchScoreCallout() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 my-10">
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        Check Your ATS Match Score for Free
      </h3>
      <p className="text-slate-600 mb-4">
        Our{" "}
        <a
          href="/tools/match"
          className="text-blue-600 hover:underline font-medium"
        >
          ATS Match Score tool
        </a>{" "}
        compares your resume against any job description and shows you
        exactly which keywords you&apos;re hitting, which you&apos;re
        missing, and how to close the gap. It takes about 10 seconds and
        costs nothing.
      </p>
      <a
        href="/tools/match"
        className="inline-block py-3 px-8 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
      >
        Check Your Match Score
      </a>
    </div>
  );
}

function CoverLetterCta() {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
        Beyond the Resume: Your Cover Letter Matters Too
      </h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        A well-optimized resume gets you past ATS screening, but a strong
        cover letter is what convinces a hiring manager to schedule the
        interview. The best approach is to tailor both documents to each
        job posting &mdash; matching the employer&apos;s language, addressing
        their specific needs, and showing why you&apos;re the right fit.
      </p>
      <p className="text-slate-700 leading-relaxed mb-6">
        Writing a tailored cover letter for every application used to take
        30-45 minutes. With AI, it takes 30 seconds.
      </p>

      <div className="bg-blue-50 rounded-2xl p-8 text-center my-10">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Generate a Tailored Cover Letter in Seconds
        </h3>
        <p className="text-slate-600 mb-4">
          Paste the job description and your experience. Get a professional,
          customized cover letter instantly. Free preview included.
        </p>
        <a
          href="/"
          className="inline-block py-3 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Generate Your Cover Letter &mdash; $3.99
        </a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="mx-auto max-w-3xl px-6 text-center text-sm text-slate-500">
        CoverCraft AI &mdash; AI-powered cover letter generator
      </div>
    </footer>
  );
}

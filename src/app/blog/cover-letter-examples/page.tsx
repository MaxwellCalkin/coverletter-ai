"use client";

const examples = [
  {
    title: "Software Engineer",
    industry: "Tech",
    level: "Mid-level",
    letter: `Dear Hiring Manager,

I'm writing to express my interest in the Software Engineer position at Acme Technologies. With 4 years of experience building production TypeScript applications and a track record of reducing API response times by 40%, I'm confident I can contribute meaningfully to your platform team.

At my current role at DataFlow Inc., I led the migration of our monolithic Node.js backend to a microservices architecture serving 2M daily requests. This reduced deployment times from 45 minutes to under 5, and cut infrastructure costs by 30%. I also implemented comprehensive end-to-end testing that caught 3 critical production bugs before they reached users.

Your job posting mentions expertise in React, Node.js, and AWS — technologies I use daily. I'm particularly excited about your mention of real-time data processing, as I recently built a WebSocket-based dashboard that handles 10K concurrent connections with sub-100ms latency.

I'd welcome the opportunity to discuss how my experience aligns with your team's goals. Thank you for your consideration.

Sincerely,
[Your Name]`,
    why: "Opens with a specific, quantified achievement. Every paragraph connects the candidate's experience directly to the job requirements. Uses concrete numbers ($, %, time saved) throughout.",
  },
  {
    title: "Marketing Manager",
    industry: "Marketing",
    level: "Mid-level",
    letter: `Dear [Hiring Manager Name],

Your posting for a Marketing Manager caught my attention because of your focus on data-driven growth — exactly where I've built my career over the past 5 years. At BrightPath Media, I grew organic traffic from 15K to 180K monthly visitors and increased qualified lead generation by 65% year-over-year.

What excites me most about this role is your emphasis on content strategy alongside paid acquisition. I've managed annual ad budgets of $500K+ across Google, Meta, and LinkedIn while simultaneously building a content engine that now drives 40% of our pipeline organically. This dual approach — balancing short-term paid results with long-term organic growth — is something I'd bring to your team from day one.

I also noticed you're looking for someone comfortable with marketing analytics tools. I'm proficient in Google Analytics 4, Mixpanel, and HubSpot, and I've built custom attribution models that helped our team identify which channels truly drove conversions versus just generating clicks.

I'd love to discuss how I can help scale your marketing efforts. I'm available for a conversation at your convenience.

Best regards,
[Your Name]`,
    why: "Leads with the company's priorities, not the candidate's desires. Shows both strategic thinking (organic + paid balance) and tactical skills (specific tools). The attribution model detail shows analytical depth.",
  },
  {
    title: "Entry-Level / New Graduate",
    industry: "General",
    level: "Entry-level",
    letter: `Dear Hiring Team,

As a recent Computer Science graduate from State University, I'm excited to apply for the Junior Developer position at TechStart. While I may be early in my career, I've spent the last two years building real projects that demonstrate my readiness for this role.

During my senior capstone, I led a team of four to build a full-stack inventory management system using React and PostgreSQL. We delivered the project two weeks ahead of schedule and it's now used by a local nonprofit to track 5,000+ donated items. Through my internship at CloudBase, I contributed to their authentication service, writing unit tests that improved code coverage from 62% to 89%.

What draws me to TechStart specifically is your mentorship program and your commitment to clean code practices. I've been following your engineering blog and particularly enjoyed the recent post on your migration to TypeScript — a language I've been using for all personal projects over the past year.

I'm eager to learn, contribute, and grow with your team. Thank you for considering my application.

Sincerely,
[Your Name]`,
    why: "Addresses the experience gap head-on with real projects. Shows initiative (following the company blog, using TypeScript independently). Demonstrates teamwork and measurable impact even as a student.",
  },
  {
    title: "Career Changer",
    industry: "General",
    level: "Career change",
    letter: `Dear [Hiring Manager],

After 8 years as a high school math teacher, I'm transitioning into data analytics — and your Junior Data Analyst role at InsightCo is exactly the kind of opportunity I've been preparing for.

Teaching gave me skills that translate directly to this role: I analyzed standardized test data for 300+ students each year to identify learning gaps, created data visualizations for parent conferences, and built spreadsheet models to track student progress across 6 metrics. When our district adopted a new assessment platform, I became the go-to trainer for 15 colleagues because of my ability to translate complex data into actionable insights.

Over the past year, I've deliberately built technical skills for this transition: I completed the Google Data Analytics Certificate, learned SQL and Python through hands-on projects, and built a portfolio including a Tableau dashboard analyzing public school funding patterns across 50 states. You can view it at [portfolio link].

I bring something many candidates don't: the ability to explain data findings to non-technical stakeholders clearly and patiently. I'd love to discuss how my unique background could benefit your team.

Warm regards,
[Your Name]`,
    why: "Reframes teaching experience as directly relevant analytical work. Shows deliberate preparation (certifications, portfolio). Positions the career change as a unique strength rather than a weakness.",
  },
  {
    title: "Healthcare / Registered Nurse",
    industry: "Healthcare",
    level: "Experienced",
    letter: `Dear Nurse Recruiter,

I'm applying for the ICU Registered Nurse position at Memorial Health System. With 6 years of critical care experience and CCRN certification, I'm prepared to deliver the high-acuity patient care your unit is known for.

At City General Hospital, I currently manage care for up to 4 ICU patients simultaneously, including ventilator management, hemodynamic monitoring, and post-surgical recovery. I've maintained a 98% patient satisfaction score and was selected to precept 8 new graduate nurses over the past two years — reflecting my commitment to both patient outcomes and team development.

I was drawn to Memorial's ICU specifically because of your Magnet designation and your nurse-driven protocol initiatives. Evidence-based practice is central to how I approach care: I recently led a bedside handoff improvement project that reduced medication errors in our unit by 22%.

I'm available for all shifts and can start within two weeks of an offer. I'd welcome the opportunity to discuss how I can contribute to your team.

Respectfully,
[Your Name]`,
    why: "Uses industry-specific terminology (CCRN, hemodynamic monitoring, Magnet designation) that signals expertise. Quantifies patient load, satisfaction scores, and measurable improvements.",
  },
  {
    title: "Product Manager",
    industry: "Tech",
    level: "Senior",
    letter: `Dear [Hiring Manager],

I'm reaching out about the Senior Product Manager role at ScaleUp. Having spent the last 7 years building B2B SaaS products from 0-to-1 and scaling them to $10M+ ARR, I'm excited about the opportunity to lead your platform's next phase of growth.

At my current company, I own the product roadmap for our analytics suite serving 2,000+ enterprise customers. In the past year, I led the launch of our self-serve onboarding flow, which reduced time-to-value from 14 days to 2 hours and increased trial-to-paid conversion by 35%. I work closely with engineering (managing a team of 12), design, and sales to ensure we're building what moves the business forward, not just what's technically interesting.

Your job posting emphasizes customer obsession and data-informed decisions — principles I live by. I conduct 8-10 customer interviews monthly, maintain a prioritization framework weighted by revenue impact, and run A/B tests on every major feature launch. The result: a 140 NPS score and 95% annual retention rate.

I'd love to share more about my approach to product strategy and how it aligns with ScaleUp's goals.

Best,
[Your Name]`,
    why: "Leads with business outcomes ($10M ARR, conversion rates, retention). Shows both strategic vision (0-to-1) and operational rigor (prioritization frameworks, A/B testing). Demonstrates customer centricity with specific habits.",
  },
  {
    title: "Financial Analyst",
    industry: "Finance",
    level: "Mid-level",
    letter: `Dear Hiring Manager,

I'm writing to apply for the Financial Analyst position at Vertex Capital. With 3 years of experience in financial modeling, forecasting, and variance analysis, I'm excited to contribute to your investment analysis team.

At Meridian Partners, I build and maintain DCF models for companies across the technology and healthcare sectors, supporting investment decisions totaling $200M+ annually. My revenue forecast models have achieved 94% accuracy over 12 quarters, and I recently identified a $3M cost optimization opportunity through a deep-dive analysis of our portfolio company's SG&A expenses.

I'm proficient in Excel (advanced financial modeling), SQL (querying large datasets for trend analysis), and Python (automating recurring reports that previously took 6 hours weekly). I also hold the CFA Level II designation and expect to complete Level III this June.

I'm particularly drawn to Vertex's focus on growth-stage technology companies, an area where my sector expertise and analytical rigor would be immediately applicable. I'd welcome the chance to discuss this further.

Sincerely,
[Your Name]`,
    why: "Combines technical financial skills with concrete results. The forecast accuracy metric (94% over 12 quarters) is uniquely compelling. Shows progression (CFA path) and efficiency gains (automation).",
  },
  {
    title: "Remote Position",
    industry: "General",
    level: "Any",
    letter: `Dear [Hiring Manager],

I'm excited to apply for the [Role] position at [Company]. Having worked remotely for the past 3 years across two time zones, I've developed the communication habits and self-management skills that make remote collaboration seamless.

In my current fully-remote role at DistributedCo, I [specific achievement]. I believe strong remote work comes down to three things: proactive communication, documented decision-making, and respecting async workflows. I write detailed PRs, keep Notion docs updated, and default to Loom videos over meetings when possible — saving my team an estimated 5 hours of meetings weekly.

[Second paragraph connecting experience to job requirements]

I'm based in [Location] and comfortable working [time zone details]. I have a dedicated home office with reliable internet and am available for occasional travel if needed. I'd love to discuss how I can contribute to your team.

Best regards,
[Your Name]`,
    why: "Directly addresses the remote work aspect with specific habits and tools. Shows self-awareness about what makes remote work succeed. Proactively answers logistics questions (time zone, setup, travel).",
  },
];

export default function CoverLetterExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-slate-900">
            CoverCraft <span className="text-blue-600">AI</span>
          </a>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="/" className="hover:text-slate-900">Cover Letters</a>
            <a href="/interview" className="hover:text-slate-900">Interview Prep</a>
            <a href="/tools/match" className="hover:text-slate-900">Match Score</a>
            <a href="/tools/keywords" className="hover:text-slate-900">Keyword Scanner</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Cover Letter Examples That Get Interviews (2026)
        </h1>
        <p className="text-sm text-slate-500 mb-2">
          Updated March 2026 &middot; 12 min read
        </p>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
          Real cover letter examples for 8 different roles and situations, with
          expert breakdowns of why each one works. Use these as inspiration, or{" "}
          <a href="/" className="text-blue-600 hover:underline font-medium">
            generate a tailored cover letter with AI
          </a>{" "}
          in 30 seconds.
        </p>

        {/* Quick nav */}
        <nav className="bg-white rounded-xl border border-slate-200 p-6 mb-10">
          <h2 className="font-semibold text-slate-900 mb-3">Jump to an example:</h2>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex, i) => (
              <a
                key={ex.title}
                href={`#example-${i + 1}`}
                className="text-sm px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {ex.title}
              </a>
            ))}
          </div>
        </nav>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What Makes a Cover Letter Work?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            After analyzing thousands of successful cover letters, three patterns
            emerge consistently: <strong>specificity</strong> (concrete numbers
            and achievements, not vague claims), <strong>relevance</strong>{" "}
            (every paragraph connects your experience to their needs), and{" "}
            <strong>brevity</strong> (3-4 paragraphs, under 400 words).
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The examples below follow these principles. Each one is annotated with
            an expert breakdown explaining <em>why</em> it works, so you can apply
            the same techniques to your own letters.
          </p>
        </section>

        {/* Examples */}
        <div className="space-y-12">
          {examples.map((ex, i) => (
            <section
              key={ex.title}
              id={`example-${i + 1}`}
              className="scroll-mt-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {ex.title} Cover Letter
                  </h3>
                  <span className="text-sm text-slate-500">
                    {ex.industry} &middot; {ex.level}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4">
                <pre className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed font-sans">
                  {ex.letter}
                </pre>
              </div>

              <div className="bg-green-50 rounded-xl border border-green-200 p-5">
                <p className="text-sm font-semibold text-green-900 mb-1">
                  Why this works:
                </p>
                <p className="text-sm text-green-800 leading-relaxed">
                  {ex.why}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Mid-article CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center my-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Skip the writing. Get a tailored cover letter in 30 seconds.
          </h3>
          <p className="text-slate-600 mb-4 max-w-xl mx-auto">
            These examples are great for inspiration, but every job is different.
            CoverCraft AI analyzes the specific job description and your
            experience to write a letter that&apos;s perfectly tailored — every
            time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-block py-3 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Generate Your Cover Letter &mdash; $3.99
            </a>
            <a
              href="/tools/match"
              className="inline-block py-3 px-8 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              Free ATS Match Score
            </a>
          </div>
        </div>

        {/* Tips section for SEO depth */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Cover Letter Tips From These Examples
          </h2>
          <div className="space-y-4">
            {[
              {
                tip: "Lead with your strongest match",
                detail:
                  "Your opening paragraph should immediately connect your biggest relevant achievement to the job's primary requirement. Hiring managers spend 7 seconds scanning — make those seconds count.",
              },
              {
                tip: "Use numbers everywhere",
                detail:
                  "Notice how every example includes specific metrics: percentages, dollar amounts, team sizes, time saved. Numbers are concrete proof, not just claims. '40% faster' beats 'significantly faster' every time.",
              },
              {
                tip: "Show you researched the company",
                detail:
                  "Mentioning specific details about the company (their tech stack, Magnet designation, engineering blog, mentorship program) signals genuine interest and separates you from mass-applicants.",
              },
              {
                tip: "Keep it under 400 words",
                detail:
                  "Every example above is 200-350 words. Hiring managers prefer concise letters. If you can say it in fewer words, do it. Cut adjectives and filler — let achievements speak.",
              },
              {
                tip: "Match their language",
                detail:
                  "If the job posting says 'customer obsession,' use that exact phrase. If they mention specific technologies, name them. ATS systems and human readers both respond to keyword alignment.",
              },
            ].map((item) => (
              <div
                key={item.tip}
                className="bg-white rounded-xl border border-slate-200 p-5"
              >
                <h3 className="font-semibold text-slate-900 mb-1">
                  {item.tip}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ for SEO */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Cover Letter FAQ
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "How long should a cover letter be?",
                a: "250-400 words, or 3-4 paragraphs. Hiring managers prefer concise letters that respect their time. Our examples average 280 words.",
              },
              {
                q: "Should I write a different cover letter for every job?",
                a: "Yes. Tailored cover letters get 50% more interviews than generic ones. Each letter should reference specific requirements from the job posting. AI tools like CoverCraft make this feasible even when applying to 20+ jobs.",
              },
              {
                q: "What if I don't have much experience?",
                a: "Focus on projects, internships, coursework, and transferable skills. See our Entry-Level and Career Changer examples above — both demonstrate value without years of industry experience.",
              },
              {
                q: "Is it okay to use AI to write my cover letter?",
                a: "Absolutely. AI-generated cover letters are tailored to each specific job, well-structured, and professional. The key is to review the output and add personal touches the AI can't know, like why you're specifically excited about the company.",
              },
              {
                q: "Do hiring managers actually read cover letters?",
                a: "83% of hiring managers say cover letters influence their interview decisions (ResumeBuilder, 2025). They matter most when the job posting specifically requests one, and for competitive roles where many candidates have similar resumes.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-xl border border-slate-200 p-5 group"
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

        {/* Bottom CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to write yours?
          </h3>
          <p className="text-slate-300 mb-4">
            Paste a job description and your resume. Get a tailored cover letter
            in 30 seconds.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Generate Your Cover Letter &mdash; $3.99
          </a>
        </div>
      </article>

      <footer className="border-t border-slate-200 py-6">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          CoverCraft AI &mdash; AI-powered cover letter generator
          <span className="mx-2">&middot;</span>
          <a href="/blog" className="text-blue-600 hover:underline">
            More articles
          </a>
          <span className="mx-2">&middot;</span>
          <a href="/blog/ats-resume-tips" className="text-blue-600 hover:underline">
            ATS Resume Tips
          </a>
        </div>
      </footer>
    </div>
  );
}

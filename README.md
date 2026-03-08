# CoverCraft AI

AI-powered cover letter generator that creates tailored, professional cover letters in 30 seconds.

**Live:** [coverletter-ai-dun.vercel.app](https://coverletter-ai-dun.vercel.app/)

## What it does

Paste a job description and your resume. The AI analyzes both, identifies the strongest matches between your experience and their requirements, and writes a professional cover letter highlighting exactly why you're the right candidate.

## Features

- **AI Cover Letters ($3.99)** — Tailored to each specific job posting. Free preview included.
- **AI Interview Prep ($4.99)** — Custom interview questions, answer strategies, and preparation tips.
- **Free ATS Match Score** — See how well your resume matches a job description with a visual score.
- **Free Keyword Scanner** — Extract skills, requirements, and keywords from any job posting.
- **SEO Blog** — Career advice articles for organic traffic.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **AI:** Anthropic Claude API
- **Payments:** Stripe Checkout
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Add your API keys to .env.local
npm run dev
```

### Environment Variables

```
ANTHROPIC_API_KEY=sk-ant-xxxxx
STRIPE_SECRET_KEY=sk_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_xxxxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_PRICE_ID=price_xxxxx
STRIPE_INTERVIEW_PRICE_ID=price_xxxxx
```

## Architecture

```
src/app/
  page.tsx              # Main landing page (cover letter generator)
  interview/            # Interview prep product
  result/               # Post-payment cover letter delivery
  tools/
    match/              # Free ATS match score tool
    keywords/           # Free keyword scanner tool
  blog/                 # SEO content
  api/
    preview/            # Free preview endpoint (Claude API)
    checkout/           # Stripe checkout session creation
    generate/           # Full cover letter generation (paid)
    interview-*/        # Interview prep endpoints
```

## Pricing

| Product | Price | Model |
|---------|-------|-------|
| Cover Letter | $3.99 | Pay-per-use |
| Interview Prep | $4.99 | Pay-per-use |
| ATS Match Score | Free | Client-side |
| Keyword Scanner | Free | Client-side |

No subscriptions. Compare to $15-149/month for competitors.

## License

MIT

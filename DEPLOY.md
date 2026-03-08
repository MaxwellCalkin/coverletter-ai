# CoverCraft AI - Deployment Guide

## What This Is
An AI-powered cover letter generator that charges $3.99 per cover letter via Stripe.
Users paste a job description + their experience, get a free preview, then pay to unlock the full letter.

## Setup Steps (15 min total)

### 1. Stripe Account (5 min)
1. Go to https://dashboard.stripe.com/register and create an account
2. In Stripe Dashboard, go to **Products** > **Add Product**
   - Name: "Cover Letter Generation"
   - Price: $3.99, one-time
   - Save and copy the **Price ID** (starts with `price_`)
3. Go to **Developers** > **API Keys**
   - Copy the **Publishable key** (`pk_test_...` or `pk_live_...`)
   - Copy the **Secret key** (`sk_test_...` or `sk_live_...`)

### 2. Anthropic API Key
- Go to https://console.anthropic.com/settings/keys
- Create or copy your API key

### 3. Deploy to Vercel (5 min)
1. Install Vercel CLI: `npm i -g vercel`
2. From this directory, run: `vercel`
3. Follow the prompts to deploy
4. Add environment variables in Vercel Dashboard > Settings > Environment Variables:
   - `ANTHROPIC_API_KEY` = your Anthropic key
   - `STRIPE_SECRET_KEY` = your Stripe secret key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your Stripe publishable key
   - `STRIPE_PRICE_ID` = the price ID from step 1
   - `NEXT_PUBLIC_BASE_URL` = your Vercel URL (e.g., https://coverletter-ai.vercel.app)
5. Redeploy: `vercel --prod`

### 4. Go Live with Stripe
- When ready to accept real payments, switch from test keys to live keys in Stripe Dashboard
- Update the environment variables in Vercel

## Revenue Model
- Price per cover letter: $3.99
- API cost per letter: ~$0.05 (Claude Sonnet)
- Gross margin: ~98.7%
- Stripe fee: ~$0.42 per transaction (2.9% + $0.30)
- Net per sale: ~$3.52

## Local Development
```bash
cp .env.local.example .env.local
# Fill in your keys
npm run dev
```

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import Stripe from "stripe";

function getAnthropic() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(req: NextRequest) {
  try {
    const { jobDescription, sessionId } = await req.json();

    if (!jobDescription) {
      return NextResponse.json(
        { error: "Job description is required" },
        { status: 400 }
      );
    }

    if (!sessionId) {
      return NextResponse.json({ error: "Payment required" }, { status: 402 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 402 }
      );
    }

    if (session.metadata?.used === "true") {
      return NextResponse.json(
        { error: "This payment has already been used" },
        { status: 400 }
      );
    }

    await stripe.checkout.sessions.update(sessionId, {
      metadata: { used: "true" },
    });

    const anthropic = getAnthropic();
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 3000,
      messages: [
        {
          role: "user",
          content: `You are an expert interview coach. Based on the following job description, generate a comprehensive interview preparation guide.

JOB DESCRIPTION:
${jobDescription}

Generate the following sections:

## Likely Interview Questions (10 questions)
For each question, provide:
- The question
- Why they're asking it (what they want to assess)
- A strategy for answering it well
- An example strong answer framework

Include a mix of:
- 3 behavioral questions (STAR format)
- 3 technical/role-specific questions
- 2 situational questions
- 1 question about the company/role
- 1 curveball/creative question

## Key Themes to Prepare
List 4-5 themes the interviewer will likely focus on based on the job description.

## Questions You Should Ask Them
Provide 5 thoughtful questions the candidate should ask, tailored to this specific role.

## Red Flags to Avoid
List 3-4 common mistakes candidates make when interviewing for this type of role.

Format the output in clean, readable markdown.`,
        },
      ],
    });

    const interviewPrep =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ interviewPrep });
  } catch (error: unknown) {
    console.error("Interview generation error:", error);
    const msg =
      error instanceof Error
        ? error.message
        : "Failed to generate interview prep";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

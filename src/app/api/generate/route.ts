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
    const { jobDescription, experience, sessionId } = await req.json();

    if (!jobDescription || !experience) {
      return NextResponse.json(
        { error: "Job description and experience are required" },
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
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: `You are an expert career coach and professional cover letter writer. Write a compelling, tailored cover letter based on the following:

JOB DESCRIPTION:
${jobDescription}

CANDIDATE'S EXPERIENCE/RESUME:
${experience}

Instructions:
- Write a professional cover letter tailored specifically to this job
- Highlight relevant skills and experiences from the candidate's background
- Use a confident but not arrogant tone
- Keep it concise (3-4 paragraphs)
- Include specific examples from the candidate's experience that match job requirements
- Use proper business letter format (no addresses, just the body)
- Make it sound natural, not AI-generated
- End with a strong closing that expresses enthusiasm

Write only the cover letter text, nothing else.`,
        },
      ],
    });

    const coverLetter =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ coverLetter });
  } catch (error: unknown) {
    console.error("Generation error:", error);
    const msg =
      error instanceof Error ? error.message : "Failed to generate cover letter";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

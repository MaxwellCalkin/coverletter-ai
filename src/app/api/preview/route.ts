import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

function getAnthropic() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

export async function POST(req: NextRequest) {
  try {
    const { jobDescription, experience } = await req.json();

    if (!jobDescription || !experience) {
      return NextResponse.json(
        { error: "Job description and experience are required" },
        { status: 400 }
      );
    }

    const anthropic = getAnthropic();
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: `You are an expert cover letter writer. Write ONLY the first paragraph of a compelling cover letter based on:

JOB DESCRIPTION:
${jobDescription.substring(0, 1000)}

CANDIDATE'S EXPERIENCE:
${experience.substring(0, 1000)}

Write only one opening paragraph (3-4 sentences). Make it compelling and tailored.`,
        },
      ],
    });

    const preview =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ preview });
  } catch (error: unknown) {
    console.error("Preview error:", error);
    return NextResponse.json(
      { error: "Failed to generate preview" },
      { status: 500 }
    );
  }
}

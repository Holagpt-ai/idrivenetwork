import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Thanks for reaching out! How can we help you today? Browse our inventory or book an appointment—we're here to assist.",
    });
  } catch {
    return NextResponse.json({ error: "Chat request failed" }, { status: 500 });
  }
}

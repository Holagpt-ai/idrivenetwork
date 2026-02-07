import { NextResponse } from "next/server";
import { getInventoryText } from "@/lib/inventory";

const PHONE_REGEX = /[\d\-\(\)\s]{7,}/;

function extractPhone(text: string): string | null {
  const digits = text.replace(/\D/g, "");
  if (digits.length >= 10) return text.trim();
  return null;
}

function logLead(phone: string) {
  console.log("[LEAD] Requested call:", { phone, at: new Date().toISOString() });
}

const SYSTEM_PROMPT = `You are the iDrive assistant, a helpful and friendly chatbot for iDrive, a premium pre-owned car dealership.

INVENTORY (use these exact prices and details when answering):
${getInventoryText()}

GUIDELINES:
- Greet users warmly as the iDrive assistant.
- Answer questions about our inventory using the list above. Include prices when relevant.
- After 2-3 back-and-forth exchanges (questions and answers), ask: "Would you like one of our sales team to give you a call to discuss your options?"
- If the user says yes (yes, sure, please, ok, etc.), respond: "Great! What's the best phone number to reach you?"
- When the user provides a phone number, confirm: "Perfect! We've noted your request. A team member will call you shortly. Is there anything else I can help with?"
- Keep responses concise (2-4 sentences). Be professional and sales-oriented.
- Do not make up vehicles or prices. Only use the inventory list above.`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Chat service unavailable" }, { status: 503 });
    }

    const body = await request.json();
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 });
    }

    const userMessages = messages.filter((m: { role: string }) => m.role === "user");
    const lastUserMessage = (userMessages[userMessages.length - 1]?.content ?? "").trim();

    if (PHONE_REGEX.test(lastUserMessage)) {
      const phone = extractPhone(lastUserMessage);
      if (phone) logLead(phone);
    }

    const groqMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m: { role: string; content: string }) => ({ role: m.role, content: m.content })),
    ];

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: groqMessages,
        max_tokens: 256,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Groq API error:", res.status, err);
      return NextResponse.json({ error: "Chat request failed" }, { status: 500 });
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return NextResponse.json({ error: "No response from chat" }, { status: 500 });
    }

    return NextResponse.json({ message: content });
  } catch (e) {
    console.error("Chat error:", e);
    return NextResponse.json({ error: "Chat request failed" }, { status: 500 });
  }
}

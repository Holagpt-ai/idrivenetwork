import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, zipCode } = body;

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const existing = await prisma.subscriber.findUnique({
      where: { email: trimmedEmail },
    });
    if (existing) {
      return NextResponse.json({ error: "This email is already subscribed" }, { status: 409 });
    }

    await prisma.subscriber.create({
      data: {
        email: trimmedEmail,
        zipCode: zipCode && typeof zipCode === "string" ? zipCode.trim() || null : null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe failed:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

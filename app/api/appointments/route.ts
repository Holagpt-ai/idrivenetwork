import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, preferredDate, preferredTimeWindow, notes } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "Phone is required" },
        { status: 400 }
      );
    }
    if (!preferredDate) {
      return NextResponse.json(
        { error: "Preferred date is required" },
        { status: 400 }
      );
    }
    if (!preferredTimeWindow || typeof preferredTimeWindow !== "string" || !preferredTimeWindow.trim()) {
      return NextResponse.json(
        { error: "Preferred time window is required" },
        { status: 400 }
      );
    }

    const date = new Date(preferredDate);
    if (isNaN(date.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    const appointment = await prisma.appointment.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        preferredDate: date,
        preferredTimeWindow: preferredTimeWindow.trim(),
        notes: notes && typeof notes === "string" ? notes.trim() || null : null,
      },
    });

    return NextResponse.json({ success: true, id: appointment.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to create appointment" },
      { status: 500 }
    );
  }
}

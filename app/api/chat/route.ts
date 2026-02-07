import { NextResponse } from "next/server";
import { getInventorySummary } from "@/lib/getInventorySummary";

function buildResponse(userMessage: string, inventory: Awaited<ReturnType<typeof getInventorySummary>>): string {
  const lower = userMessage.toLowerCase();

  const matches = inventory.filter((car) => {
    const makeModel = `${car.make} ${car.model}`.toLowerCase();
    const text = `${makeModel} ${car.fuelType} ${car.city ?? ""} ${car.zipCode ?? ""}`.toLowerCase();
    if (lower.includes("suv") && (makeModel.includes("suv") || car.model.toLowerCase().includes("glc") || car.model.toLowerCase().includes("f-150"))) return true;
    if (lower.includes("ev") || lower.includes("electric")) return car.fuelType.toLowerCase().includes("electric");
    if (lower.includes("sedan") || lower.includes("car")) return !car.model.toLowerCase().includes("suv") && !car.model.toLowerCase().includes("f-150");
    if (lower.includes("cheap") || lower.includes("budget") || lower.includes("affordable")) return car.price < 50000;
    if (lower.includes("luxury") || lower.includes("porsche") || lower.includes("bmw") || lower.includes("mercedes")) return ["porsche", "bmw", "mercedes-benz"].some((b) => makeModel.includes(b));
    if (lower.includes(car.make.toLowerCase()) || lower.includes(car.model.toLowerCase())) return true;
    return false;
  });

  const carsToShow = matches.length > 0 ? matches : inventory;

  if (carsToShow.length === 0) {
    return "We're updating our inventory. Please check back soon or book an appointment—we'd love to help you find the right vehicle!";
  }

  const list = carsToShow
    .map((c) => `• ${c.year} ${c.make} ${c.model} – $${c.price.toLocaleString()}${c.city ? ` (${c.city}${c.zipCode ? ` ${c.zipCode}` : ""})` : ""}`)
    .join("\n");

  return `Here are some vehicles that might interest you:\n\n${list}\n\nAll our cars are quality inspected. Browse the full inventory or book an appointment to schedule a test drive—we're here to help!`;
}

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

    const userMessages = messages.filter((m: { role: string }) => m.role === "user");
    const lastUserMessage = userMessages[userMessages.length - 1]?.content ?? "";

    const inventory = await getInventorySummary(10);
    const response = buildResponse(lastUserMessage, inventory);

    return NextResponse.json({ message: response });
  } catch {
    return NextResponse.json({ error: "Chat request failed" }, { status: 500 });
  }
}

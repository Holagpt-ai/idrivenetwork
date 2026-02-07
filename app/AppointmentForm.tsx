"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const preferredDate = formData.get("date") as string;
    const preferredTimeWindow = formData.get("time") as string;
    const notes = (formData.get("message") as string) || undefined;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          preferredDate,
          preferredTimeWindow,
          notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={status === "loading"}
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-60"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === "loading"}
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-60"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-900 mb-2">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          disabled={status === "loading"}
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-60"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-zinc-900 mb-2">Preferred Date</label>
        <input
          id="date"
          name="date"
          type="date"
          required
          disabled={status === "loading"}
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="time" className="block text-sm font-medium text-zinc-900 mb-2">Preferred Time</label>
        <select
          id="time"
          name="time"
          required
          disabled={status === "loading"}
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-60"
        >
          <option value="">Select a time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={status === "loading"}
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 resize-none disabled:opacity-60"
          placeholder="Tell us about your visit..."
        />
      </div>
      {status === "success" && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800 text-sm">
          Thank you! Your appointment request has been submitted. We&apos;ll be in touch shortly.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800 text-sm">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-red-600 text-white font-medium py-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Request Appointment"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const zipCode = (formData.get("zipCode") as string) || undefined;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zipCode }),
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          name="email"
          type="email"
          required
          disabled={status === "loading"}
          placeholder="Your email"
          className="flex-1 rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 disabled:opacity-60"
        />
        <label htmlFor="subscribe-zip" className="sr-only">
          ZIP code (optional)
        </label>
        <input
          id="subscribe-zip"
          name="zipCode"
          type="text"
          disabled={status === "loading"}
          placeholder="ZIP (optional)"
          maxLength={10}
          className="w-full sm:w-28 rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2.5 text-white placeholder-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 disabled:opacity-60"
        />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      </div>
      {status === "success" && (
        <p className="text-green-400 text-sm">Thanks for subscribing!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}
    </form>
  );
}

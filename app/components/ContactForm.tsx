"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Failed to submit contact form.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-4xl font-bold text-yellow-400">
          Contact the Campaign
        </h2>

        <p className="mb-10 text-center text-gray-300">
          Whether you want to invite Brian to speak, ask a question, share a
          concern, or contact the campaign, send a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="entry.2005620554"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-white"
          />

          <input
            type="email"
            name="entry.1045781291"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-white"
          />

          <select
            name="entry.498486184"
            required
            defaultValue=""
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-white"
          >
            <option value="" disabled>
              What are you contacting us about?
            </option>
            <option value="General Question">General Question</option>
            <option value="Constituent Concern">Constituent Concern</option>
            <option value="Event Invitation">Event Invitation</option>
            <option value="Media Inquiry">Media Inquiry</option>
            <option value="Endorsement">Endorsement</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="entry.839337160"
            placeholder="Message"
            rows={5}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-white"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-yellow-400 py-4 font-bold text-slate-900 hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="rounded-lg border border-yellow-400 bg-slate-800 p-4 text-center font-semibold text-yellow-400">
              Message sent. Thank you for contacting the campaign.
            </p>
          )}

          {status === "error" && (
            <p className="rounded-lg border border-red-400 bg-slate-800 p-4 text-center font-semibold text-red-300">
              Something went wrong. Please try again in a moment.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
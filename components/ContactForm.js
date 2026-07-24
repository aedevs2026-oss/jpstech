"use client";

import { useState } from "react";
import { company } from "@/lib/company";

const initial = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function update(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initial);
    } catch {
      // Fallback: open mail client so the enquiry is never lost
      const body = encodeURIComponent(
        `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
      );
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        form.subject || "Website enquiry"
      )}&body=${body}`;
      setStatus("mailto");
      setError("Opened your email app as a fallback. You can also call or WhatsApp us directly.");
    }
  }

  const fieldClass =
    "w-full border border-steel/30 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-steel/20 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-navy">Name *</span>
          <input
            name="name"
            required
            value={form.name}
            onChange={update}
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold text-navy">Phone *</span>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update}
            className={fieldClass}
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold text-navy">Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          className={fieldClass}
          autoComplete="email"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold text-navy">Subject *</span>
        <input
          name="subject"
          required
          value={form.subject}
          onChange={update}
          className={fieldClass}
          placeholder="e.g. SS pool quotation / Gate automation"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold text-navy">Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          className={fieldClass}
          placeholder="Describe material, approximate size, and site location…"
        />
      </label>

      {status === "success" && (
        <p className="text-sm font-medium text-teal-dark" role="status">
          Thank you — your enquiry was received. We will get back to you shortly.
        </p>
      )}
      {error && (
        <p className="text-sm text-ink-muted" role="status">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-navy transition hover:bg-teal-bright disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}

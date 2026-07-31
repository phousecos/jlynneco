"use client";

import { legal } from "@/content/site";

// Service options for the intake dropdown — the governance advisory offerings.
const services = [
  "Executive Governance Advisory — ongoing relationship",
  "Governance assessment",
  "Project recovery & executive stabilization",
  "Fractional CIO leadership",
  "Board / executive briefing",
  "Not sure yet — general inquiry",
];

// The "send details" path. On submit it composes an email to the firm and opens
// the visitor's mail client — no third-party form backend. The address is
// assembled here, not in the page source, to limit harvesting.
export function EngageForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => ((data.get(k) as string) || "").trim();

    const addr = ["jerri", "jerribland.com"].join("@");
    const service = get("service") || "General inquiry";
    const subject = `Executive governance conversation — ${service}`;
    const body = [
      `Name: ${get("name")}`,
      `Organization: ${get("org")}`,
      `Email: ${get("email")}`,
      `Service: ${service}`,
      "",
      "About the situation:",
      get("details"),
    ].join("\n");

    window.location.href = `mailto:${addr}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-brand-paper/20 bg-brand-paper p-7 text-brand-ink sm:p-9"
      aria-label="Discovery call request"
    >
      <p className="font-display text-xl leading-snug">
        Prefer we reach out? Send a few details.
      </p>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-slate">
        The firm follows up to confirm a time.
      </p>

      <div className="mt-7 space-y-6">
        <Field id="name" label="Your name" type="text" required />
        <Field id="org" label="Firm / organization" type="text" />
        <Field id="email" label="Email" type="email" required />

        {/* Service dropdown — single point of routing. */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="service"
            className="font-mono text-xs uppercase tracking-wider text-brand-slate"
          >
            What do you need?
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              className="w-full appearance-none border border-brand-ink/20 bg-brand-paper/60 px-4 py-3 pr-10 text-[0.95rem] outline-none focus:border-brand-primary"
            >
              <option value="" disabled>
                Select a service…
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-slate"
            >
              ▾
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="details"
            className="font-mono text-xs uppercase tracking-wider text-brand-slate"
          >
            A little about the situation
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="Where you are in the initiative and the governance challenges that matter most. No confidential detail needed at this stage."
            className="border border-brand-ink/20 bg-brand-paper/60 px-4 py-3 text-[0.95rem] outline-none placeholder:text-brand-slate/70 focus:border-brand-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 text-sm font-medium text-brand-paper transition-colors hover:bg-brand-ink"
      >
        Send my details
      </button>
      <p className="mt-4 text-xs leading-relaxed text-brand-slate">
        Submitting opens your email client to send the request to the firm. It
        does not create an engagement. Engagements are contracted through{" "}
        {legal.engagementEntity}.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  required = false,
}: {
  id: string;
  label: string;
  type: "text" | "email";
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wider text-brand-slate"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="border border-brand-ink/20 bg-brand-paper/60 px-4 py-3 text-[0.95rem] outline-none focus:border-brand-primary"
      />
    </div>
  );
}

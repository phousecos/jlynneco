"use client";

import { legal } from "@/content/site";

// Service options for the intake dropdown — the firm's offerings, apex first.
const services = [
  "Expert witness — retain for a matter",
  "Advisory & audits",
  "SACS accreditation readiness",
  "Program management",
  "CIO Advisra — maturity assessment",
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
    const subject = `Discovery call request — ${service}`;
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
      className="border border-bone/20 bg-bone p-7 text-counsel-ink sm:p-9"
      aria-label="Discovery call request"
    >
      <p className="font-display text-xl leading-snug">
        Prefer we reach out? Send a few details.
      </p>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-graphite">
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
            className="font-mono text-xs uppercase tracking-wider text-graphite"
          >
            What do you need?
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              className="w-full appearance-none border border-counsel-ink/20 bg-bone/60 px-4 py-3 pr-10 text-[0.95rem] outline-none focus:border-aurum"
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
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-graphite"
            >
              ▾
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="details"
            className="font-mono text-xs uppercase tracking-wider text-graphite"
          >
            A little about the situation
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="Where you are in the lifecycle, or the posture of the matter. No privileged detail at this stage."
            className="border border-counsel-ink/20 bg-bone/60 px-4 py-3 text-[0.95rem] outline-none placeholder:text-graphite/70 focus:border-aurum"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-counsel-ink px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-ink-deep"
      >
        Request a discovery call
      </button>
      <p className="mt-4 text-xs leading-relaxed text-graphite">
        Submitting opens your email client to send the request to the firm. It
        does not create an engagement or, for counsel, any privileged
        relationship. Engagements are contracted through {legal.engagementEntity}.
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
        className="font-mono text-xs uppercase tracking-wider text-graphite"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="border border-counsel-ink/20 bg-bone/60 px-4 py-3 text-[0.95rem] outline-none focus:border-aurum"
      />
    </div>
  );
}

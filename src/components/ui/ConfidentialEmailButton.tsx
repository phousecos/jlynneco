"use client";

// Confidential contact for counsel. The address is assembled in the browser on
// click and never appears as plaintext or as a `mailto:` in the page source,
// so email harvesters can't scrape it. (Address: confidential@jlynne.co — a
// dedicated, rotatable Proton alias kept off the firm's working inbox.)
export function ConfidentialEmailButton({
  children,
  subject = "Confidential matter: conflicts check",
  body = "Before sharing any privileged detail: please include only what's needed to run a conflicts check (the parties involved). The firm will follow up to establish a secure channel.",
}: {
  children: React.ReactNode;
  subject?: string;
  body?: string;
}) {
  const open = () => {
    const addr = ["confidential", "jlynne.co"].join("@");
    const qs = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`;
    window.location.href = `mailto:${addr}?${qs}`;
  };

  return (
    <button
      type="button"
      onClick={open}
      className="inline-flex items-center gap-2 rounded-full border border-brand-ink bg-brand-ink px-6 py-3 text-sm font-medium text-brand-paper transition-colors hover:bg-brand-ink"
    >
      {children}
    </button>
  );
}

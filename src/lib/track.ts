// Fire a "download" event to whatever web-analytics tool is present on the
// page, then get out of the way. This is a deliberate no-op until an analytics
// script is added (Vercel Analytics, Plausible, Fathom, GA4, …) — wiring one up
// is all it takes to start seeing per-file download counts, no UI changes.
//
// Recognized targets (first match(es) that exist are called):
//   • Plausible          window.plausible("Download", { props })
//   • Vercel Analytics   window.va("event", { name, data })
//   • Fathom             window.fathom.trackEvent(...)
//   • GA4 / gtag         window.gtag("event", "download", params)
export function trackDownload(file: string, audience: string) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
    va?: (event: "event", payload: { name: string; data?: Record<string, string> }) => void;
    fathom?: { trackEvent: (name: string, opts?: Record<string, unknown>) => void };
    gtag?: (command: "event", action: string, params?: Record<string, string>) => void;
  };

  const props = { file, audience };
  w.plausible?.("Download", { props });
  w.va?.("event", { name: "download", data: props });
  w.fathom?.trackEvent(`Download: ${file}`);
  w.gtag?.("event", "download", props);
}

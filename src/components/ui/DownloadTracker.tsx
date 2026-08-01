"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Records a "download" event (with the file and its sector) whenever a download
// card is clicked, so Vercel Analytics can report per-file counts. Rendered once
// on the Resources page. This is pure progressive enhancement — a delegated
// listener that never touches the CSS filter or the links, so downloads and
// filtering keep working with JavaScript disabled; only the counting needs JS.
export function DownloadTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.(
        "a[data-aud][download]",
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const file = href.split("/").pop() ?? href;
      const sector = link.getAttribute("data-aud") ?? "general";
      track("download", { file, sector });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

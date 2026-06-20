"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

// Principal avatar. Shows the headshot at `src` if it loads; otherwise falls
// back to the gold monogram — so a headshot can be dropped into public/brand/
// and it appears automatically, with no broken image if it's missing.
export function Avatar({
  src,
  alt,
  initials,
  size = 80,
}: {
  src?: string;
  alt: string;
  initials: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);
  const box: CSSProperties = { width: size, height: size };

  if (!src || failed) {
    return (
      <div
        aria-hidden
        style={box}
        className="flex items-center justify-center border border-aurum/60 font-display text-2xl text-aurum"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={box}
      onError={() => setFailed(true)}
      className="border border-counsel-ink/15 object-cover"
    />
  );
}

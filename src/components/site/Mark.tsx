import Image from "next/image";
import type { CSSProperties } from "react";
import markSrc from "../../../public/brand/mark.png";

/**
 * The firm mark — the gold negative-space bull/elephant emblem.
 *
 * Rendered from the production artwork (public/brand/mark.png), a transparent
 * gold PNG, so it sits correctly on any ground. Square source; `size` sets the
 * rendered box. `className` still applies (sizing, opacity) for hover states.
 */
export function Mark({
  size = 40,
  className,
  title = "J. Lynne & Co.",
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  const style: CSSProperties = { width: size, height: size };
  return (
    <Image
      src={markSrc}
      alt={title}
      width={size}
      height={size}
      style={style}
      className={className}
      priority={false}
    />
  );
}

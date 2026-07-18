import type { CSSProperties } from "react";
import markSrc from "../../../public/brand/mark.png";

/**
 * The firm mark — the negative-space bull/elephant emblem.
 *
 * The production artwork (public/brand/mark.png) is used as a CSS mask and
 * painted with `currentColor`, so the mark takes whatever brand colour the
 * `className` sets — blue on light grounds, reversed white on dark/coloured
 * grounds — exactly like every other token-driven element. Square source;
 * `size` sets the rendered box.
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
  const style: CSSProperties = {
    width: size,
    height: size,
    backgroundColor: "currentColor",
    WebkitMaskImage: `url(${markSrc.src})`,
    maskImage: `url(${markSrc.src})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };
  return <span role="img" aria-label={title} style={style} className={className} />;
}

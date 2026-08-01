import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Variant =
  | "solid"
  | "outline"
  | "ghost"
  | "ghostOnDark"
  | "onDark"
  | "onColor";

const styles: Record<Variant, string> = {
  // Primary action — the blue lead accent.
  solid:
    "bg-brand-primary text-brand-paper border border-brand-primary hover:bg-brand-primary/90",
  outline:
    "border border-brand-ink text-brand-ink hover:border-brand-primary hover:bg-brand-primary hover:text-brand-paper",
  // Inline cross-link on a light ground — hovers to the blue lead.
  ghost:
    "text-brand-ink underline-offset-4 hover:text-brand-primary hover:underline px-0",
  // Inline cross-link on a dark ground — hovers to teal (the on-dark accent),
  // which stays legible where blue would go muddy.
  ghostOnDark:
    "text-brand-paper/80 underline-offset-4 hover:text-brand-tertiary hover:underline px-0",
  // Secondary action on a dark or colored ground — outlined paper button.
  onDark:
    "border border-brand-paper/40 text-brand-paper hover:border-brand-primary hover:bg-brand-primary hover:text-brand-paper",
  // Action on a colored (blue) ground — a paper button for contrast.
  onColor:
    "bg-brand-paper text-brand-primary border border-transparent hover:bg-brand-paper/90",
};

// Internal/external link styled as an action. Ghost variant is the inline
// "read more →" cross-link used between pages.
export function CTALink({
  href,
  children,
  variant = "solid",
  className,
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  download?: boolean;
}) {
  const isExternal = /^https?:\/\//.test(href);
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
      : "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

  const cls = clsx(base, styles[variant], className);

  // A file download (e.g. a PDF in /public) — a plain anchor with the download
  // hint, never a client-side <Link> navigation.
  if (download) {
    return (
      <a href={href} className={cls} download>
        {children}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

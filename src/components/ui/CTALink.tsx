import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Variant = "solid" | "outline" | "ghost" | "onDark";

const styles: Record<Variant, string> = {
  solid:
    "bg-counsel-ink text-bone border border-counsel-ink hover:bg-ink-deep",
  outline:
    "border border-counsel-ink text-counsel-ink hover:border-aurum hover:bg-counsel-ink hover:text-bone",
  ghost:
    "text-counsel-ink underline-offset-4 hover:text-aurum hover:underline px-0",
  onDark:
    "border border-bone/40 text-bone hover:border-aurum hover:bg-aurum hover:text-counsel-ink",
};

// Internal/external link styled as an action. Ghost variant is the inline
// "read more →" cross-link used between pages.
export function CTALink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);
  const base =
    variant === "ghost"
      ? "inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
      : "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

  const cls = clsx(base, styles[variant], className);

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

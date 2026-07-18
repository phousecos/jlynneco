import { clsx } from "@/lib/clsx";

// Mono eyebrow — the "exhibit/label" voice. Ties copy to the evidence thesis.
export function Eyebrow({
  children,
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag className={clsx("eyebrow text-brand-secondary", className)}>{children}</Tag>
  );
}

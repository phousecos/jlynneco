import { clsx } from "@/lib/clsx";

// Standard horizontal container. Comfortable boardroom measure, not edge-to-edge.
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "prose" | "wide";
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 sm:px-8",
        size === "prose" && "max-w-2xl",
        size === "default" && "max-w-5xl",
        size === "wide" && "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

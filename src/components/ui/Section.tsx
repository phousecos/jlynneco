import { clsx } from "@/lib/clsx";
import { Container } from "./Container";

type Ground = "bone" | "ink" | "deep";

const grounds: Record<Ground, string> = {
  bone: "bg-bone text-counsel-ink",
  ink: "bg-counsel-ink text-bone",
  deep: "bg-ink-deep text-bone",
};

// Vertical section with a chosen ground. One accent (gold) per view — let the
// ground do the structural work, not color.
export function Section({
  children,
  ground = "bone",
  className,
  size = "default",
  containerSize,
  id,
}: {
  children: React.ReactNode;
  ground?: Ground;
  className?: string;
  size?: "default" | "wide" | "prose";
  containerSize?: "default" | "wide" | "prose";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-20 sm:py-28",
        grounds[ground],
        className,
      )}
    >
      <Container size={containerSize ?? (size === "prose" ? "prose" : "default")}>
        {children}
      </Container>
    </section>
  );
}

import { clsx } from "@/lib/clsx";
import { Container } from "./Container";

type Ground = "paper" | "ink" | "deep";

const grounds: Record<Ground, string> = {
  paper: "bg-brand-paper text-brand-ink",
  ink: "bg-brand-ink text-brand-paper",
  deep: "bg-brand-ink text-brand-paper",
};

// Vertical section with a chosen ground — let the ground do the structural
// work; colour comes from the brand accents (blue leads, gold, teal).
export function Section({
  children,
  ground = "paper",
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

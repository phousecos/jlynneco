import { Exhibit } from "./Exhibit";
import { Reveal } from "@/components/ui/Reveal";
import type { Exhibit as ExhibitData } from "@/content/exhibits";

// A row of exhibits — the first taste of the signature on Home, Firm, and
// Expert Witness. The single scroll-reveal lives here.
export function ExhibitStrip({
  exhibits,
  variant = "compact",
  columns = 3,
}: {
  exhibits: ExhibitData[];
  variant?: "full" | "compact";
  columns?: 2 | 3;
}) {
  return (
    <div
      className={
        columns === 2
          ? "grid gap-px bg-bone/15 sm:grid-cols-2"
          : "grid gap-px bg-bone/15 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {exhibits.map((exhibit, i) => (
        <Reveal key={exhibit.id} delay={i * 90}>
          <Exhibit exhibit={exhibit} variant={variant} className="h-full" />
        </Reveal>
      ))}
    </div>
  );
}

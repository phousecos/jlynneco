import Link from "next/link";
import { clsx } from "@/lib/clsx";

// Deck card ramp: royal blue deepening to navy, one step per card.
const ramp = ["#2552DE", "#1F46BE", "#1A3A9E", "#162F7F", "#11235F"];

type Stage = { n: string; title: string; body?: string; href?: string };

/**
 * A row of numbered cards that deepen from royal blue to navy, left to right —
 * the deck's "five questions" device. Gold numbers, white titles, an optional
 * one-line body. With `href`, each card links to its detail further down.
 */
export function StageCards({
  stages,
  className,
}: {
  stages: Stage[];
  className?: string;
}) {
  return (
    <ol
      className={clsx(
        "grid gap-3 sm:grid-cols-2 lg:gap-4",
        stages.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
        className,
      )}
    >
      {stages.map((stage, i) => {
        const inner = (
          <>
            <span className="font-display text-3xl leading-none text-brand-secondary">
              {stage.n.padStart(2, "0")}
            </span>
            <span className={clsx("block", stage.body ? "pt-8" : "mt-auto pt-10")}>
              <span className="font-display block text-lg uppercase">
                {stage.title}
              </span>
              {stage.body && (
                <span className="mt-2 block text-[0.9rem] leading-snug text-brand-paper/80">
                  {stage.body}
                </span>
              )}
            </span>
          </>
        );
        const card =
          "flex h-full flex-col lg:min-h-44 rounded-md p-5 text-brand-paper";
        return (
          <li key={stage.n}>
            {stage.href ? (
              <Link
                href={stage.href}
                style={{ backgroundColor: ramp[i % ramp.length] }}
                className={clsx(card, "transition-transform hover:-translate-y-0.5")}
              >
                {inner}
              </Link>
            ) : (
              <div
                style={{ backgroundColor: ramp[i % ramp.length] }}
                className={card}
              >
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

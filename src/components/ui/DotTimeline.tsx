import { clsx } from "@/lib/clsx";

type Step = { title: string; body: string };

/**
 * Dot-to-dot process line from the deck: circles joined by a thin gold rule,
 * the first in gold and the rest in royal blue. Horizontal from `lg`, a
 * vertical line down the left edge below that.
 */
export function DotTimeline({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  return (
    <ol
      className={clsx(
        "relative grid gap-10 lg:gap-8",
        steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4",
        className,
      )}
    >
      {steps.map((step, i) => (
        <li key={step.title} className="relative pl-16 lg:pl-0">
          {/* Connector to the next dot: down on mobile, across on desktop. */}
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute left-6 top-12 -bottom-10 w-px bg-brand-secondary lg:left-12 lg:right-[-2rem] lg:top-6 lg:bottom-auto lg:h-px lg:w-auto"
            />
          )}
          <span
            aria-hidden
            className={clsx(
              "absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm text-brand-paper lg:relative",
              i === 0 ? "bg-brand-secondary" : "bg-brand-primary",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl leading-snug lg:mt-6">
            <span className="sr-only">Step {i + 1}: </span>
            {step.title}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-ink/75">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

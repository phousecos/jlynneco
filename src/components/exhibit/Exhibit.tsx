import { Mark } from "@/components/site/Mark";
import { clsx } from "@/lib/clsx";
import type { Exhibit as ExhibitData } from "@/content/exhibits";

const kindLabel: Record<ExhibitData["kind"], string> = {
  case: "Case",
  outcome: "Outcome",
  publication: "Publication",
  testimonial: "Reference",
};

/**
 * The signature element. Proof framed as evidence: a mono EXHIBIT NN label,
 * the recurring gold mark as emblem, a metric set in mono (reads like an
 * exhibit), and the substance in display + body. No template produces this.
 */
export function Exhibit({
  exhibit,
  variant = "full",
  className,
}: {
  exhibit: ExhibitData;
  variant?: "full" | "compact";
  className?: string;
}) {
  const { id, kind, label, headline, body, metric, source } = exhibit;
  const compact = variant === "compact";

  return (
    <article
      className={clsx(
        "group relative flex h-full flex-col border border-counsel-ink/12 bg-bone",
        "transition-colors hover:border-aurum/60",
        compact ? "p-6" : "p-7 sm:p-9",
        className,
      )}
    >
      {/* Exhibit header — the evidence stamp. */}
      <div className="flex items-center justify-between gap-4 border-b border-counsel-ink/12 pb-4">
        <div className="flex items-baseline gap-3">
          <span className="eyebrow text-aurum">Exhibit {id}</span>
          <span className="eyebrow text-graphite">{kindLabel[kind]}</span>
        </div>
        <Mark
          size={compact ? 22 : 26}
          className="text-aurum/70 transition-colors group-hover:text-aurum"
        />
      </div>

      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-graphite">
        {label}
      </p>

      <h3
        className={clsx(
          "font-display mt-3 leading-tight text-counsel-ink",
          compact ? "text-xl" : "text-2xl sm:text-[1.75rem]",
        )}
      >
        {headline}
      </h3>

      {!compact && (
        <p className="mt-4 text-[0.975rem] leading-relaxed text-counsel-ink/80">
          {body}
        </p>
      )}

      <div className="mt-auto pt-6">
        {metric && (
          <div className="flex items-baseline gap-3 border-t border-counsel-ink/10 pt-4">
            <span className="font-display text-3xl text-aurum">
              {metric.value}
            </span>
            <span className="font-mono text-xs leading-tight text-graphite">
              {metric.unit}
            </span>
          </div>
        )}
        {source && (
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-graphite">
            {source}
          </p>
        )}
      </div>
    </article>
  );
}

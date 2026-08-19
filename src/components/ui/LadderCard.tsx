import Link from "next/link";
import { clsx } from "@/lib/clsx";
import type { LadderRung } from "@/content/site";

const altitudeNote: Record<LadderRung["altitude"], string> = {
  apex: "Apex, sold on judgment",
  product: "Productized, packaged",
  floor: "Senior delivery",
};

// One door on the ladder. All read as bold dark cards (the inverse of the
// light-paper exhibits); the `navy` floor card — the supporting-delivery
// tier — is set apart with a teal edge (teal = supports).
export function LadderCard({
  rung,
  navy = false,
}: {
  rung: LadderRung;
  navy?: boolean;
}) {
  const cta = rung.title === "CIO Advisra" ? "Go to the program" : "Read on";

  return (
    <Link
      href={rung.href}
      className={clsx(
        "group flex h-full flex-col justify-between border p-7 text-brand-paper transition-colors hover:border-brand-secondary",
        navy ? "border-brand-tertiary bg-brand-ink" : "border-brand-ink bg-brand-ink",
      )}
    >
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-display text-5xl leading-none text-brand-secondary">
            {rung.rank}
          </span>
          <span className="eyebrow text-brand-paper/55">
            {altitudeNote[rung.altitude]}
          </span>
        </div>
        <h3 className="font-display mt-6 text-2xl leading-tight">
          {rung.title}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-brand-paper/70">
          {rung.blurb}
        </p>
      </div>
      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand-paper transition-colors group-hover:text-brand-secondary">
        {cta}
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

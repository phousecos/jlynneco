import Link from "next/link";
import { clsx } from "@/lib/clsx";
import type { LadderRung } from "@/content/site";

const altitudeNote: Record<LadderRung["altitude"], string> = {
  apex: "Apex — sold on judgment",
  product: "Productized — packaged",
  floor: "Senior delivery",
};

// One door on the ladder. All read as bold dark cards (the inverse of the
// light-paper exhibits); the `navy` floor card is set apart in deep navy.
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
        "group flex h-full flex-col justify-between border p-7 text-bone transition-colors hover:border-aurum",
        navy ? "border-navy bg-navy" : "border-counsel-ink bg-counsel-ink",
      )}
    >
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-display text-5xl leading-none text-aurum">
            {rung.rank}
          </span>
          <span className="eyebrow text-bone/55">
            {altitudeNote[rung.altitude]}
          </span>
        </div>
        <h3 className="font-display mt-6 text-2xl leading-tight">
          {rung.title}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-bone/70">
          {rung.blurb}
        </p>
      </div>
      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-bone transition-colors group-hover:text-aurum">
        {cta}
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

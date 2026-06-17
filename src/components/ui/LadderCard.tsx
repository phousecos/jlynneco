import Link from "next/link";
import { clsx } from "@/lib/clsx";
import type { LadderRung } from "@/content/site";

const altitudeNote: Record<LadderRung["altitude"], string> = {
  apex: "Apex — sold on judgment",
  product: "Productized — packaged",
  floor: "Senior delivery",
};

// One door on the ladder. Apex/product doors read as bold dark cards (the
// inverse of the light-paper exhibits); the floor (Program) stays a quiet
// outlined card so the hierarchy still shows.
export function LadderCard({
  rung,
  muted = false,
}: {
  rung: LadderRung;
  muted?: boolean;
}) {
  const cta = rung.title === "CIO Advisra" ? "Go to the program" : "Read on";

  return (
    <Link
      href={rung.href}
      className={clsx(
        "group flex h-full flex-col justify-between border p-7 transition-colors",
        muted
          ? "border-counsel-ink/15 bg-transparent text-counsel-ink hover:border-counsel-ink/40"
          : "border-counsel-ink bg-counsel-ink text-bone hover:border-aurum",
      )}
    >
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <span
            className={clsx(
              "font-display leading-none",
              muted ? "text-4xl text-counsel-ink/35" : "text-5xl text-aurum",
            )}
          >
            {rung.rank}
          </span>
          <span
            className={clsx(
              "eyebrow",
              muted ? "text-graphite" : "text-bone/55",
            )}
          >
            {altitudeNote[rung.altitude]}
          </span>
        </div>
        <h3
          className={clsx(
            "font-display mt-6 leading-tight",
            muted ? "text-xl text-counsel-ink/90" : "text-2xl",
          )}
        >
          {rung.title}
        </h3>
        <p
          className={clsx(
            "mt-3 text-[0.95rem] leading-relaxed",
            muted ? "text-counsel-ink/70" : "text-bone/70",
          )}
        >
          {rung.blurb}
        </p>
      </div>
      <span
        className={clsx(
          "mt-7 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:text-aurum",
          muted ? "text-counsel-ink" : "text-bone",
        )}
      >
        {cta}
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

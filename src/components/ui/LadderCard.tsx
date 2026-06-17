import Link from "next/link";
import { clsx } from "@/lib/clsx";
import type { LadderRung } from "@/content/site";

const altitudeNote: Record<LadderRung["altitude"], string> = {
  apex: "Apex — sold on judgment",
  product: "Productized — the firm's thinking, packaged",
  floor: "Senior delivery",
};

// One door on the ladder. Apex rungs read bold; the floor (Program) is
// deliberately quieter via the `muted` flag.
export function LadderCard({
  rung,
  muted = false,
}: {
  rung: LadderRung;
  muted?: boolean;
}) {
  return (
    <Link
      href={rung.href}
      className={clsx(
        "group flex flex-col border p-7 transition-colors",
        muted
          ? "border-counsel-ink/12 bg-transparent hover:border-counsel-ink/30"
          : "border-counsel-ink/15 bg-bone/50 hover:border-aurum/70",
      )}
    >
      <div className="flex items-center justify-between">
        <span className="eyebrow text-aurum">Door {rung.exhibit}</span>
        <span className="eyebrow text-graphite">{altitudeNote[rung.altitude]}</span>
      </div>
      <h3
        className={clsx(
          "font-display mt-5 leading-tight",
          muted ? "text-xl text-counsel-ink/90" : "text-2xl",
        )}
      >
        {rung.title}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-counsel-ink/75">
        {rung.blurb}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-counsel-ink transition-colors group-hover:text-aurum">
        {rung.title === "CIO Advisra" ? "Go to the program" : "Read on"}
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

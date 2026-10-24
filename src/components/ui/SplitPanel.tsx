import { clsx } from "@/lib/clsx";

const grounds = {
  paper: "bg-brand-paper text-brand-ink",
  canvas: "bg-canvas text-brand-ink",
  deep: "bg-brand-ink text-brand-paper",
};

/**
 * Deck split layout: copy on the left, a full-height royal-blue panel bleeding
 * off the right edge with an oversized faded number and a quiet ring motif.
 * The panel appears from `lg`; below that the section reads as a plain band.
 * The left column's inset matches Container (max-w-5xl, px-6/8) so copy lines
 * up with the sections above and below.
 */
export function SplitPanel({
  number,
  ground = "paper",
  children,
}: {
  number: string;
  ground?: keyof typeof grounds;
  children: React.ReactNode;
}) {
  return (
    <section className={clsx("lg:grid lg:grid-cols-[1fr_34%]", grounds[ground])}>
      <div className="px-6 py-20 sm:px-8 sm:py-28 lg:pl-[max(2rem,calc((100vw-64rem)/2+2rem))] lg:pr-16">
        {children}
      </div>
      <div
        aria-hidden
        className="relative hidden overflow-hidden bg-brand-primary lg:block"
      >
        <span className="font-display absolute right-8 top-6 text-[9rem] font-semibold leading-none text-brand-paper/20">
          {number}
        </span>
        <svg
          viewBox="0 0 200 200"
          className="absolute left-1/2 top-1/2 w-3/5 max-w-xs -translate-x-1/2 -translate-y-1/2"
        >
          <circle cx="100" cy="100" r="92" fill="none" stroke="#F6F6F2" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#F6F6F2" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="28" fill="none" stroke="#F6F6F2" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="165" cy="35" r="11" fill="rgb(var(--brand-secondary-rgb))" />
        </svg>
      </div>
    </section>
  );
}

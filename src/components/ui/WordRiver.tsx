import { clsx } from "@/lib/clsx";

// One lane of the infinite word river. Renders the phrases twice inside a
// single track so the CSS marquee can loop seamlessly (see .marquee in
// globals.css). Purely presentational and decorative, so the animated markup
// is aria-hidden — a screen-reader-friendly list is rendered by the caller.
export function WordRiver({
  items,
  durationSeconds = 34,
  className,
}: {
  items: string[];
  durationSeconds?: number;
  className?: string;
}) {
  const lane = (
    <div className="flex shrink-0 items-center">
      {items.map((word) => (
        <span key={word} className="flex items-center">
          <span className="whitespace-nowrap font-display text-2xl leading-[1.2] sm:text-3xl lg:text-4xl">
            {word.split(/(governance)/i).map((part, i) =>
              /^governance$/i.test(part) ? (
                <span key={i} className="text-brand-tertiary">
                  {part}
                </span>
              ) : (
                part
              ),
            )}
          </span>
          <span
            aria-hidden
            className="mx-6 text-brand-secondary sm:mx-9 lg:mx-10"
          >
            &bull;
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={clsx("marquee", className)} aria-hidden>
      <div
        className="marquee__track"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {lane}
        {lane}
      </div>
    </div>
  );
}

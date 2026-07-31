import Link from "next/link";

// A restrained cross-link at the foot of a service page — a short prompt and
// a single arrow link pointing to the most relevant adjacent service.
export function NextStep({
  prompt,
  label,
  href,
}: {
  prompt: string;
  label: string;
  href: string;
}) {
  return (
    <section className="border-t border-brand-ink/10 bg-brand-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-1.5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
        <p className="text-[0.95rem] text-brand-ink/70">{prompt}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-brand-primary transition-colors hover:text-brand-primary/80"
        >
          {label}
          <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

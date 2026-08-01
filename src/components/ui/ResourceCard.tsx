import Link from "next/link";
import { type ResourceItem } from "@/content/resources";
import { clsx } from "@/lib/clsx";

export const cardBase =
  "flex h-full flex-col border border-brand-ink/12 bg-brand-paper p-6";

export const cardHover = "transition-colors hover:border-brand-primary";

// Shared inner content for a resource/download card.
export function ResourceCardBody({ item }: { item: ResourceItem }) {
  return (
    <>
      {item.meta && (
        <p className="font-mono text-xs uppercase tracking-wider text-brand-secondary">
          {item.meta}
        </p>
      )}
      <h3 className="font-display mt-3 text-lg leading-snug">{item.title}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-brand-ink/75">
        {item.description}
      </p>
    </>
  );
}

// A resource card that links to its canonical source when `href` is set, and
// renders as a plain outline card otherwise. Used by every non-download group.
export function ResourceCard({ item }: { item: ResourceItem }) {
  const body = <ResourceCardBody item={item} />;
  if (!item.href) return <div className={cardBase}>{body}</div>;

  const external = /^https?:\/\//.test(item.href);
  const cls = clsx(cardBase, cardHover);
  return external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <Link href={item.href} className={cls}>
      {body}
    </Link>
  );
}

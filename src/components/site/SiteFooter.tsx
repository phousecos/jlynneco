import Link from "next/link";
import { Mark } from "./Mark";
import { primaryNav, contactHref } from "@/content/nav";
import { site, legal } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-ink text-brand-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Mark size={40} className="text-brand-paper" />
              <span className="font-display text-xl">{site.name}</span>
            </Link>
            <p className="mt-5 font-display text-lg leading-snug text-brand-paper/85">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3">
            {[...primaryNav, { label: "Contact us", href: contactHref }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-brand-paper/70 transition-colors hover:text-brand-tertiary"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-brand-paper/15 pt-7 text-xs text-brand-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-brand-paper/45">
            © {year} {site.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/legal/privacy" className="transition-colors hover:text-brand-tertiary">
              Privacy
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-brand-tertiary">
              Terms
            </Link>
            {/* Engagement/invoicing entity — legal/footer only, never marketing. */}
            <span>
              Engagements contracted through {legal.engagementEntity}.
            </span>
            <span>Legal: {legal.legalCounsel}.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

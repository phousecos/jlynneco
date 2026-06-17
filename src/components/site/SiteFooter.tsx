import Link from "next/link";
import { Mark } from "./Mark";
import { primaryNav, engageHref } from "@/content/nav";
import { site, legal } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-deep text-bone">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Mark size={40} className="text-aurum" />
              <span className="font-display text-xl">{site.name}</span>
            </Link>
            <p className="mt-5 font-display text-lg leading-snug text-bone/85">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3">
            {[...primaryNav, { label: "Engage", href: engageHref }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-bone/70 transition-colors hover:text-aurum"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/15 pt-7 text-xs text-bone/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-bone/45">
            © {year} {site.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/legal/privacy" className="hover:text-bone/80">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-bone/80">
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mark } from "./Mark";
import { primaryNav, engageHref } from "@/content/nav";
import { clsx } from "@/lib/clsx";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-counsel-ink/10 bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="J. Lynne & Co. — home"
          onClick={() => setOpen(false)}
        >
          <Mark size={68} className="text-aurum" />
          <span className="font-display text-lg leading-none tracking-tight">
            J. Lynne <span className="text-graphite">&amp; Co.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm transition-colors hover:text-aurum",
                isActive(item.href)
                  ? "text-counsel-ink"
                  : "text-graphite",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={engageHref}
            className="rounded-full border border-counsel-ink px-4 py-1.5 text-sm text-counsel-ink transition-colors hover:border-aurum hover:bg-counsel-ink hover:text-bone"
          >
            Engage
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="eyebrow text-counsel-ink">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-counsel-ink/10 bg-bone lg:hidden"
          aria-label="Primary"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2 sm:px-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "border-b border-counsel-ink/5 py-3 text-base",
                  isActive(item.href) ? "text-aurum" : "text-counsel-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={engageHref}
              onClick={() => setOpen(false)}
              className="py-4 font-display text-lg text-counsel-ink"
            >
              Engage →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

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
    <header className="sticky top-0 z-40 border-b border-brand-ink/10 bg-brand-paper/85 backdrop-blur supports-[backdrop-filter]:bg-brand-paper/70">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="J. Lynne & Co. — home"
          onClick={() => setOpen(false)}
        >
          <Mark size={68} className="text-brand-primary" />
          <span className="font-display text-lg leading-none tracking-tight">
            J. Lynne <span className="text-brand-primary">&amp; Co.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm transition-colors hover:text-brand-primary",
                isActive(item.href)
                  ? "text-brand-primary"
                  : "text-brand-slate",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={engageHref}
            className="rounded-full border border-brand-ink px-4 py-1.5 text-sm text-brand-ink transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-brand-paper"
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
          <span className="eyebrow text-brand-ink">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-brand-ink/10 bg-brand-paper lg:hidden"
          aria-label="Primary"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2 sm:px-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "border-b border-brand-ink/5 py-3 text-base",
                  isActive(item.href) ? "text-brand-primary" : "text-brand-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={engageHref}
              onClick={() => setOpen(false)}
              className="py-4 font-display text-lg text-brand-ink"
            >
              Engage →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

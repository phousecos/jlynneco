"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mark } from "./Mark";
import { primaryNav, contactHref, type NavItem } from "@/content/nav";
import { clsx } from "@/lib/clsx";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const path = href.split("#")[0]; // ignore anchors for active detection
    return pathname === path || (path !== "/" && pathname?.startsWith(path));
  };

  const groupActive = (item: NavItem) =>
    item.children?.some((c) => isActive(c.href)) ?? false;

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
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={clsx(
                    "inline-flex items-center gap-1 text-sm transition-colors hover:text-brand-primary",
                    groupActive(item) ? "text-brand-primary" : "text-brand-slate",
                  )}
                >
                  {item.label}
                  <span aria-hidden className="text-[0.65em] leading-none">
                    &#9662;
                  </span>
                </button>
                {/* Dropdown — opens on hover and on keyboard focus. The pt-3
                    on the wrapper is a hover bridge to the panel below. */}
                <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-[17rem] border border-brand-ink/10 bg-brand-paper p-2 shadow-xl shadow-brand-ink/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={clsx(
                          "block rounded px-3 py-2 text-sm transition-colors hover:bg-brand-mist/60 hover:text-brand-primary",
                          isActive(child.href)
                            ? "text-brand-primary"
                            : "text-brand-ink",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={clsx(
                  "text-sm transition-colors hover:text-brand-primary",
                  isActive(item.href!) ? "text-brand-primary" : "text-brand-slate",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={contactHref}
            className="rounded-full border border-brand-ink px-4 py-1.5 text-sm text-brand-ink transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-brand-paper"
          >
            Contact us
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
            {primaryNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="border-b border-brand-ink/5 py-3"
                >
                  <p className="eyebrow text-brand-slate">{item.label}</p>
                  <div className="mt-1 flex flex-col">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          "py-2 text-base",
                          isActive(child.href)
                            ? "text-brand-primary"
                            : "text-brand-ink",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "border-b border-brand-ink/5 py-3 text-base",
                    isActive(item.href!)
                      ? "text-brand-primary"
                      : "text-brand-ink",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className="py-4 font-display text-lg text-brand-ink"
            >
              Contact us →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

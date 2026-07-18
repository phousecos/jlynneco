import type { Config } from "tailwindcss";

/**
 * SHARED BRAND TAILWIND PRESET — identical in every property's repo.
 * -----------------------------------------------------------------
 * Colors and fonts resolve from CSS variables (see theme.css + next/font),
 * so the SAME utility classes render each brand's own palette and type.
 * This preset defines the *slots*, never literal colors — that's what
 * lets one preset serve J. Lynne, CIO Advisra, AgentPMO, Written Out, etc.
 *
 * Per-repo setup — tailwind.config.ts:
 *   import brandPreset from "./brand-preset";
 *   export default { presets: [brandPreset], content: ["./app/**\/*.{ts,tsx}"] };
 */

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const brandPreset = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   withAlpha("--brand-primary-rgb"),
          secondary: withAlpha("--brand-secondary-rgb"),
          tertiary:  withAlpha("--brand-tertiary-rgb"),
          ink:       withAlpha("--brand-ink-rgb"),
          slate:     withAlpha("--brand-slate-rgb"),
          mist:      withAlpha("--brand-mist-rgb"),
          paper:     withAlpha("--brand-paper-rgb"),
        },
      },
      fontFamily: {
        // Set via next/font -> --font-display / --font-body
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body:    ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans:    ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // [size, line-height] — 1.25 major-third scale
        xs:    ["0.75rem",  "1.5"],
        sm:    ["0.875rem", "1.55"],
        base:  ["1rem",     "1.6"],
        lg:    ["1.25rem",  "1.5"],
        xl:    ["1.563rem", "1.35"],
        "2xl": ["1.953rem", "1.2"],
        "3xl": ["2.441rem", "1.15"],
        "4xl": ["3.052rem", "1.1"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        pill: "999px",
      },
      boxShadow: {
        "brand-sm": "0 1px 3px rgb(var(--brand-ink-rgb) / 0.10)",
        "brand-md": "0 8px 24px rgb(var(--brand-ink-rgb) / 0.10)",
      },
    },
  },
} satisfies Omit<Config, "content">;

export default brandPreset;

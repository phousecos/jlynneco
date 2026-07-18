import type { Config } from "tailwindcss";
import brandPreset from "./brand-preset";

/**
 * Shared brand tokens land here via the preset (colors, type scale, radii,
 * shadows resolve from CSS variables — see src/app/globals.css + fonts.ts).
 *
 * Tailwind v4 note: v4 is CSS-first and does not auto-read this file. It is
 * loaded through the `@config "../../tailwind.config.ts"` directive in
 * src/app/globals.css so the v3-style preset keeps working unchanged.
 */
const config: Config = {
  presets: [brandPreset],
  content: ["./src/**/*.{ts,tsx,mdx}"],
};

export default config;

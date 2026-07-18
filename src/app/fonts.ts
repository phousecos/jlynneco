/**
 * next/font wiring — App Router (HOUSE brand: J. Lynne & Co.).
 * -----------------------------------------------------------------
 * Populates the CSS vars the preset + globals.css read
 * (--font-display / --font-body). next/font SELF-HOSTS at build time,
 * so there is no runtime Google Fonts request.
 *
 *   J. Lynne & Co.  ->  Poppins (display) + Inter (body)
 */
import { Poppins, Inter } from "next/font/google";

export const display = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

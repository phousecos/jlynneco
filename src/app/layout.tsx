import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

// Display — warm, authoritative old-style serif (variable, optical-size axis).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// Body — humanist grotesk, clean and readable at length.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

// Data/utility — monospace; data set in mono reads like an exhibit.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jlynneandco.com"),
  title: {
    default: "J. Lynne & Co. — Apex advisory, audits, and expert witness",
    template: "%s — J. Lynne & Co.",
  },
  description:
    "An advisory firm for enterprise transformation and ERP programs — judgment before, during, and after. Bespoke advisory and audits, expert-witness work, and the CIO Advisra program.",
  openGraph: {
    title: "J. Lynne & Co.",
    description:
      "The patience to see it. The drive to move it. Apex advisory, audits, and expert witness for enterprise transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bone text-counsel-ink">
        <a
          href="#main"
          className="eyebrow sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-counsel-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

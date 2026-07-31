import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { display, body } from "./fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

// Display + body come from the shared brand system (./fonts):
//   Poppins -> --font-display, Inter -> --font-body.

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
    default: "J. Lynne & Co. · Executive Governance Advisory",
    template: "%s · J. Lynne & Co.",
  },
  description:
    "Independent executive governance advisory. We help executive teams, boards, and transformation sponsors govern complex transformation with disciplined governance, objective oversight, and better executive decisions.",
  openGraph: {
    title: "J. Lynne & Co.",
    description:
      "Helping leaders govern transformation with confidence. Independent executive governance advisory for executive teams, boards, and transformation sponsors.",
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
      className={`${display.variable} ${body.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-paper text-brand-ink">
        <a
          href="#main"
          className="eyebrow sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand-ink focus:px-4 focus:py-2 focus:text-brand-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

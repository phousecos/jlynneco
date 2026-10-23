import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTALink } from "@/components/ui/CTALink";

// Where a retired download with no direct replacement lands (worker/index.js).
// Printed and emailed links stay valid; they just arrive here.
export const metadata: Metadata = {
  title: "This resource has been updated",
  robots: { index: false },
};

export default function DownloadUpdatedPage() {
  return (
    <PageHero
      eyebrow="Downloads"
      title="This resource has been updated."
      lede="The version you followed a link to has been retired. The current briefs, checklists, and guides are in Resources."
    >
      <div className="flex flex-wrap gap-4">
        <CTALink href="/resources#downloads" variant="onColor">
          See current downloads
        </CTALink>
        <CTALink href="/contact" variant="onDark">
          Ask for a specific resource
        </CTALink>
      </div>
    </PageHero>
  );
}

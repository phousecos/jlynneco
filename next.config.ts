import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Governance service pages renamed to match the governance-lifecycle
      // positioning (see src/content/nav.ts). Permanent: old paths aren't
      // linked anywhere internally, only possibly bookmarked/indexed.
      {
        source: "/governance-assessments",
        destination: "/technology-governance-readiness",
        permanent: true,
      },
      {
        source: "/project-recovery",
        destination: "/technology-transformation-recovery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

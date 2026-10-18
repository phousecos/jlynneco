import type { NextConfig } from "next";

// Static export served by Cloudflare Workers static assets (see wrangler.jsonc).
// Redirects live in public/_redirects, since a static export can't run Next's
// redirects(); images ship as-is because there's no optimization server.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

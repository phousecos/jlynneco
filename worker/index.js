// Cloudflare Worker for the static site. Pages are served straight from the
// static assets in ./out (see wrangler.jsonc); this script only exists for the
// daily cron, which POSTs to a Workers Builds deploy hook to rebuild the site
// so the Resources page picks up new Transformidable CMS items.
//
// Setup: create a deploy hook (Worker → Settings → Builds → Deploy Hooks) and
// store its URL as a secret named DEPLOY_HOOK_URL. Without it the cron no-ops.

const worker = {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },

  async scheduled(controller, env, ctx) {
    if (!env.DEPLOY_HOOK_URL) {
      console.warn("DEPLOY_HOOK_URL is not set; skipping scheduled rebuild.");
      return;
    }
    ctx.waitUntil(
      fetch(env.DEPLOY_HOOK_URL, { method: "POST" }).then(async (res) => {
        if (!res.ok) {
          console.error(`Deploy hook failed: ${res.status} ${await res.text()}`);
        }
      }),
    );
  },
};

export default worker;

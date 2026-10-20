import Link from "next/link";
import type { ComponentProps } from "react";
import { isExternal } from "@/content/nav";

// A nav link that stays a client-side <Link> for pages on this site and
// becomes a new-tab <a> for links to other sites.
export function NavLink({ href, ...props }: ComponentProps<typeof Link> & { href: string }) {
  if (isExternal(href)) {
    return <a href={href} target="_blank" rel="noreferrer" {...(props as ComponentProps<"a">)} />;
  }
  return <Link href={href} {...props} />;
}

import Image from "next/image";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { HeroAmpersand } from "./HeroAmpersand";
import { clsx } from "@/lib/clsx";

// Interior-page header on the dark authority ground. Cooler, formal register.
// Carries the oversized ampersand device by default; pass `image` to place a
// darkened photo behind the copy instead.
export function PageHero({
  eyebrow,
  title,
  lede,
  ground = "ink",
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  ground?: "ink" | "deep";
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <header
      className={clsx(
        "relative isolate overflow-hidden text-brand-paper",
        ground === "deep" ? "bg-brand-ink" : "bg-brand-ink",
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink/90 via-brand-ink/70 to-brand-ink/45"
          />
        </>
      ) : (
        <HeroAmpersand />
      )}
      <Container className="relative py-20 sm:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display font-display-hero mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-paper/75">
            {lede}
          </p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </Container>
    </header>
  );
}

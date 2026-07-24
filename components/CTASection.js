import Link from "next/link";
import Image from "next/image";
import { unsplashImages } from "@/lib/unsplashImages";
import GearWatermark from "./GearWatermark";

export default function CTASection({
  title = "Ready to discuss your fabrication project?",
  description = "Tell us about your requirement — we will respond with a clear scope and quotation.",
  primaryHref = "/contact",
  primaryLabel = "Contact Us",
  secondaryHref = "https://wa.me/919962462163",
  secondaryLabel = "WhatsApp",
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={unsplashImages.cta.src}
          alt={unsplashImages.cta.alt}
          fill
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 metallic-bg opacity-95" />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>
      <GearWatermark className="left-[-10%] top-1/2 h-[360px] w-[360px] -translate-y-1/2 opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="spark-pulse text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Get Started
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-steel-bright sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-steel-light/90 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="btn-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryLabel}
            </Link>
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-steel-light/40 px-6 py-3 text-sm font-semibold text-steel-bright transition duration-300 hover:border-teal hover:bg-white/10 hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

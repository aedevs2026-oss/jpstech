"use client";

import Link from "next/link";
import Image from "next/image";
import { clientLogo } from "@/lib/clientAssets";

export default function Logo({ className = "", large = false }) {
  const size = large ? "h-16 w-16 sm:h-20 sm:w-20" : "h-12 w-12 sm:h-14 sm:w-14";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${className}`}
      aria-label="JAYAM TECH ENGINEERING — Home"
    >
      <span
        className={`relative ${size} shrink-0 overflow-hidden rounded-full shadow-md ring-1 ring-steel/50 transition duration-500 group-hover:ring-teal/60 group-hover:shadow-lg group-hover:shadow-steel/30`}
      >
        <span className="absolute inset-0 metallic-band opacity-80" aria-hidden="true" />
        <span className="absolute inset-[2px] overflow-hidden rounded-full bg-charcoal">
          <Image
            src={clientLogo.src}
            alt={clientLogo.alt}
            fill
            sizes="80px"
            className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-6"
            priority
          />
        </span>
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-steel-bright/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-display text-sm font-bold text-navy transition group-hover:text-gunmetal sm:text-base">
          JAYAM TECH
        </span>
        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-steel-dark sm:text-xs">
          Engineering
        </span>
      </span>
    </Link>
  );
}

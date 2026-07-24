"use client";

import Image from "next/image";
import { clientLogo } from "@/lib/clientAssets";

/** Decorative spinning gear watermark — echoes logo.jpg gear badge */
export default function GearWatermark({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative h-full w-full gear-spin opacity-[0.12]">
        <Image
          src={clientLogo.src}
          alt=""
          fill
          sizes="480px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

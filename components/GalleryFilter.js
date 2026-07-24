"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const TABS = ["All", "Fabrication", "Swimming Pools", "Dal Mill", "Gates"];

export default function GalleryFilter({ items }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Gallery categories"
      >
        {TABS.map((tab) => {
          const selected = active === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab)}
              className={`rounded-sm px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                selected
                  ? "bg-navy text-teal"
                  : "border border-steel/30 bg-white text-navy hover:border-teal"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <li
            key={`${item.src}-${i}`}
            className="group relative aspect-[4/3] overflow-hidden border border-steel/20 bg-navy"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                {item.category}
              </p>
              <p className="mt-1 line-clamp-2 text-sm text-white">{item.alt}</p>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-ink-muted">No images in this category yet.</p>
      )}
    </div>
  );
}

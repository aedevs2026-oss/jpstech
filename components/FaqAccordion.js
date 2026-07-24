"use client";

import { useId, useState } from "react";

export default function FaqAccordion({ items = [] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className="divide-y divide-steel/20 border border-steel/25 bg-white shadow-sm">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id} className="transition-colors duration-300 hover:bg-surface/60">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal"
              >
                <span className="font-display text-base font-bold text-navy sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-steel/30 text-teal transition duration-300 ${
                    isOpen
                      ? "rotate-180 bg-navy text-teal shadow-md shadow-teal/10"
                      : "bg-surface"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

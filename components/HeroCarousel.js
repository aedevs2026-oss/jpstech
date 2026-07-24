"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GearWatermark from "./GearWatermark";

export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const count = slides.length;

  const goTo = useCallback(
    (i) => {
      setIndex(((i % count) + count) % count);
      setAnimKey((k) => k + 1);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
      setAnimKey((k) => k + 1);
    }, 6500);
    return () => clearInterval(id);
  }, [paused, count]);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setPaused(true);
  }

  function onTouchMove(e) {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }

  function onTouchEnd() {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) next();
      else prev();
    }
    touchStartX.current = null;
    setPaused(false);
  }

  const slide = slides[index];

  return (
    <section
      className="relative isolate min-h-[82vh] overflow-hidden bg-charcoal text-white sm:min-h-[90vh]"
      aria-roledescription="carousel"
      aria-label="Featured capabilities"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <div className={`absolute inset-0 ${i === index ? "ken-burns" : ""}`}>
              <Image
                src={s.image.src}
                alt={s.image.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-navy/45" />
            <div className="absolute inset-0 metallic-bg opacity-40 mix-blend-overlay" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
          </div>
        ))}
      </div>

      <GearWatermark className="right-[-8%] top-1/2 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/2 sm:right-[2%]" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-4 py-20 sm:min-h-[90vh] sm:px-6 lg:px-8">
        <div key={animKey} className="max-w-2xl hero-copy-enter">
          <p className="spark-pulse text-xs font-semibold uppercase tracking-[0.28em] text-teal">
            {slide.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-steel-bright sm:text-5xl lg:text-6xl">
            <span className="steel-shimmer-text">{slide.title}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-light/90 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.ctaHref}
              className="btn-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {slide.ctaLabel}
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-steel-light/40 bg-white/5 px-6 py-3 text-sm font-semibold text-steel-bright backdrop-blur-sm transition duration-300 hover:border-teal hover:bg-white/10 hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              Request Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4 sm:mt-16">
          <button
            type="button"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel/40 bg-charcoal/50 text-steel-light transition duration-300 hover:border-teal hover:text-teal hover:shadow-md hover:shadow-teal/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-steel/40 bg-charcoal/50 text-steel-light transition duration-300 hover:border-teal hover:text-teal hover:shadow-md hover:shadow-teal/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="ml-2 flex gap-2" role="tablist" aria-label="Slide indicators">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}: ${s.title}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                  i === index
                    ? "w-10 bg-teal shadow-[0_0_12px_rgb(15_181_186_/_0.55)]"
                    : "w-2.5 bg-steel/50 hover:bg-steel-light"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="ml-auto text-xs font-medium uppercase tracking-wider text-steel/80 transition hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-pressed={paused}
          >
            {paused ? "Play" : "Pause"}
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex" aria-hidden="true">
          <span className="text-[10px] uppercase tracking-[0.3em] text-steel/60">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-teal to-transparent" />
        </div>
      </div>
    </section>
  );
}

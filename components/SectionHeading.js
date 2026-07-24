export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-teal spark-pulse" : "text-teal-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-steel-bright" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            light ? "text-steel-light/85" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-1 h-0.5 w-16 ${
          align === "center" ? "mx-auto" : ""
        } steel-divider animate-[divider-grow_0.9s_cubic-bezier(0.22,1,0.36,1)_both]`}
        aria-hidden="true"
      />
    </div>
  );
}

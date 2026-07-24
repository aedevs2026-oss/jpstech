import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-navy">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        The page you requested does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-teal px-5 py-2.5 text-sm font-semibold text-navy hover:bg-teal-bright"
      >
        Back to home
      </Link>
    </section>
  );
}

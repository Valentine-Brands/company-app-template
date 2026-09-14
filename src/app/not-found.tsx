import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <p className="mb-4 text-sm font-semibold text-accent">404</p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">
        This page may have moved, or the address may be incorrect.
      </p>
      <Link href="/" className="button-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}

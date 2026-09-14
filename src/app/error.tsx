"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="mt-4 text-muted">Please try loading this page again.</p>
      <Button onClick={reset} className="mt-8">
        Try again
      </Button>
    </section>
  );
}

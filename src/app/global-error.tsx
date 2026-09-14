"use client";

import { Button } from "@/components/ui/button";
import "./globals.css";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="px-6 py-24 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Something went wrong
          </h1>
          <p className="mt-4 text-muted">Please try loading this page again.</p>
          <Button onClick={reset} className="mt-8">
            Try again
          </Button>
        </main>
      </body>
    </html>
  );
}

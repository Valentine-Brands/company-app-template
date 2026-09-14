import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { env } from "@/lib/env";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: env.APP_NAME, template: `%s | ${env.APP_NAME}` },
  description: "A starting point for the next useful tool for your team.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only fixed top-4 left-4 z-50 rounded bg-ink px-5 py-3 text-white focus:not-sr-only"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-6 sm:px-10">
          <header className="flex items-center justify-between gap-4 border-b border-line py-7">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3 font-semibold"
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-ink text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="M4 6h5l3 12L20 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="break-words">{env.APP_NAME}</span>
            </Link>
            <span className="shrink-0 text-xs font-medium tracking-widest text-muted uppercase">
              Starter
            </span>
          </header>
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 text-xs text-muted">
            <p>Company app starter</p>
            <p>Make something useful for your team.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

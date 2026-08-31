# Repository instructions

## Purpose

This repository is the starting point for small web applications used by non-technical teams.

## Sources of truth

- `AGENTS.md` contains the shared repository instructions.
- `CLAUDE.md` imports `AGENTS.md` and contains only necessary Claude-specific additions.
- `README.md` explains what the application does, how to run it, and which services it uses.

## Default stack

- Next.js App Router with TypeScript
- npm
- Tailwind CSS with shared brand tokens
- Supabase Postgres when persistent data is required
- Supabase Auth and Storage when required by the application
- Zod for environment variables and untrusted input
- Vercel for hosting
- Vercel Cron with TypeScript Route Handlers for work that must run automatically at a specific time
- Vitest for unit and integration tests
- Playwright only for important browser workflows

Use another stack only when the application requirements justify it. Record the reason in `README.md`.

## Development

- Understand the business workflow and intended users before selecting features.
- Prefer the smallest implementation that satisfies the requested behavior.
- Keep changes focused and preserve unrelated work.
- Keep secrets server-side. Commit variable names in `.env.example`, never real values.
- Track database changes in migrations.
- Enable Row Level Security for Supabase tables exposed through the Data API.
- Keep work that runs automatically at a specific time in TypeScript unless a concrete requirement needs another runtime.
- Update `README.md` when setup, architecture, integrations, or operational behavior changes.
- Run the documented checks before reporting completion. State clearly what was not tested.

## External systems

Do not create repositories, push code, deploy, purchase services, or change external systems without explicit user authorization.

Features that send messages, move money, or modify data in another system require explicit production enablement and verification in that system.

## Public content

Treat every committed file as public. Do not include personal account names, local filesystem paths, internal hostnames, customer data, or private operational details.

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

## Recommended agent skills

When the application uses Supabase, use the official `supabase` and `supabase-postgres-best-practices` skills from `https://github.com/supabase/agent-skills` when they are available.

Claude Code reads `.claude/settings.json` and offers these skills after the user trusts the repository. In Codex, if the skills are unavailable, point the user to the official repository and ask before installing them.

Skills provide instructions only. Do not install an agent extension or connect Supabase MCP without explicit user approval.

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

## Git workflow

Use GitHub Flow with `main` as the only permanent branch. Keep `main` ready to deploy and do not commit application changes directly to it.

For every feature or fix:

1. Switch to `main` and pull the latest changes from GitHub.
2. Create a short-lived branch from the updated `main`. Use a clear name such as `feature/customer-report` or `fix/login-error`.
3. Make and verify the changes in that branch.
4. Push the branch and open a Pull Request into `main`.
5. Merge the Pull Request only after the required review and checks pass.
6. Switch back to `main`, pull the merged changes, and start the next branch from that updated state.

Delete merged branches when they are no longer needed. Do not reuse an old branch for unrelated work.

## External systems

Do not create repositories, push code, deploy, purchase services, or change external systems without explicit user authorization.

Features that send messages, move money, or modify data in another system require explicit production enablement and verification in that system.

## Public content

Treat every committed file as public. Do not include personal account names, local filesystem paths, internal hostnames, customer data, or private operational details.

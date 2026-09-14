# Company App Template

A public starting point for small web applications created with the [`company-skills`](https://github.com/Valentine-Brands/company-skills) plugin.

The starter includes a working Next.js App Router application with TypeScript, Tailwind CSS, a welcome page, error handling, and automated checks. It runs without API keys, a database, or a hosting account. Add Supabase, authentication, integrations, and scheduled tasks when an application needs them.

## Run the application

Use Node.js 24 and npm. If you use nvm, run `nvm install` and `nvm use` in this directory.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Stop the server with Ctrl+C.

The optional `APP_NAME` setting controls the header and page title. To change it, copy `.env.example` to `.env.local`, edit the name, and restart the development server. Rebuild production after changing it. Environment variables are validated in `src/lib/env.ts`; the starter does not require a populated environment file.

To run a production build locally:

```bash
npm run build
npm start
```

## Preferred use

Install `company-skills` in Claude Code or Codex, then ask:

> Create a company application for [describe the business need].

The `create-company-app` skill copies this starter into a fresh local Git repository and guides the remaining setup using the default stack in `AGENTS.md`. Ask the agent to update the application name in `package.json` and its lockfile, replace the welcome feature, and document the resulting application here.

## Where to make changes

| File or directory              | Purpose                                                               |
| ------------------------------ | --------------------------------------------------------------------- |
| `AGENTS.md`                    | Shared architecture and development instructions for Codex and Claude |
| `CLAUDE.md`                    | Imports `AGENTS.md` for Claude                                        |
| `src/app/`                     | Routes, layout, metadata, and error pages                             |
| `src/features/welcome/`        | The starter homepage; replace it with the first business workflow     |
| `src/components/ui/`           | Shared UI components with colocated unit tests                        |
| `src/lib/`                     | Infrastructure and server-only environment validation                 |
| `src/app/globals.css`          | Tailwind and replaceable starter color/font tokens                    |
| `tests/e2e/`                   | Browser checks against the production build                           |
| `.github/workflows/checks.yml` | Checks run by GitHub on pull requests and pushes to `main`            |

The starter uses system fonts so builds do not need to download fonts. Its colors are starter defaults, not an approved company brand palette.

Scheduled tasks belong in `src/jobs/<task-name>.ts`, with a thin handler at `src/app/api/cron/<task-name>/route.ts` and UTC schedules in a root `vercel.json`. Create those files with the first actual task. No schedule is active in this starter. Database migrations belong in `supabase/migrations/` when a database is added.

## Check your changes

Install the browser used by the checks once:

```bash
npx playwright install chromium
```

Then run the complete local quality check:

```bash
npm run verify
```

This checks formatting, code rules, TypeScript, unit tests and coverage, the production build, desktop/mobile browser behavior, and automated accessibility. Playwright starts and stops its own production server at `127.0.0.1:3100`; keep that port free. It never points tests at a deployed application.

| Command                 | What it checks                                                                    |
| ----------------------- | --------------------------------------------------------------------------------- |
| `npm run lint`          | Next.js, React, accessibility, and TypeScript lint rules; warnings fail the check |
| `npm run typecheck`     | Generated Next.js route types and strict TypeScript, without emitting JavaScript  |
| `npm run format:check`  | Consistent formatting with Prettier                                               |
| `npm test`              | Unit and component tests with Vitest                                              |
| `npm run test:coverage` | Unit tests and coverage reports in `coverage/`                                    |
| `npm run build`         | A real production build, including Next.js validation                             |
| `npm run check`         | All of the above, without browser tests                                           |
| `npm run test:e2e`      | Playwright desktop/mobile checks, including axe accessibility checks; build first |
| `npm run verify`        | `check` followed by browser tests                                                 |
| `npm run audit`         | Dependency advisories from npm; fails on high or critical vulnerabilities         |

Use `npm run format` to apply formatting, `npm run lint:fix` for automatic lint fixes, and `npm run test:watch` during development. `npm run test:e2e:ui` opens Playwright's test UI against the latest production build.

The initial unit tests cover keyboard activation, disabled buttons, and form submission behavior. The reusable Button has a 100% coverage requirement; this is not a claim of full application coverage. Browser tests cover the homepage, its primary navigation, a real 404 response and recovery, mobile layout, and automated WCAG A/AA checks. Extend tests and coverage requirements as business features are added. Automated accessibility checks do not replace manual accessibility review.

## GitHub checks

Pull requests and pushes to `main` run the quality checks and a separate dependency audit. GitHub installs Chromium automatically and retains coverage, browser reports, and failure traces for seven days. These checks need no application secrets or database access.

The workflow reports failures; requiring it before merge is a separate repository setting. In a repository ruleset or branch protection rule for `main`, require the checks named `Lint, types, tests, build, and browser checks` and `Dependency audit`.

Dependencies are pinned in `package.json` and `package-lock.json`. Use `npm ci` for reproducible installs. After dependency updates, rerun `npm run verify` and `npm run audit` before merging.

## Recommended agent skills

Claude Code will offer the official Supabase skills after you trust the cloned repository. Accept them when the application uses Supabase.

Codex users can install the same skills with:

```bash
npx skills add supabase/agent-skills
```

Installing these skills adds Supabase guidance to the agent. It does not connect the agent to a database or grant database access.

## Manual use

Start from a fresh copy of this repository, initialize a new Git repository, and replace this README with documentation for the resulting application. The `create-company-app` skill handles the copy and new Git history for you.

For Vercel, import the resulting GitHub repository as a Next.js project using Node.js 24, `npm ci`, and `npm run build`. Configure any application-specific environment variables before deploying. Hosting is not required for local development or checks.

# Company App Template

A public starting point for small web applications created with the [`company-skills`](https://github.com/Valentine-Brands/company-skills) plugin.

The default stack is Next.js with TypeScript, Tailwind CSS, Supabase when persistent data is required, and Vercel. Tasks that run automatically at a specific time stay in TypeScript through Vercel Cron.

The repository currently defines the project rules only. Framework boilerplate will be added separately after the starter structure is agreed.

## Preferred use

Install `company-skills` in Claude Code or Codex, then ask:

> Create a company application for [describe the business need].

The `create-company-app` skill copies this starter into a fresh local Git repository and guides the remaining setup using the default stack in `AGENTS.md`.

## Manual use

Clone the repository, remove its existing Git history, initialize a new repository, and replace this README with documentation for the resulting application.

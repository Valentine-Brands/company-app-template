# Optional database

This folder is a dormant Supabase Postgres starting point. You do not need a database, Docker, a local Supabase instance, or a preview branch to run this app. Nothing here runs on application startup, build, deployment, or CI.

## Included files

- `migrations/` contains one example migration for `public.example_notes` with a UUID, title, creation time, and RLS enabled.
- `src/lib/db/client.ts` creates a server-only, typed Supabase client when called. Importing the module does not validate environment variables or make a connection.
- `src/lib/db/database.types.ts` describes the example schema. It is not generated from a live database yet.
- `src/features/example-notes/data.ts` shows one bounded read query. No page or endpoint calls it.

The example table has no application grants or access policies. It deliberately denies access to `anon` and `authenticated`. Setting the URL and key does **not** enable reads or writes. Before using the example, decide who may access each row and add the necessary grants and RLS policies in a migration. Do not solve permission errors with a service-role key or by disabling RLS. See the [Supabase access-control guide](https://supabase.com/docs/guides/database/postgres/row-level-security).

## When a feature needs a database

Ask the agent:

> Connect the optional database module to our Supabase project. Inspect the existing schema first, explain the changes and access rules, and ask before applying migrations. We may have only one shared database, so do not reset it or use it for automated test fixtures.

1. Select the intended project and inspect its tables and migration history. Do not apply the example to an existing project blindly. Keep, adapt, or remove the example before its first application; never edit an already-applied migration.
2. Put `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in `.env.local` and the hosting environment when needed. Never commit actual credentials. The client has no user session; when authentication is added, replace it with a request-scoped SSR client that uses the user's session.
3. Review the SQL and access rules. For a single shared database, treat every change as production-sensitive. Confirm backup/recovery options before risky changes and apply additive changes first. Get explicit approval before applying any migration.
4. Use the Supabase CLI or an approved Supabase MCP connection to apply the reviewed migration and preserve migration history. CLI installation is optional for normal app development; `supabase migration new <name>` creates new migration files. Read the installed CLI's `--help` before remote commands. Do not add automatic `db push` or `db reset` hooks.
5. Generate TypeScript types from the chosen project's actual schema, replacing the example types. Wire only the required feature to the client, then verify the allowed and denied access paths with safe data.

There is no automatic integration-test dependency on Supabase. Local database testing may be added if it is useful and available, but it is not required for this starter.

## Server example

`src/app/api/health/route.ts` serves `GET /api/health` and returns `{"status":"ok"}`. It runs on the Next.js Node.js server and works without Supabase. This is a liveness check, not proof of database connectivity. Use the same Route Handler pattern for integrations; add request validation and authorization when handling real inputs or protected data. No separate Express server is required.

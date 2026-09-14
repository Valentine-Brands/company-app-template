import "server-only";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "./database.types";

const databaseEnv = z.object({
  SUPABASE_URL: z.url(),
  SUPABASE_PUBLISHABLE_KEY: z.string().startsWith("sb_publishable_"),
});

// Nothing is validated or connected until a feature explicitly calls this.
export function createDatabaseClient() {
  const result = databaseEnv.safeParse({
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
  });

  if (!result.success) {
    throw new Error(
      "Database is not configured. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY. See supabase/README.md.",
    );
  }

  // No user session or privileged key. RLS and grants still apply.
  return createClient<Database>(
    result.data.SUPABASE_URL,
    result.data.SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    },
  );
}

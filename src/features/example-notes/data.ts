import "server-only";
import { createDatabaseClient } from "@/lib/db/client";

// Example only: no route or page calls this. Decide access rules before use.
export async function listExampleNotes() {
  const database = createDatabaseClient();
  const { data, error } = await database
    .from("example_notes")
    .select("id, title, created_at")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    throw new Error(
      "Could not load example notes. Check the migration and access rules.",
    );
  }

  return data;
}

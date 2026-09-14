export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// A minimal server endpoint. Liveness only; it does not query the database.
export function GET() {
  return Response.json(
    { status: "ok" },
    { headers: { "Cache-Control": "no-store" } },
  );
}

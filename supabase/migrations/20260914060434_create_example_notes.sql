-- Optional example only. Review the target database and approve before applying.
-- No app route uses this table. Replace the example before its first application
-- if the application needs a different schema.
begin;

create table public.example_notes (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(btrim(title)) between 1 and 200),
  created_at timestamptz not null default now()
);

create index example_notes_created_at_idx
  on public.example_notes (created_at desc);

alter table public.example_notes enable row level security;

-- Close inherited grants too, including projects with older Supabase defaults.
-- Add explicit grants and row policies only after deciding the access model.
revoke all on table public.example_notes from public, anon, authenticated;

commit;

-- waitlist
create table if not exists public.waitlist (
  id bigserial primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);
alter table public.waitlist enable row level security;
create policy "waitlist_insert_anon" on public.waitlist
  for insert to anon using (true) with check (true);
revoke all on public.waitlist from anon, authenticated;

-- profiles
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "profiles_owner_rw" on public.profiles
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

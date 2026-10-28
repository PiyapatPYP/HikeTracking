-- ปักทาง · ตารางสำหรับซิงก์ (รันใน Supabase › SQL Editor)
create table if not exists public.trails (id text primary key, device_id text not null, data jsonb not null, updated_at timestamptz not null default now());
create table if not exists public.trips  (id text primary key, device_id text not null, data jsonb not null, updated_at timestamptz not null default now());
create table if not exists public.pins   (id text primary key, device_id text not null, data jsonb not null, updated_at timestamptz not null default now());
create index if not exists pins_device_idx  on public.pins (device_id);
create index if not exists trips_device_idx on public.trips (device_id);

alter table public.trails enable row level security;
alter table public.trips  enable row level security;
alter table public.pins   enable row level security;

-- ชั่วคราวสำหรับช่วงทดลอง: ใครมี anon key อ่าน/เขียนได้ทุกแถว
-- เปลี่ยนเป็นนโยบายตามผู้ใช้ (auth.uid()) ก่อนเปิดให้คนทั่วไปใช้
create policy "prototype anon all" on public.trails for all to anon using (true) with check (true);
create policy "prototype anon all" on public.trips  for all to anon using (true) with check (true);
create policy "prototype anon all" on public.pins   for all to anon using (true) with check (true);

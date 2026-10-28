# ปักทาง — ขึ้น GitHub Pages + Supabase

## A. ขึ้น GitHub Pages
1. สร้าง repo ใหม่บน github.com (เช่น `paktang`) เลือก Public
2. Add file › Upload files › ลากไฟล์และโฟลเดอร์ทั้งหมดในโฟลเดอร์นี้ขึ้นไป (รวม `ds/`, `supabase/`, `.github/`) › Commit
   - โฟลเดอร์ `.github` เป็นโฟลเดอร์ซ่อน ถ้าลากไม่ขึ้น ให้สร้างไฟล์ใหม่ชื่อ `.github/workflows/supabase-keepalive.yml` แล้ววางเนื้อหาเอง
3. Settings › Pages › Source: Deploy from a branch › Branch: `main` / `(root)` › Save
4. รอ 1–2 นาที จะได้ลิงก์ `https://<ชื่อผู้ใช้>.github.io/paktang/`
5. บน iPhone เปิดลิงก์ด้วย Safari › แชร์ › เพิ่มไปยังหน้าจอโฮม

## B. ตั้งค่า Supabase (ทำเมื่อพร้อม)
1. สมัครที่ supabase.com › New project › ตั้งชื่อ `paktang` › Region: Southeast Asia (Singapore) › ตั้งรหัสผ่านฐานข้อมูลแล้วเก็บไว้
2. รอโปรเจกต์สร้างเสร็จ (~2 นาที)
3. เมนู SQL Editor › New query › วางเนื้อหาไฟล์ `supabase/schema.sql` › Run
4. เมนู Project Settings › API › คัดลอก 2 ค่า:
   - Project URL (เช่น `https://abcd1234.supabase.co`)
   - anon public key (คีย์ยาวขึ้นต้นด้วย `eyJ...`) — ห้ามใช้ service_role key
5. ส่ง 2 ค่านี้ให้ Claude เพื่อใส่ในแอป แล้วอัปโหลด `Paktang Web App.dc.html` ใหม่ขึ้น GitHub
6. กันฐานข้อมูลถูกพัก: GitHub repo › Settings › Secrets and variables › Actions › New repository secret
   - `SUPABASE_URL` = Project URL
   - `SUPABASE_ANON_KEY` = anon key
7. แท็บ Actions › Supabase keep-alive › Run workflow เพื่อทดสอบ (ต้องขึ้นเครื่องหมายถูกสีเขียว)

## หมายเหตุ
- ตารางตอนนี้เปิดให้ทุกคนที่มี anon key อ่าน/เขียนได้ เหมาะกับช่วงทดลองเท่านั้น
- ถ้า repo ไม่มีการเปลี่ยนแปลง 60 วัน GitHub จะปิด workflow อัตโนมัติ ให้กด Enable ในแท็บ Actions

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  date TEXT,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  image TEXT,
  color TEXT DEFAULT 'bg-[#020817]'
);

-- Enable RLS
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public read" ON news;
DROP POLICY IF EXISTS "Allow auth all" ON news;

-- Create Policy for public read
CREATE POLICY "Allow public read" ON news FOR SELECT USING (true);

-- Create Policy for authenticated full access (Admin panel)
CREATE POLICY "Allow auth all" ON news FOR ALL TO authenticated USING (true);

-- Insert sample data matching the current site
INSERT INTO news (date, title, description, category, image, color)
VALUES 
('12 Mayıs 2026', 'Türkiye''nin En Büyük BESS Projesi', 'Saray Holding güvencesiyle hayata geçirilecek yeni enerji depolama tesisi, ulusal şebeke stabilitesine büyük katkı sağlayacak.', 'Özel Haber', '/images/utility-scenario.png', 'bg-[#1e3a8a]'),
('28 Nisan 2026', 'Endüstriyel Enerji Dönüşümü', 'Sektör liderlerinin katılımıyla düzenlenen etkinlikte, yeşil enerjiye geçişin maliyet avantajları konuşuldu.', 'Etkinlik', '/images/business-scenario.png', 'bg-[#2563eb]'),
('15 Nisan 2026', 'PowerTitan 2.0 Pazarda', 'Sungrow''un en gelişmiş sıvı soğutmalı enerji depolama sistemi artık Newstag güvencesiyle Türkiye''de.', 'Ürün Lansmanı', '/images/powertitan-layered.png', 'bg-[#020817]');

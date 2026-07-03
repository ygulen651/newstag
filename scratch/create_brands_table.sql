-- Create brands table
CREATE TABLE IF NOT EXISTS brands (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  logo TEXT,
  description TEXT
);

-- Enable RLS
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public read" ON brands;
DROP POLICY IF EXISTS "Allow auth all" ON brands;

-- Create Policy for public read
CREATE POLICY "Allow public read" ON brands FOR SELECT USING (true);

-- Create Policy for authenticated full access
CREATE POLICY "Allow auth all" ON brands FOR ALL TO authenticated USING (true);

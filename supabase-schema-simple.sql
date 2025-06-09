-- Create templates table
CREATE TABLE IF NOT EXISTS templates (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  demo_url TEXT,
  purchase_url TEXT,
  last_updated TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  gallery TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_templates_updated_at 
    BEFORE UPDATE ON templates 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Templates are viewable by everyone" ON templates
    FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert/update/delete
-- (You can modify this based on your needs)
CREATE POLICY "Templates are manageable by authenticated users" ON templates
    FOR ALL USING (auth.role() = 'authenticated');

-- Create basic indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_templates_category ON templates(category);
CREATE INDEX IF NOT EXISTS idx_templates_created_at ON templates(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_templates_last_updated ON templates(last_updated DESC);
CREATE INDEX IF NOT EXISTS idx_templates_name ON templates(name);
CREATE INDEX IF NOT EXISTS idx_templates_description ON templates(description); 
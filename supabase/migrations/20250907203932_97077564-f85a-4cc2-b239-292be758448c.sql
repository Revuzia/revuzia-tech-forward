-- Enable Row Level Security on articles table
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to articles
CREATE POLICY "Enable read access for all users" ON "public"."articles"
AS PERMISSIVE FOR SELECT
TO public
USING (true);
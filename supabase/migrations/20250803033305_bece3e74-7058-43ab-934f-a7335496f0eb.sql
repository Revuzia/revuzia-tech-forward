-- Create RLS policies for the articles table
-- Enable RLS on articles table
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read published articles
CREATE POLICY "Published articles are viewable by everyone" 
ON articles 
FOR SELECT 
USING (status = 'published');

-- Allow authenticated users to insert articles
CREATE POLICY "Authenticated users can insert articles" 
ON articles 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update their own articles
CREATE POLICY "Users can update their own articles" 
ON articles 
FOR UPDATE 
USING (auth.uid()::text = author_id OR auth.role() = 'service_role');

-- Allow authenticated users to delete their own articles
CREATE POLICY "Users can delete their own articles" 
ON articles 
FOR DELETE 
USING (auth.uid()::text = author_id OR auth.role() = 'service_role');

-- Update function to use proper search path
CREATE OR REPLACE FUNCTION increment_article_views(article_slug text)
RETURNS void 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE articles 
  SET view_count = COALESCE(view_count, 0) + 1 
  WHERE slug = article_slug AND status = 'published';
END;
$$;
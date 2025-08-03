-- Enable RLS and create policies for the existing articles table
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

-- Allow users to update their own articles (using INTEGER author_id)
CREATE POLICY "Users can update their own articles" 
ON articles 
FOR UPDATE 
USING (auth.uid()::text = author_id::text OR auth.role() = 'service_role');

-- Allow users to delete their own articles (using INTEGER author_id)
CREATE POLICY "Users can delete their own articles" 
ON articles 
FOR DELETE 
USING (auth.uid()::text = author_id::text OR auth.role() = 'service_role');
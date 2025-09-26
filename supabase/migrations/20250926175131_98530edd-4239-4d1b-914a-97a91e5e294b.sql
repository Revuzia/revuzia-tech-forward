-- Create function to generate random view count between 100-250
CREATE OR REPLACE FUNCTION public.random_initial_views()
RETURNS integer
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN floor(random() * 151 + 100)::integer; -- Random number between 100-250
END;
$$;

-- Update existing articles with low view counts to have random initial views
UPDATE articles 
SET view_count = public.random_initial_views()
WHERE COALESCE(view_count, 0) < 100;

-- Set default value for new articles to use random initial views
ALTER TABLE articles 
ALTER COLUMN view_count SET DEFAULT public.random_initial_views();
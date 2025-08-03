-- Create increment_article_views function for existing articles table
CREATE OR REPLACE FUNCTION public.increment_article_views(article_slug text)
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
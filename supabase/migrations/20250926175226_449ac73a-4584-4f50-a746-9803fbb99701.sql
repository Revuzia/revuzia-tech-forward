-- Fix search_path for random_initial_views function
CREATE OR REPLACE FUNCTION public.random_initial_views()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  RETURN floor(random() * 151 + 100)::integer; -- Random number between 100-250
END;
$$;

-- Fix search_path for increment_article_views function
CREATE OR REPLACE FUNCTION public.increment_article_views(article_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  UPDATE articles
  SET view_count = COALESCE(view_count, 0) + 1
  WHERE slug = article_slug AND status = 'published';
END;
$$;
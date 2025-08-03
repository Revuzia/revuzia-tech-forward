-- Create function to increment article views with debouncing
CREATE OR REPLACE FUNCTION increment_article_views(article_slug text)
RETURNS void AS $$
BEGIN
  UPDATE articles 
  SET view_count = COALESCE(view_count, 0) + 1 
  WHERE slug = article_slug AND status = 'published';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
-- Remove default value and update existing articles with calculated read times
ALTER TABLE public.articles 
ALTER COLUMN read_time DROP DEFAULT;

-- Update existing articles with calculated read times based on content length
UPDATE public.articles 
SET read_time = CASE 
  WHEN content IS NOT NULL AND length(content) > 0 THEN 
    GREATEST(1, CEIL(
      (length(regexp_replace(content, '<[^>]*>', ' ', 'g')) / 225.0)
    ))::text || ' min read'
  ELSE '1 min read'
END
WHERE read_time = '1 min read' OR read_time IS NULL;
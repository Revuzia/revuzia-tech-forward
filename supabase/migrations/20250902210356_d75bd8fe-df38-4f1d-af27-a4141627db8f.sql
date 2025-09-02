-- Update articles with proper read time calculation matching the frontend logic
UPDATE public.articles 
SET read_time = CASE 
  WHEN content IS NOT NULL AND length(content) > 0 THEN 
    GREATEST(1, CEIL(
      (array_length(
        string_to_array(
          trim(regexp_replace(content, '<[^>]*>', ' ', 'g')), 
          ' '
        ), 
        1
      ) / 225.0)
    ))::text || ' min read'
  ELSE '1 min read'
END;
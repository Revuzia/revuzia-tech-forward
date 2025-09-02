-- Add read_time column to articles table
ALTER TABLE public.articles 
ADD COLUMN read_time text DEFAULT '1 min read';
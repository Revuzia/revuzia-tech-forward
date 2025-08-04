-- Create articles table with content splitting support
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  content2 TEXT DEFAULT '',
  contentSplit BOOLEAN DEFAULT false,
  splitType TEXT DEFAULT 'none' CHECK (splitType IN ('natural', 'fallback', 'hard', 'none')),
  totalOriginalLength INTEGER DEFAULT 0,
  featured_image_url TEXT DEFAULT '',
  author_name TEXT NOT NULL,
  category_name TEXT NOT NULL,
  subcategory_name TEXT DEFAULT '',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policies for articles (public read access, admin write access)
CREATE POLICY "Articles are viewable by everyone" 
ON public.articles 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create articles" 
ON public.articles 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update articles" 
ON public.articles 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete articles" 
ON public.articles 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to increment article views
CREATE OR REPLACE FUNCTION public.increment_article_views(article_slug TEXT)
RETURNS void AS $$
BEGIN
  UPDATE public.articles 
  SET views = views + 1 
  WHERE slug = article_slug AND status = 'published';
END;
$$ LANGUAGE plpgsql;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_articles_slug ON public.articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_status ON public.articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_category ON public.articles(category_name);
CREATE INDEX IF NOT EXISTS idx_articles_author ON public.articles(author_name);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON public.articles(created_at DESC);
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_name: string;
  author_id: string;
  featured_image_url: string;
  status: string;
  category_name: string;
  subCategory_name: string;
  view_count: number;
  created_at: string;
}

export const useArticles = (category?: string, subCategory?: string, limit?: number) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        let query = supabase
          .from('articles')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (category) {
          query = query.eq('category_name', category);
        }

        if (subCategory) {
          query = query.eq('subCategory_name', subCategory);
        }

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) {
          throw fetchError;
        }

        setArticles(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    // Set up real-time subscription
    const channel = supabase
      .channel('articles-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'articles',
          filter: 'status=eq.published'
        },
        () => {
          fetchArticles();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [category, subCategory, limit]);

  return { articles, loading, error, refetch: () => window.location.reload() };
};

export const useArticle = (slug: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('articles')
          .select('*')
          .eq('slug', slug)
          .eq('status', 'published')
          .single();

        if (fetchError) {
          throw fetchError;
        }

        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch article');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  return { article, loading, error };
};

// View tracking with debouncing
const viewedArticles = new Set<string>();
const VIEW_COOLDOWN = 5 * 60 * 1000; // 5 minutes

export const useViewTracking = (articleId: string) => {
  useEffect(() => {
    const trackView = async () => {
      if (!articleId || viewedArticles.has(articleId)) {
        return;
      }

      try {
        viewedArticles.add(articleId);
        
        const { error } = await supabase.rpc('increment_article_views', {
          article_id: articleId
        });

        if (error) {
          console.error('Error tracking view:', error);
          viewedArticles.delete(articleId); // Remove from set if failed
        } else {
          // Set timeout to remove from viewed set after cooldown
          setTimeout(() => {
            viewedArticles.delete(articleId);
          }, VIEW_COOLDOWN);
        }
      } catch (err) {
        console.error('Error tracking view:', err);
        viewedArticles.delete(articleId);
      }
    };

    trackView();
  }, [articleId]);
};
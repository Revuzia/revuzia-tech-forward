import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

// Simple article type
export interface Article {
  [key: string]: any;
}

// Global subscription tracker
let globalSubscription: any = null;

export const useArticles = (categoryName?: string, subCategoryName?: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const queryClient = useQueryClient();

  // Set up real-time subscription
  useEffect(() => {
    if (!globalSubscription) {
      console.log('🔔 Setting up real-time subscription');
      
      globalSubscription = supabase
        .channel('articles-realtime')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'articles'
        }, (payload) => {
          console.log('🔥 Real-time change:', payload);
          // Refetch data when changes occur
          fetchArticles();
        })
        .subscribe((status: any, err: any) => {
          console.log('📡 Subscription status:', status);
          if (err) console.error('❌ Subscription error:', err);
        });
    }
  }, []);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      console.log('🔍 Fetching articles:', { categoryName, subCategoryName });
      
      let query = supabase.from('articles').select('*').order('created_at', { ascending: false });
      
      if (categoryName) {
        query = query.eq('category_name', categoryName);
      }
      if (subCategoryName) {
        query = query.eq('subCategory_name', subCategoryName);
      }
      
      const result = await query;
      const { data: articles, error: fetchError } = result as any;
      
      if (fetchError) {
        console.error('❌ Query error:', fetchError);
        setError(fetchError);
        return;
      }
      
      console.log('✅ Articles found:', articles?.length || 0);
      setData(articles || []);
      setError(null);
    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch on mount and when dependencies change
  useEffect(() => {
    fetchArticles();
  }, [categoryName, subCategoryName]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchArticles
  };
};

export const useArticle = (slug: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchArticle = async () => {
    if (!slug) return;
    
    try {
      setIsLoading(true);
      console.log('🔍 Fetching article:', slug);
      
      const result = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
        
      const { data: article, error: fetchError } = result as any;
      
      if (fetchError) {
        console.error('❌ Article error:', fetchError);
        setError(fetchError);
        return;
      }

      setData(article);
      setError(null);
    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchArticle
  };
};

// Utility function to calculate read time
export const calculateReadTime = (content: string): string => {
  if (!content) return "1 min read";
  
  const textContent = content.replace(/<[^>]*>/g, ' ');
  const wordCount = textContent.trim().split(/\s+/).filter(word => word.length > 0).length;
  const readingSpeedWPM = 225;
  const minutes = Math.ceil(wordCount / readingSpeedWPM);
  const readTime = Math.max(1, minutes);
  
  return `${readTime} min read`;
};

export const incrementArticleViews = async (slug: string) => {
  const { error } = await supabase.rpc('increment_article_views', {
    article_slug: slug
  });
  if (error) {
    console.error('Error incrementing views:', error);
  }
};
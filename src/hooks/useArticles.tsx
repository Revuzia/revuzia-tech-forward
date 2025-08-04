import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_name: string;
  author_id: number;
  featured_image_url: string;
  status: string;
  category_name: string;
  subCategory_name: string;
  view_count: number;
  created_at: string;
}

export const useArticles = (categoryName?: string, subCategoryName?: string) => {
  const queryClient = useQueryClient();

  // Set up real-time subscription
  useEffect(() => {
    console.log('🔔 Setting up real-time subscription for articles');
    
    const subscription = supabase
      .channel('articles-realtime')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen for INSERT, UPDATE, DELETE
          schema: 'public',
          table: 'articles'
        },
        (payload) => {
          console.log('🔥 Real-time article change detected:', payload);
          
          // Invalidate and refetch articles queries
          queryClient.invalidateQueries({ queryKey: ['articles'] });
          queryClient.invalidateQueries({ queryKey: ['article'] });
        }
      )
      .subscribe((status) => {
        console.log('📡 Real-time subscription status:', status);
      });

    // Cleanup subscription on unmount
    return () => {
      console.log('🧹 Cleaning up real-time subscription');
      subscription.unsubscribe();
    };
  }, [queryClient]);

  return useQuery({
    queryKey: ['articles', categoryName, subCategoryName],
    staleTime: 30000,
    gcTime: 60000,
    queryFn: async () => {
      console.log('🔍 useArticles called with:', { categoryName, subCategoryName });
      
      let query = supabase
        .from('articles' as any)
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });
      
      if (categoryName) {
        query = query.eq('category_name', categoryName);
      }
      if (subCategoryName) {
        query = query.eq('subCategory_name', subCategoryName);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('❌ Supabase error:', error);
        throw error;
      }
      
      console.log('✅ Query completed, articles found:', data?.length || 0);
      return (data as unknown) as Article[];
    },
  });
};

// Keep your existing useArticle hook the same
export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    staleTime: 60000,
    gcTime: 300000,
    queryFn: async () => {
      console.log('🔍 useArticle called with slug:', slug);
      
      const { data, error } = await supabase
        .from('articles' as any)
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
        
      if (error) {
        console.error('❌ Single article error:', error);
        throw error;
      }
      return (data as unknown) as Article | null;
    },
    enabled: !!slug,
  });
};

export const incrementArticleViews = async (slug: string) => {
  const { error } = await supabase.rpc('increment_article_views', {
    article_slug: slug
  });
  if (error) {
    console.error('Error incrementing article views:', error);
  }
};
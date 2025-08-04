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

// Global subscription tracker to prevent multiple subscriptions
let globalSubscription: any = null;

export const useArticles = (categoryName?: string, subCategoryName?: string) => {
  const queryClient = useQueryClient();

  // Set up real-time subscription (only once globally)
  useEffect(() => {
    if (!globalSubscription) {
      console.log('🔔 Setting up global real-time subscription for articles');
      
      globalSubscription = supabase
        .channel('articles-realtime-global')
        .on(
          'postgres_changes',
          {
            event: '*', // Listen for INSERT, UPDATE, DELETE
            schema: 'public',
            table: 'articles'
          },
          (payload) => {
            console.log('🔥 Real-time article change detected:', payload);
            
            // Invalidate all articles queries to force refresh
            queryClient.invalidateQueries({ queryKey: ['articles'] });
            
            // Also invalidate single article queries
            queryClient.invalidateQueries({ queryKey: ['article'] });
          }
        )
        .subscribe((status, err) => {
          console.log('📡 Real-time subscription status:', status);
          if (err) {
            console.error('❌ Real-time subscription error:', err);
            // Reset global subscription on error so it can be retried
            globalSubscription = null;
          }
        });
    }

    // Cleanup function - but don't unsubscribe global subscription
    return () => {
      // Don't unsubscribe the global subscription here
      // It should persist across component mounts/unmounts
    };
  }, [queryClient]);

  return useQuery({
    queryKey: ['articles', categoryName, subCategoryName],
    staleTime: 10000, // Reduced to 10 seconds for more frequent updates
    gcTime: 30000, // Reduced cache time
    queryFn: async () => {
      console.log('🔍 useArticles called with:', { categoryName, subCategoryName });
      
      let query = supabase
        .from('articles' as any)
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });
      
      if (categoryName) {
        query = query.eq('category_name', categoryName);
        console.log('🎯 Added category filter:', categoryName);
      }
      if (subCategoryName) {
        query = query.eq('subCategory_name', subCategoryName);
        console.log('🎯 Added subcategory filter:', subCategoryName);
      }
      
      console.log('🚀 Executing Supabase query...');
      const { data, error } = await query;
      
      if (error) {
        console.error('❌ Supabase error:', error);
        throw error;
      }
      
      console.log('✅ Query completed, articles found:', data?.length || 0);
      if (data && data.length > 0) {
        console.log('📊 Sample article:', {
          title: data[0].title,
          category: data[0].category_name,
          status: data[0].status,
          created_at: data[0].created_at
        });
      }
      
      return (data as unknown) as Article[];
    },
  });
};

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

// Utility function to calculate read time from content
export const calculateReadTime = (content: string): string => {
  if (!content) return "1 min read";
  
  // Strip HTML tags from content
  const textContent = content.replace(/<[^>]*>/g, ' ');
  
  // Count words (split by whitespace and filter empty strings)
  const wordCount = textContent
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .length;
  
  // Average reading speed is 200-250 words per minute
  // We'll use 225 words per minute as a middle ground
  const readingSpeedWPM = 225;
  const minutes = Math.ceil(wordCount / readingSpeedWPM);
  
  // Ensure minimum 1 minute
  const readTime = Math.max(1, minutes);
  
  console.log(`📖 Read time calculated: ${wordCount} words = ${readTime} min`);
  
  return `${readTime} min read`;
};

export const incrementArticleViews = async (slug: string) => {
  const { error } = await supabase.rpc('increment_article_views', {
    article_slug: slug
  });
  if (error) {
    console.error('Error incrementing article views:', error);
  }
};
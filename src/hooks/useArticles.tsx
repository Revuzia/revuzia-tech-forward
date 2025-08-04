import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

// 🔧 FIXED: Article interface that matches your database structure
export interface Article {
  id: number; // Changed from string to number to match your int8 field
  title: string;
  slug: string;
  content: string;
  content2?: string | null;
  excerpt: string;
  author_name: string;
  author_id: string; // Changed from number to string to match your text field
  featured_image_url: string;
  status: string; // You DO have this field
  category_name: string;
  subCategory_name?: string | null;
  view_count: number;
  created_at: string;
  timestamp?: string;
  read_time?: string | null;
}

// 🔧 FIXED: Database row type that matches your EXACT Supabase table structure
type ArticleRow = {
  id: number; // int8 in your DB
  created_at: string;
  timestamp?: string;
  title: string;
  slug: string;
  content: string;
  content2: string | null;
  excerpt: string;
  author_id: string; // text field in your DB, not number
  author_name: string;
  featured_image_url: string;
  status: string; // You DO have this field
  view_count: number; // int4 in your DB
  category_name: string;
  subCategory_name: string | null;
  // Optional fields that might be added later
  read_time?: string | null;
  [key: string]: any;
};

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
    queryFn: async (): Promise<Article[]> => {
      console.log('🔍 useArticles called with:', { categoryName, subCategoryName });
      
      // Query with status filter since you DO have this field
      let query = supabase
        .from('articles')
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
      
      // 🔧 FIXED: Map database row to Article interface with correct types
      return (data || []).map((row: ArticleRow): Article => ({
        id: row.id,
        title: row.title,
        slug: row.slug,
        content: row.content,
        content2: row.content2,
        excerpt: row.excerpt,
        author_name: row.author_name,
        author_id: row.author_id, // String field in your DB
        featured_image_url: row.featured_image_url,
        status: row.status,
        category_name: row.category_name,
        subCategory_name: row.subCategory_name,
        view_count: row.view_count,
        created_at: row.created_at,
        timestamp: row.timestamp,
        read_time: row.read_time
      }));
    },
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    staleTime: 60000,
    gcTime: 300000,
    queryFn: async (): Promise<Article | null> => {
      console.log('🔍 useArticle called with slug:', slug);
      
      // Query with status filter since you DO have this field
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
        
      if (error) {
        console.error('❌ Single article error:', error);
        throw error;
      }

      if (!data) {
        return null;
      }

      // 🔧 FIXED: Proper type conversion with fallbacks for missing fields
      return {
        id: data.id,
        title: data.title || 'Untitled Article',
        slug: data.slug,
        content: data.content,
        content2: data.content2,
        excerpt: data.excerpt || data.content?.substring(0, 160) + '...' || 'No excerpt available',
        author_name: data.author_name,
        author_id: data.author_id || 1, // Default fallback
        featured_image_url: data.featured_image_url,
        status: data.status || 'published', // Default assumption
        category_name: data.category_name,
        subCategory_name: data.subCategory_name || data.subcategory,
        subcategory: data.subcategory || data.subCategory_name,
        view_count: data.view_count || data.views || 0,
        created_at: data.created_at,
        read_time: data.read_time
      };
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

// 🔥 SIMPLIFIED: Flexible interface that works with whatever data we get
export interface Article {
  id: any;
  title: string;
  slug: string;
  content: string;
  content2?: any;
  excerpt?: string;
  author_name: string;
  author_id?: any;
  featured_image_url: string;
  status?: string;
  category_name: string;
  subCategory_name?: any;
  view_count?: number;
  views?: number; // Alternative field name
  created_at: string;
  read_time?: string;
  [key: string]: any; // Accept any additional fields
}

// Global subscription tracker
let globalSubscription: any = null;

export const useArticles = (categoryName?: string, subCategoryName?: string) => {
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
          queryClient.invalidateQueries({ queryKey: ['articles'] });
          queryClient.invalidateQueries({ queryKey: ['article'] });
        })
        .subscribe((status, err) => {
          console.log('📡 Subscription status:', status);
          if (err) console.error('❌ Subscription error:', err);
        });
    }
  }, [queryClient]);

  return useQuery({
    queryKey: ['articles', categoryName, subCategoryName],
    staleTime: 10000,
    gcTime: 30000,
    queryFn: async () => {
      console.log('🔍 Fetching articles:', { categoryName, subCategoryName });
      
      let query = supabase.from('articles').select('*').order('created_at', { ascending: false });
      
      if (categoryName) {
        query = query.eq('category_name', categoryName);
      }
      if (subCategoryName) {
        query = query.eq('subCategory_name', subCategoryName);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('❌ Query error:', error);
        throw error;
      }
      
      console.log('✅ Articles found:', data?.length || 0);
      
      // 🔥 SIMPLE: Just return the data as-is with minimal processing
      return (data || []).map((row: any): Article => ({
        id: row.id,
        title: row.title || 'Untitled',
        slug: row.slug,
        content: row.content || '',
        content2: row.content2,
        excerpt: row.excerpt || row.content?.substring(0, 160) + '...' || '',
        author_name: row.author_name || 'Unknown Author',
        author_id: row.author_id,
        featured_image_url: row.featured_image_url || '',
        status: row.status,
        category_name: row.category_name || '',
        subCategory_name: row.subCategory_name,
        view_count: row.view_count || row.views || 0,
        views: row.views,
        created_at: row.created_at,
        read_time: row.read_time,
        ...row // Include any other fields as-is
      }));
    },
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    staleTime: 60000,
    gcTime: 300000,
    queryFn: async () => {
      console.log('🔍 Fetching article:', slug);
      
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
        
      if (error) {
        console.error('❌ Article error:', error);
        throw error;
      }

      if (!data) return null;

      // 🔥 SIMPLE: Return data with basic type safety
      return {
        id: data.id,
        title: data.title || 'Untitled',
        slug: data.slug,
        content: data.content || '',
        content2: data.content2,
        excerpt: data.excerpt || data.content?.substring(0, 160) + '...' || '',
        author_name: data.author_name || 'Unknown Author',
        author_id: data.author_id,
        featured_image_url: data.featured_image_url || '',
        status: data.status,
        category_name: data.category_name || '',
        subCategory_name: data.subCategory_name,
        view_count: data.view_count || data.views || 0,
        views: data.views,
        created_at: data.created_at,
        read_time: data.read_time,
        ...data // Include any other fields
      } as Article;
    },
    enabled: !!slug,
  });
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
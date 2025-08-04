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

export const useArticles = (categoryName?: string, subCategoryName?: string): any => {
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
      
      const queryResult = await query;
      const { data, error } = queryResult as { data: any[] | null; error: any };
      
      if (error) {
        console.error('❌ Query error:', error);
        throw error;
      }
      
      console.log('✅ Articles found:', data?.length || 0);
      
      // Return simple array without complex mapping
      return data || [];
    },
  }) as any;
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    staleTime: 60000,
    gcTime: 300000,
    queryFn: async () => {
      console.log('🔍 Fetching article:', slug);
      
      const queryResult = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      const { data, error } = queryResult as { data: any | null; error: any };
        
      if (error) {
        console.error('❌ Article error:', error);
        throw error;
      }

      if (!data) return null;

      // 🔥 ULTRA SAFE: Cast to any and handle all possible field variations
      const rawData = data as any;
      return {
        id: rawData.id || rawData.ID,
        title: rawData.title || rawData.Title || 'Untitled',
        slug: rawData.slug || rawData.Slug || '',
        content: rawData.content || rawData.Content || '',
        content2: rawData.content2 || rawData.Content2,
        excerpt: rawData.excerpt || rawData.Excerpt || (rawData.content || '').substring(0, 160) + '...',
        author_name: rawData.author_name || rawData.AuthorName || rawData['author-name'] || 'Unknown Author',
        author_id: rawData.author_id || rawData.AuthorId || rawData['author-id'],
        featured_image_url: rawData.featured_image_url || rawData.FeaturedImageUrl || rawData['featured-image-url'] || '',
        status: rawData.status || rawData.Status || 'published',
        category_name: rawData.category_name || rawData.CategoryName || rawData['category-name'] || '',
        subCategory_name: rawData.subCategory_name || rawData.SubCategoryName || rawData['sub-category-name'],
        view_count: rawData.view_count || rawData.ViewCount || rawData['view-count'] || rawData.views || 0,
        views: rawData.views || rawData.Views || 0,
        created_at: rawData.created_at || rawData.CreatedAt || rawData['created-at'] || new Date().toISOString(),
        read_time: rawData.read_time || rawData.ReadTime || rawData['read-time'],
        ...rawData // Include any other fields
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
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_name: string;
  author_id: number; // INTEGER as specified by user
  featured_image_url: string;
  status: string;
  category_name: string;
  subCategory_name: string;
  view_count: number;
  created_at: string;
}

export const useArticles = (categoryName?: string, subCategoryName?: string) => {
  return useQuery({
    queryKey: ['articles', categoryName, subCategoryName],
    staleTime: 30000, // Consider data fresh for 30 seconds
    gcTime: 60000, // Keep in cache for 1 minute
    queryFn: async () => {
      console.log('🔍 useArticles called with:', { categoryName, subCategoryName });
      
      let query = supabase
        .from('articles' as any)
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      console.log('📝 Base query created for articles table');

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

      console.log('📊 Supabase response:', { data, error });
      console.log('📊 Data count:', data?.length || 0);
      
      if (data && data.length > 0) {
        console.log('✅ Sample article:', data[0]);
        data.forEach((article: any, index) => {
          console.log(`📰 Article ${index + 1}:`, {
            title: article.title,
            category_name: article.category_name,
            subCategory_name: article.subCategory_name,
            status: article.status
          });
        });
      }

      if (error) {
        console.error('❌ Supabase error:', error);
        throw error;
      }

      console.log('✅ Query completed successfully');
      return (data as unknown) as Article[];
    },
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    staleTime: 60000, // Consider data fresh for 1 minute
    gcTime: 300000, // Keep in cache for 5 minutes
    queryFn: async () => {
      console.log('🔍 useArticle called with slug:', slug);
      
      const { data, error } = await supabase
        .from('articles' as any)
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      console.log('📊 Single article response:', { data, error });

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
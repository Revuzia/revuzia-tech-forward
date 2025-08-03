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
    queryFn: async () => {
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
        throw error;
      }

      return (data as unknown) as Article[];
    },
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles' as any)
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error) {
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
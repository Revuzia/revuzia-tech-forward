import { Helmet } from "react-helmet-async";

import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { useArticles, calculateReadTime } from "@/hooks/useArticles";

const TechNews = () => {
  const { data: articles, isLoading } = useArticles("Tech News");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-article-heading font-bold text-brand mb-4">Tech News</h1>
          <p className="text-xl text-white">Breaking tech news, industry insights, and the latest developments shaping our digital future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/80">Loading articles...</p>
            </div>
          ) : articles && articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                image={article.featured_image_url}
                author={{
                  name: article.author_name,
                  avatar: "",
                }}
                readTime={article.read_time || calculateReadTime(article.content)}
                category={article.subCategory_name}
                slug={article.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/80">No articles found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechNews;
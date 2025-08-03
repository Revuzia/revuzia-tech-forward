import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { useArticles } from "@/hooks/useArticles";

const GamingPCs = () => {
  const { data: articles, isLoading, error } = useArticles("Product Reviews", "Gaming & PCs");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-brand mb-4">Gaming & PCs</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Comprehensive reviews of gaming PCs, laptops, graphics cards, and components for the ultimate gaming experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-muted rounded mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-brand mb-4">Gaming & PCs</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive reviews of gaming PCs, laptops, graphics cards, and components for the ultimate gaming experience.
          </p>
        </div>

        {articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {articles.map((article) => (
              <ArticleCard 
                key={article.id}
                title={article.title}
                image={article.featured_image_url}
                author={{
                  name: article.author_name,
                  avatar: "/placeholder.svg" // Will be handled by ArticleCard's author image logic
                }}
                readTime={`${Math.ceil(article.content.length / 1000)} min read`}
                category={article.subCategory_name || article.category_name}
                slug={article.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No Gaming & PCs articles found. Check back soon for new content!
            </p>
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default GamingPCs;
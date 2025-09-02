import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { useArticles, calculateReadTime } from "@/hooks/useArticles";

const SmartHomeWars = () => {
  const { data: articles } = useArticles("battle-of-the-brands");
  
  const smartHomeWarArticles = articles?.filter(article => 
    article.tags?.includes("smart-home") || 
    article.tags?.includes("comparison") ||
    article.title.toLowerCase().includes("smart home") ||
    article.title.toLowerCase().includes("vs") ||
    article.title.toLowerCase().includes("comparison")
  ) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-brand mb-4">
            Smart Home Wars
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare smart home ecosystems, platforms, and devices. See which brands dominate in the connected home space.
          </p>
        </div>

        {smartHomeWarArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartHomeWarArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                image={article.featured_image_url}
                author={{
                  name: article.author_name,
                  avatar: "",
                }}
                readTime={calculateReadTime(article.content)}
                category="Smart Home Wars"
                slug={article.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No smart home comparison articles available yet. Check back soon!
            </p>
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default SmartHomeWars;
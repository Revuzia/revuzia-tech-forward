import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { useArticles, calculateReadTime } from "@/hooks/useArticles";

const SmartHomeGuides = () => {
  const { data: articles } = useArticles("Buying Guides");
  
  const smartHomeArticles = articles?.filter(article => 
    article.tags?.includes("smart-home") || 
    article.tags?.includes("automation") ||
    article.title.toLowerCase().includes("smart home") ||
    article.title.toLowerCase().includes("automation") ||
    article.title.toLowerCase().includes("iot")
  ) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-brand mb-4">
            Smart Home Guides
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guides to building and optimizing your smart home ecosystem with the latest connected devices and automation solutions.
          </p>
        </div>

        {smartHomeArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartHomeArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                image={article.featured_image_url}
                author={{
                  name: article.author_name,
                  avatar: "",
                }}
                readTime={article.read_time || calculateReadTime(article.content)}
                category="Smart Home Guides"
                slug={article.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No smart home guides available yet. Check back soon!
            </p>
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default SmartHomeGuides;
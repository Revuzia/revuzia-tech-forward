import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { useArticles, calculateReadTime } from "@/hooks/useArticles";

const StreamingWars = () => {
  const { data: articles } = useArticles("battle-of-the-brands");
  
  const streamingWarArticles = articles?.filter(article => 
    article.tags?.includes("streaming") || 
    article.tags?.includes("entertainment") ||
    article.title.toLowerCase().includes("streaming") ||
    article.title.toLowerCase().includes("netflix") ||
    article.title.toLowerCase().includes("disney") ||
    article.title.toLowerCase().includes("hulu") ||
    article.title.toLowerCase().includes("prime")
  ) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Streaming Wars
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The battle for your screen time. Compare streaming platforms, content libraries, and subscription values.
          </p>
        </div>

        {streamingWarArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamingWarArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                image={article.featured_image_url}
                author={{
                  name: article.author_name,
                  avatar: "",
                }}
                readTime={calculateReadTime(article.content)}
                category="Streaming Wars"
                slug={article.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No streaming platform comparison articles available yet. Check back soon!
            </p>
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default StreamingWars;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const AIMachineLearning = () => {
  const { data: articles, isLoading } = useArticles("tech-news", "AI & Machine Learning");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                AI & MACHINE LEARNING
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  AI & MACHINE LEARNING
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  AI & MACHINE LEARNING
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  AI & MACHINE LEARNING
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Explore the cutting-edge world of artificial intelligence and machine learning. From breakthrough research to practical applications.
          </p>
        </section>

        {/* Articles Grid */}
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
                  avatar: "", // Will use placeholder
                }}
                readTime={`${Math.ceil(article.content.length / 1000)} min read`}
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
      <BackToTop />
    </div>
  );
};

export default AIMachineLearning;

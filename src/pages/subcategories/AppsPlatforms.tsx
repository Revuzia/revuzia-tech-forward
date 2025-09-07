import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const AppsPlatforms = () => {
  const { data: articles, isLoading } = useArticles("Digital Tools", "apps-platforms");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Apps & Platforms - Latest Software Solutions | Revuzia</title>
        <meta name="description" content="Latest mobile apps, web platforms, and software solutions for productivity and entertainment." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-brand mb-4">Apps & Platforms</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Latest mobile apps, web platforms, and software solutions transforming how we work and play.
          </p>
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
                readTime={article.read_time || `${Math.ceil(article.content.length / 1000)} min read`}
                category={article.subCategory_name}
                slug={article.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/80">Coming soon! Check back for apps & platforms coverage.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AppsPlatforms;
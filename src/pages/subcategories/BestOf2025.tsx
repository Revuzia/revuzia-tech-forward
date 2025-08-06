import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { useArticles } from "@/hooks/useArticles";
import { Link } from "react-router-dom";

const BestOf2025 = () => {
  const { data: articles, isLoading } = useArticles("buying-guides", "best-of-2025");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Best of 2025 - Buying Guides | REVUZIA</title>
        <meta name="description" content="Discover the best tech products of 2025 with our comprehensive year-end roundup and award-winning product selections." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Best of 2025</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Our curated selection of the year's most outstanding tech products and innovations.
          </p>
          
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
                  readTime={`${Math.ceil(article.content.length / 1000)} min read`}
                  category="Best of 2025"
                  slug={article.slug}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Coming Soon</h3>
                <p className="text-foreground/80 mb-6">
                  We're compiling the best tech products of 2025. Check back for our year-end awards!
                </p>
                <Link 
                  to="/buying-guides" 
                  className="inline-flex items-center px-6 py-3 bg-brand text-background rounded-lg hover:bg-brand/90 transition-colors"
                >
                  Browse All Buying Guides
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BestOf2025;
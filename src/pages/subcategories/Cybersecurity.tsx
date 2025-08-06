import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";
import { Link } from "react-router-dom";

const Cybersecurity = () => {
  const { data: articles, isLoading } = useArticles("tech-news", "cybersecurity");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cybersecurity - Tech News | REVUZIA</title>
        <meta name="description" content="Stay protected in the digital age with the latest cybersecurity insights, threat analysis, and protection strategies." />
      </Helmet>
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                CYBERSECURITY
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  CYBERSECURITY
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  CYBERSECURITY
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  CYBERSECURITY
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Stay protected in the digital age with the latest cybersecurity insights, threat analysis, and protection strategies.
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
                  avatar: "",
                }}
                readTime={`${Math.ceil(article.content.length / 1000)} min read`}
                category="Cybersecurity"
                slug={article.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Coming Soon</h3>
              <p className="text-foreground/80 mb-6">
                We're working on bringing you the latest cybersecurity insights and protection strategies.
              </p>
              <Link 
                to="/tech-news" 
                className="inline-flex items-center px-6 py-3 bg-brand text-background rounded-lg hover:bg-brand/90 transition-colors"
              >
                Browse All Tech News
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Cybersecurity;

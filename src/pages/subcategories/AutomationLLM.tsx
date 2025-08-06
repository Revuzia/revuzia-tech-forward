import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { useArticles } from "@/hooks/useArticles";
import { Link } from "react-router-dom";

const AutomationLLM = () => {
  const { data: articles, isLoading } = useArticles("tech-news", "automation-llm");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Automation & LLM Tools - Tech News | REVUZIA</title>
        <meta name="description" content="Discover the latest in automation tools, LLM integrations, and workflow optimization technologies." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Automation & LLM Tools</h1>
          <p className="text-xl text-muted-foreground">Discover the latest in automation tools, LLM integrations, and workflow optimization</p>
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
                readTime={`${Math.ceil(article.content.length / 1000)} min read`}
                category="Automation & LLM Tools"
                slug={article.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Coming Soon</h3>
              <p className="text-foreground/80 mb-6">
                We're working on bringing you the latest articles about automation and LLM tools.
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

export default AutomationLLM;
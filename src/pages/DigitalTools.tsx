import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const DigitalTools = () => {
  const { data: articles, isLoading } = useArticles("Digital Tools");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Digital Tools - Software, Apps & Productivity | Revuzia</title>
        <meta name="description" content="Discover the latest digital tools, software, apps, and productivity solutions to boost your workflow and efficiency." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-article-heading font-bold text-brand mb-4">Digital Tools</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Software, apps, and digital solutions to boost your productivity and streamline your workflow.
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
                category={article.category_name}
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

export default DigitalTools;
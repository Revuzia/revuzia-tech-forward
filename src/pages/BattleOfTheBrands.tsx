import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const BattleOfTheBrands = () => {
  const { data: articles, isLoading } = useArticles("battle-of-the-brands");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Battle of the Brands - Tech Showdowns & Comparisons | Revuzia</title>
        <meta name="description" content="Epic tech battles comparing top brands. See which products come out on top in our detailed showdowns." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-brand mb-4">Battle of the Brands</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Epic showdowns between tech giants. Discover which brands and products reign supreme in head-to-head comparisons.
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
                readTime={`${Math.ceil(article.content.length / 1000)} min read`}
                category={article.category_name}
                slug={article.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/80">Coming soon! Check back for epic brand battles.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BattleOfTheBrands;
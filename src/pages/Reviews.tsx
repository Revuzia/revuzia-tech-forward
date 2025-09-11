import { Helmet } from "react-helmet-async";

import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

const Reviews = () => {
  const { data: articles, isLoading } = useArticles("Product Reviews");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Product Reviews - In-Depth Tech Reviews | Revuzia</title>
        <meta name="description" content="Comprehensive reviews of the latest tech products including smartphones, laptops, audio equipment, and more." />
      </Helmet>
      
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-article-heading font-bold text-brand mb-4">Product Reviews</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Expert, unbiased reviews of the latest tech products — from flagship smartphones to cutting-edge gadgets. We test everything so you don't have to guess.
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

export default Reviews;
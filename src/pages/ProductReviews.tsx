import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";
import authorZara from "@/assets/author-zara.jpg";

const ProductReviews = () => {
  const { articles: dbArticles, loading, error } = useArticles("Product Reviews");

  // Transform database articles to match ArticleCard props
  const articles = dbArticles.map(article => ({
    title: article.title,
    image: article.featured_image_url,
    author: {
      name: article.author_name,
      avatar: authorZara, // Default avatar for now
    },
    readTime: "8 min read", // Default read time
    category: article.category_name,
    slug: article.slug,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Reviews</h1>
          <p className="text-xl text-muted-foreground">In-depth reviews of the latest tech products and gadgets</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-xl text-muted-foreground">Loading articles...</div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-xl text-red-500">Error loading articles: {error}</div>
          </div>
        ) : articles.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-xl text-muted-foreground">No articles found.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug || index} {...article} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductReviews;
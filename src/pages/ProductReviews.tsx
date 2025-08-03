import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const ProductReviews = () => {
  const articles = [
    {
      title: "Revolutionary Gaming Laptops: RTX 5090 Performance Benchmark",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "8 min read",
      category: "Product Reviews",
      slug: "rtx-5090-gaming-laptops",
    },
    {
      title: "iPhone 16 Pro Max: A Photographer's Dream Device",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "11 min read",
      category: "Product Reviews",
      slug: "iphone-16-pro-max-review",
    },
    // ... more articles would be added here
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Reviews</h1>
          <p className="text-xl text-muted-foreground">In-depth reviews of the latest tech products and gadgets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductReviews;
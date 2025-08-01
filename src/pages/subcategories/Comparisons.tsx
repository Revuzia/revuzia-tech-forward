import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const Comparisons = () => {
  const comparisonArticles = [
    {
      title: "iPhone 16 Pro vs Samsung Galaxy S25 Ultra: Ultimate Flagship Showdown",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "15 min read",
      category: "Buying Guides",
      slug: "iphone-16-pro-vs-samsung-s25-ultra",
    },
    {
      title: "MacBook Pro M4 vs Dell XPS 15: Creator Laptop Comparison",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "13 min read",
      category: "Buying Guides",
      slug: "macbook-pro-m4-vs-dell-xps-15",
    },
    {
      title: "PlayStation 5 Pro vs Xbox Series X: Next-Gen Console Battle",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "17 min read",
      category: "Buying Guides",
      slug: "ps5-pro-vs-xbox-series-x",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Product Comparisons</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Head-to-head comparisons to help you make informed decisions between competing products.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisonArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Comparisons;
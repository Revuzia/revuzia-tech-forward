import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const BudgetPicks = () => {
  const budgetArticles = [
    {
      title: "Best Budget Smartphones Under $300: 2025 Edition",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "12 min read",
      category: "Buying Guides",
      slug: "best-budget-smartphones-under-300-2025",
    },
    {
      title: "Affordable Gaming Laptops: Performance on a Budget",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "14 min read",
      category: "Buying Guides",
      slug: "affordable-gaming-laptops-budget",
    },
    {
      title: "Best Budget Wireless Earbuds: Quality Sound for Less",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "10 min read",
      category: "Buying Guides",
      slug: "best-budget-wireless-earbuds",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Best Budget Picks</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Discover the best technology products that offer exceptional value without breaking the bank.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {budgetArticles.map((article, index) => (
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

export default BudgetPicks;
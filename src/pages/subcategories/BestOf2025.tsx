import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const BestOf2025 = () => {
  const bestOf2025Articles = [
    {
      title: "Best Tech Products of 2025: Year-End Roundup",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "20 min read",
      category: "Buying Guides",
      slug: "best-tech-products-2025-roundup",
    },
    {
      title: "Top 10 Smartphones of 2025: The Ultimate List",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "16 min read",
      category: "Buying Guides",
      slug: "top-10-smartphones-2025",
    },
    {
      title: "Best Gaming Hardware 2025: From GPUs to Monitors",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "18 min read",
      category: "Buying Guides",
      slug: "best-gaming-hardware-2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Best of 2025</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Our comprehensive year-end selections of the most innovative and impactful technology products.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestOf2025Articles.map((article, index) => (
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

export default BestOf2025;
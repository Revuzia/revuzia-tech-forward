import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const GamingPCs = () => {
  const gamingArticles = [
    {
      title: "RTX 5090 Gaming PC Builds: Ultimate Performance Guide",
      image: gamingHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "12 min read",
      category: "Gaming & PCs",
      slug: "rtx-5090-pc-builds",
    },
    {
      title: "Best Gaming Laptops 2025: Power Meets Portability",
      image: gamingHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "10 min read",
      category: "Gaming & PCs",
      slug: "best-gaming-laptops-2025",
    },
    {
      title: "Custom PC Building Guide: From Components to Gaming Beast",
      image: gamingHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "15 min read",
      category: "Gaming & PCs",
      slug: "custom-pc-building-guide",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-brand mb-4">Gaming & PCs</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive reviews of gaming PCs, laptops, graphics cards, and components for the ultimate gaming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {gamingArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default GamingPCs;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCarousel from "@/components/ArticleCarousel";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const BestInClass = () => {
  const featuredArticles = [
    {
      title: "Best in Class 2025: Ultimate Performance Champions",
      image: heroTechBg,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "18 min read",
      category: "Best in Class",
      slug: "best-in-class-2025-champions",
    },
    {
      title: "Top Tier Technology: Products That Define Excellence",
      image: heroTechBg,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "15 min read",
      category: "Best in Class",
      slug: "top-tier-technology-excellence",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                BEST IN CLASS
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  BEST IN CLASS
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  BEST IN CLASS
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  BEST IN CLASS
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Discover the absolute best products in each category. Our curated selection of top-tier technology that sets the standard.
          </p>
        </section>

        {/* Featured Articles */}
        <ArticleCarousel 
          title="Best in Class Selections"
          articles={featuredArticles}
          viewAllLink="/buying-guides"
          viewAllText="View All Best in Class"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BestInClass;

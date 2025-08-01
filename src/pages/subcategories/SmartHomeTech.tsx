import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCarousel from "@/components/ArticleCarousel";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";
import authorRaj from "@/assets/author-raj.jpg";

const SmartHomeTech = () => {
  const featuredArticles = [
    {
      title: "Complete Smart Home Setup Guide 2025",
      image: heroTechBg,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "14 min read",
      category: "Smart Home Tech",
      slug: "smart-home-setup-guide-2025",
    },
    {
      title: "Best Smart Speakers: Alexa vs Google vs Apple",
      image: heroTechBg,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "12 min read",
      category: "Smart Home Tech",
      slug: "smart-speakers-comparison-2025",
    },
    {
      title: "Top 5 Smart Lighting Systems for Energy Efficiency",
      image: heroTechBg,
      author: {
        name: "Raj Malhotra",
        avatar: authorRaj,
      },
      readTime: "11 min read",
      category: "Smart Home Tech",
      slug: "smart-lighting-energy-efficiency",
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
                SMART HOME TECH
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  SMART HOME TECH
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  SMART HOME TECH
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  SMART HOME TECH
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Transform your living space with the latest smart home technology. From automation to security, discover what's new and electrifying.
          </p>
        </section>

        {/* Featured Articles */}
        <ArticleCarousel 
          title="Latest Smart Home Tech"
          articles={featuredArticles}
          viewAllLink="/get-electrified"
          viewAllText="View All Smart Home"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default SmartHomeTech;

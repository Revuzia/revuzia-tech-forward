import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCarousel from "@/components/ArticleCarousel";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import authorRaj from "@/assets/author-raj.jpg";
import authorImani from "@/assets/author-imani.jpg";

const CloudComputing = () => {
  const featuredArticles = [
    {
      title: "AWS vs Azure vs Google Cloud: 2025 Comparison",
      image: heroTechBg,
      author: {
        name: "Raj Malhotra",
        avatar: authorRaj,
      },
      readTime: "16 min read",
      category: "Cloud Computing",
      slug: "cloud-platforms-comparison-2025",
    },
    {
      title: "Edge Computing Revolution: Bringing Cloud to Your Doorstep",
      image: heroTechBg,
      author: {
        name: "Imani Brooks",
        avatar: authorImani,
      },
      readTime: "13 min read",
      category: "Cloud Computing",
      slug: "edge-computing-revolution",
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
                CLOUD COMPUTING
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  CLOUD COMPUTING
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  CLOUD COMPUTING
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  CLOUD COMPUTING
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Navigate the evolving landscape of cloud computing. From platform comparisons to emerging trends in distributed computing.
          </p>
        </section>

        {/* Featured Articles */}
        <ArticleCarousel 
          title="Latest Cloud Computing News"
          articles={featuredArticles}
          viewAllLink="/tech-news"
          viewAllText="View All Cloud Articles"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default CloudComputing;

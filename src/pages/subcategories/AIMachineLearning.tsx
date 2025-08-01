import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCarousel from "@/components/ArticleCarousel";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const AIMachineLearning = () => {
  const featuredArticles = [
    {
      title: "ChatGPT vs Google Bard: The Ultimate AI Comparison",
      image: heroTechBg,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "12 min read",
      category: "AI & Machine Learning",
      slug: "chatgpt-vs-google-bard",
    },
    {
      title: "Machine Learning on Edge Devices: Revolution Begins",
      image: heroTechBg,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "15 min read",
      category: "AI & Machine Learning",
      slug: "ml-edge-devices",
    },
    {
      title: "The Ethical Implications of AI in Healthcare",
      image: heroTechBg,
      author: {
        name: "Raj Malhotra",
        avatar: authorZara,
      },
      readTime: "14 min read",
      category: "AI & Machine Learning",
      slug: "ethical-ai-healthcare",
    },
    {
      title: "AI-Powered Cybersecurity: Future of Threat Detection",
      image: heroTechBg,
      author: {
        name: "Imani Brooks",
        avatar: authorTheo,
      },
      readTime: "16 min read",
      category: "AI & Machine Learning",
      slug: "ai-cybersecurity",
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
                AI & MACHINE LEARNING
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  AI & MACHINE LEARNING
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  AI & MACHINE LEARNING
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  AI & MACHINE LEARNING
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Explore the cutting-edge world of artificial intelligence and machine learning. From breakthrough research to practical applications.
          </p>
        </section>

        {/* Featured Articles */}
        <ArticleCarousel 
          title="Latest AI & ML Articles"
          articles={featuredArticles}
          viewAllLink="/tech-news"
          viewAllText="View All AI Articles"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AIMachineLearning;

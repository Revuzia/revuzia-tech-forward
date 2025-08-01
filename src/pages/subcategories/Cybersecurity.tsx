import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCarousel from "@/components/ArticleCarousel";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import authorRaj from "@/assets/author-raj.jpg";
import authorImani from "@/assets/author-imani.jpg";

const Cybersecurity = () => {
  const featuredArticles = [
    {
      title: "Zero Trust Security: Why Your Business Needs It Now",
      image: heroTechBg,
      author: {
        name: "Raj Malhotra",
        avatar: authorRaj,
      },
      readTime: "11 min read",
      category: "Cybersecurity",
      slug: "zero-trust-security-guide",
    },
    {
      title: "Ransomware Protection: Complete Defense Strategy",
      image: heroTechBg,
      author: {
        name: "Imani Brooks",
        avatar: authorImani,
      },
      readTime: "13 min read",
      category: "Cybersecurity",
      slug: "ransomware-protection",
    },
    {
      title: "The Future of Cybersecurity: AI vs. Hackers",
      image: heroTechBg,
      author: {
        name: "Raj Malhotra",
        avatar: authorRaj,
      },
      readTime: "14 min read",
      category: "Cybersecurity",
      slug: "future-of-cybersecurity",
    },
    {
      title: "Mobile Security: Protecting Your Data on the Go",
      image: heroTechBg,
      author: {
        name: "Imani Brooks",
        avatar: authorImani,
      },
      readTime: "10 min read",
      category: "Cybersecurity",
      slug: "mobile-security-tips",
    },
    {
      title: "Cybersecurity for Small Businesses: Essential Steps",
      image: heroTechBg,
      author: {
        name: "Raj Malhotra",
        avatar: authorRaj,
      },
      readTime: "12 min read",
      category: "Cybersecurity",
      slug: "cybersecurity-for-small-businesses",
    },
    {
      title: "Data Privacy in 2024: What You Need to Know",
      image: heroTechBg,
      author: {
        name: "Imani Brooks",
        avatar: authorImani,
      },
      readTime: "15 min read",
      category: "Cybersecurity",
      slug: "data-privacy-2024",
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
                CYBERSECURITY
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  CYBERSECURITY
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  CYBERSECURITY
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  CYBERSECURITY
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Stay protected in the digital age with the latest cybersecurity insights, threat analysis, and protection strategies.
          </p>
        </section>

        {/* Featured Articles */}
        <ArticleCarousel 
          title="Latest Cybersecurity Updates"
          articles={featuredArticles}
          viewAllLink="/tech-news"
          viewAllText="View All Security Articles"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Cybersecurity;

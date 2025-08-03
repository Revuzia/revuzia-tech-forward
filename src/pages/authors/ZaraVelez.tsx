import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { X, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";
import authorZara from "/lovable-uploads/75c66acd-a1fa-4912-9cb0-ba0121e8debb.png";
import authorZaraAvatar from "@/assets/author-zara-avatar-new.jpg";
import { Button } from "@/components/ui/button";

const ZaraVelez = () => {
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });
  const { data: articles, isLoading } = useArticles();

  // Filter articles by author
  const zaraArticles = articles?.filter(article => 
    article.author_name === "Zara Velez"
  ) || [];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.avatar-container')?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        setAvatarPosition({ x: deltaX, y: deltaY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      
      <main id="main-content" className="py-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="avatar-container mb-8 w-64 h-64 mx-auto"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand/30 shadow-glow-primary">
                 <img 
                   src={authorZaraAvatar}
                   alt="Zara Velez"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translate(${Math.max(-20, Math.min(20, avatarPosition.x))}px, ${Math.max(-20, Math.min(20, avatarPosition.y))}px) scale(1.05)`,
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Zara Velez</h1>
            <p className="text-xl text-brand font-medium mb-6">Tech News and Market Analysis</p>
            
            <div className="max-w-3xl mx-auto mb-8 space-y-6">
              <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
                <p className="text-white/90 leading-relaxed text-lg mb-4">
                  Hi! I'm Zara, and I'm fascinated by the <strong className="text-brand">"why"</strong> behind tech news.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Sure, a new product launch is exciting, but what I really want to understand is why it matters, how it fits into the bigger picture, and what it means for consumers and the industry as a whole.
                </p>
              </div>
              
              <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
                <p className="text-white/90 leading-relaxed mb-3">
                  <strong className="text-brand">My approach:</strong> Business journalism meets tech coverage
                </p>
                <p className="text-white/80 leading-relaxed">
                  My background in business journalism gives me a unique lens on technology coverage. I don't just report what happened – I dig into the market forces, business strategies, and industry trends that drive these developments.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-brand/80 italic text-lg">
                  "It's like being a detective, but for tech."
                </p>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" className="border-brand/30 text-brand hover:bg-brand/10">
                <X className="w-4 h-4 mr-2" />
                Follow
              </Button>
              <Button variant="outline" size="sm" className="border-brand/30 text-brand hover:bg-brand/10">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                LATEST ARTICLES BY ZARA
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  LATEST ARTICLES BY ZARA
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  LATEST ARTICLES BY ZARA
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  LATEST ARTICLES BY ZARA
                </span>
              </span>
            </h2>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-card rounded-lg p-4 animate-pulse">
                  <div className="bg-muted h-48 rounded mb-4"></div>
                  <div className="bg-muted h-4 rounded mb-2"></div>
                  <div className="bg-muted h-4 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : zaraArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {zaraArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id}
                  title={article.title}
                  image={article.featured_image_url}
                  author={{ name: article.author_name, avatar: authorZaraAvatar }}
                  readTime="5 min read"
                  category={article.subCategory_name || article.category_name}
                  slug={article.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No articles found by Zara Velez yet.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ZaraVelez;
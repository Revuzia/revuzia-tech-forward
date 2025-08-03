import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { X, Mail } from "lucide-react";
import { useArticles } from "@/hooks/useArticles";
import authorMilesAvatar from "@/assets/author-miles-avatar-new.jpg";

const MilesDanner = () => {
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });
  const { data: articles, isLoading } = useArticles();

  // Filter articles by author
  const milesArticles = articles?.filter(article => 
    article.author_name === "Miles Danner"
  ) || [];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('avatar-container')?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        setAvatarPosition({ x: deltaX, y: deltaY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Author Hero Section */}
        <div className="text-center mb-16">
          <div 
            id="avatar-container"
            className="relative inline-block mb-8 w-64 h-64"
          >
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand/30 shadow-glow-primary">
              <img 
                src={authorMilesAvatar} 
                alt="Miles Danner Avatar" 
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${Math.max(-20, Math.min(20, avatarPosition.x))}px, ${Math.max(-20, Math.min(20, avatarPosition.y))}px) scale(1.05)`,
                }}
              />
            </div>
            {/* Floating elements around avatar */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-accent/30 rounded-full animate-float-4"></div>
          </div>
          
          <h1 className="text-5xl font-bold text-brand mb-4">Miles Danner</h1>
          <p className="text-xl text-foreground/80 mb-6 max-w-3xl mx-auto">
            Electronics & Innovation Reporter
          </p>
          
          <div className="max-w-3xl mx-auto mb-8 space-y-6">
            <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
              <p className="text-white/90 leading-relaxed text-lg mb-4">
                What's up! I'm Miles, and I'm basically a professional <strong className="text-brand">"cool stuff" hunter</strong>.
              </p>
              <p className="text-white/80 leading-relaxed">
                While most people are just hearing about the latest iPhone, I'm already three trends ahead, digging through Kickstarter campaigns, haunting maker spaces, and somehow always ending up in conversations with inventors who are building the future in their basements.
              </p>
            </div>
            
            <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
              <p className="text-white/90 leading-relaxed mb-3">
                <strong className="text-brand">My mission:</strong> Finding the "no way, that's real?" moments
              </p>
              <p className="text-white/80 leading-relaxed">
                I live for that moment when you see something and think "wait, THAT exists?" – whether it's a transparent TV, a jacket that charges your phone, or some wild concept device that makes you rethink what electronics can do. My job is finding those moments and bringing them to you first.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-brand/80 italic text-lg">
                "The future is already here, you just have to know where to look."
              </p>
            </div>
          </div>
          
          {/* Social Links */}
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

        {/* Author's Articles */}
        <section className="mb-16">
          <div className="relative inline-block w-full text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                LATEST ARTICLES BY MILES
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  LATEST ARTICLES BY MILES
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  LATEST ARTICLES BY MILES
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  LATEST ARTICLES BY MILES
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
          ) : milesArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milesArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id}
                  title={article.title}
                  image={article.featured_image_url}
                  author={{ name: article.author_name, avatar: authorMilesAvatar }}
                  readTime="5 min read"
                  category={article.subCategory_name || article.category_name}
                  slug={article.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No articles found by Miles Danner yet.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default MilesDanner;
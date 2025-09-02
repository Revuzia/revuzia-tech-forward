import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { X, Mail } from "lucide-react";
import { useArticles } from "@/hooks/useArticles";
import authorImaniAvatar from "@/assets/author-imani-avatar-new.jpg";

const ImaniBrooks = () => {
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });
  const { data: articles, isLoading } = useArticles();

  // Filter articles by author
  const imaniArticles = articles?.filter(article => 
    article.author_name === "Imani Brooks"
  ) || [];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
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
        <section className="author-hero text-center mb-16">
          <div 
            id="avatar-container"
            className="author-avatar relative inline-block mb-8"
          >
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand/30 shadow-glow-primary">
              <img 
                src={authorImaniAvatar} 
                alt="Imani Brooks" 
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${avatarPosition.x}px, ${avatarPosition.y}px) scale(1.05)`,
                }}
              />
            </div>
            {/* Floating elements around avatar */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-accent/30 rounded-full animate-float-2"></div>
          </div>
          
          <div className="author-info">
            <h1 className="text-4xl md:text-6xl font-bold text-brand mb-4">Imani Brooks</h1>
            <p className="author-title text-xl text-foreground/80 mb-6 max-w-3xl mx-auto">
              Consumer Advocacy Editor
            </p>
            
            <div className="max-w-3xl mx-auto mb-8 space-y-6">
              <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
                <p className="text-white/90 leading-relaxed text-lg mb-4">
                  Hey! I'm Imani, and I'm probably a lot like you – I want tech that <strong className="text-brand">actually works for real people</strong> living real lives.
                </p>
                <p className="text-white/80 leading-relaxed">
                  I come from a consumer advocacy background, which means I'm always asking the questions that matter most: "Is this actually worth my money?" and "Will this make my life better or just more complicated?"
                </p>
              </div>
              
              <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
                <p className="text-white/90 leading-relaxed mb-3">
                  <strong className="text-brand">My standards:</strong> Real-world usability over impressive specs
                </p>
                <p className="text-white/80 leading-relaxed">
                  I don't care how impressive the specs look on paper if the user experience is frustrating. I care about whether my mom could figure out how to use it, whether it's accessible for people with different needs, and whether you'll still be happy with your purchase six months from now.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-brand/80 italic text-lg">
                  "Great tech should make life better, not more complicated."
                </p>
              </div>
            </div>
            
            <div className="author-stats flex justify-center gap-6 mb-8 text-sm">
              <span className="text-brand font-semibold">{imaniArticles.length} Articles</span>
              <span className="text-foreground/70">Revuzia Author</span>
              <span className="text-foreground/70">Consumer Advocacy</span>
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
        </section>

        {/* Author Content Section */}
        <section className="author-content">
          <div className="content-header text-center mb-12">
            <h2 className="text-3xl font-bold text-brand mb-4">Articles by Imani Brooks</h2>
            <p className="text-foreground/70">Latest articles and content</p>
          </div>
          
          {isLoading ? (
            <div className="articles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-card rounded-lg p-4 animate-pulse">
                  <div className="bg-muted h-48 rounded mb-4"></div>
                  <div className="bg-muted h-4 rounded mb-2"></div>
                  <div className="bg-muted h-4 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : imaniArticles.length > 0 ? (
            <div className="articles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {imaniArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id}
                  title={article.title}
                  image={article.featured_image_url}
                  author={{ name: article.author_name, avatar: authorImaniAvatar }}
                  readTime="5 min read"
                  category={article.subCategory_name || article.category_name}
                  slug={article.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No articles found by Imani Brooks yet.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ImaniBrooks;
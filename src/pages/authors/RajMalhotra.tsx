import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { X, Mail } from "lucide-react";
import { useArticles } from "@/hooks/useArticles";
import authorRajAvatar from "@/assets/author-raj-avatar-new.jpg";

const RajMalhotra = () => {
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });
  const { data: articles, isLoading } = useArticles();

  // Filter articles by author
  const rajArticles = articles?.filter(article => 
    article.author_name === "Raj Malhotra"
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
            className="relative inline-block mb-8"
          >
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand/30 shadow-glow-primary">
              <img 
                src={authorRajAvatar} 
                alt="Raj Malhotra Avatar" 
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${avatarPosition.x}px, ${avatarPosition.y}px) scale(1.05)`,
                }}
              />
            </div>
            {/* Floating elements around avatar */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-accent/30 rounded-full animate-float-3"></div>
          </div>
          
          <h1 className="text-5xl font-bold text-brand mb-4">Raj Malhotra</h1>
          <p className="text-xl text-foreground/80 mb-6 max-w-3xl mx-auto">
            Buying Guides & Product Comparison
          </p>
          
          <div className="max-w-3xl mx-auto mb-8 space-y-6">
            <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
              <p className="text-white/90 leading-relaxed text-lg mb-4">
                Hello! I'm Raj, and I'm essentially a <strong className="text-brand">professional researcher</strong> who happens to be obsessed with helping people make smart purchasing decisions.
              </p>
              <p className="text-white/80 leading-relaxed">
                I genuinely enjoy spending hours comparing specifications, reading user reviews, and building comparison charts – the kind of deep-dive research most people don't have time for.
              </p>
            </div>
            
            <div className="bg-card/30 rounded-xl p-6 border border-brand/20">
              <p className="text-white/90 leading-relaxed mb-3">
                <strong className="text-brand">My methodology:</strong> Every buying guide is a research project
              </p>
              <p className="text-white/80 leading-relaxed">
                My analytical background means I approach every buying guide systematically. I create frameworks for evaluation, weight different factors based on user priorities, and organize information in ways that actually make sense when you're trying to choose between fifteen different options.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-brand/80 italic text-lg">
                "Smart purchasing decisions start with smart research."
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
        <section>
          <h2 className="text-3xl font-bold text-brand text-center mb-12">Latest Articles by Raj</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-card rounded-lg p-4 animate-pulse">
                  <div className="bg-muted h-48 rounded mb-4"></div>
                  <div className="bg-muted h-4 rounded mb-2"></div>
                  <div className="bg-muted h-4 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : rajArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {rajArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id}
                  title={article.title}
                  image={article.featured_image_url}
                  author={{ name: article.author_name, avatar: authorRajAvatar }}
                  readTime="5 min read"
                  category={article.subCategory_name || article.category_name}
                  slug={article.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No articles found by Raj Malhotra yet.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default RajMalhotra;
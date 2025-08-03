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
                src={authorImaniAvatar} 
                alt="Imani Brooks Avatar" 
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
          
          <h1 className="text-5xl font-bold text-brand mb-4">Imani Brooks</h1>
          <p className="text-xl text-foreground/80 mb-6 max-w-3xl mx-auto">
            Consumer Tech Reviews & Guides
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-white/90 leading-relaxed text-lg">
              Hey! I'm Imani, and I'm probably a lot like you – I want tech that actually works for real people living real lives. I come from a consumer advocacy background, which means I'm always asking the questions that matter most: "Is this actually worth my money?" and "Will this make my life better or just more complicated?" I don't care how impressive the specs look on paper if the user experience is frustrating. I care about whether my mom could figure out how to use it, whether it's accessible for people with different needs, and whether you'll still be happy with your purchase six months from now.
            </p>
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
          <h2 className="text-3xl font-bold text-brand text-center mb-12">Latest Articles by Imani</h2>
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
          ) : imaniArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
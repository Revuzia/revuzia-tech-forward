import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { X, Mail } from "lucide-react";
import authorRaj from "@/assets/author-raj.jpg";
import authorRajAvatar from "@/assets/author-raj-avatar-new.jpg";
import gamingHero from "@/assets/gaming-article-hero.jpg";

const RajMalhotra = () => {
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });

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

  const articles = [
    {
      title: "Electric Vehicle Technology: The Road to Sustainable Transportation",
      image: gamingHero,
      author: {
        name: "Raj Malhotra",
        avatar: authorRaj,
      },
      readTime: "11 min read",
      category: "Get Electrified",
      slug: "ev-sustainable-transportation",
    },
    {
      title: "Revolutionary Battery Technology: Powering the Future",
      image: gamingHero,
      author: {
        name: "Raj Malhotra",
        avatar: authorRaj,
      },
      readTime: "9 min read",
      category: "Get Electrified",
      slug: "revolutionary-battery-technology",
    },
  ];

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
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-white/90 leading-relaxed text-lg">
              Hello! I'm Raj, and I'm essentially a professional researcher who happens to be obsessed with helping people make smart purchasing decisions. I genuinely enjoy spending hours comparing specifications, reading user reviews, and building comparison charts – the kind of deep-dive research most people don't have time for. My analytical background means I approach every buying guide like a research project. I create frameworks for evaluation, weight different factors based on user priorities, and organize information in ways that actually make sense when you're trying to choose between fifteen different options.
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
          <h2 className="text-3xl font-bold text-brand text-center mb-12">Latest Articles by Raj</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default RajMalhotra;
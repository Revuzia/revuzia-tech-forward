import { useState, useEffect } from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import authorTheo from "@/assets/author-theo.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import { Button } from "@/components/ui/button";

const TheoChan = () => {
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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

  const articles = [
    {
      title: "Complete Buying Guide: Best Smartphones Under $500 in 2024",
      image: buyingGuideHero,
      author: { name: "Theo Chan", avatar: authorTheo },
      readTime: "10 min read",
      category: "Buying Guide",
      slug: "best-smartphones-under-500-2024",
    },
    {
      title: "Product Testing Methodology: How We Review Tech at Revuzia",
      image: heroTechBg,
      author: { name: "Theo Chan", avatar: authorTheo },
      readTime: "6 min read",
      category: "Behind the Scenes",
      slug: "product-testing-methodology",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="py-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="avatar-container mb-8">
              <img 
                src={authorTheo}
                alt="Theo Chan"
                className="w-32 h-32 rounded-full mx-auto border-4 border-brand/30 transition-all duration-300 hover:border-brand/60"
                style={{ 
                  transform: `translate(${avatarPosition.x}px, ${avatarPosition.y}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Theo Chan</h1>
            <p className="text-xl text-brand font-medium mb-6">Reviews Director</p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-white/90 leading-relaxed text-lg">
                With a background in electrical engineering and 10+ years in tech reviews, Theo leads our product testing and evaluation process. He's passionate about helping consumers make informed purchasing decisions through rigorous testing and unbiased analysis. His expertise in testing methodologies ensures every review meets the highest standards of accuracy and reliability.
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Latest Articles by Theo</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <ArticleCard 
                  key={index}
                  {...article}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TheoChan;
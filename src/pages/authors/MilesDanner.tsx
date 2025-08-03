import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { X, Mail } from "lucide-react";
import authorMiles from "@/assets/author-miles.jpg";
import authorMilesAvatar from "@/assets/author-miles-avatar-new.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";

const MilesDanner = () => {
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
      title: "Best Tech Gadgets Under $500: Maximum Value Guide",
      image: buyingGuideHero,
      author: {
        name: "Miles Danner",
        avatar: authorMiles,
      },
      readTime: "14 min read",
      category: "Buying Guides",
      slug: "best-tech-under-500",
    },
    {
      title: "Smart Home Setup Guide: Building Your Connected Home",
      image: buyingGuideHero,
      author: {
        name: "Miles Danner",
        avatar: authorMiles,
      },
      readTime: "16 min read",
      category: "Buying Guides",
      slug: "smart-home-setup-guide",
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
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-white/90 leading-relaxed text-lg">
              What's up! I'm Miles, and I'm basically a professional "cool stuff" hunter. While most people are just hearing about the latest iPhone, I'm already three trends ahead, digging through Kickstarter campaigns, haunting maker spaces, and somehow always ending up in conversations with inventors who are building the future in their basements. I live for that moment when you see something and think "wait, THAT exists?" – whether it's a transparent TV, a jacket that charges your phone, or some wild concept device that makes you rethink what electronics can do. My job is finding those "no way, that's real?" moments and bringing them to you first.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default MilesDanner;
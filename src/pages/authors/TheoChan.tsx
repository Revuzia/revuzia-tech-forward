import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { X, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import authorTheo from "/lovable-uploads/77db2401-63d0-4707-a42f-51632b75e5c2.png";
import authorTheoAvatar from "@/assets/author-theo-avatar-new.jpg";
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
                    src={authorTheoAvatar}
                    alt="Theo Chan"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translate(${Math.max(-20, Math.min(20, avatarPosition.x))}px, ${Math.max(-20, Math.min(20, avatarPosition.y))}px) scale(1.05)`,
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Theo Chan</h1>
            <p className="text-xl text-brand font-medium mb-6">Product Reviews & Testing Specialist</p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-white/90 leading-relaxed text-lg">
                Hi! I'm Theo, and yes, I'm absolutely the kind of person who reads user manuals for fun and gets genuinely excited about thermal management solutions. My friends think I'm crazy for having spreadsheets tracking device performance metrics, but hey – that obsessive attention to detail is exactly what makes my reviews thorough. With my engineering background, I can't help but dive deep into the technical specifications, but I've learned that the real magic happens when elegant engineering meets practical usability. There's something beautiful about a well-designed heat sink or a perfectly tuned display calibration that most people never notice – but I do, and I love sharing those discoveries.
              </p>
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
                LATEST ARTICLES BY THEO
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  LATEST ARTICLES BY THEO
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  LATEST ARTICLES BY THEO
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  LATEST ARTICLES BY THEO
                </span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <ArticleCard 
                key={index}
                {...article}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TheoChan;
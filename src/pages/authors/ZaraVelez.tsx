import { useState, useEffect } from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import authorZara from "@/assets/author-zara.jpg";
import authorZaraAvatar from "@/assets/author-zara.jpg";
import gamingArticleHero from "@/assets/gaming-article-hero.jpg";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import { Button } from "@/components/ui/button";

const ZaraVelez = () => {
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
      title: "Gaming Revolution: RTX 4090 vs RTX 4080 Performance Deep Dive",
      image: gamingArticleHero,
      author: { name: "Zara Velez", avatar: authorZaraAvatar },
      readTime: "8 min read",
      category: "Gaming Hardware",
      slug: "rtx-4090-vs-4080-performance",
    },
    {
      title: "The Ultimate Guide to Building a Gaming PC in 2024",
      image: heroTechBg,
      author: { name: "Zara Velez", avatar: authorZaraAvatar },
      readTime: "12 min read", 
      category: "PC Building",
      slug: "ultimate-gaming-pc-build-2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
                  src={authorZara}
                  alt="Zara Velez"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translate(${Math.max(-20, Math.min(20, avatarPosition.x))}px, ${Math.max(-20, Math.min(20, avatarPosition.y))}px) scale(1.05)`,
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Zara Velez</h1>
            <p className="text-xl text-brand font-medium mb-6">Senior Tech Editor</p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-white/90 leading-relaxed text-lg">
                Zara has over 8 years of experience in tech journalism, specializing in mobile devices, gaming hardware, and emerging technologies. She holds a degree in Computer Science and has written for major tech publications. Her passion for cutting-edge technology and ability to explain complex concepts in simple terms makes her reviews invaluable to tech enthusiasts and casual users alike.
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" className="border-brand/30 text-brand hover:bg-brand/10">
                <Twitter className="w-4 h-4 mr-2" />
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

export default ZaraVelez;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Zap, Cpu, Smartphone, Monitor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ArticleCarousel from "@/components/ArticleCarousel";
import BackToTop from "@/components/BackToTop";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";
import authorAria from "@/assets/author-aria-avatar.jpg";
import heroTechBg from "@/assets/hero-tech-bg.jpg";

const Index = () => {
  const featuredArticles = [
    {
      title: "Apple's Student Winners and Google's AI Surge Signal a New Era—But the Hardware Market Tells a Different Story",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "7 min read",
      category: "Tech News",
      slug: "apple-google-ai-hardware-market",
      isHero: true,
    },
    {
      title: "Quantum Computing Breakthrough: IBM's Latest Processor Changes Everything",
      image: buyingGuideHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "9 min read",
      category: "Tech News",
      slug: "quantum-computing-breakthrough",
    },
    {
      title: "5G Revolution: How Next-Gen Networks Are Transforming Smart Cities",
      image: gamingHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "8 min read",
      category: "Tech News",
      slug: "5g-revolution-smart-cities",
    },
    {
      title: "Samsung Galaxy S25 Ultra: The Photography Revolution",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "6 min read",
      category: "Get Electrified",
      slug: "samsung-s25-ultra-photography",
    },
    {
      title: "Tesla Model Y 2025: Electric Performance Meets Smart Technology",
      image: gamingHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "10 min read",
      category: "Get Electrified",
      slug: "tesla-model-y-2025",
    },
    {
      title: "Wireless Charging Revolution: New Standards Change Everything",
      image: buyingGuideHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "7 min read",
      category: "Get Electrified",
      slug: "wireless-charging-revolution",
    },
    {
      title: "Revolutionary Gaming Laptops: RTX 5090 Performance Benchmark",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "8 min read",
      category: "Product Reviews",
      slug: "rtx-5090-gaming-laptops",
    },
    {
      title: "The Definitive Tech Buying Guide 2025: 5 Essential Gadgets That Offer Incredible Value Right Now",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "12 min read",
      category: "Buying Guides",
      slug: "tech-buying-guide-2025",
    },
    {
      title: "Meta Quest 4 Review: VR Gaming Reaches New Reality",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "11 min read",
      category: "Product Reviews",
      slug: "meta-quest-4-vr-review",
    },
    {
      title: "iPhone 16 Pro Max: Camera Innovation Redefined",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "9 min read",
      category: "Product Reviews",
      slug: "iphone-16-pro-max-review",
    },
    {
      title: "Best Gaming Monitors 2025: Display Technology Guide",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "15 min read",
      category: "Buying Guides",
      slug: "best-gaming-monitors-2025",
    },
    {
      title: "Smart Home Security: 2025's Best Systems Compared",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "13 min read",
      category: "Buying Guides",
      slug: "smart-home-security-2025",
    },
    {
      title: "AI-Powered Home Assistants: The Next Generation",
      image: gamingHero,
      author: {
        name: "Aria Lin",
        avatar: authorAria,
      },
      readTime: "10 min read",
      category: "Get Electrified",
      slug: "ai-home-assistants-next-gen",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroTechBg})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        </div>
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-tech-element animate-float-1">
            <Cpu className="w-8 h-8 text-brand opacity-60" />
          </div>
          <div className="floating-tech-element animate-float-2">
            <Smartphone className="w-6 h-6 text-brand opacity-40" />
          </div>
          <div className="floating-tech-element animate-float-3">
            <Monitor className="w-10 h-10 text-brand opacity-50" />
          </div>
          <div className="floating-tech-element animate-float-4">
            <Zap className="w-7 h-7 text-brand opacity-45" />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Hero Title with Orbiting Elements */}
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 leading-tight">
              <span className="relative inline-block text-white drop-shadow-2xl">
                The Future of Tech and Reviews
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  The Future of Tech and Reviews
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  The Future of Tech and Reviews
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  The Future of Tech and Reviews
                </span>
              </span>
            </h1>
            
            {/* Orbiting Tech Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="orbit-element orbit-1">
                <Cpu className="w-8 h-8 text-brand" />
              </div>
              <div className="orbit-element orbit-2">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <div className="orbit-element orbit-3">
                <Monitor className="w-7 h-7 text-brand" />
              </div>
              <div className="orbit-element orbit-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge technology through in-depth reviews, exclusive insights, and futuristic perspectives on the devices shaping tomorrow.
          </p>
          
          {/* Radiating Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/product-reviews">
              <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 font-semibold px-8 py-4 text-lg">
                Explore Latest Reviews
              </Button>
            </Link>
            <Link to="/video-reviews">
              <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 font-semibold px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Review Videos
              </Button>
            </Link>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground/80 mt-8 font-medium tracking-wide max-w-4xl mx-auto">
            Reliable. Insightful. Transparent.
          </p>
        </div>
      </section>
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Latest Tech News Section */}
        <section className="mb-16" aria-labelledby="tech-news-heading">
          <div className="relative inline-block w-full text-center mb-8">
            <h2 id="tech-news-heading" className="text-5xl md:text-6xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Latest Tech and Electronics
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Latest Tech and Electronics
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Latest Tech and Electronics
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  Latest Tech and Electronics
                </span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto">
            {/* Left side - 2 large featured articles stacked */}
            <div className="lg:col-span-1 space-y-2">
              <ArticleCard 
                {...featuredArticles.filter(article => article.category === "Tech News")[0]} 
                isHero={true} 
              />
              <ArticleCard 
                {...featuredArticles.filter(article => article.category === "Get Electrified")[0]} 
                isHero={true} 
              />
            </div>
            {/* Right side - 4 horizontal rectangles */}
            <div className="lg:col-span-1 grid grid-rows-4 gap-1.5 h-full">
              {/* 2 more Tech News articles */}
              {featuredArticles.filter(article => article.category === "Tech News").slice(1, 3).map((article, index) => (
                <ArticleCard key={`tech-${index}`} {...article} isHorizontal={true} />
              ))}
              {/* 2 more Get Electrified articles */}
              {featuredArticles.filter(article => article.category === "Get Electrified").slice(1, 3).map((article, index) => (
                <ArticleCard key={`electrified-${index}`} {...article} isHorizontal={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Explore Latest Reviews Carousel */}
        <ArticleCarousel
          title="Explore Latest Reviews"
          articles={featuredArticles.filter(article => article.category === "Product Reviews" || article.category === "Buying Guides")}
          viewAllLink="/product-reviews"
          viewAllText="View All Reviews"
        />

        {/* Watch Review Videos Carousel */}
        <ArticleCarousel
          title="Watch Review Videos"
          articles={[
            {
              title: "RTX 5090 Gaming Laptop Full Review",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "15:32",
              category: "Video Review",
              slug: "rtx-5090-video-review",
            },
            {
              title: "Samsung Galaxy S25 Ultra Camera Test",
              image: buyingGuideHero,
              author: {
                name: "Theo Chan",
                avatar: authorTheo,
              },
              readTime: "12:45",
              category: "Video Review",
              slug: "samsung-s25-video-review",
            },
            {
              title: "Best Gaming Laptops 2025 Roundup",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "18:20",
              category: "Video Review",
              slug: "gaming-laptops-2025-video",
            },
            {
              title: "iPhone 16 Pro Max Deep Dive",
              image: buyingGuideHero,
              author: {
                name: "Theo Chan",
                avatar: authorTheo,
              },
              readTime: "22:15",
              category: "Video Review",
              slug: "iphone-16-pro-video",
            },
            {
              title: "Tesla Cybertruck: Full Electric Beast Review",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "25:40",
              category: "Video Review",
              slug: "tesla-cybertruck-video",
            },
            {
              title: "Apple Vision Pro: Spatial Computing Future",
              image: buyingGuideHero,
              author: {
                name: "Theo Chan",
                avatar: authorTheo,
              },
              readTime: "19:55",
              category: "Video Review",
              slug: "apple-vision-pro-video",
            },
            {
              title: "MacBook Pro M4 Max Performance Test",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "16:30",
              category: "Video Review",
              slug: "macbook-pro-m4-video",
            },
            {
              title: "Google Pixel 9 Pro Camera Showdown",
              image: buyingGuideHero,
              author: {
                name: "Theo Chan",
                avatar: authorTheo,
              },
              readTime: "14:20",
              category: "Video Review",
              slug: "pixel-9-pro-video",
            },
            {
              title: "Steam Deck OLED vs ROG Ally Comparison",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "21:15",
              category: "Video Review",
              slug: "steam-deck-vs-rog-ally-video",
            },
          ]}
          viewAllLink="/video-reviews"
          viewAllText="Watch All Videos"
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

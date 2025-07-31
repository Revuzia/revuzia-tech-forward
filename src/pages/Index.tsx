import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ArticleCarousel from "@/components/ArticleCarousel";
import BackToTop from "@/components/BackToTop";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";
import futuristicHeroBg from "@/assets/futuristic-hero-bg.jpg";

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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Fixed Background */}
      <section 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${futuristicHeroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </section>
      
      {/* Hero Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand via-brand to-brand bg-clip-text text-transparent animate-fade-in">
            The Future of Tech Reviews
          </h1>
          
          <p className="text-xl md:text-2xl text-brand/90 mb-12 leading-relaxed animate-fade-in delay-300 glow-text">
            Discover cutting-edge technology through in-depth reviews, exclusive insights, and futuristic perspectives on the devices shaping tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/product-reviews">
              <Button 
                size="lg" 
                className="bg-brand text-background hover:bg-brand/90 glow-button hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg animate-pulse-glow"
              >
                Explore Latest Reviews
              </Button>
            </Link>
            
            <Link to="/video-reviews">
              <Button 
                size="lg" 
                className="bg-brand text-background hover:bg-brand/90 glow-button hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg animate-pulse-glow"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Review Videos
              </Button>
            </Link>
          </div>
          
        </div>
      </section>
      
      <main id="main-content" className="relative z-10 bg-background container mx-auto px-4 py-16">
        {/* Featured Articles Grid */}
        <section className="mb-16" aria-labelledby="featured-articles-heading">
          <h1 id="featured-articles-heading" className="text-4xl font-bold text-brand text-center mb-8">Latest Tech and Electronics</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto justify-items-center">
            {featuredArticles.filter(article => article.category === "Tech News" || article.category === "Get Electrified").map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* Explore Latest Reviews Carousel */}
        <ArticleCarousel
          title="Explore Latest Reviews"
          articles={[
            ...featuredArticles.filter(article => article.category === "Product Reviews" || article.category === "Buying Guides"),
            {
              title: "Apple Vision Pro 2025: The Mixed Reality Revolution",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "10 min read",
              category: "Product Reviews",
              slug: "apple-vision-pro-2025",
            },
            {
              title: "Tesla Cybertruck Interior Tech Deep Dive",
              image: buyingGuideHero,
              author: {
                name: "Theo Chan",
                avatar: authorTheo,
              },
              readTime: "9 min read",
              category: "Product Reviews",
              slug: "tesla-cybertruck-tech",
            },
            {
              title: "Framework Laptop 16: The Ultimate Modular Machine",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "11 min read",
              category: "Product Reviews",
              slug: "framework-laptop-16",
            },
            {
              title: "Best Gaming Monitors 2025: 4K OLED Roundup",
              image: buyingGuideHero,
              author: {
                name: "Theo Chan",
                avatar: authorTheo,
              },
              readTime: "8 min read",
              category: "Buying Guides",
              slug: "gaming-monitors-2025",
            },
            {
              title: "Budget Smartphone Buying Guide: Under $500",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "6 min read",
              category: "Buying Guides",
              slug: "budget-smartphones-2025",
            },
          ]}
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
              title: "M4 MacBook Pro Performance Review",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "19:45",
              category: "Video Review",
              slug: "m4-macbook-pro-video",
            },
            {
              title: "Google Pixel 9 Pro Camera Comparison",
              image: buyingGuideHero,
              author: {
                name: "Theo Chan",
                avatar: authorTheo,
              },
              readTime: "14:30",
              category: "Video Review",
              slug: "pixel-9-pro-video",
            },
            {
              title: "Steam Deck OLED vs ROG Ally X",
              image: gamingHero,
              author: {
                name: "Zara Velez",
                avatar: authorZara,
              },
              readTime: "16:55",
              category: "Video Review",
              slug: "handheld-gaming-comparison",
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

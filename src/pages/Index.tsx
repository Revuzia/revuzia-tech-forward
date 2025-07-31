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
import rocketHeroBg from "@/assets/rocket-hero-bg.jpg";

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
      
      {/* Hero Section with Parallax Background */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${rocketHeroBg})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-brand/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-brand/30">
            <span className="w-2 h-2 bg-brand rounded-full mr-2 animate-pulse"></span>
            <span className="text-brand font-medium">Featured Review</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            The Future of Tech & Electronics Reviews
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed animate-fade-in delay-300">
            Discover cutting-edge technology through in-depth reviews, exclusive insights, and futuristic perspectives on the devices shaping tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/product-reviews">
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-gradient-to-r from-brand to-cyan-400 text-background hover:shadow-[0_0_30px_rgba(0,255,191,0.5)] hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg"
              >
                Explore Latest Reviews
              </Button>
            </Link>
            
            <Link to="/video-reviews">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-brand/50 text-foreground hover:bg-brand/10 hover:border-brand hover:shadow-[0_0_20px_rgba(0,255,191,0.3)] transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Review Videos
              </Button>
            </Link>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2 group-hover:text-cyan-400 transition-colors">500+</div>
              <div className="text-foreground/70">Reviews</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2 group-hover:text-cyan-400 transition-colors">50M+</div>
              <div className="text-foreground/70">Views</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:text-brand transition-colors">24/7</div>
              <div className="text-foreground/70">Updates</div>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-brand rounded-full animate-bounce delay-1000"></div>
        </div>
      </section>
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Featured Articles Grid */}
        <section className="mb-16" aria-labelledby="featured-articles-heading">
          <h1 id="featured-articles-heading" className="text-4xl font-bold text-brand text-center mb-8">Latest Tech News & Reviews</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* Explore Latest Reviews Carousel */}
        <ArticleCarousel
          title="Explore Latest Reviews"
          articles={featuredArticles.slice(1)}
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

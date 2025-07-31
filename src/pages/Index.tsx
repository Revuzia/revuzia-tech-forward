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
      
      <main id="main-content" className="container mx-auto px-4 py-8">
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

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Zap, Cpu, Smartphone, Monitor, Rocket } from "lucide-react";

import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AudioPlayer from "@/components/AudioPlayer";
import BackToTop from "@/components/BackToTop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useArticles, calculateReadTime } from "@/hooks/useArticles";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";
import authorAria from "@/assets/author-aria-avatar.jpg";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import aiPodcastGeopolitics from "@/assets/ai-podcast-geopolitics.jpg";
import aiPodcastWildWest from "@/assets/ai-podcast-wild-west.jpg";
import aiPodcastRapidAscent from "@/assets/ai-podcast-rapid-ascent.jpg";
import aiPodcastCuttingEdge from "@/assets/ai-podcast-cutting-edge.jpg";
import aiPodcastImmediateImpact from "@/assets/ai-podcast-immediate-impact.jpg";
import aiPodcastParadox from "@/assets/ai-podcast-paradox.jpg";
import aiPodcastTrillionTangle from "@/assets/ai-podcast-trillion-tangle.jpg";
import aiPodcastElonLawsuit from "@/assets/ai-podcast-elon-lawsuit.jpg";
import aiPodcastGoldRush from "@/assets/ai-podcast-gold-rush.jpg";
import aiPodcastUnmasked from "@/assets/ai-podcast-unmasked.jpg";
import aiPodcastUnpacked from "@/assets/ai-podcast-unpacked.jpg";
import aiPodcastNewHorizon from "@/assets/ai-podcast-new-horizon.jpg";
import aiPodcastTrillionRace from "@/assets/ai-podcast-trillion-race.jpg";
import authorMilesAvatar from "@/assets/author-miles-avatar-new.jpg";

const Index = () => {
  const { data: techNewsArticles } = useArticles("Tech News");
  const { data: digitalToolsArticles } = useArticles("Digital Tools");
  const { data: productReviewsArticles } = useArticles("Product Reviews");
  const { data: buyingGuidesArticles } = useArticles("Buying Guides");
  
  // Combine tech-news and digital-tools articles for the "Latest Tech and Electronics" section
  const techAndElectrifiedArticles = [
    ...(techNewsArticles || []),
    ...(digitalToolsArticles || [])
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); // Sort by newest first

  // Combine product reviews and buying guides for "Explore Latest Reviews" section
  const reviewArticles = [
    ...(productReviewsArticles || []),
    ...(buyingGuidesArticles || [])
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  
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
      
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[88px] pt-[88px]">
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
          {/* Flying Rocket Ship - Positioned relative to content */}
          <div className="hidden xl:block absolute -left-20 top-1/2 transform -translate-y-1/2 animate-fly-across pointer-events-none z-5">
            <Rocket className="w-56 h-12 text-brand opacity-70 rotate-45 rocket-glow" />
          </div>
          
          {/* Hero Title with Orbiting Elements */}
          <div className="relative inline-block mb-2 md:mb-6">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-center mb-4 md:mb-8 leading-tight">
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
          <p className="text-lg md:text-2xl text-foreground/80 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge technology through in-depth reviews, exclusive insights, and futuristic perspectives on the devices shaping tomorrow.
          </p>
          
          {/* Radiating Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-6 md:mb-0">
            <Button 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              onClick={() => {
                const element = document.getElementById('explore-latest-reviews');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Latest Reviews
            </Button>
              <Button 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              onClick={() => {
                const element = document.getElementById('audio-podcasts-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Listen to the Latest AI Podcasts
            </Button>
          </div>
          
          {/* Tagline */}
          <p className="text-lg md:text-2xl text-foreground/80 mt-4 md:mt-8 font-medium tracking-wide max-w-4xl mx-auto">
            Reliable. Insightful. Transparent.
          </p>
        </div>
      </section>
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        {/* Latest Tech News Section */}
        <section className="mb-20" aria-labelledby="tech-news-heading">
          <div className="relative inline-block w-full text-center mb-8">
            <h2 id="tech-news-heading" className="text-5xl md:text-6xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                The Latest Tech and Digital Tools
                {/* Glow effect layers */}
                 <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  The Latest Tech and Digital Tools
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  The Latest Tech and Digital Tools
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  The Latest Tech and Digital Tools
                </span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto">
            {/* Left side - 2 large featured articles stacked */}
            <div className="lg:col-span-1 space-y-4">
              {techAndElectrifiedArticles && techAndElectrifiedArticles.length > 0 ? (
                <>
                  <ArticleCard 
                    title={techAndElectrifiedArticles[0].title}
                    image={techAndElectrifiedArticles[0].featured_image_url}
                    author={{
                      name: techAndElectrifiedArticles[0].author_name,
                      avatar: "",
                    }}
                    readTime={calculateReadTime(techAndElectrifiedArticles[0].content)}
                    category={techAndElectrifiedArticles[0].category_name}
                    slug={techAndElectrifiedArticles[0].slug}
                    isHero={true} 
                  />
                  {techAndElectrifiedArticles[1] && (
                    <ArticleCard 
                      title={techAndElectrifiedArticles[1].title}
                      image={techAndElectrifiedArticles[1].featured_image_url}
                      author={{
                        name: techAndElectrifiedArticles[1].author_name,
                        avatar: "",
                      }}
                      readTime={calculateReadTime(techAndElectrifiedArticles[1].content)}
                      category={techAndElectrifiedArticles[1].category_name}
                      slug={techAndElectrifiedArticles[1].slug}
                      isHero={true} 
                    />
                  )}
                </>
              ) : (
                <>
                  <ArticleCard 
                    {...featuredArticles.filter(article => article.category === "Tech News")[0]} 
                    isHero={true} 
                  />
                  <ArticleCard 
                    {...featuredArticles.filter(article => article.category === "Get Electrified")[0]} 
                    isHero={true} 
                  />
                </>
              )}
            </div>
            {/* Right side - 4 horizontal rectangles */}
            <div className="lg:col-span-1 grid grid-rows-4 gap-3 h-full">
              {techAndElectrifiedArticles && techAndElectrifiedArticles.length > 2 ? (
                techAndElectrifiedArticles.slice(2, 6).map((article, index) => (
                  <ArticleCard 
                    key={`db-${index}`}
                    title={article.title}
                    image={article.featured_image_url}
                    author={{
                      name: article.author_name,
                      avatar: "",
                    }}
                readTime={article.read_time || calculateReadTime(article.content)}
                    category={article.category_name}
                    slug={article.slug}
                    isHorizontal={true} 
                  />
                ))
              ) : (
                <>
                  {/* 2 more Tech News articles */}
                  {featuredArticles.filter(article => article.category === "Tech News").slice(1, 3).map((article, index) => (
                    <ArticleCard key={`tech-${index}`} {...article} isHorizontal={true} />
                  ))}
                  {/* 2 more Get Electrified articles */}
                  {featuredArticles.filter(article => article.category === "Get Electrified").slice(1, 3).map((article, index) => (
                    <ArticleCard key={`electrified-${index}`} {...article} isHorizontal={true} />
                  ))}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Product Verdicts & Buying Guides */}
        <div id="explore-latest-reviews"></div>
        <section className="mb-20" aria-labelledby="product-verdicts-heading">
          <div className="relative inline-block w-full text-center mb-8">
            <h2 id="product-verdicts-heading" className="text-5xl md:text-6xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Product Verdicts & Buying Guides
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Product Verdicts & Buying Guides
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Product Verdicts & Buying Guides
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  Product Verdicts & Buying Guides
                </span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto">
            {/* Left side - 2 large featured articles stacked */}
            <div className="lg:col-span-1 space-y-4">
              {reviewArticles && reviewArticles.length > 0 ? (
                <>
                  <ArticleCard 
                    title={reviewArticles[0].title}
                    image={reviewArticles[0].featured_image_url}
                    author={{
                      name: reviewArticles[0].author_name,
                      avatar: "",
                    }}
                    readTime={calculateReadTime(reviewArticles[0].content)}
                    category={reviewArticles[0].category_name}
                    slug={reviewArticles[0].slug}
                    isHero={true} 
                  />
                  {reviewArticles[1] && (
                    <ArticleCard 
                      title={reviewArticles[1].title}
                      image={reviewArticles[1].featured_image_url}
                      author={{
                        name: reviewArticles[1].author_name,
                        avatar: "",
                      }}
                      readTime={calculateReadTime(reviewArticles[1].content)}
                      category={reviewArticles[1].category_name}
                      slug={reviewArticles[1].slug}
                      isHero={true} 
                    />
                  )}
                </>
              ) : (
                <>
                  <ArticleCard 
                    {...featuredArticles.filter(article => 
                      article.category === "Product Reviews" || 
                      article.category === "Buying Guides" || 
                      article.category === "Battle of the Brands"
                    )[0]} 
                    isHero={true} 
                  />
                  <ArticleCard 
                    {...featuredArticles.filter(article => 
                      article.category === "Product Reviews" || 
                      article.category === "Buying Guides" || 
                      article.category === "Battle of the Brands"
                    )[1]} 
                    isHero={true} 
                  />
                </>
              )}
            </div>
            {/* Right side - 4 horizontal rectangles */}
            <div className="lg:col-span-1 grid grid-rows-4 gap-3 h-full">
              {reviewArticles && reviewArticles.length > 2 ? (
                reviewArticles.slice(2, 6).map((article, index) => (
                  <ArticleCard 
                    key={`verdict-${index}`}
                    title={article.title}
                    image={article.featured_image_url}
                    author={{
                      name: article.author_name,
                      avatar: "",
                    }}
                    readTime={article.read_time || calculateReadTime(article.content)}
                    category={article.category_name}
                    slug={article.slug}
                    isHorizontal={true} 
                  />
                ))
              ) : (
                featuredArticles.filter(article => 
                  article.category === "Product Reviews" || 
                  article.category === "Buying Guides" || 
                  article.category === "Battle of the Brands"
                ).slice(2, 6).map((article, index) => (
                  <ArticleCard key={`verdict-fallback-${index}`} {...article} isHorizontal={true} />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Listen to the Latest AI Podcasts */}
        <div id="audio-podcasts-section"></div>
        <section className="mb-20">
          <div className="relative inline-block w-full text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-center">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Listen to the Latest AI Podcasts
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Listen to the Latest AI Podcasts
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Listen to the Latest AI Podcasts
                </span>
                <span className="absolute inset-0 text-accent opacity-20 blur-lg animate-pulse">
                  Listen to the Latest AI Podcasts
                </span>
              </span>
            </h2>
          </div>
          
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
              containScroll: "trimSnaps",
              duration: 35
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI's New Horizon: Chips, Copyright, and Resurrecting Lost Films"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_New_Horizon__Chips%2C_Copyright%2C_and_Resurrecting_Lost_Films.mp4"
                  image={aiPodcastNewHorizon}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="44:20"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="The Trillion-Dollar AI Race: Robots, Jobs, and Your Future"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/The_Trillion-Dollar_AI_Race__Robots%2C_Jobs%2C_and_Your_Future.m4a"
                  image={aiPodcastTrillionRace}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="41:30"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI Unleashed: From Elon's Lawsuit to Chatbot Tragedies, Navigating AI's Wild Frontier"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unleashed__From_Elon_s_Lawsuit_to_Chatbot_Tragedies%2C_Navigating_AI_s_Wild_Frontier.m4a"
                  image={aiPodcastElonLawsuit}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="43:25"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI Unleashed: Geopolitics, Jobs, and the Race for Tomorrow's Tech"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unleashed__Geopolitics%2C_Jobs%2C_and_the_Race_for_Tomorrow_s_Tech.m4a"
                  image={aiPodcastGeopolitics}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="45:20"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI's Wild West: Fake Content, Financial Fights, and Failing Safety"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Wild_West__Fake_Content%2C_Financial_Fights%2C_and_Failing_Safety.m4a"
                  image={aiPodcastWildWest}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="38:15"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI's Rapid Ascent: Billions, Space, and the Global Race for Dominance"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Rapid_Ascent__Billions%2C_Space%2C_and_the_Global_Race_for_Dominance.m4a"
                  image={aiPodcastRapidAscent}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="42:30"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI's Cutting Edge: Data Wars, Deepfakes, and the Justice System"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Cutting_Edge__Data_Wars%2C_Deepfakes%2C_and_the_Justice_System.m4a"
                  image={aiPodcastCuttingEdge}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="41:15"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI's Immediate Impact: Job Market Shock, Psychological Peril, and Siri's Stealthy Evolution"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Immediate_Impact__Job_Market_Shock%2C_Psychological_Peril%2C_and_Siri_s_Stealthy_Evolution.m4a"
                  image={aiPodcastImmediateImpact}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="39:45"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="The AI Paradox: From DHL's 'Ja' Flub to Billionaire Battles and Your Digital Future"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/The_AI_Paradox__From_DHL_s__Ja__Flub_to_Billionaire_Battles_and_Your_Digital_Future.m4a"
                  image={aiPodcastParadox}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="44:12"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI's Trillion-Dollar Tangle: Copyright, Warships, and K-12 Coders"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Trillion-Dollar_Tangle__Copyright%2C_Warships%2C_and_K-12_Coders.m4a"
                  image={aiPodcastTrillionTangle}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="46:33"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI Gold Rush: Billions, Battles, and a World Rewritten"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Gold_Rush__Billions%2C_Battles%2C_and_a_World_Rewritten.m4a"
                  image={aiPodcastGoldRush}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="42:15"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI Unpacked: From Your Smart Home to Stadiums and Security Threats"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unpacked__From_Your_Smart_Home_to_Stadiums_and_Security_Threats.m4a"
                  image={aiPodcastUnpacked}
                  author={{
                    name: "Miles Danner",
                    avatar: authorMilesAvatar,
                  }}
                  duration="38 min"
                  isLarge={true}
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <AudioPlayer
                  title="AI Unmasked: Deception, Efficiency, and the Digital Battleground"
                  audioUrl="https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unmasked__Deception%2C_Efficiency%2C_and_the_Digital_Battleground.m4a"
                  image={aiPodcastUnmasked}
                  author={{
                    name: "Revuzia AI",
                    avatar: "",
                  }}
                  duration="38:45"
                  isLarge={true}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <div className="text-center mt-8">
            <Link to="/ai-podcasts">
              <Button className="bg-brand hover:bg-brand/90 text-black font-semibold px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                AI Podcasts
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
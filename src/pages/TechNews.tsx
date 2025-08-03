import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const TechNews = () => {
  const articles = [
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
    },
    {
      title: "Meta's Revolutionary AR Glasses Set to Transform Social Media",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "5 min read",
      category: "Tech News",
      slug: "meta-ar-glasses-social-media",
    },
    // ... more articles would be added here
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Tech News</h1>
          <p className="text-xl text-muted-foreground">Stay updated with the latest technology news and industry developments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechNews;
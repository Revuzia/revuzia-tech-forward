import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const AutomationLLM = () => {
  const articles = [
    {
      title: "Building Smart Workflows with n8n and ChatGPT: Complete Guide",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "12 min read",
      category: "Automation & LLM Tools",
      slug: "n8n-chatgpt-workflows",
    },
    {
      title: "Zapier vs Make vs n8n: The Ultimate Automation Platform Comparison",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "15 min read",
      category: "Automation & LLM Tools",
      slug: "automation-platforms-comparison",
    },
    // More articles coming soon...
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Automation & LLM Tools</h1>
          <p className="text-xl text-muted-foreground">Discover the latest in automation tools, LLM integrations, and workflow optimization</p>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">More Articles Coming Soon!</h3>
            <p className="text-muted-foreground">We're working on exciting content about automation and LLM tools. Check back soon!</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AutomationLLM;
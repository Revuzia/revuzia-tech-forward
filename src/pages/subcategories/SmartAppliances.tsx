import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const SmartAppliances = () => {
  const smartApplianceArticles = [
    {
      title: "Smart Refrigerators 2025: AI-Powered Kitchen Revolution",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "10 min read",
      category: "Get Electrified",
      slug: "smart-refrigerators-2025-ai-kitchen",
    },
    {
      title: "Connected Washing Machines: IoT Laundry Solutions",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "8 min read",
      category: "Get Electrified",
      slug: "connected-washing-machines-iot-laundry",
    },
    {
      title: "Smart Thermostats: Energy-Efficient Climate Control",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "7 min read",
      category: "Get Electrified",
      slug: "smart-thermostats-energy-efficient",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Smart Appliances</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Discover the latest smart appliances that are revolutionizing home automation and daily living.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartApplianceArticles.map((article, index) => (
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

export default SmartAppliances;
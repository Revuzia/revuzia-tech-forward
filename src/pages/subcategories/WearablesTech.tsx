import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";

const WearablesTech = () => {
  const wearablesArticles = [
    {
      title: "Apple Watch Series 10: Health Monitoring Revolution",
      image: buyingGuideHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "6 min read",
      category: "Wearables & Tech",
      slug: "apple-watch-series-10",
    },
    {
      title: "Meta Quest 4: VR Gaming Reaches New Heights",
      image: buyingGuideHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "9 min read",
      category: "Wearables & Tech",
      slug: "meta-quest-4-vr",
    },
    {
      title: "Fitness Trackers 2025: Complete Health Monitoring Guide",
      image: buyingGuideHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "8 min read",
      category: "Wearables & Tech",
      slug: "fitness-trackers-2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-brand mb-4">Wearables & Tech</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore the latest in wearable technology, smartwatches, fitness trackers, and VR/AR devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {wearablesArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default WearablesTech;
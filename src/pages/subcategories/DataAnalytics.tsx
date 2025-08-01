import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const DataAnalytics = () => {
  const dataAnalyticsArticles = [
    {
      title: "Big Data Processing: Apache Spark vs Hadoop in 2025",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "10 min read",
      category: "Tech News",
      slug: "big-data-spark-vs-hadoop-2025",
    },
    {
      title: "Real-Time Analytics: Building Modern Data Pipelines",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "14 min read",
      category: "Tech News",
      slug: "real-time-analytics-data-pipelines",
    },
    {
      title: "Machine Learning Ops: Deploying Models at Scale",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "12 min read",
      category: "Tech News",
      slug: "machine-learning-ops-deployment",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Data Analytics</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Discover the latest tools, techniques, and technologies in data science and analytics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataAnalyticsArticles.map((article, index) => (
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

export default DataAnalytics;
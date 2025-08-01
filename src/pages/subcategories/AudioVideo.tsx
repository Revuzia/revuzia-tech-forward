import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const AudioVideo = () => {
  const audioVideoArticles = [
    {
      title: "Sony WH-1000XM6 Review: Noise Cancellation Perfected",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "8 min read",
      category: "Product Reviews",
      slug: "sony-wh-1000xm6-review",
    },
    {
      title: "LG C4 OLED TV Review: Gaming and Movies Excellence",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "12 min read",
      category: "Product Reviews",
      slug: "lg-c4-oled-tv-review",
    },
    {
      title: "AirPods Pro 3 vs Sony WF-1000XM5: Ultimate Comparison",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "10 min read",
      category: "Product Reviews",
      slug: "airpods-pro-3-vs-sony-wf-1000xm5",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Audio & Video</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            In-depth reviews of headphones, speakers, TVs, and home entertainment systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audioVideoArticles.map((article, index) => (
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

export default AudioVideo;
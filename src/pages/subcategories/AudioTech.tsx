import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const AudioTech = () => {
  const audioTechArticles = [
    {
      title: "Spatial Audio Technology: The Future of Sound",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "9 min read",
      category: "Get Electrified",
      slug: "spatial-audio-technology-future-sound",
    },
    {
      title: "Wireless Audio Codecs: LDAC vs aptX HD Comparison",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "11 min read",
      category: "Get Electrified",
      slug: "wireless-audio-codecs-ldac-aptx",
    },
    {
      title: "Smart Speakers Evolution: AI-Powered Audio Assistants",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "8 min read",
      category: "Get Electrified",
      slug: "smart-speakers-ai-audio-assistants",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Audio Tech</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Explore cutting-edge audio technologies, from spatial sound to wireless innovations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audioTechArticles.map((article, index) => (
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

export default AudioTech;
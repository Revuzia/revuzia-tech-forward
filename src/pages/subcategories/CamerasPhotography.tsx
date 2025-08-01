import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const CamerasPhotography = () => {
  const cameraArticles = [
    {
      title: "Canon EOS R6 Mark III Review: Professional Photography Evolved",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "15 min read",
      category: "Product Reviews",
      slug: "canon-eos-r6-mark-iii-review",
    },
    {
      title: "Sony A7R VI vs Nikon Z9: Mirrorless Camera Showdown",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "18 min read",
      category: "Product Reviews",
      slug: "sony-a7r-vi-vs-nikon-z9",
    },
    {
      title: "DJI Action 5 Pro Review: Action Camera Excellence",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "11 min read",
      category: "Product Reviews",
      slug: "dji-action-5-pro-review",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Cameras & Photography</h1>
          <p className="text-xl text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Professional camera reviews, photography gear guides, and imaging technology insights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cameraArticles.map((article, index) => (
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

export default CamerasPhotography;
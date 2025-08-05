import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";

const SmartphonesTablets = () => {
  const smartphoneArticles = [
    {
      title: "iPhone 16 Pro Max: Revolutionary Camera System Deep Dive",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "8 min read",
      category: "Smartphones & Tablets",
      slug: "iphone-16-pro-max-camera",
    },
    {
      title: "Samsung Galaxy S25 Ultra: The Future of Mobile Photography",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "10 min read",
      category: "Smartphones & Tablets",
      slug: "galaxy-s25-ultra-photography",
    },
    {
      title: "iPad Pro M4: Professional Tablet Computing Redefined",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "7 min read",
      category: "Smartphones & Tablets",
      slug: "ipad-pro-m4-review",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Smartphones & Tablets - Product Reviews | REVUZIA</title>
        <meta name="description" content="Latest smartphone and tablet reviews with in-depth analysis of performance, cameras, and features." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/product-reviews">Product Reviews</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Smartphones & Tablets</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-brand mb-4">Smartphones & Tablets</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the latest smartphones, tablets, and mobile technology reviews with in-depth analysis of performance, cameras, and features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {smartphoneArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default SmartphonesTablets;
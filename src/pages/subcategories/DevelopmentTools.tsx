import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import BackToTop from "@/components/BackToTop";
import { useArticles } from "@/hooks/useArticles";
import { Link } from "react-router-dom";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const DevelopmentTools = () => {
  const { data: articles, isLoading } = useArticles("Product Reviews", "development-tools");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Development Tools - Product Reviews | REVUZIA</title>
        <meta name="description" content="Reviews of code editors, IDEs, Git tools, and other software development tools including VSCode, JetBrains IDEs, and more." />
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
              <BreadcrumbPage>Development Tools</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-brand mb-4">Development Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            In-depth reviews of code editors, IDEs, version control tools, and other essential software development utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/80">Loading articles...</p>
            </div>
          ) : articles && articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                image={article.featured_image_url}
                author={{
                  name: article.author_name,
                  avatar: "",
                }}
                readTime={`${Math.ceil(article.content.length / 1000)} min read`}
                category="Development Tools"
                slug={article.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Coming Soon</h3>
              <p className="text-foreground/80 mb-6">
                We're working on bringing you detailed reviews of development tools like VSCode, JetBrains IDEs, Git tools, and more.
              </p>
              <Link 
                to="/product-reviews" 
                className="inline-flex items-center px-6 py-3 bg-brand text-background rounded-lg hover:bg-brand/90 transition-colors"
              >
                Browse All Product Reviews
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default DevelopmentTools;
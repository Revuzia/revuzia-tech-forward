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

const AIDevelopmentTools = () => {
  const { data: articles, isLoading } = useArticles("Tech News", "ai-development-tools");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Development Tools - Tech News | REVUZIA</title>
        <meta name="description" content="Latest news and reviews on AI development tools including Cursor, Claude Code, GitHub Copilot, and more coding assistants." />
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
                <Link to="/tech-news">Tech News</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>AI Development Tools</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-brand mb-4">AI Development Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stay updated on the latest AI-powered development tools, coding assistants, and automation platforms that are revolutionizing software development.
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
                readTime={article.read_time || `${Math.ceil(article.content.length / 1000)} min read`}
                category="AI Development Tools"
                slug={article.slug}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Coming Soon</h3>
              <p className="text-foreground/80 mb-6">
                We're working on bringing you the latest articles about AI development tools like Cursor, Claude Code, GitHub Copilot, and more.
              </p>
              <Link 
                to="/tech-news" 
                className="inline-flex items-center px-6 py-3 bg-brand text-background rounded-lg hover:bg-brand/90 transition-colors"
              >
                Browse All Tech News
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

export default AIDevelopmentTools;
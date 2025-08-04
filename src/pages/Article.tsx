import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useArticle, incrementArticleViews } from "@/hooks/useArticles";
import { ArrowLeft, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { formatArticleContent } from "@/utils/contentFormatter";

// Import author images
import authorAriaAvatar from "@/assets/author-aria-avatar.jpg";
import authorAria from "@/assets/author-aria.jpg";
import authorImaniAvatar from "@/assets/author-imani-avatar-new.jpg";
import authorImani from "@/assets/author-imani.jpg";
import authorMilesAvatar from "@/assets/author-miles-avatar-new.jpg";
import authorMiles from "@/assets/author-miles.jpg";
import authorRajAvatar from "@/assets/author-raj-avatar-new.jpg";
import authorRaj from "@/assets/author-raj.jpg";
import authorTheoAvatar from "@/assets/author-theo-avatar-new.jpg";
import authorZaraAvatar from "@/assets/author-zara-avatar-new.jpg";

const Article = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { data: article, isLoading, error } = useArticle(slug || "");
  const { toast } = useToast();
  const viewIncrementedRef = useRef(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (article && !viewIncrementedRef.current) {
      const timer = setTimeout(() => {
        incrementArticleViews(article.slug);
        viewIncrementedRef.current = true;
      }, 3000); // 3 second delay to ensure genuine view

      return () => clearTimeout(timer);
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-muted rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | Revuzia</title>
        <meta name="description" content={article.excerpt || `Read ${article.title} on Revuzia - Your trusted source for tech news and reviews.`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${article.title} | Revuzia`} />
        <meta property="og:description" content={article.excerpt || `Read ${article.title} on Revuzia - Your trusted source for tech news and reviews.`} />
        <meta property="og:image" content={article.featured_image_url || "https://revuzia.com/lovable-uploads/4bd7c322-2c67-44ee-b0dd-07a2a91f95e0.png"} />
        <meta property="og:url" content={`https://revuzia.com/article/${article.slug}`} />
        <meta property="og:site_name" content="Revuzia" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${article.title} | Revuzia`} />
        <meta name="twitter:description" content={article.excerpt || `Read ${article.title} on Revuzia - Your trusted source for tech news and reviews.`} />
        <meta name="twitter:image" content={article.featured_image_url || "https://revuzia.com/lovable-uploads/4bd7c322-2c67-44ee-b0dd-07a2a91f95e0.png"} />
        
        {/* Article specific */}
        <meta property="article:author" content={article.author_name} />
        <meta property="article:published_time" content={article.created_at} />
        <meta property="article:section" content={article.category_name} />
        {article.subCategory_name && <meta property="article:tag" content={article.subCategory_name} />}
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt || `Read ${article.title} on Revuzia`,
            "image": article.featured_image_url,
            "author": {
              "@type": "Person",
              "name": article.author_name
            },
            "publisher": {
              "@type": "Organization",
              "name": "Revuzia",
              "logo": {
                "@type": "ImageObject",
                "url": "https://revuzia.com/lovable-uploads/4bd7c322-2c67-44ee-b0dd-07a2a91f95e0.png"
              }
            },
            "datePublished": article.created_at,
            "dateModified": article.created_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://revuzia.com/article/${article.slug}`
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link 
            to={category ? `/${category}` : "/"} 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {category ? category.replace('-', ' ') : 'Home'}
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary">{article.category_name}</Badge>
              {article.subCategory_name && (
                <Badge variant="outline">{article.subCategory_name}</Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-brand mb-6 leading-tight font-['Poppins',sans-serif] relative">
              <span className="relative inline-block">
                {article.title}
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-brand opacity-60 blur-sm animate-pulse">
                  {article.title}
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  {article.title}
                </span>
                <span className="absolute inset-0 text-brand opacity-20 blur-lg animate-pulse">
                  {article.title}
                </span>
              </span>
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={(() => {
                    const authorImages = {
                      "Zara Velez": {
                        main: "/lovable-uploads/zara-velez-team-final.png",
                        avatar: authorZaraAvatar
                      },
                      "Theo Chan": {
                        main: "/lovable-uploads/theo-chan-team-final.png", 
                        avatar: authorTheoAvatar
                      },
                      "Aria Lin": {
                        main: authorAria,
                        avatar: authorAriaAvatar
                      },
                      "Miles Danner": {
                        main: authorMiles,
                        avatar: authorMilesAvatar
                      },
                      "Raj Malhotra": {
                        main: authorRaj,
                        avatar: authorRajAvatar
                      },
                      "Imani Brooks": {
                        main: authorImani,
                        avatar: authorImaniAvatar
                      }
                    };
                    const authorData = authorImages[article.author_name as keyof typeof authorImages];
                    if (!authorData) return "/placeholder.svg";
                    
                    // Use a simple hash of the article slug to determine which image to show
                    const hash = article.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
                    return hash % 2 === 0 ? authorData.main : authorData.avatar;
                  })()} alt={article.author_name} />
                  <AvatarFallback>
                    {article.author_name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{article.author_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(article.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-muted-foreground">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{article.view_count} views</span>
              </div>
            </div>

            {article.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {article.excerpt}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {article.featured_image_url && (
            <div className="mb-8">
              <img 
                src={article.featured_image_url} 
                alt={article.title}
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="font-['Poppins',sans-serif] text-foreground leading-relaxed space-y-6 article-header-glow
              prose prose-lg max-w-none
              prose-headings:text-brand prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
              prose-h2:text-brand prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
              prose-p:text-foreground prose-p:mb-6 prose-p:leading-relaxed
              prose-strong:text-foreground prose-em:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
              prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-muted prose-pre:border
              prose-img:rounded-lg prose-img:shadow-md prose-img:max-w-[40%] prose-img:mx-auto
              dark:prose-invert"
            dangerouslySetInnerHTML={{ 
              __html: formatArticleContent(article.content)
            }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
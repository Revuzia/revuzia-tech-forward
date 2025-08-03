import { useParams, Link } from 'react-router-dom';
import { useArticle, useViewTracking } from '@/hooks/useArticles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Badge } from '@/components/ui/badge';
import { Calendar, Eye, User } from 'lucide-react';
import { format } from 'date-fns';

const Article = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { article, loading, error } = useArticle(slug || '');
  
  // Track view when article loads
  useViewTracking(article?.id || '');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded"></div>
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
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/" 
              className="text-brand hover:underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-brand" onClick={() => window.scrollTo(0, 0)}>Home</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/${category}`} 
            className="hover:text-brand capitalize"
            onClick={() => window.scrollTo(0, 0)}
          >
            {category?.replace('-', ' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="bg-brand/10 text-brand border-brand/20">
              {article.category_name.replace('-', ' ').toUpperCase()}
            </Badge>
            {article.subCategory_name && (
              <Badge variant="outline">
                {article.subCategory_name}
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By {article.author_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.created_at}>
                {format(new Date(article.created_at), 'MMM dd, yyyy')}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{article.view_count.toLocaleString()} views</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.featured_image_url && (
          <div className="mb-8">
            <img
              src={article.featured_image_url}
              alt={article.title}
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Article Excerpt */}
        {article.excerpt && (
          <div className="mb-8 p-6 bg-muted/50 rounded-lg border-l-4 border-brand">
            <p className="text-lg text-muted-foreground italic leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>{article.view_count.toLocaleString()} views</span>
            </div>
            
            <Link
              to={`/${category}`}
              className="text-brand hover:underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              ← Back to {category?.replace('-', ' ')}
            </Link>
          </div>
        </footer>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Article;
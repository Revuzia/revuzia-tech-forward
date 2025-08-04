import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Eye } from 'lucide-react';
import { formatArticleContent } from '@/utils/contentFormatter';

// Import author images
import authorAriaAvatar from '@/assets/author-aria-avatar.jpg';
import authorImaniAvatar from '@/assets/author-imani-avatar-new.jpg';
import authorMilesAvatar from '@/assets/author-miles-avatar-new.jpg';
import authorRajAvatar from '@/assets/author-raj-avatar-new.jpg';
import authorTheoAvatar from '@/assets/author-theo-avatar-new.jpg';
import authorZaraAvatar from '@/assets/author-zara-avatar-new.jpg';

const authorImages = {
  'Aria Lin': authorAriaAvatar,
  'Imani Brooks': authorImaniAvatar,
  'Miles Danner': authorMilesAvatar,
  'Raj Malhotra': authorRajAvatar,
  'Theo Chan': authorTheoAvatar,
  'Zara Velez': authorZaraAvatar,
};

const ArticlePreview = () => {
  const [previewData, setPreviewData] = useState<any>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load preview data from localStorage
    const data = localStorage.getItem('article-preview');
    if (data) {
      setPreviewData(JSON.parse(data));
    }
  }, []);

  if (!previewData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <p className="text-foreground/80">No preview data available</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getAuthorImage = (authorName: string) => {
    return authorImages[authorName] || authorAriaAvatar;
  };

  const formatCategoryName = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{previewData.title} - Article Preview</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Preview Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-yellow-600" />
            <span className="font-medium text-yellow-800 dark:text-yellow-200">
              Article Preview Mode
            </span>
          </div>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
            This is a preview of how your article will appear when published.
          </p>
        </div>

        {/* Back Link */}
        <div className="mb-6">
          <button 
            onClick={() => window.close()}
            className="flex items-center gap-2 text-brand hover:text-brand/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Close Preview
          </button>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight">
            {previewData.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              {formatCategoryName(previewData.category_name)}
            </Badge>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <Avatar className="w-12 h-12">
              <AvatarImage 
                src={getAuthorImage(previewData.author_name)} 
                alt={previewData.author_name}
              />
              <AvatarFallback>
                {previewData.author_name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-foreground">{previewData.author_name}</p>
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {previewData.featured_image_url && (
          <div className="mb-8">
            <img
              src={previewData.featured_image_url}
              alt={previewData.title}
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: formatArticleContent(previewData.content) 
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePreview;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Save, Eye, AlertCircle, FileText, Split } from 'lucide-react';

interface ArticleData {
  id?: string;
  title: string;
  slug: string;
  content: string;
  content2: string;
  contentsplit: boolean;  // Note: lowercase in DB
  splittype: 'natural' | 'fallback' | 'hard' | 'none';  // Note: lowercase in DB
  totaloriginallength: number;  // Note: lowercase in DB
  featured_image_url: string;
  author_name: string;
  category_name: string;
  subcategory_name?: string;
  status: 'draft' | 'published';
}

const ArticleEditor = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  // Article state
  const [title, setTitle] = useState('');
  const [articleSlug, setArticleSlug] = useState('');
  const [content, setContent] = useState('');
  const [content2, setContent2] = useState('');
  const [contentSplit, setContentSplit] = useState(false);
  const [splitType, setSplitType] = useState<'natural' | 'fallback' | 'hard' | 'none'>('none');
  const [totalOriginalLength, setTotalOriginalLength] = useState(0);
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load article if editing existing one
  useEffect(() => {
    const loadArticle = async () => {
      if (slug && slug !== 'new') {
        try {
          const { data, error } = await supabase
            .from('articles')
            .select('*')
            .eq('slug', slug)
            .single();

          if (error) throw error;

          if (data) {
            setTitle(data.title);
            setArticleSlug(data.slug);
            setContent(data.content || '');
            setContent2(data.content2 || '');
            setContentSplit(data.contentsplit || false);  // Map lowercase DB field
            setSplitType((data.splittype as 'natural' | 'fallback' | 'hard' | 'none') || 'none');      // Map lowercase DB field with type assertion
            setTotalOriginalLength(data.totaloriginallength || data.content?.length || 0);  // Map lowercase DB field
            setFeaturedImageUrl(data.featured_image_url || '');
            setAuthorName(data.author_name || '');
            setCategoryName(data.category_name || '');
            setSubcategoryName(data.subcategory_name || '');
            setStatus((data.status as 'draft' | 'published') || 'draft');  // Type assertion for status
          }
        } catch (error) {
          console.error('Error loading article:', error);
          toast({
            title: "Error",
            description: "Failed to load article",
            variant: "destructive",
          });
        }
      }
      setIsLoading(false);
    };

    loadArticle();
  }, [slug, toast]);

  // Apply brand colors to headings in content
  const applyHeadingColors = (htmlContent: string): string => {
    return htmlContent
      .replace(/<h2([^>]*)>/gi, '<h2$1 style="color:#06d6a0;font-size:2rem;font-weight:700">')
      .replace(/<h3([^>]*)>/gi, '<h3$1 style="color:#06d6a0;font-size:1.5rem;font-weight:600">')
      .replace(/<h4([^>]*)>/gi, '<h4$1 style="color:#06d6a0;font-size:1.25rem;font-weight:600">');
  };

  // Merge content parts for saving/publishing
  const getMergedContent = (): string => {
    const mergedContent = content + content2;
    return applyHeadingColors(mergedContent);
  };

  // Generate slug from title
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Auto-generate slug when title changes
  useEffect(() => {
    if (title && (!slug || slug === 'new')) {
      setArticleSlug(generateSlug(title));
    }
  }, [title, slug]);

  // Save article
  const saveArticle = async (publishStatus: 'draft' | 'published' = status) => {
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Article title is required",
        variant: "destructive",
      });
      return;
    }

    if (!articleSlug.trim()) {
      toast({
        title: "Error",
        description: "Article slug is required",
        variant: "destructive",
      });
      return;
    }

    const finalContent = getMergedContent();
    
    if (finalContent.length < 100) {
      toast({
        title: "Error",
        description: "Article content too short",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    try {
      const articleData = {
        title: title.trim(),
        slug: articleSlug.trim(),
        content: finalContent, // Always save merged content
        content2: '', // Don't save separate parts
        contentsplit: false, // Reset split flag after merging (lowercase for DB)
        splittype: 'none' as const, // Reset split type (lowercase for DB)
        totaloriginallength: finalContent.length, // Use lowercase for DB
        featured_image_url: featuredImageUrl.trim(),
        author_name: authorName.trim(),
        category_name: categoryName.trim(),
        subcategory_name: subcategoryName.trim() || null,
        status: publishStatus,
      };

      let result;
      if (slug && slug !== 'new') {
        // Update existing article
        result = await supabase
          .from('articles')
          .update(articleData)
          .eq('slug', slug);
      } else {
        // Create new article
        result = await supabase
          .from('articles')
          .insert([articleData]);
      }

      if (result.error) throw result.error;

      toast({
        title: "Success",
        description: `Article ${publishStatus === 'published' ? 'published' : 'saved'} successfully`,
      });

      // Navigate to the article if it's new
      if (slug === 'new') {
        navigate(`/admin/articles/${articleSlug}`);
      }
      
    } catch (error) {
      console.error('Error saving article:', error);
      toast({
        title: "Error",
        description: "Failed to save article",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Preview article
  const previewArticle = () => {
    const finalContent = getMergedContent();
    const previewData = {
      title,
      content: finalContent,
      slug: articleSlug,
      author_name: authorName,
      category_name: categoryName,
      featured_image_url: featuredImageUrl,
    };
    
    // Store preview data and open in new tab
    localStorage.setItem('article-preview', JSON.stringify(previewData));
    window.open('/article-preview', '_blank');
  };

  // Character count warnings
  const showContentWarning = content.length > 9500;
  const showContent2Warning = content2.length > 9500;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <p className="text-foreground/80">Loading article editor...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{slug === 'new' ? 'New Article' : `Edit: ${title}`} - Revuzia Editor</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {slug === 'new' ? 'Create New Article' : 'Edit Article'}
          </h1>
          <div className="flex items-center gap-4">
            <Badge variant={status === 'published' ? 'default' : 'secondary'}>
              {status}
            </Badge>
            {contentSplit && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Split className="w-3 h-3" />
                Content Split ({splitType})
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Article Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter article title"
                  className="text-lg"
                />
              </div>
              
              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={articleSlug}
                  onChange={(e) => setArticleSlug(e.target.value)}
                  placeholder="article-url-slug"
                />
              </div>
            </div>

            {/* Content Editors */}
            <div className="space-y-6">
              {contentSplit && (
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Split className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-800 dark:text-green-200">
                      Content Split Automatically
                    </span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    ✅ Content split using <strong>{splitType}</strong> method
                    <br />Total original length: {totalOriginalLength.toLocaleString()} characters
                  </p>
                </div>
              )}

              {/* Content Part 1 */}
              <div>
                <Label htmlFor="content" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {contentSplit ? 'Article Content - Part 1' : 'Article Content'}
                </Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter article content here..."
                  className="min-h-[400px] font-mono text-sm"
                />
                <div className="flex items-center justify-between mt-2">
                  <small className="text-muted-foreground">
                    {contentSplit ? 'Part 1: ' : ''}{content.length.toLocaleString()}/{contentSplit ? '10,000' : '∞'} chars
                  </small>
                  {showContentWarning && (
                    <div className="flex items-center gap-1 text-amber-600">
                      <AlertCircle className="w-4 h-4" />
                      <small>Approaching character limit</small>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Part 2 (only show if contentSplit is true) */}
              {contentSplit && (
                <div>
                  <Label htmlFor="content2" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Article Content - Part 2
                  </Label>
                  <Textarea
                    id="content2"
                    value={content2}
                    onChange={(e) => setContent2(e.target.value)}
                    placeholder="Continuation of article content..."
                    className="min-h-[400px] font-mono text-sm"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <small className="text-muted-foreground">
                      Part 2: {content2.length.toLocaleString()}/10,000 chars
                    </small>
                    {showContent2Warning && (
                      <div className="flex items-center gap-1 text-amber-600">
                        <AlertCircle className="w-4 h-4" />
                        <small>Approaching character limit</small>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Total content info */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-sm text-muted-foreground">
                  <strong>Total content length:</strong> {(content + content2).length.toLocaleString()} characters
                  <br />
                  <strong>Estimated read time:</strong> {Math.ceil((content + content2).length / 1000)} minutes
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="space-y-3">
              <Button
                onClick={() => saveArticle('draft')}
                disabled={isSaving}
                className="w-full"
                variant="outline"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              
              <Button
                onClick={() => saveArticle('published')}
                disabled={isSaving}
                className="w-full"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'Publishing...' : 'Publish'}
              </Button>
              
              <Button
                onClick={previewArticle}
                disabled={!title || !content}
                className="w-full"
                variant="secondary"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>

            {/* Meta Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Author name"
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Main category"
                />
              </div>

              <div>
                <Label htmlFor="subcategory">Subcategory</Label>
                <Input
                  id="subcategory"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
                  placeholder="Subcategory (optional)"
                />
              </div>

              <div>
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  value={featuredImageUrl}
                  onChange={(e) => setFeaturedImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleEditor;
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import BackToTop from "@/components/BackToTop";
import { useArticles, calculateReadTime } from "@/hooks/useArticles";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Connect to real articles database using useArticles hook
  const { data: articlesData } = useArticles();

  useEffect(() => {
    if (query && articlesData) {
      setIsLoading(true);
      // Search through real articles data
      const results = articlesData.filter(article =>
        article.title?.toLowerCase().includes(query.toLowerCase()) ||
        article.category_name?.toLowerCase().includes(query.toLowerCase()) ||
        article.subcategory_name?.toLowerCase().includes(query.toLowerCase()) ||
        article.content?.toLowerCase().includes(query.toLowerCase()) ||
        article.author_name?.toLowerCase().includes(query.toLowerCase())
      ).map(article => ({
        title: article.title,
        image: article.featured_image_url,
        author: {
          name: article.author_name,
          avatar: `/lovable-uploads/${article.author_name?.toLowerCase().replace(/\s+/g, '-')}-avatar.jpg`
        },
        readTime: calculateReadTime(article.content),
        category: article.category_name,
        subcategory: article.subcategory_name,
        slug: article.slug
      }));
      setSearchResults(results);
      setIsLoading(false);
    } else {
      setSearchResults([]);
    }
  }, [query, articlesData]);

  const handleNewSearch = (newQuery: string) => {
    window.location.href = `/search?q=${encodeURIComponent(newQuery)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Search Results</h1>
            {query && (
              <p className="text-xl text-muted-foreground mb-6">
                Showing results for: <span className="text-brand font-medium">"{query}"</span>
              </p>
            )}
            
            {/* Search Bar */}
            <SearchBar 
              onSearch={handleNewSearch}
              className="max-w-2xl"
            />
          </div>

          {/* Results */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
              <p className="mt-4 text-muted-foreground">Searching...</p>
            </div>
          ) : query && searchResults.length > 0 ? (
            <div>
              <p className="text-muted-foreground mb-6">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </div>
            </div>
          ) : query ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">No results found</h2>
              <p className="text-muted-foreground mb-6">
                Try searching with different keywords or browse our categories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/tech-news" className="text-brand hover:underline">Tech News</a>
                <a href="/product-reviews" className="text-brand hover:underline">Product Reviews</a>
                <a href="/buying-guides" className="text-brand hover:underline">Buying Guides</a>
                <a href="/get-electrified" className="text-brand hover:underline">Get Electrified</a>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Start your search</h2>
              <p className="text-muted-foreground">
                Enter keywords to find articles, reviews, and guides.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Search;
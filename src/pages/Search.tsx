import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import BackToTop from "@/components/BackToTop";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock search results - in a real app, this would be an API call
  const allArticles = [
    {
      title: "Apple's Student Winners and Google's AI Surge Signal a New Era—But the Hardware Market Tells a Different Story",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "7 min read",
      category: "Tech News",
      slug: "apple-google-ai-hardware-market",
    },
    {
      title: "The Definitive Tech Buying Guide 2025: 5 Essential Gadgets That Offer Incredible Value Right Now",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "12 min read",
      category: "Buying Guides",
      slug: "tech-buying-guide-2025",
    },
    {
      title: "Revolutionary Gaming Laptops: RTX 5090 Performance Benchmark",
      image: gamingHero,
      author: {
        name: "Zara Velez",
        avatar: authorZara,
      },
      readTime: "8 min read",
      category: "Product Reviews",
      slug: "rtx-5090-gaming-laptops",
    },
    {
      title: "Samsung Galaxy S25 Ultra: The Photography Revolution",
      image: buyingGuideHero,
      author: {
        name: "Theo Chan",
        avatar: authorTheo,
      },
      readTime: "6 min read",
      category: "Get Electrified",
      slug: "samsung-s25-ultra-photography",
    },
  ];

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const results = allArticles.filter(article =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.category.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setIsLoading(false);
      }, 500);
    } else {
      setSearchResults([]);
    }
  }, [query]);

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
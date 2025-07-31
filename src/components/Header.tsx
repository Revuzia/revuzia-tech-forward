import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Tech News", path: "/tech-news" },
    { name: "Get Electrified", path: "/get-electrified" },
    { name: "Product Reviews", path: "/product-reviews" },
    { name: "Buying Guides", path: "/buying-guides" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between gap-4" role="navigation" aria-label="Main navigation">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 flex-shrink-0 hover:opacity-90 transition-opacity duration-300"
              aria-label="Revuzia – Home"
            >
              <div className="relative group">
                <div className="text-3xl font-bold text-brand tracking-wider transform hover:scale-110 transition-all duration-500 relative">
                  <span className="relative inline-block">
                    REVUZIA
                    {/* Animated geometric elements */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-brand rotate-45 opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-brand rounded-full opacity-80 animate-bounce"></div>
                    <div className="absolute top-1/2 -right-4 w-1 h-6 bg-brand/50 transform -translate-y-1/2 animate-pulse"></div>
                    <div className="absolute top-1/2 -left-4 w-1 h-4 bg-brand/30 transform -translate-y-1/2 animate-pulse delay-300"></div>
                    {/* Orbiting elements */}
                    <div className="absolute top-1/2 left-1/2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="absolute w-1 h-1 bg-brand rounded-full animate-spin" style={{
                        animation: 'spin 3s linear infinite',
                        transformOrigin: '16px 0px'
                      }}></div>
                    </div>
                  </span>
                </div>
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-brand hover:text-brand/80 transition-colors duration-300 font-medium relative group ${
                      isActive ? 'text-brand' : 'text-brand'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Search Bar - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center max-w-md ml-auto" role="search">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search reviews, guides…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 border-border focus:border-brand focus:ring-brand bg-background/50"
                  aria-label="Search Revuzia"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-brand/10"
                  aria-label="Submit search"
                >
                  <Search className="h-4 w-4 text-brand" />
                </Button>
              </div>
            </form>


            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mt-4 mb-4" role="search">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search reviews, guides…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10 border-border focus:border-brand focus:ring-brand"
                    aria-label="Search Revuzia"
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    variant="ghost" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4 text-brand" />
                  </Button>
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block text-foreground hover:text-brand transition-colors duration-300 font-medium py-2 ${
                        isActive ? 'text-brand' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
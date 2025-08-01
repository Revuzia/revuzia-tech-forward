import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X as CloseIcon, Cpu, Smartphone, Monitor, Zap, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { 
      name: "Tech News", 
      path: "/tech-news",
      subcategories: [
        { name: "AI & Machine Learning", path: "/subcategories/ai-machine-learning" },
        { name: "Cybersecurity", path: "/subcategories/cybersecurity" },
        { name: "Automation & LLM Tools", path: "/subcategories/automation-llm" },
        { name: "Blockchain & Crypto", path: "/subcategories/blockchain-crypto" }
      ]
    },
    { 
      name: "Get Electrified", 
      path: "/get-electrified",
      subcategories: [
        { name: "Home Automation", path: "/home-automation" },
        { name: "New Electronics", path: "/new-electronics" },
        { name: "Wearables Tech", path: "/subcategories/wearables-tech" },
        { name: "Audio Tech", path: "/subcategories/audio-tech" },
        { name: "Display Tech", path: "/subcategories/display-tech" }
      ]
    },
    { 
      name: "Product Reviews", 
      path: "/product-reviews",
      subcategories: [
        { name: "Smartphones & Tablets", path: "/subcategories/smartphones-tablets" },
        { name: "Wearables Tech", path: "/subcategories/wearables-tech" },
        { name: "Gaming & PCs", path: "/gaming-pcs" },
        { name: "Audio & Video", path: "/subcategories/audio-video" },
        { name: "Cameras & Photography", path: "/subcategories/cameras-photography" }
      ]
    },
    { 
      name: "Buying Guides", 
      path: "/buying-guides",
      subcategories: [
        { name: "Best in Class", path: "/subcategories/best-in-class" },
        { name: "Best Budget Picks", path: "/subcategories/budget-picks" },
        { name: "Best of 2025", path: "/subcategories/best-of-2025" },
        { name: "Product Comparisons", path: "/subcategories/comparisons" },
        { name: "Value Deals", path: "/subcategories/value-deals" }
      ]
    },
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
              <div className="relative">
                <h1 className="text-4xl font-extrabold font-poppins relative tracking-wide">
                  <span className="relative inline-block text-white drop-shadow-2xl">
                    <span className="inline-block border-2 border-white px-1 mr-1 font-mono transform rotate-12">R</span>EVUZIA
                    {/* Brighter glow effect layers */}
                    <span className="absolute inset-0 text-white opacity-80 blur-sm animate-pulse">
                      REVUZIA
                    </span>
                    <span className="absolute inset-0 text-brand opacity-60 blur-md animate-pulse">
                      REVUZIA
                    </span>
                    <span className="absolute inset-0 text-green-300 opacity-40 blur-lg animate-pulse">
                      REVUZIA
                    </span>
                  </span>
                </h1>
                
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <div key={item.name} className="relative group flex items-center">
                    {/* Add dotted separator between categories */}
                    {index > 0 && (
                      <div className="text-white/40 mx-2 select-none flex flex-col gap-0.5 items-center">
                        <span className="w-0.5 h-0.5 bg-white/40 rounded-full"></span>
                        <span className="w-0.5 h-0.5 bg-white/40 rounded-full"></span>
                        <span className="w-0.5 h-0.5 bg-white/40 rounded-full"></span>
                      </div>
                    )}
                    <Link
                      to={item.path}
                      className={`text-white text-sm xl:text-base hover:text-brand transition-colors duration-300 font-poppins font-medium relative flex items-center gap-1 xl:gap-2 whitespace-nowrap ${
                        isActive ? 'text-brand' : 'text-white'
                      }`}
                    >
                      {item.name === "Get Electrified" ? (
                        <span className="lightning-animation">
                          Get Electrified
                        </span>
                      ) : item.name === "Tech News" ? (
                        <span className="tech-news-animation">
                          Tech News
                        </span>
                      ) : item.name === "Product Reviews" ? (
                        <span className="product-reviews-animation">
                          Product Reviews
                        </span>
                      ) : item.name === "Buying Guides" ? (
                        <span className="buying-guides-animation">
                          Buying Guides
                        </span>
                      ) : (
                        item.name
                      )}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {item.subcategories && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-2">
                          {item.subcategories.map((subcat) => (
                            <Link
                              key={subcat.name}
                              to={subcat.path}
                              className="block px-4 py-3 text-white hover:text-brand hover:bg-brand/10 transition-colors duration-200 font-poppins"
                            >
                              {subcat.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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

            {/* User Auth Button - Simple for now */}
            <div className="hidden md:flex items-center">
              <Link to="/auth">
                <Button className="bg-brand hover:bg-brand/90 text-black font-semibold">
                  Sign In
                </Button>
              </Link>
            </div>


            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
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
                      className={`block text-white hover:text-brand transition-colors duration-300 font-poppins font-medium py-2 ${
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
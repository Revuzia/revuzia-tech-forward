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
        { name: "AI", path: "/subcategories/ai" },
        { name: "Robotics", path: "/subcategories/robotics" },
        { name: "Space", path: "/subcategories/space" },
        { name: "Quantum Computing", path: "/subcategories/quantum-computing" },
        { name: "Biotechnology", path: "/subcategories/biotechnology" },
        { name: "Energy Innovation", path: "/subcategories/energy-innovation" },
        { name: "Research Breakthroughs", path: "/subcategories/research-breakthroughs" }
      ]
    },
    { 
      name: "Digital Tools", 
      path: "/digital-tools",
      subcategories: [
        { name: "Apps & Platforms", path: "/subcategories/apps-platforms" },
        { name: "Cloud Services", path: "/subcategories/cloud-services" },
        { name: "Developer Tools", path: "/subcategories/developer-tools" },
        { name: "Automation", path: "/subcategories/automation" },
        { name: "Productivity Software", path: "/subcategories/productivity-software" },
        { name: "AI Tools & Services", path: "/subcategories/ai-tools-services" }
      ]
    },
    { 
      name: "Product Reviews", 
      path: "/reviews",
      subcategories: [
        { name: "Smartphones", path: "/subcategories/smartphones" },
        { name: "Laptops & Computers", path: "/subcategories/laptops-computers" },
        { name: "Tablets", path: "/subcategories/tablets" },
        { name: "Wearables", path: "/subcategories/wearables" },
        { name: "Cameras & Drones", path: "/subcategories/cameras-drones" },
        { name: "Audio", path: "/subcategories/audio" },
        { name: "Video", path: "/subcategories/video" }
      ]
    },
    { 
      name: "Buying Guides", 
      path: "/buying-guides",
      subcategories: [
        { name: "Editors Choice", path: "/subcategories/editors-choice" },
        { name: "Best in Class", path: "/subcategories/best-in-class" },
        { name: "Best Value", path: "/subcategories/best-value" },
        { name: "Premium Pick", path: "/subcategories/premium-pick" },
        { name: "Smart Home Guides", path: "/subcategories/smart-home-guides" }
      ]
    },
    { 
      name: "Battle of the Brands", 
      path: "/battle-of-the-brands",
      subcategories: [
        { name: "Smartphone Showdown", path: "/subcategories/smartphone-showdown" },
        { name: "Laptop Showdown", path: "/subcategories/laptop-showdown" },
        { name: "Gaming Battles", path: "/subcategories/gaming-battles" },
        { name: "Audio Face-off", path: "/subcategories/audio-face-off" },
        { name: "Smart Home Wars", path: "/subcategories/smart-home-wars" },
        { name: "Streaming Wars", path: "/subcategories/streaming-wars" }
      ]
    }
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
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="w-full px-4 py-4">
          <nav className="flex items-center justify-between gap-2 w-full" role="navigation" aria-label="Main navigation">
            {/* Logo - All the way left */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 flex-shrink-0 hover:opacity-90 transition-opacity duration-300"
              aria-label="Revuzia – Home"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative">
                  <h1 className="text-4xl font-extrabold font-poppins relative tracking-wide">
                    <span className="relative inline-block text-white drop-shadow-2xl vintage-neon-text">
                      <span className="inline-block border-2 border-brand px-1 mr-1 font-mono transform rotate-12 vintage-neon-hanging-r" style={{
                        textShadow: `
                          0 0 5px rgb(var(--brand-rgb)),
                          0 0 10px rgb(var(--brand-rgb)),
                          0 0 20px rgb(var(--brand-rgb)),
                          0 0 40px rgb(var(--brand-rgb))
                        `,
                        borderColor: 'rgb(var(--brand-rgb))',
                        color: 'rgb(var(--brand-rgb))',
                        borderRadius: '4px',
                        boxShadow: `
                          0 0 5px rgb(var(--brand-rgb)),
                          inset 0 0 5px rgb(var(--brand-rgb))
                        `
                      }}>R</span>
                      <span className="vintage-neon-text-evuzia" style={{
                        textShadow: `
                          0 0 3px rgb(var(--brand-rgb)),
                          0 0 6px rgb(var(--brand-rgb)),
                          0 0 12px rgb(var(--brand-rgb)),
                          0 0 24px rgb(var(--brand-rgb))
                        `,
                        color: 'rgb(var(--brand-rgb))',
                        filter: 'brightness(0.9) contrast(1.0)'
                      }}>EVUZIA</span>
                    </span>
                  </h1>
                
              </div>
            </Link>

            {/* Navigation Links - Desktop with Proper Centering */}
            <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center mx-8">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <div key={item.name} className="relative group flex items-center">
                    {/* Add dotted separator between categories */}
                    {index > 0 && (
                      <div className="text-white/40 mx-1 xl:mx-2 select-none flex flex-col gap-2.5 items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                      </div>
                    )}
                    <Link
                      to={item.path}
                      className={`text-white text-sm xl:text-base hover:text-brand transition-colors duration-300 font-poppins font-medium relative flex items-center gap-1 xl:gap-2 whitespace-nowrap px-2 xl:px-3 category-light-effect ${
                        isActive ? 'text-brand' : 'text-white'
                      }`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span className="relative z-10">
                        {item.name}
                      </span>
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                    
                    {/* Dropdown Menu - Centered Under Category, Narrower */}
                    {item.subcategories && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-auto min-w-max bg-background/95 backdrop-blur-sm border border-brand/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-2 px-1">
                          <div className="grid grid-cols-1 gap-0.5">
                            {item.subcategories.map((subcat) => (
                              <Link
                                key={subcat.name}
                                to={subcat.path}
                                className="block px-4 py-2 text-foreground hover:text-brand hover:bg-brand/10 transition-colors duration-200 font-poppins text-center rounded-md whitespace-nowrap text-sm"
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                {subcat.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side Actions - All the way right */}
            <div className="flex items-center gap-3 flex-shrink-0 ml-auto pr-0">
              {/* Search Bar - Desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center" role="search">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 lg:w-56 xl:w-64 pr-10 border-border focus:border-brand focus:ring-brand bg-background/50"
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

              {/* User Auth Button */}
              <div className="hidden md:flex items-center">
                <Link to="/auth" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-brand hover:bg-brand/90 text-black font-semibold">
                    Sign In
                  </Button>
                </Link>
              </div>
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
            <div className="lg:hidden mt-4 pb-4 border-t border-border bg-background/95 backdrop-blur-sm rounded-lg">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mt-4 mb-4 px-2" role="search">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10 border-border focus:border-brand focus:ring-brand bg-background/80"
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
              <div className="space-y-2 px-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block text-foreground hover:text-brand transition-colors duration-300 font-poppins font-medium py-3 px-3 rounded-lg hover:bg-brand/10 ${
                        isActive ? 'text-brand bg-brand/10' : ''
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-6 px-2 space-y-3 border-t border-border pt-4">
                <Link to="/auth" onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}>
                  <Button className="w-full bg-brand hover:bg-brand/90 text-black font-semibold">
                    Sign In
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full border-brand text-brand hover:bg-brand/10"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Add subscribe functionality here
                    window.location.href = '#subscribe';
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
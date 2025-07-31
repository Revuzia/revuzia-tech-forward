import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ 
  onSearch, 
  placeholder = "Search reviews, guides…",
  className = ""
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      } else {
        // Navigate to search page with query
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex items-center ${className}`} role="search">
      <div className="relative w-full">
        <Input
          type="search"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pr-10 border-border focus:border-brand focus:ring-brand"
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
  );
};

export default SearchBar;
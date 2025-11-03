import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTours } from "@/contexts/TourContext";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");
  const { currency, setCurrency, setSearchQuery } = useTours();
  const navigate = useNavigate();

  const popularSearches = ["Ha Long Bay", "Sapa", "Hoi An", "Phuket", "Angkor Wat"];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setLocalSearch("");
    setIsSearchOpen(false);
    navigate("/tours");
  };

  const handleLanguageToggle = () => {
    const newCurrency = currency === "USD" ? "VND" : "USD";
    setCurrency(newCurrency);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">AT</span>
            </div>
            <span className="text-xl font-bold bg-ocean-gradient bg-clip-text text-transparent hidden sm:block">
              Asian Tours
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search destinations, tours..."
                className="pl-10 pr-4 h-11 rounded-lg border-border focus:ring-2 focus:ring-primary"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && localSearch.trim()) {
                    handleSearch(localSearch);
                  }
                }}
              />
              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-hover p-4 animate-fade-in">
                  <p className="text-xs text-muted-foreground mb-2">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => handleSearch(search)}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={handleLanguageToggle}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{currency === "USD" ? "EN" : "VI"}</span>
            </button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button variant="default" size="sm">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-in">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search destinations..."
                  className="h-11 pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Log In
                </Button>
                <Button variant="default" className="flex-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

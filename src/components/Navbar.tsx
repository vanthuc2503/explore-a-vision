import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTours } from "@/contexts/TourContext";
import { t } from "@/lib/i18n";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");
  const { currency, setCurrency, setSearchQuery, language, setLanguage } =
    useTours();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const popularSearches = [
    "Van Mieu - Quoc Tu Giam",
    "Ho Chi Minh Museum",
    "National Military Museum",
    "Hoa Lo Prison",
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setLocalSearch("");
    setIsSearchOpen(false);
    navigate("/tours");
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === "EN" ? "VI" : "EN";
    setLanguage(newLanguage);
    // Optional: sync currency with language for user convenience
    setCurrency(newLanguage === "VI" ? "VND" : "USD");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">JG</span>
            </div>
            <span className="text-xl font-bold bg-ocean-gradient bg-clip-text text-transparent hidden sm:block">
              Joigo
            </span>
          </Link>

          {/* Middle Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 mx-6">
            <Link
              to="/blogs"
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              Travel Blog
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder={t(language, "nav_search_placeholder")}
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
                  <p className="text-xs text-muted-foreground mb-2">
                    {t(language, "nav_popular_searches")}
                  </p>
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
              <span className="text-sm font-medium">{language}</span>
            </button>

            {/* Auth Area - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <button
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-2 group"
                  >
                    <Avatar className="w-8 h-8 ring-1 ring-border">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>
                        {user.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {user.name}
                    </span>
                  </button>
                  <Button variant="outline" size="sm" onClick={logout}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" size="sm">
                      {t(language, "nav_login")}
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="default" size="sm">
                      {t(language, "nav_signup")}
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-in">
            <div className="flex flex-col gap-3">
              <Link
                to="/blogs"
                className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors w-max"
              >
                Travel Blog
              </Link>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder={t(language, "nav_search_mobile_placeholder")}
                  className="h-11 pl-10"
                />
              </div>
              <div className="flex gap-2">
                {user ? (
                  <>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate("/profile")}
                    >
                      Hồ sơ
                    </Button>
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={logout}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="flex-1">
                      <Button variant="outline" className="w-full">
                        {t(language, "nav_login")}
                      </Button>
                    </Link>
                    <Link to="/signup" className="flex-1">
                      <Button variant="default" className="w-full">
                        {t(language, "nav_signup")}
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

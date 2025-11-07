import { useState } from "react";
import {
  Search,
  ShieldCheck,
  Award,
  Headphones,
  MapPin,
  Calendar as CalendarIcon,
} from "lucide-react";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import TourCard from "@/components/TourCard";
import LandmarkCard from "@/components/LandmarkCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTours } from "@/contexts/TourContext";
import { t } from "@/lib/i18n";
import { hanoiBlogs } from "@/lib/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import hochiminhMausoleum from "@/assets/lang-bac.jpg";
import nhahatLon from "@/assets/nha-hat-lon.jpg";
import hoHoanKiem from "@/assets/ho-hoan-kiem.jpg";
import vanMieuOffer from "@/assets/van-mieu.jpg";
import hoangThanh from "@/assets/hoang-thanh-thang-long.jpg";

const Index = () => {
  const [heroSearch, setHeroSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { tours, setSearchQuery, language } = useTours();
  const navigate = useNavigate();

  const featuredTours = tours.slice(0, 3);

  const popularSearches = [
    "Van Mieu - Quoc Tu Giam",
    "Ho Chi Minh Museum",
    "National Military Museum",
    "Hoa Lo Prison",
  ];

  const landmarks = [
    {
      image: hochiminhMausoleum,
      name: "Ho Chi Minh Mausoleum, Vietnam",
      nameKey: "idx_landmark_ho_chi_minh" as const,
      destination: "vietnam",
    },
    {
      image: nhahatLon,
      name: "Nha Hat Lon, Vietnam",
      nameKey: "idx_landmark_nha_hat_lon" as const,
      destination: "vietnam",
    },
  ];

  const offers = [
    {
      id: "early-bird",
      title: "Early Bird Special",
      description:
        "Book 30 days in advance and save up to 25% on selected tours",
      image: hoHoanKiem,
      titleKey: "idx_offer_early_bird" as const,
      descKey: "idx_offer_early_bird_desc" as const,
    },
    {
      id: "weekend-getaway",
      title: "Weekend Getaway",
      description: "Perfect weekend tours with special discounts for groups",
      image: vanMieuOffer,
      titleKey: "idx_offer_weekend" as const,
      descKey: "idx_offer_weekend_desc" as const,
    },
    {
      id: "cultural-heritage",
      title: "Cultural Heritage",
      description:
        "Explore ancient temples and historical sites with exclusive offers",
      image: hoangThanh,
      titleKey: "idx_offer_cultural" as const,
      descKey: "idx_offer_cultural_desc" as const,
    },
  ];

  const handleHeroSearch = () => {
    if (heroSearch.trim()) {
      setSearchQuery(heroSearch);
      navigate("/tours");
    }
  };

  const handleLocationSearch = (query: string) => {
    setHeroSearch(query);
    setIsSearchOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Slider */}
        <section className="mb-12">
          <HeroSlider />
        </section>

        {/* Large Search Bar - 3 Sections */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 bg-card border-2 border-orange-500 rounded-xl shadow-soft p-2">
              {/* Section 1: Location Search (Largest) */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder={
                    t(language, "nav_search_placeholder") ||
                    "Tìm kiếm địa điểm..."
                  }
                  className="h-14 pl-12 pr-4 text-base font-semibold border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && heroSearch.trim()) {
                      handleHeroSearch();
                    }
                  }}
                />
                {isSearchOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-4 z-50 animate-fade-in">
                    <p className="text-xs text-muted-foreground mb-2">
                      {t(language, "nav_popular_searches") ||
                        "Tìm kiếm phổ biến"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((search) => (
                        <button
                          key={search}
                          onClick={() => handleLocationSearch(search)}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-orange-500" />

              {/* Section 2: Date Picker */}
              <div className="w-64">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full h-14 justify-start text-left font-semibold border-0 hover:bg-transparent"
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                      {selectedDate ? (
                        <span className="font-semibold">
                          {format(selectedDate, "PPP")}
                        </span>
                      ) : (
                        <span className="text-muted-foreground font-semibold">
                          Chọn ngày đi
                        </span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-orange-500" />

              {/* Section 3: Search Button (Smallest) */}
              <div className="w-32">
                <Button
                  onClick={handleHeroSearch}
                  variant="default"
                  size="lg"
                  className="w-full h-14 text-base font-semibold"
                >
                  <Search className="mr-2 h-5 w-5" />
                  {t(language, "idx_search") || "Tìm"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {t(language, "idx_special_offers")}
            </h2>
            <p className="text-muted-foreground">
              {t(language, "idx_offers_desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/tours?offer=${offer.id}`)}
              >
                <div className="relative h-64 rounded-xl overflow-hidden shadow-hover hover:shadow-xl transition-shadow">
                  <img
                    src={offer.image}
                    alt={t(language, offer.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {t(language, offer.titleKey)}
                    </h3>
                    <p className="text-sm text-white/90 mb-4">
                      {t(language, offer.descKey)}
                    </p>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-white text-primary hover:bg-white/90 font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tours?offer=${offer.id}`);
                      }}
                    >
                      {t(language, "idx_view_offer")}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Tours */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {t(language, "idx_featured_tours")}
              </h2>
              <p className="text-muted-foreground">
                {t(language, "idx_featured_sub")}
              </p>
            </div>
            <Link to="/tours">
              <Button variant="outline">{t(language, "idx_view_all")}</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
        </section>

        {/* Famous Landmarks */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {t(language, "idx_landmarks")}
            </h2>
            <p className="text-muted-foreground">
              {t(language, "idx_landmarks_sub")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landmarks.map((landmark, index) => (
              <LandmarkCard key={index} {...landmark} />
            ))}
          </div>
        </section>

        {/* Travel Blog */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {t(language, "idx_travel_blog")}
              </h2>
              <p className="text-muted-foreground">
                {t(language, "idx_blog_desc")}
              </p>
            </div>
            <Link to="/blogs">
              <Button variant="outline">
                {t(language, "idx_view_all_blog")}
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hanoiBlogs.slice(0, 3).map((blog) => (
              <Link
                key={blog.slug}
                to={`/blogs/${blog.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-hover transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t(
                        language,
                        `blog_${blog.slug.replace(/-/g, "_")}_title` as any
                      ) || blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {t(
                        language,
                        `blog_${blog.slug.replace(/-/g, "_")}_excerpt` as any
                      ) || blog.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Joigo */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {t(language, "idx_why_joigo")}
            </h2>
            <p className="text-muted-foreground">
              {t(language, "idx_why_joigo_desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                {t(language, "idx_trust")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(language, "idx_trust_desc")}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                {t(language, "idx_experience")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(language, "idx_experience_desc")}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                {t(language, "idx_support_247")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(language, "idx_support_247_desc")}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                {t(language, "idx_local")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(language, "idx_local_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

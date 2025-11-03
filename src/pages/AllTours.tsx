import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hanoiBlogs } from "@/lib/blogs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTours } from "@/contexts/TourContext";
import { t } from "@/lib/i18n";

const AllTours = () => {
  const { filteredTours, filters, setFilters, searchQuery, language } =
    useTours();

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely amazing experience! The tour guide was knowledgeable and the itinerary was perfect.",
      tour: "Van Mieu - Quoc Tu Giam",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment:
        "Best ancient temple ever! Everything was well organized and the destinations were breathtaking.",
      tour: "Hoang Thanh Thang Long",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            {t(language, "all_home")}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">
            {t(language, "all_all_tours")}
          </span>
        </div>

        {/* Search Query Display */}
        {searchQuery && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm">
              {t(language, "all_tours_for")}{" "}
              <span className="font-semibold text-primary">
                "{searchQuery}"
              </span>
            </p>
          </div>
        )}

        {/* Filters */}
        <section className="mb-12">
          <div className="bg-secondary/50 rounded-xl p-6 border border-border">
            <h2 className="text-xl font-semibold mb-4">
              {t(language, "all_filter_tours")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t(language, "all_tour_type")}
                </label>
                <Select
                  value={filters.tourType}
                  onValueChange={(value) =>
                    handleFilterChange("tourType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t(language, "all_all_types")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      {t(language, "all_all_types")}
                    </SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t(language, "all_departure")}
                </label>
                <Select
                  value={filters.departure}
                  onValueChange={(value) =>
                    handleFilterChange("departure", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t(language, "all_all_cities")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      {t(language, "all_all_cities")}
                    </SelectItem>
                    <SelectItem value="hanoi">Hanoi</SelectItem>
                    <SelectItem value="danang">Da Nang</SelectItem>
                    <SelectItem value="bangkok">Bangkok</SelectItem>
                    <SelectItem value="phuket">Phuket</SelectItem>
                    <SelectItem value="siemreap">Siem Reap</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t(language, "all_destination")}
                </label>
                <Select
                  value={filters.destination}
                  onValueChange={(value) =>
                    handleFilterChange("destination", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t(language, "all_any_destination")}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      {t(language, "all_any_destination")}
                    </SelectItem>
                    <SelectItem value="vietnam">Vietnam</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="cambodia">Cambodia</SelectItem>
                    <SelectItem value="myanmar">Myanmar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t(language, "all_transportation")}
                </label>
                <Select
                  value={filters.transportation}
                  onValueChange={(value) =>
                    handleFilterChange("transportation", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t(language, "all_all_types")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      {t(language, "all_all_types")}
                    </SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="flight">Flight</SelectItem>
                    <SelectItem value="boat">Boat</SelectItem>
                    <SelectItem value="tuk-tuk">Tuk-tuk</SelectItem>
                    <SelectItem value="motorbike">Motorbike</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">
              {searchQuery
                ? `${t(language, "all_tours_for")} "${searchQuery}"`
                : t(language, "all_all_tours")}
            </h1>
            <p className="text-muted-foreground">
              {filteredTours.length}{" "}
              {filteredTours.length === 1
                ? t(language, "all_found_singular")
                : t(language, "all_found_plural")}
            </p>
          </div>
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                {t(language, "all_no_tours")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t(language, "all_try_adjust")}
              </p>
            </div>
          )}
        </section>

        {/* Customer Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-ocean-gradient rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {review.tour}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Blog */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Travel Blog Hà Nội</h2>
              <p className="text-muted-foreground">
                Những câu chuyện ngắn về địa danh nổi tiếng.
              </p>
            </div>
            <Link to="/blogs">
              <Button variant="outline">Xem tất cả</Button>
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
                    <CardTitle className="text-xl">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Company Slogan Banner */}
        <section className="mb-16">
          <div className="relative h-64 rounded-2xl overflow-hidden bg-ocean-gradient shadow-hover">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Journey Starts Here
                </h2>
                <p className="text-xl md:text-2xl text-white/90">
                  Creating unforgettable memories across Hanoi Vietnam
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllTours;

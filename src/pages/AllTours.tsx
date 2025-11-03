import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTours } from "@/contexts/TourContext";

const AllTours = () => {
  const { filteredTours, filters, setFilters, searchQuery } = useTours();

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
      comment: "Absolutely amazing experience! The tour guide was knowledgeable and the itinerary was perfect.",
      tour: "Ha Long Bay Cruise",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Best vacation ever! Everything was well organized and the destinations were breathtaking.",
      tour: "Angkor Wat Temple Tour",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">All Tours</span>
        </div>

        {/* Search Query Display */}
        {searchQuery && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm">
              Search results for: <span className="font-semibold text-primary">"{searchQuery}"</span>
            </p>
          </div>
        )}

        {/* Filters */}
        <section className="mb-12">
          <div className="bg-secondary/50 rounded-xl p-6 border border-border">
            <h2 className="text-xl font-semibold mb-4">Filter Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Tour Type</label>
                <Select value={filters.tourType} onValueChange={(value) => handleFilterChange("tourType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Departure Point</label>
                <Select value={filters.departure} onValueChange={(value) => handleFilterChange("departure", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All cities</SelectItem>
                    <SelectItem value="hanoi">Hanoi</SelectItem>
                    <SelectItem value="danang">Da Nang</SelectItem>
                    <SelectItem value="bangkok">Bangkok</SelectItem>
                    <SelectItem value="phuket">Phuket</SelectItem>
                    <SelectItem value="siemreap">Siem Reap</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Destination</label>
                <Select value={filters.destination} onValueChange={(value) => handleFilterChange("destination", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any destination</SelectItem>
                    <SelectItem value="vietnam">Vietnam</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="cambodia">Cambodia</SelectItem>
                    <SelectItem value="myanmar">Myanmar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Transportation</label>
                <Select value={filters.transportation} onValueChange={(value) => handleFilterChange("transportation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
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
              {searchQuery ? `Tours for "${searchQuery}"` : "All Tours"}
            </h1>
            <p className="text-muted-foreground">
              {filteredTours.length} {filteredTours.length === 1 ? "tour" : "tours"} found
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
              <p className="text-xl text-muted-foreground mb-4">No tours found matching your criteria</p>
              <p className="text-sm text-muted-foreground">Try adjusting your filters or search query</p>
            </div>
          )}
        </section>

        {/* Customer Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-ocean-gradient rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.tour}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Blog */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Travel Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-hover transition-all cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary to-accent"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Top 10 Hidden Gems in Southeast Asia</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Discover the lesser-known beautiful places that will take your breath away...
                  </p>
                  <Button variant="link" className="p-0">Read More →</Button>
                </div>
              </div>
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
                  Creating unforgettable memories across Asia
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

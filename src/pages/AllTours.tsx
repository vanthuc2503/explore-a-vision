import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import tourHoian from "@/assets/tour-hoian.jpg";
import tourSapa from "@/assets/tour-sapa.jpg";
import tourPhuket from "@/assets/tour-phuket.jpg";

const AllTours = () => {
  const [tourType, setTourType] = useState("all");
  const [departure, setDeparture] = useState("all");

  const allTours = [
    {
      image: tourHoian,
      title: "Hoi An Ancient Town & Lantern Festival Experience",
      rating: 4.8,
      reviews: 342,
      price: 89,
    },
    {
      image: tourSapa,
      title: "Sapa Rice Terraces & Ethnic Villages Trek",
      rating: 4.9,
      reviews: 267,
      price: 125,
    },
    {
      image: tourPhuket,
      title: "Phuket Island Hopping & Beach Paradise",
      rating: 4.7,
      reviews: 521,
      price: 95,
    },
    {
      image: tourHoian,
      title: "Da Nang City Tour & Marble Mountains",
      rating: 4.6,
      reviews: 198,
      price: 75,
    },
    {
      image: tourSapa,
      title: "Ha Giang Loop Mountain Adventure",
      rating: 4.9,
      reviews: 156,
      price: 145,
    },
    {
      image: tourPhuket,
      title: "Bangkok Grand Palace & Floating Markets",
      rating: 4.5,
      reviews: 423,
      price: 65,
    },
  ];

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
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">All Tours</span>
        </div>

        {/* Filters */}
        <section className="mb-12">
          <div className="bg-secondary/50 rounded-xl p-6 border border-border">
            <h2 className="text-xl font-semibold mb-4">Filter Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Tour Type</label>
                <Select value={tourType} onValueChange={setTourType}>
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
                <Select value={departure} onValueChange={setDeparture}>
                  <SelectTrigger>
                    <SelectValue placeholder="All cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All cities</SelectItem>
                    <SelectItem value="hanoi">Hanoi</SelectItem>
                    <SelectItem value="saigon">Ho Chi Minh</SelectItem>
                    <SelectItem value="bangkok">Bangkok</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Destination</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any destination</SelectItem>
                    <SelectItem value="vietnam">Vietnam</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="cambodia">Cambodia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Transportation</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="flight">Flight</SelectItem>
                    <SelectItem value="boat">Boat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Grid */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold mb-8">All Tours</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
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

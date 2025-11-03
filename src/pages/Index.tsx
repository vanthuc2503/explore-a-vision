import { useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import TourCard from "@/components/TourCard";
import LandmarkCard from "@/components/LandmarkCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTours } from "@/contexts/TourContext";
import landmarkBagan from "@/assets/landmark-bagan.jpg";
import landmarkPetronas from "@/assets/landmark-petronas.jpg";

const Index = () => {
  const [heroSearch, setHeroSearch] = useState("");
  const { tours, setSearchQuery } = useTours();
  const navigate = useNavigate();

  const featuredTours = tours.slice(0, 3);

  const landmarks = [
    { image: landmarkBagan, name: "Bagan Temples, Myanmar", destination: "myanmar" },
    { image: landmarkPetronas, name: "Petronas Towers, Malaysia", destination: "malaysia" },
  ];

  const handleHeroSearch = () => {
    if (heroSearch.trim()) {
      setSearchQuery(heroSearch);
      navigate("/tours");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Slider */}
        <section className="mb-12">
          <HeroSlider />
        </section>

        {/* Large Search Bar */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-6 h-6" />
              <Input
                placeholder="Where do you want to go?"
                className="h-16 pl-14 pr-32 text-lg rounded-xl border-2 border-border focus:border-primary shadow-soft"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleHeroSearch();
                  }
                }}
              />
              <Button
                onClick={handleHeroSearch}
                variant="hero"
                size="lg"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Tours</h2>
              <p className="text-muted-foreground">Handpicked experiences for your next adventure</p>
            </div>
            <Link to="/tours">
              <Button variant="outline">View All Tours</Button>
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
            <h2 className="text-3xl font-bold mb-2">Famous Landmarks</h2>
            <p className="text-muted-foreground">Discover iconic destinations across Asia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landmarks.map((landmark, index) => (
              <LandmarkCard key={index} {...landmark} />
            ))}
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

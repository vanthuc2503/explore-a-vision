import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTours } from "@/contexts/TourContext";
import { t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tours, currency, language } = useTours();

  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-10">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">
              {t(language, "td_tour_not_found")}
            </h1>
            <p className="text-muted-foreground mb-6">
              {t(language, "td_tour_not_found_desc")}
            </p>
            <Button onClick={() => navigate(-1)} variant="outline">
              {t(language, "td_go_back")}
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedPrice =
    currency === "VND"
      ? `${(tour.price * 23000).toLocaleString()}₫`
      : `$${tour.price}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            {t(language, "td_home")}
          </Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <Link to="/tours" className="hover:text-primary transition-colors">
            {t(language, "td_tours")}
          </Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <span className="text-foreground font-medium line-clamp-1">
            {tour.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-hover mb-6">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Title & Rating */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(tour.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{tour.rating}</span>
                  <span className="text-muted-foreground">
                    ({tour.reviews} {t(language, "td_reviews")})
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {t(language, "td_about_tour")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {tour.description}
              </p>
            </Card>

            {/* Tour Details */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">
                {t(language, "td_tour_details")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t(language, "td_destination")}
                    </h3>
                    <p className="text-muted-foreground capitalize">
                      {tour.destination}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t(language, "td_departure")}
                    </h3>
                    <p className="text-muted-foreground capitalize">
                      {tour.departure}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t(language, "td_tour_type")}
                    </h3>
                    <p className="text-muted-foreground capitalize">
                      {tour.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t(language, "td_transportation")}
                    </h3>
                    <p className="text-muted-foreground capitalize">
                      {tour.transportation}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    {formattedPrice}
                  </span>
                  <span className="text-muted-foreground">
                    {t(language, "td_per_person")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t(language, "td_price_includes")}
                </p>
              </div>

              <Button className="w-full mb-4" size="lg">
                {t(language, "td_book_now")}
              </Button>

              <Button variant="outline" className="w-full" size="lg">
                {t(language, "td_add_wishlist")}
              </Button>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold mb-4">
                  {t(language, "td_whats_included")}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {t(language, "td_guide")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {t(language, "td_transport")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {t(language, "td_tickets")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {t(language, "td_support")}
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TourDetail;

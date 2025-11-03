import { useState } from "react";
import { Search, ShieldCheck, Award, Headphones, MapPin } from "lucide-react";
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
import { t } from "@/lib/i18n";
import { hanoiBlogs } from "@/lib/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import hochiminhMausoleum from "@/assets/lang-bac.jpg";
import nhahatLon from "@/assets/nha-hat-lon.jpg";

const Index = () => {
  const [heroSearch, setHeroSearch] = useState("");
  const { tours, setSearchQuery, language } = useTours();
  const navigate = useNavigate();

  const featuredTours = tours.slice(0, 3);

  const landmarks = [
    {
      image: hochiminhMausoleum,
      name: "Ho Chi Minh Mausoleum, Vietnam",
      destination: "vietnam",
    },
    {
      image: nhahatLon,
      name: "Nha Hat Lon, Vietnam",
      destination: "vietnam",
    },
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
                placeholder={t(language, "idx_where_to_go")}
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
                {t(language, "idx_search")}
              </Button>
            </div>
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

        {/* Why Choose Joigo */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Tại sao chọn Joigo?</h2>
            <p className="text-muted-foreground">
              4 lý do khiến Joigo là người bạn đồng hành lý tưởng cho hành trình
              khám phá Hà Nội.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Uy tín & minh bạch</h3>
              <p className="text-sm text-muted-foreground">
                Cam kết chất lượng dịch vụ, thông tin rõ ràng, không chi phí ẩn.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                Trải nghiệm chọn lọc
              </h3>
              <p className="text-sm text-muted-foreground">
                Lịch trình tinh gọn, điểm đến đặc sắc, tối ưu thời gian di
                chuyển.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Hỗ trợ 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Đồng hành trước – trong – sau chuyến đi qua nhiều kênh liên lạc.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card/50 hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">
                Hiểu Hà Nội bản địa
              </h3>
              <p className="text-sm text-muted-foreground">
                Gợi ý ẩm thực – văn hóa – lịch sử từ góc nhìn của người Hà Nội.
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

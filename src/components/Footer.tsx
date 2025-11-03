import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AT</span>
              </div>
              <span className="text-xl font-bold bg-ocean-gradient bg-clip-text text-transparent">
                Asian Tours
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your gateway to unforgettable adventures across Asia. Discover the beauty, culture, and wonders of Southeast Asia with expert-guided tours.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@asiantours.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>info@asiantours.com</span>
              </a>
              <a
                href="tel:+84123456789"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+84 123 456 789</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>123 Travel Street, District 1<br />Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Find Us</h3>
            <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center border border-border">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Payment Methods & Social Media */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">We accept:</span>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-background border border-border rounded-md">
                  <span className="text-sm font-semibold">VISA</span>
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-md">
                  <span className="text-sm font-semibold">Mastercard</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Asian Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

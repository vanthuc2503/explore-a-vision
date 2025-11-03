import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
    setFormData({ email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 border border-border">
      <h2 className="text-3xl font-bold mb-3 text-center">More to Explore</h2>
      <p className="text-muted-foreground text-center mb-8">
        Leave your contact information and we'll help you plan your perfect adventure
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-11"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Phone</label>
            <Input
              type="tel"
              placeholder="+84 123 456 789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-11"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Message</label>
          <Textarea
            placeholder="Tell us about your travel plans..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="min-h-32 resize-none"
          />
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full">
          Request Consultation
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

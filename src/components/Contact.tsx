import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresă",
    value: "Strada Mihail Sebastian nr. 30, București",
    link: "https://maps.google.com/?q=Strada+Mihail+Sebastian+30+Bucuresti",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+40 720 316 700",
    link: "tel:+40720316700",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@albertobalan.ro",
    link: "mailto:contact@albertobalan.ro",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni - Sâmbătă: 09:00 - 20:00",
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Te rugăm să completezi toate câmpurile!");
      return;
    }

    toast.success("Mesajul tău a fost trimis! Te vom contacta în curând.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Ne găsești aici
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Contact & <span className="text-gradient-gold">Locație</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Vino să ne vizitezi sau contactează-ne pentru orice întrebare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const Wrapper = info.link ? "a" : "div";
                return (
                  <Wrapper
                    key={index}
                    href={info.link || undefined}
                    target={info.link?.startsWith("http") ? "_blank" : undefined}
                    className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium mt-1 group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-foreground/60 text-sm">Urmărește-ne:</span>
              <a
                href="https://www.instagram.com/alberto.balan.concept/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/gypsyfade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@alberto.balan.con"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all"
              >
                <TikTokIcon />
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Trimite-ne un mesaj
              </h3>
              <input
                type="text"
                placeholder="Numele tău"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="email"
                placeholder="Adresa de email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <textarea
                placeholder="Mesajul tău"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
              <Button type="submit" variant="gold" size="lg" className="w-full">
                Trimite Mesajul
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[500px] lg:h-auto rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.7889!2d26.0717!3d44.4165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4c0f7c0001%3A0x0!2sStrada%20Mihail%20Sebastian%2030%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1699999999999!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Alberto Balan Concept"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
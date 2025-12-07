import logo from "@/assets/logo.jpg";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Alberto Balan Concept" className="h-16 mb-4" />
            <p className="text-foreground/60 text-sm max-w-md">
              Unde stilul întâlnește excelența. Alberto Balan Concept oferă
              servicii premium de frizerie și îngrijire personală într-un ambient
              de lux.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Linkuri Rapide
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Acasă
              </a>
              <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Servicii
              </a>
              <a href="#team" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Echipa
              </a>
              <a href="#booking" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Rezervare
              </a>
              <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=Strada+Mihail+Sebastian+30+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Strada Mihail Sebastian nr. 30, București</span>
              </a>
              <a
                href="tel:+40XXXXXXXXX"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+40 XXX XXX XXX</span>
              </a>
              <a
                href="mailto:contact@albertobalan.ro"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>contact@albertobalan.ro</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Alberto Balan Concept. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

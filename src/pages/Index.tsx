import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-background to-charcoal opacity-50" />
      
      {/* Gold glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <img 
            src={logo} 
            alt="Alberto Balan Concept" 
            className="h-32 md:h-40 mx-auto"
          />
        </div>
        
        {/* Coming Soon Text */}
        <h1 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4 animate-fade-up delay-100">
          Coming Soon
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
          Pregătim ceva special pentru tine. <br />
          Revino în curând pentru a descoperi noua noastră experiență.
        </p>
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up delay-300">
          <a 
            href="tel:+40720316700" 
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+40 720 316 700</span>
          </a>
          <a 
            href="mailto:contact@albertobalan.ro" 
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>contact@albertobalan.ro</span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-up delay-400">
          <a 
            href="https://www.instagram.com/alberto.balan.concept/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/gypsyfade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@alberto.balan.con" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
        
        {/* Booking CTA */}
        <div className="mt-10 animate-fade-up delay-500">
          <a 
            href="https://mero.ro/p/alberto-balan-concept"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-colors"
          >
            Rezervă o Programare
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 text-center text-muted-foreground text-sm animate-fade-up delay-500">
        © 2025 Alberto Balan Concept. Toate drepturile rezervate.
      </div>
    </div>
  );
};

export default Index;

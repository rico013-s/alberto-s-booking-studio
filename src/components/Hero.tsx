import { Button } from "@/components/ui/button";
import { Scissors, Calendar } from "lucide-react";
import salonBg from "@/assets/salon-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${salonBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-background/30 backdrop-blur-sm mb-8 animate-fade-up opacity-0 delay-100">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80 uppercase tracking-wider">
              Premium Barbershop Experience
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 delay-200">
            <span className="text-foreground">Alberto Balan</span>
            <br />
            <span className="text-gradient-gold">Concept</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-300">
            Unde stilul întâlnește excelența. Experimentează arta tunsorilor de
            lux și îngrijirea profesională într-un ambient premium.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-400">
            <Button variant="gold" size="xl" asChild>
              <a href="#booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Programează-te
              </a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <a href="#services">Vezi Serviciile</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up opacity-0 delay-500">
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">
                10+
              </p>
              <p className="text-sm text-foreground/60 mt-1">Ani Experiență</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">
                5000+
              </p>
              <p className="text-sm text-foreground/60 mt-1">Clienți Fericiți</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">
                5
              </p>
              <p className="text-sm text-foreground/60 mt-1">Stilisti Experți</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

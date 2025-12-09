import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Programare Online
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Rezervă o <span className="text-gradient-gold">Programare</span>
          </h2>
          <p className="text-foreground/60 mb-10">
            Programează-te rapid și ușor prin platforma noastră de rezervări online. 
            Alege serviciul dorit, stilistul preferat și ora care ți se potrivește.
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 glow-gold">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Programare Rapidă
            </h3>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Click pe butonul de mai jos pentru a fi redirecționat către sistemul nostru de rezervări.
            </p>
            <Button
              variant="gold"
              size="lg"
              className="text-lg px-10 py-6"
              asChild
            >
              <a
                href="https://mero.ro/p/alberto-balan-concept"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                Rezervă Acum
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
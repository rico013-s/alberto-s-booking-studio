import { useState } from "react";
import { Scissors, Sparkles, Hand, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "barbershop", label: "Frizerie & Pachete", icon: Scissors },
  { id: "nails", label: "Unghii", icon: Hand },
  { id: "brows", label: "Sprâncene", icon: Sparkles },
  { id: "promo", label: "Promoții", icon: Gift },
];

const services = {
  nails: [
    { name: "Unghii cu gel (Protecție gel + culoare)", duration: "2h", price: "150 lei" },
    { name: "Construcție gel + aplicat culoare", duration: "2h 30min", price: "200 lei" },
    { name: "Întreținere gel + aplicat culoare", duration: "2h", price: "150 lei" },
    { name: "Manichiură ojă semipermanentă", duration: "1h", price: "130 lei" },
    { name: "Pedichiură ojă semipermanentă", duration: "1h", price: "130 lei" },
    { name: "Manichiură semipermanentă apex", duration: "1h 30min", price: "150 lei" },
    { name: "Manichiura clasică", duration: "30min", price: "70 lei" },
    { name: "Pedichiura clasică", duration: "1h", price: "80 lei" },
    { name: "Pedichiura semipermanentă complexă", duration: "1h 30min", price: "150 lei" },
    { name: "Tratament cu parafină", duration: "15min", price: "50 lei", note: "Include scrub + parafină la rece" },
    { name: "Demontat unghii", duration: "20min", price: "40 lei" },
    { name: "Înlocuit unghie", duration: "10min", price: "20 lei" },
  ],
  brows: [
    { name: "Stilizat sprâncene", duration: "40min", price: "70 lei", note: "Pensat + vopsit sprâncene" },
  ],
  barbershop: [
    { name: "Tuns", duration: "30min", price: "60 - 80 lei" },
    { name: "Tuns + Barbă", duration: "1h", price: "80 - 110 lei" },
    { name: "Pachet A.B. CONCEPT GOLD", duration: "1h 30min", price: "120 - 150 lei", note: "Tuns + barbă + vopsit barbă" },
    { name: "Pachet A.B. CONCEPT VIP", duration: "2h", price: "170 - 200 lei", note: "Tuns + barbă + vopsit barbă + vopsit păr" },
    { name: "Pensat", duration: "30min", price: "50 lei" },
    { name: "Manichiura", duration: "30min", price: "70 lei" },
    { name: "Barbă", duration: "30min", price: "30 - 40 lei" },
    { name: "Spălat + Styling", duration: "20min", price: "35 lei" },
  ],
  promo: [
    { name: "TATĂL ȘI FIUL", duration: "1h 30min", price: "190 lei", note: "Pachet complet tată și fiu" },
    { name: "TATA ȘI FIUL", duration: "2h", price: "130 lei" },
    { name: "TUNS STUDENT ȘI ELEV", duration: "30min", price: "40 lei", note: "Ești student și ai nevoie de un look fresh fără să-ți golești buzunarul?" },
  ],
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("barbershop");

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Ce oferim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Servicii & <span className="text-gradient-gold">Prețuri</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Descoperă gama noastră completă de servicii premium, de la tunsori
            clasice la tratamente de lux.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground glow-gold"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {services[activeCategory as keyof typeof services].map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-gold"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    {service.note && (
                      <p className="text-sm text-foreground/50 mt-1">
                        {service.note}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-6 sm:gap-8">
                    <div className="text-center">
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">
                        Durată
                      </p>
                      <p className="text-foreground font-medium mt-1">
                        {service.duration}
                      </p>
                    </div>
                    <div className="text-center min-w-[100px]">
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">
                        Preț
                      </p>
                      <p className="text-primary font-bold text-lg mt-1">
                        {service.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { GraduationCap, Users, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Modul Începători",
    duration: "3 luni",
    description: "Perfect pentru cei care fac primii pași în arta frizeriei.",
    features: [
      "Tehnici de bază în tuns",
      "Utilizarea corectă a ustensilelor",
      "Igienă și siguranță",
      "Comunicare cu clienții",
    ],
  },
  {
    title: "Modul Avansat",
    duration: "2 luni",
    description: "Pentru frizeri cu experiență care vor să-și perfecționeze tehnicile.",
    features: [
      "Tehnici avansate de fade",
      "Design în păr",
      "Stilizare și finishing",
      "Tendințe moderne",
    ],
  },
  {
    title: "Modul Master",
    duration: "1 lună",
    description: "Program intensiv pentru cei care vor excelență.",
    features: [
      "Tunsori complexe",
      "Tehnici de barbering clasic",
      "Business & management salon",
      "Mentorat personalizat",
    ],
  },
];

const benefits = [
  { icon: Users, text: "Grupuri mici pentru atenție individualizată" },
  { icon: Award, text: "Certificat de absolvire recunoscut" },
  { icon: Clock, text: "Program flexibil adaptat nevoilor tale" },
  { icon: GraduationCap, text: "Instructori cu experiență internațională" },
];

const Academy = () => {
  return (
    <section id="academy" className="py-24 bg-charcoal-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Învață de la cei mai buni
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Academia <span className="text-gradient-gold">Alberto Balan Concept</span>
          </h2>
          <p className="text-foreground/60 max-w-3xl mx-auto text-lg">
            Visul tău de a deveni frizer începe aici. Oferim programe de formare profesională 
            pentru începători și cursuri de perfecționare pentru profesioniști.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl border border-border"
            >
              <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-foreground/80 text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {module.duration}
                </span>
                <GraduationCap className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {module.title}
              </h3>
              <p className="text-foreground/60 mb-6">{module.description}</p>
              <ul className="space-y-3">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center glow-gold">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Începe-ți cariera în frizerie astăzi!
          </h3>
          <p className="text-foreground/60 max-w-2xl mx-auto mb-8 text-lg">
            Înscrierile sunt deschise pentru toate modulele. Contactează-ne pentru mai multe 
            detalii despre programul de cursuri și locurile disponibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="text-lg" asChild>
              <a href="#contact" className="inline-flex items-center gap-2">
                Contactează-ne
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg" asChild>
              <a href="tel:+40720316700">
                Sună Acum: +40 720 316 700
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
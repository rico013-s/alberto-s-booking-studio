import { Instagram, Phone } from "lucide-react";
import albertoBalan from "@/assets/alberto-balan.jpg";
import cippiDavid from "@/assets/cippi-david.jpg";
import catalinValentin from "@/assets/catalin-valentin.jpg";
import stefanPotcovaru from "@/assets/stefan-potcovaru.jpg";
import irinaBalan from "@/assets/irina-balan.jpg";

const teamMembers = [
  {
    name: "Alberto Balan",
    role: "Fondator & Master Barber",
    image: albertoBalan,
    specialty: "Tunsori clasice & moderne",
  },
  {
    name: "Cippi David",
    role: "Senior Barber",
    image: cippiDavid,
    specialty: "Fade & styling",
  },
  {
    name: "Catalin Valentin",
    role: "Barber",
    image: catalinValentin,
    specialty: "Tunsori & bărbierit",
  },
  {
    name: "Stefan Potcovaru",
    role: "Barber",
    image: stefanPotcovaru,
    specialty: "Styling modern",
  },
  {
    name: "Irina Balan",
    role: "Nail Artist & Stilist",
    image: irinaBalan,
    specialty: "Unghii & sprâncene",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-charcoal-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Cunoaște-ne
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Echipa <span className="text-gradient-gold">Noastră</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Profesioniști pasionați, dedicați să-ți ofere cea mai bună experiență.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-foreground/50 text-xs mt-2">
                  {member.specialty}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

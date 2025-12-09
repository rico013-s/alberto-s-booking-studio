import { useState } from "react";
import { Instagram, Phone, Send, User, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Te rugăm să completezi câmpurile obligatorii!");
      return;
    }

    toast.success("Mulțumim pentru interes! Te vom contacta în curând.");
    setFormData({ name: "", email: "", phone: "", experience: "", message: "" });
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
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

        {/* Recruitment Section */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Info */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-transparent">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">
                Cariere
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                Alătură-te <span className="text-gradient-gold">Echipei</span>
              </h3>
              <p className="text-foreground/70 mb-8 text-lg">
                Căutăm colegi pasionați de frizerie care să ni se alăture în crearea unor 
                experiențe memorabile pentru clienții noștri.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Mediu de lucru profesionist și prietenos
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Oportunități de dezvoltare și formare continuă
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Salariu competitiv și bonusuri
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Locație centrală în București
                </li>
              </ul>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 md:p-12">
              <h4 className="font-display text-xl font-bold text-foreground mb-6">
                Trimite-ne CV-ul tău
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="text"
                    placeholder="Numele tău complet *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="email"
                    placeholder="Adresa de email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    type="tel"
                    placeholder="Număr de telefon *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-foreground/40" />
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                  >
                    <option value="">Experiență</option>
                    <option value="beginner">Fără experiență</option>
                    <option value="junior">Sub 1 an</option>
                    <option value="mid">1-3 ani</option>
                    <option value="senior">Peste 3 ani</option>
                  </select>
                </div>
                <textarea
                  placeholder="Spune-ne despre tine..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                />
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Trimite Aplicația
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
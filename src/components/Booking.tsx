import { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, Scissors, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import { cn } from "@/lib/utils";

const stylists = [
  { id: "alberto", name: "Alberto Balan", specialty: "Frizerie" },
  { id: "cippi", name: "Cippi David", specialty: "Frizerie" },
  { id: "catalin", name: "Catalin Valentin", specialty: "Frizerie" },
  { id: "stefan", name: "Stefan Potcovaru", specialty: "Frizerie" },
  { id: "irina", name: "Irina Balan", specialty: "Unghii & Sprâncene" },
];

const servicesList = [
  { id: "tuns", name: "Tuns", duration: "30min", price: "60-80 lei", category: "barbershop" },
  { id: "tuns-barba", name: "Tuns + Barbă", duration: "1h", price: "80-110 lei", category: "barbershop" },
  { id: "gold", name: "Pachet A.B. CONCEPT GOLD", duration: "1h 30min", price: "120-150 lei", category: "barbershop" },
  { id: "vip", name: "Pachet A.B. CONCEPT VIP", duration: "2h", price: "170-200 lei", category: "barbershop" },
  { id: "barba", name: "Barbă", duration: "30min", price: "30-40 lei", category: "barbershop" },
  { id: "gel", name: "Unghii cu gel", duration: "2h", price: "150 lei", category: "nails" },
  { id: "manichiura", name: "Manichiură semipermanentă", duration: "1h", price: "130 lei", category: "nails" },
  { id: "pedichiura", name: "Pedichiură semipermanentă", duration: "1h", price: "130 lei", category: "nails" },
  { id: "sprancene", name: "Stilizat sprâncene", duration: "40min", price: "70 lei", category: "brows" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00",
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    service: "",
    stylist: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service || !formData.stylist || !date || !formData.time || !formData.name || !formData.phone || !formData.email) {
      toast.error("Te rugăm să completezi toate câmpurile!");
      return;
    }

    toast.success(
      "Rezervare trimisă cu succes! Vei primi un email de confirmare în curând.",
      { duration: 5000 }
    );

    setFormData({
      service: "",
      stylist: "",
      time: "",
      name: "",
      phone: "",
      email: "",
    });
    setDate(undefined);
    setStep(1);
  };

  const selectedService = servicesList.find((s) => s.id === formData.service);

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Programare Online
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Rezervă o <span className="text-gradient-gold">Programare</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Alege serviciul dorit, stilistul preferat și ora care ți se potrivește.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/50"
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 md:w-24 h-0.5 mx-2 transition-all ${
                      step > s ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Service & Stylist */}
            {step === 1 && (
              <div className="space-y-8 animate-fade-in">
                {/* Service Selection */}
                <div>
                  <label className="flex items-center gap-2 text-foreground font-medium mb-4">
                    <Scissors className="w-5 h-5 text-primary" />
                    Alege Serviciul
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {servicesList.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: service.id })}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          formData.service === service.id
                            ? "border-primary bg-primary/10 glow-gold"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <p className="font-medium text-foreground">{service.name}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-foreground/60">
                          <span>{service.duration}</span>
                          <span className="text-primary font-semibold">{service.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stylist Selection */}
                <div>
                  <label className="flex items-center gap-2 text-foreground font-medium mb-4">
                    <User className="w-5 h-5 text-primary" />
                    Alege Stilistul
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {stylists.map((stylist) => (
                      <button
                        key={stylist.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, stylist: stylist.id })}
                        className={`p-4 rounded-lg border text-center transition-all ${
                          formData.stylist === stylist.id
                            ? "border-primary bg-primary/10 glow-gold"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <p className="font-medium text-foreground">{stylist.name}</p>
                        <p className="text-xs text-foreground/50 mt-1">{stylist.specialty}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="button"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={() => formData.service && formData.stylist && setStep(2)}
                  disabled={!formData.service || !formData.stylist}
                >
                  Continuă
                </Button>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-8 animate-fade-in">
                {/* Date Selection with Calendar */}
                <div>
                  <label className="flex items-center gap-2 text-foreground font-medium mb-4">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    Alege Data
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-14 border-border bg-card hover:bg-card hover:border-primary/50",
                          !date && "text-foreground/40"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                        {date ? format(date, "PPP", { locale: ro }) : "Selectează data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="flex items-center gap-2 text-foreground font-medium mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    Alege Ora
                  </label>
                  <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          formData.time === time
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-foreground hover:border-primary/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(1)}
                  >
                    Înapoi
                  </Button>
                  <Button
                    type="button"
                    variant="gold"
                    size="lg"
                    className="flex-1"
                    onClick={() => date && formData.time && setStep(3)}
                    disabled={!date || !formData.time}
                  >
                    Continuă
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                {/* Summary */}
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Rezumat Rezervare
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Serviciu:</span>
                      <span className="text-foreground font-medium">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Stilist:</span>
                      <span className="text-foreground font-medium">
                        {stylists.find((s) => s.id === formData.stylist)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Data:</span>
                      <span className="text-foreground font-medium">
                        {date ? format(date, "PPP", { locale: ro }) : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Ora:</span>
                      <span className="text-foreground font-medium">{formData.time}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border mt-2">
                      <span className="text-foreground/60">Preț estimat:</span>
                      <span className="text-primary font-bold">{selectedService?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Numele tău complet"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Număr de telefon"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Adresa de email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(2)}
                  >
                    Înapoi
                  </Button>
                  <Button type="submit" variant="gold" size="lg" className="flex-1">
                    Confirmă Rezervarea
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
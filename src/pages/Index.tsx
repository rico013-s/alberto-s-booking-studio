import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Academy from "@/components/Academy";
import Shop from "@/components/Shop";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Academy />
        <Shop />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
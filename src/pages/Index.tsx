import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import HeroSection from "@/components/home/HeroSection";
import PillarsSection from "@/components/home/PillarsSection";
import MapSection from "@/components/home/MapSection";
import ServicesSection from "@/components/home/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <ServicesSection />
        <MapSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;

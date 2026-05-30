import HeroSection from "@/components/HeroSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/lib/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-primary/30">
        <LanguageToggle />
        <HeroSection />
        <CaseStudiesSection />
        <TechStackSection />
        <AboutSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;

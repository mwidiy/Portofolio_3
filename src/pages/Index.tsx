import HeroSection from "@/components/HeroSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <HeroSection />
      <CaseStudiesSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;

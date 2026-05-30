import { useLanguage } from "@/lib/LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-md border border-border rounded-full shadow-lg hover:border-primary/50 transition-colors"
      aria-label="Toggle Language"
    >
      <Globe size={18} className="text-primary" />
      <span className="text-sm font-mono-brand uppercase font-bold">
        {language}
      </span>
    </motion.button>
  );
}

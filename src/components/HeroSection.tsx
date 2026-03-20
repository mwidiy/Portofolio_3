import { motion } from "framer-motion";
import { ArrowRight, Download, User } from "lucide-react";

const BRAND_CURVE: [number, number, number, number] = [0.19, 1, 0.22, 1];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-glow-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-secondary/10 blur-[120px] rounded-full animate-glow-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Left — Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: BRAND_CURVE }}
          className="flex justify-center lg:justify-end order-1 lg:order-1"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 blur-xl animate-glow-pulse" />
            {/* Photo frame */}
            {/* Photo frame */}
              <div className="relative w-full h-full rounded-3xl bg-card border border-border overflow-hidden flex items-center justify-center shadow-[0_0_60px_-15px_hsl(155_72%_50%/0.2)]">
                {/* Ganti nama file di src sesuai dengan foto yang kamu taruh di folder public */}
                <img 
                  src="/pp.jpg" 
                  alt="Foto Profil" 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </motion.div>

        {/* Right — Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: BRAND_CURVE }}
          className="order-2 lg:order-2 text-center lg:text-left"
        >
          <span className="inline-block text-primary font-mono-brand tracking-widest text-xs uppercase mb-5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            Full-Stack Software Developer
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
            Full-Stack Software Dev &{" "}
            <span className="text-gradient-primary">AI Enthusiast.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10 mx-auto lg:mx-0">
            Membangun sistem skalabel dan mengotomatisasi masa depan. Mengubah
            masalah kompleks menjadi UI yang simpel dan arsitektur yang solid.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground font-bold rounded-full hover:brightness-110 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(155_72%_50%/0.4)]"
            >
              Lihat Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-border hover:bg-muted transition-colors duration-300 rounded-full"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

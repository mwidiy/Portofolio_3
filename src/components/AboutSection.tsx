import { motion } from "framer-motion";
import { Footprints, Shield, Megaphone } from "lucide-react";

const timeline = [
  {
    icon: <Footprints size={20} />,
    title: "Mulai Bergerak",
    text: "Keluar zona nyaman dari mahasiswa biasa menjadi pengurus organisasi kampus.",
  },
  {
    icon: <Shield size={20} />,
    title: "Transformasi & Leadership",
    text: "Terpilih sebagai Wakil Ketua di masa krisis. Merombak manajemen dan berhasil menumbuhkan jumlah anggota secara masif.",
  },
  {
    icon: <Megaphone size={20} />,
    title: "Ekspansi Impact",
    text: "Melanjutkan peran sebagai Kepala Humas di KAMMI. Di waktu luang, menyalurkan hobi mengajar anak-anak untuk tetap membumi.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-mono-brand text-muted-foreground uppercase tracking-[0.3em]">
          Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Perjalanan <span className="text-gradient-primary">Gue</span>
        </h2>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12 md:space-y-16">
          {timeline.map((node, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={node.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on line */}
                <div className="absolute left-5 md:left-1/2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-5 z-10 shadow-[0_0_12px_2px_hsl(155_72%_50%/0.4)]" />

                {/* Spacer for mobile */}
                <div className="w-10 shrink-0 md:hidden" />

                {/* Card */}
                <div
                  className={`flex-1 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                      <span className="text-primary">{node.icon}</span>
                      <h3 className="font-bold text-sm">{node.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {node.text}
                    </p>
                  </div>
                </div>

                {/* Opposite spacer for desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

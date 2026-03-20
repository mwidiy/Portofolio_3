import { motion } from "framer-motion";
import { XCircle, Lightbulb, Rocket, Globe, Cpu } from "lucide-react";

const projects = [
  {
    title: "QuackXel",
    subtitle: "Sistem Self-Ordering Terintegrasi",
    link: "https://quacxel.my.id/?tableId=TBL-12-FGAK", // <-- GANTI DENGAN LINK WEB LO
    icon: <Globe size={28} />,
    tags: ["Next.js", "PostgreSQL", "PWA"],
    color: "primary" as const,
    items: [
      {
        icon: <XCircle size={16} />,
        label: "Masalah",
        text: "Antrean panjang & pencatatan kasir manual di kantin kampus.",
        accent: "text-red-400",
      },
      {
        icon: <Lightbulb size={16} />,
        label: "Solusi",
        text: "Ekosistem PWA tanpa install untuk pelanggan & Mobile Dashboard khusus kasir.",
        accent: "text-yellow-400",
      },
      {
        icon: <Rocket size={16} />,
        label: "Dampak",
        text: "Transaksi terdigitalisasi 100%, memangkas antrean, minim human error.",
        accent: "text-primary",
      },
    ],
  },
  {
    title: "MS Word AI",
    subtitle: "Automation Agent",
    link: "https://masukkan-link-web-mswordai-disini.com", // <-- GANTI DENGAN LINK WEB LO
    icon: <Cpu size={28} />,
    tags: ["Python", "LangChain", "LLM"],
    color: "secondary" as const,
    items: [
      {
        icon: <XCircle size={16} />,
        label: "Masalah",
        text: "Waktu terbuang berjam-jam untuk tugas dokumen repetitif.",
        accent: "text-red-400",
      },
      {
        icon: <Lightbulb size={16} />,
        label: "Solusi",
        text: 'Konsep "Anti-Gravity". AI Agent otomatis mengeksekusi perintah MS Word.',
        accent: "text-yellow-400",
      },
      {
        icon: <Rocket size={16} />,
        label: "Dampak",
        text: "Efisiensi kerja meningkat drastis, dari hitungan jam menjadi menit.",
        accent: "text-primary",
      },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-mono-brand text-muted-foreground uppercase tracking-[0.3em]">
          Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Karya <span className="text-gradient-primary">Terpilih</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.a // <-- Diubah dari motion.div menjadi motion.a
            key={project.title}
            href={project.link} // <-- Mengambil link dari data projects
            target="_blank" // <-- Agar membuka link di tab baru
            rel="noopener noreferrer" // <-- Untuk keamanan
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="group block relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_-15px_hsl(155_72%_50%/0.12)] cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.subtitle}
                </p>
              </div>
              <div className={`p-3 rounded-2xl bg-${project.color}/10 text-${project.color}`}>
                {project.icon}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono-brand px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bullet Points */}
            <div className="space-y-4">
              {project.items.map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <span className={`mt-0.5 shrink-0 ${item.accent}`}>
                    {item.icon}
                  </span>
                  <div>
                    <span className={`text-xs font-mono-brand uppercase tracking-wider ${item.accent}`}>
                      {item.label}
                    </span>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
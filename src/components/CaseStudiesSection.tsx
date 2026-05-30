import { motion } from "framer-motion";
import { XCircle, Lightbulb, Rocket, Globe, Cpu, MonitorPlay } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CaseStudiesSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.quackTitle,
      subtitle: t.quackSubtitle,
      link: "https://play.google.com/store/apps/details?id=id.quacxel.mejapesan",
      icon: <Globe size={28} />,
      tags: ["Next.js", "PostgreSQL", "PWA"],
      colorClasses: "bg-primary/10 text-primary",
      previewImage: "/gambar1.png", // Ganti dengan gambar aslimu di folder public
      playStoreLabel: t.playStoreLabel,
      items: [
        {
          icon: <XCircle size={16} />,
          label: t.problemLabel,
          text: t.quackProblem,
          accent: "text-red-400",
        },
        {
          icon: <Lightbulb size={16} />,
          label: t.solutionLabel,
          text: t.quackSolution,
          accent: "text-yellow-400",
        },
        {
          icon: <Rocket size={16} />,
          label: t.impactLabel,
          text: t.quackImpact,
          accent: "text-primary",
        },
      ],
    },
    {
      title: t.mswordTitle,
      subtitle: t.mswordSubtitle,
      link: "https://pupet.mwidiy.my.id/",
      icon: <Cpu size={28} />,
      tags: ["Python", "LangChain", "LLM"],
      colorClasses: "bg-secondary/10 text-secondary",
      previewImage: "/gambar2.png", // Ganti dengan gambar aslimu di folder public
      items: [
        {
          icon: <XCircle size={16} />,
          label: t.problemLabel,
          text: t.mswordProblem,
          accent: "text-red-400",
        },
        {
          icon: <Lightbulb size={16} />,
          label: t.solutionLabel,
          text: t.mswordSolution,
          accent: "text-yellow-400",
        },
        {
          icon: <Rocket size={16} />,
          label: t.impactLabel,
          text: t.mswordImpact,
          accent: "text-primary",
        },
      ],
    },
    {
      title: t.webAnimTitle,
      subtitle: t.webAnimSubtitle,
      link: "https://youtu.be/QOav0yHbHu0",
      icon: <MonitorPlay size={28} />,
      tags: ["React", "Animation", "CSS"],
      colorClasses: "bg-primary/10 text-primary",
      youtubeId: "QOav0yHbHu0",
      items: [
        {
          icon: <XCircle size={16} />,
          label: t.problemLabel,
          text: t.webAnimProblem,
          accent: "text-red-400",
        },
        {
          icon: <Lightbulb size={16} />,
          label: t.solutionLabel,
          text: t.webAnimSolution,
          accent: "text-yellow-400",
        },
        {
          icon: <Rocket size={16} />,
          label: t.impactLabel,
          text: t.webAnimImpact,
          accent: "text-primary",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-mono-brand text-muted-foreground uppercase tracking-[0.3em]">
          {t.projectsTag}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          {t.projectsTitlePrefix} <span className="text-gradient-primary">{t.projectsTitleSuffix}</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="group block flex-1 relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_-15px_hsl(155_72%_50%/0.12)] cursor-pointer"
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
                {project.playStoreLabel && (
                  <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-500 px-2 py-1 rounded border border-green-500/20">
                    {project.playStoreLabel}
                  </span>
                )}
              </div>
              <div className={`p-3 rounded-2xl ${project.colorClasses}`}>
                {project.icon}
              </div>
            </div>

            {/* Media */}
            {project.youtubeId ? (
              <div className="mb-6 rounded-2xl overflow-hidden border border-border aspect-video bg-black pointer-events-auto relative z-10">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : project.previewImage ? (
              <div className="mb-6 rounded-2xl overflow-hidden border border-border aspect-video bg-muted/50 flex items-center justify-center relative group-hover:border-primary/50 transition-colors">
                <img 
                  src={project.previewImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                       target.parentElement.innerHTML = '<span class="text-xs text-muted-foreground uppercase font-mono-brand">Preview Placeholder</span>';
                    }
                  }}
                />
              </div>
            ) : null}

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
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiAndroid,
  SiPython,
  SiFastapi,
  SiDocker,
} from "react-icons/si";
import { Sparkles, Workflow, Cloud } from "lucide-react";

const categories = [
  {
    title: "Web & JS",
    items: [
      { name: "Next.js", icon: <SiNextdotjs size={28} /> },
      { name: "React.js", icon: <SiReact size={28} /> },
      { name: "Node.js", icon: <SiNodedotjs size={28} /> },
      { name: "TypeScript", icon: <SiTypescript size={28} /> },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter size={28} /> },
      { name: "Dart", icon: <SiDart size={28} /> },
      { name: "Kotlin", icon: <SiKotlin size={28} /> },
      { name: "Android", icon: <SiAndroid size={28} /> },
    ],
  },
  {
    title: "AI & Python",
    items: [
      { name: "Python", icon: <SiPython size={28} /> },
      { name: "FastAPI", icon: <SiFastapi size={28} /> },
      { name: "LangGraph", icon: <Workflow size={28} /> },
      { name: "n8n", icon: <Sparkles size={28} /> },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: <SiDocker size={28} /> },
      { name: "CI/CD", icon: <Workflow size={28} /> },
      { name: "Cloud", icon: <Cloud size={28} /> },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono-brand text-muted-foreground uppercase tracking-[0.3em]">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Alat <span className="text-gradient-primary">Tempur</span>
          </h2>
        </motion.div>

        {/* Signature skill card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="mb-14 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 flex items-start gap-4"
        >
          <span className="text-2xl shrink-0">🌟</span>
          <div>
            <h3 className="font-bold text-sm md:text-base">
              Signature Skill: Fast Learner & Highly Adaptable
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Kemampuan untuk memahami tools atau tumpukan teknologi baru dalam
              waktu singkat.
            </p>
          </div>
        </motion.div>

        {/* Icon grids by category */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h4 className="text-xs font-mono-brand text-muted-foreground uppercase tracking-widest mb-5">
                {cat.title}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_40px_-10px_hsl(155_72%_50%/0.1)] transition-all duration-300 group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span className="text-[11px] font-mono-brand text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

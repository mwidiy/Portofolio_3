import { motion } from "framer-motion";
import { Mail, Instagram, Github } from "lucide-react";

const socials = [
  { icon: <Mail size={24} />, label: "Email", href: "mailto:muhammadwidi72@gmail.com" },
  { icon: <Instagram size={24} />, label: "Instagram", href: "https://www.instagram.com/m_widiyan/" },
  { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/mwidiy" },
];

export default function ContactSection() {
  return (
    <footer className="py-20 md:py-28 border-t border-border px-6">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Mari berkoneksi dan bangun sesuatu yang{" "}
          <span className="text-gradient-primary">berdampak!</span>
        </h2>

        <div className="flex justify-center gap-4 mt-10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary hover:shadow-[0_0_30px_-8px_hsl(155_72%_50%/0.2)] transition-all duration-300"
            >
              {s.icon}
              <span className="font-medium text-sm">{s.label}</span>
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 text-center text-muted-foreground/40 text-xs font-mono-brand">
        © {new Date().getFullYear()} Widi. All rights reserved..
      </div>
    </footer>
  );
}

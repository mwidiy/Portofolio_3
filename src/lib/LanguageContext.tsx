import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "id";

type Translations = {
  // Hero
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  heroProjectsBtn: string;
  heroDownloadBtn: string;

  // Case Studies
  projectsTag: string;
  projectsTitlePrefix: string;
  projectsTitleSuffix: string;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
  
  quackTitle: string;
  quackSubtitle: string;
  quackProblem: string;
  quackSolution: string;
  quackImpact: string;
  playStoreLabel: string;
  
  mswordTitle: string;
  mswordSubtitle: string;
  mswordProblem: string;
  mswordSolution: string;
  mswordImpact: string;

  webAnimTitle: string;
  webAnimSubtitle: string;
  webAnimProblem: string;
  webAnimSolution: string;
  webAnimImpact: string;

  // Tech Stack
  techTag: string;
  techTitlePrefix: string;
  techTitleSuffix: string;
  techSigTitle: string;
  techSigDesc: string;

  // About
  aboutTag: string;
  aboutTitlePrefix: string;
  aboutTitleSuffix: string;
  aboutTl1Title: string;
  aboutTl1Desc: string;
  aboutTl2Title: string;
  aboutTl2Desc: string;
  aboutTl3Title: string;
  aboutTl3Desc: string;

  // Contact
  contactTitlePrefix: string;
  contactTitleSuffix: string;
  rights: string;
};

const dictionaries: Record<Language, Translations> = {
  en: {
    heroTag: "Full-Stack Software Developer",
    heroTitle: "Full-Stack Software Dev & ",
    heroSubtitle: "AI Enthusiast.",
    heroDesc: "Building scalable systems and automating the future. Turning complex problems into simple UIs and solid architectures.",
    heroProjectsBtn: "View Projects",
    heroDownloadBtn: "Download CV",

    projectsTag: "Projects",
    projectsTitlePrefix: "Selected ",
    projectsTitleSuffix: "Works",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    impactLabel: "Impact",

    quackTitle: "QuackXel",
    quackSubtitle: "Integrated Self-Ordering System",
    quackProblem: "Long queues & manual cashier recording at the campus canteen.",
    quackSolution: "PWA ecosystem with no install for customers & a dedicated Mobile Dashboard for cashiers.",
    quackImpact: "100% digitized transactions, cut down queues, minimized human error.",
    playStoreLabel: "Available on Google Play",

    mswordTitle: "MS Word AI",
    mswordSubtitle: "Automation Agent",
    mswordProblem: "Hours wasted on repetitive document tasks.",
    mswordSolution: "'Anti-Gravity' concept. AI Agent automatically executes MS Word commands.",
    mswordImpact: "Work efficiency increased drastically, from hours to minutes.",

    webAnimTitle: "Interactive Web",
    webAnimSubtitle: "Advanced Web Animation",
    webAnimProblem: "Static websites fail to retain user attention and lack premium feel.",
    webAnimSolution: "Mastery of web-based animation to create dynamic, fluid, and engaging user experiences.",
    webAnimImpact: "Highly interactive interfaces that wow users and boost engagement.",

    techTag: "Tech Stack",
    techTitlePrefix: "Battle ",
    techTitleSuffix: "Gear",
    techSigTitle: "Signature Skill: Fast Learner & Highly Adaptable",
    techSigDesc: "Ability to grasp new tools or technology stacks in a short amount of time.",

    aboutTag: "Journey",
    aboutTitlePrefix: "My ",
    aboutTitleSuffix: "Journey",
    aboutTl1Title: "First Steps & Exploration",
    aboutTl1Desc: "Stepped out of the usual academic boundaries, challenging myself to continuously learn and explore new technologies to solve problems.",
    aboutTl2Title: "Leadership & Management",
    aboutTl2Desc: "Entrusted to take on leadership roles, fostering team collaboration, and managing multiple concurrent projects with a focus on efficient delivery.",
    aboutTl3Title: "Maturity & The Ongoing Process",
    aboutTl3Desc: "Realizing that the works built so far are still on a small scale and their impact hasn't reached the masses yet. This serves as a humbling reminder that the journey of innovation is a long, never-ending process.",

    contactTitlePrefix: "Let's connect and build something ",
    contactTitleSuffix: "impactful!",
    rights: "Widi. All rights reserved.",
  },
  id: {
    heroTag: "Full-Stack Software Developer",
    heroTitle: "Full-Stack Software Dev & ",
    heroSubtitle: "AI Enthusiast.",
    heroDesc: "Membangun sistem skalabel dan mengotomatisasi masa depan. Mengubah masalah kompleks menjadi UI yang simpel dan arsitektur yang solid.",
    heroProjectsBtn: "Lihat Project",
    heroDownloadBtn: "Download CV",

    projectsTag: "Projects",
    projectsTitlePrefix: "Karya ",
    projectsTitleSuffix: "Terpilih",
    problemLabel: "Masalah",
    solutionLabel: "Solusi",
    impactLabel: "Dampak",

    quackTitle: "QuackXel",
    quackSubtitle: "Sistem Self-Ordering Terintegrasi",
    quackProblem: "Antrean panjang & pencatatan kasir manual di kantin kampus.",
    quackSolution: "Ekosistem PWA tanpa install untuk pelanggan & Mobile Dashboard khusus kasir.",
    quackImpact: "Transaksi terdigitalisasi 100%, memangkas antrean, minim human error.",
    playStoreLabel: "Tersedia di Google Play",

    mswordTitle: "MS Word AI",
    mswordSubtitle: "Automation Agent",
    mswordProblem: "Waktu terbuang berjam-jam untuk tugas dokumen repetitif.",
    mswordSolution: "Konsep 'Anti-Gravity'. AI Agent otomatis mengeksekusi perintah MS Word.",
    mswordImpact: "Efisiensi kerja meningkat drastis, dari hitungan jam menjadi menit.",

    webAnimTitle: "Interactive Web",
    webAnimSubtitle: "Advanced Web Animation",
    webAnimProblem: "Website statis gagal mempertahankan perhatian pengguna dan kurang terasa premium.",
    webAnimSolution: "Penguasaan animasi berbasis web untuk menciptakan pengalaman pengguna yang dinamis dan interaktif.",
    webAnimImpact: "Antarmuka yang interaktif, memukau pengguna, dan meningkatkan engagement.",

    techTag: "Tech Stack",
    techTitlePrefix: "Alat ",
    techTitleSuffix: "Tempur",
    techSigTitle: "Signature Skill: Fast Learner & Highly Adaptable",
    techSigDesc: "Kemampuan untuk memahami tools atau tumpukan teknologi baru dalam waktu singkat.",

    aboutTag: "Journey",
    aboutTitlePrefix: "Perjalanan ",
    aboutTitleSuffix: "Gue",
    aboutTl1Title: "Langkah Awal & Eksplorasi",
    aboutTl1Desc: "Memutuskan untuk keluar dari batas wajar rutinitas akademis, menantang diri untuk terus belajar, dan mengeksplorasi ragam teknologi baru untuk memecahkan masalah.",
    aboutTl2Title: "Kepemimpinan & Manajemen",
    aboutTl2Desc: "Dipercaya untuk mengambil peran kepemimpinan, menumbuhkan kolaborasi tim, dan mengelola berbagai proyek serentak dengan fokus pada penyelesaian yang efisien.",
    aboutTl3Title: "Kedewasaan & Realita Berproses",
    aboutTl3Desc: "Menyadari bahwa karya yang dibangun sejauh ini masih berskala kecil dan dampaknya belum menjangkau khalayak luas. Ini menjadi pengingat yang merendahkan hati bahwa perjalanan inovasi adalah proses panjang yang tak pernah usai.",

    contactTitlePrefix: "Mari berkoneksi dan bangun sesuatu yang ",
    contactTitleSuffix: "berdampak!",
    rights: "Widi. All rights reserved.",
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en"); // Default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

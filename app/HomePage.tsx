"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BookOpen, Calculator, FlaskConical, Globe, Music, Leaf, Landmark,
  Cpu, MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2,
  GraduationCap, Users, Calendar, Zap, Monitor, Star,
  ArrowRight, Shield, Award, Infinity, Menu, X, ChevronLeft, ChevronRight,
} from "lucide-react";

import Image from 'next/image';

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";

const PHOTOS = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/51dae67a-b447-47f9-986e-582af0fd93e7/Aussen+2.jpg",
    alt: "Bad Camberger Lernzentrum Aussenansicht",
    caption: "Unser Lernzentrum in Bad Camberg",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/53410061-50d5-4213-864e-9e2a55be07e3/_COW6732.jpeg",
    alt: "Schuelerinnen beim gemeinsamen Lernen",
    caption: "Individuell und persoenlich – so lernt man bei uns",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/3b56f9d7-fe41-457a-ad86-489d535b239f/_COW6734.jpeg",
    alt: "Drei Jugendliche beim Lernen",
    caption: "Kleine Gruppen – grosser Lernerfolg",
  },
];

const SUBJECTS = [
  { icon: Calculator, label: "Mathematik", color: "#1a3a5c" },
  { icon: BookOpen, label: "Deutsch", color: "#0f6e5c" },
  { icon: Globe, label: "Englisch", color: "#7c3aed" },
  { icon: FlaskConical, label: "Chemie", color: "#c2410c" },
  { icon: Leaf, label: "Biologie", color: "#15803d" },
  { icon: Zap, label: "Physik", color: "#b45309" },
  { icon: Landmark, label: "Geschichte", color: "#9333ea" },
  { icon: Globe, label: "Franzoesisch", color: "#be185d" },
  { icon: Globe, label: "Spanisch", color: "#dc2626" },
  { icon: BookOpen, label: "Latein", color: "#475569" },
  { icon: Globe, label: "Russisch", color: "#1e40af" },
  { icon: Cpu, label: "Informatik", color: "#0369a1" },
  { icon: MapPin, label: "Erdkunde", color: "#166534" },
  { icon: Music, label: "Musik", color: "#7c3aed" },
  { icon: BookOpen, label: "Wirtschaft", color: "#0f4c5c" },
  { icon: FlaskConical, label: "Ernaehrung", color: "#065f46" },
];

const BENEFITS = [
  { icon: GraduationCap, title: "Klausurvorbereitung", desc: "Gezielt auf die naechste Pruefung vorbereiten mit individuell abgestimmtem Lernplan." },
  { icon: Star, title: "Abiturvorbereitung", desc: "Strukturierte Vorbereitung auf das Abitur mit erfahrenen Lehrkraeften." },
  { icon: Calendar, title: "Schnupperstunde kostenlos", desc: "Lerne uns unverbindlich kennen. Keine Kosten, kein Risiko, nur Mehrwert." },
  { icon: Infinity, title: "Keine Vertragslaufzeit", desc: "Du entscheidest, wann du anfaengst und aufhoerst. Voellig flexibel." },
  { icon: Users, title: "Einzel- und Kleingruppen", desc: "Individueller Fokus auf deine Staerken und Schwaechen." },
  { icon: BookOpen, title: "Nachpruefung und Ferienkurse", desc: "Spezielle Angebote fuer Nachpruefungen sowie intensive Ferienkurse." },
];

function useFadeUpInView() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Ueber uns", href: "#ueber-uns" },
    { label: "Faecher", href: "#faecher" },
    { label: "Preise", href: "/preise" },
    { label: "Bewerben", href: "/bewerben" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center">
            <GraduationCap size={18} className="text-[#f5b731]" />
          </div>
          <span className={`font-semibold text-sm leading-tight transition-colors ${scrolled ? "text-[#1a3a5c]" : "text-white"}`}>
            Bad Camberger<br />
            <span className={`text-xs font-normal ${scrolled ? "text-slate-500" : "text-white/70"}`}>Lernzentrum</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className={`transition-colors ${scrolled ? "text-slate-600 hover:text-[#1a3a5c]" : "text-white/80 hover:text-white"}`}>
              {l.label === "Ueber uns" ? "Über uns" : l.label === "Faecher" ? "Fächer" : l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#1a3a5c] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#0f2a4a] transition-all">
            <MessageCircle size={14} />
            Probestunde
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menue"
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-[#1a3a5c]" : "text-white"}`}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-slate-100 overflow-hidden">
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-slate-700 font-medium py-1" onClick={() => setOpen(false)}>
                  {l.label === "Ueber uns" ? "Über uns" : l.label === "Faecher" ? "Fächer" : l.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1a3a5c] text-white font-medium px-4 py-3 rounded-xl mt-2">
                <MessageCircle size={16} />Kostenlose Probestunde
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }} className="md:hidden fixed bottom-5 inset-x-4 z-40">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-[#1a3a5c] text-white font-semibold py-4 rounded-2xl shadow-2xl shadow-[#1a3a5c]/40 text-sm">
            <MessageCircle size={18} />Kostenlose Probestunde – Jetzt anfragen
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS[1].src}
          alt="Schuelerinnen beim Lernen im Bad Camberger Lernzentrum"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e30]/92 via-[#0a1e30]/70 to-[#0a1e30]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e30]/55 via-transparent to-transparent" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-5 pt-28 pb-20 md:min-h-screen md:flex md:items-center">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3.5 py-1.5 rounded-full mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Staatlich anerkannt · Seit 1992
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            Hier macht Dir{' '}
            <span className="relative inline-block">
              Lernen
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-[#f5b731]/50 -z-10 origin-left rounded"
              />
            </span>{' '}
            Spass!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg leading-relaxed mb-8"
          >
            Professionelle Nachhilfe in Bad Camberg – im Einzelunterricht oder in kleinen Gruppen,
            vor Ort oder online. Mit ueber 30 Jahren Erfahrung begleiten wir dich zum Erfolg.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-6 py-3.5 rounded-xl shadow-lg text-sm"
            >
              <MessageCircle size={16} />
              Kostenlose Probestunde
              <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium px-6 py-3.5 rounded-xl hover:bg-white/25 transition-colors text-sm"
            >
              Kontakt aufnehmen
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-5"
          >
            {[
              { icon: Award, text: 'Seit 1992' },
              { icon: Shield, text: 'Staatlich anerkannt' },
              { icon: Infinity, text: 'Keine Vertragslaufzeit' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-sm text-white/75">
                <Icon size={14} className="text-[#f5b731]" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center"
      >
        <ChevronRight size={20} className="rotate-90" />
      </motion.div>
    </section>
  );
}

function PhotoSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { ref, inView } = useFadeUpInView();

  const go = useCallback((dir: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((p) => (p + dir + PHOTOS.length) % PHOTOS.length);
    setTimeout(() => setAnimating(false), 500);
  }, [animating]);

  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className="py-20 bg-[#0f1f2e]" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-10">
          <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Einblick</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">Lernzentrum hautnah</motion.h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-slate-800 group"
          style={{ aspectRatio: "16/7" }}>
          <AnimatePresence mode="wait">
            <motion.img key={current} src={PHOTOS[current].src} alt={PHOTOS[current].alt}
              initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </AnimatePresence>

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/65 to-transparent px-6 pb-6 pt-16">
            <AnimatePresence mode="wait">
              <motion.p key={current} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} className="text-white font-medium text-sm">
                {PHOTOS[current].caption}
              </motion.p>
            </AnimatePresence>
          </div>

          <button onClick={() => go(-1)} aria-label="Vorheriges Bild"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/35">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => go(1)} aria-label="Naechstes Bild"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/35">
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-5 right-6 flex gap-1.5">
            {PHOTOS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Bild ${i + 1}`}
                className={`rounded-full transition-all ${i === current ? "w-5 h-1.5 bg-[#f5b731]" : "w-1.5 h-1.5 bg-white/50"}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function UeberUns() {
  const { ref, inView } = useFadeUpInView();
  return (
    <section id="ueber-uns" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="order-2 md:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
              <Image
                src={PHOTOS[0].src}
                alt={PHOTOS[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs text-slate-500 mb-0.5">Gegruendet</p>
                <p className="font-bold text-[#1a3a5c] text-xl">1992</p>
                <p className="text-xs text-slate-500">Staatlich anerkannt</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={stagger}
            className="order-1 md:order-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Ueber uns
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-[#1a3a5c] leading-tight mb-5"
            >
              Dein Lernzentrum mit ueber 30 Jahren Erfahrung
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-4">
              Das Bad Camberger Lernzentrum wurde 1992 gegruendet und ist ein staatlich anerkanntes
              Nachhilfeinstitut. Neben schulergaenzendem Lernen bieten wir Unterstuetzung bei
              Klassenarbeiten, Abschlusspruefungen, Nachpruefungen und dem Abitur.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
              Wir sind ein sehr erfahrenes, engagiertes und motiviertes Team mit der Zeit und Ruhe,
              die Lehrerinnen und Lehrer in der Schule oft nicht haben.
            </motion.p>
            <motion.div variants={stagger} className="space-y-3 mb-8">
              {[
                'Einzelunterricht und Kleingruppen – individuelle Betreuung',
                'Stoff nachholen, vertiefen und Pruefungsvorbereitung',
                'Vor Ort in Bad Camberg oder bequem online',
                'Ferienkurse und Nachpruefungsvorbereitung verfuegbar',
              ].map((p) => (
                <motion.div key={p} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#1a3a5c] mt-0.5 shrink-0" />
                  <p className="text-slate-600 text-sm">{p}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.a
              variants={fadeUp}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a3a5c] font-semibold text-sm hover:gap-3 transition-all"
            >
              Jetzt kennenlernen <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  const { ref, inView } = useFadeUpInView();
  return (
    <section id="faecher" className="py-24 bg-[#fafaf8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Unsere Faecher</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Nachhilfe in allen Schulfaechern</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 mt-3 max-w-xl mx-auto">Von Mathematik bis Russisch – wir decken alle Faecher ab.</motion.p>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {SUBJECTS.map((s, i) => (
            <motion.div key={s.label} custom={i} variants={fadeUp} whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2.5 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-default">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <p className="font-medium text-slate-700 text-sm">{s.label}</p>
            </motion.div>
          ))}
          <motion.div variants={fadeUp} className="bg-[#1a3a5c] rounded-2xl p-4 flex flex-col items-center justify-center gap-1">
            <p className="text-white font-semibold text-sm">+ Mehr</p>
            <p className="text-white/60 text-xs">Alle Faecher</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const { ref, inView } = useFadeUpInView();
  return (
    <section id="vorteile" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Aktuelles und Vorteile</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Warum das Bad Camberger Lernzentrum?</motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <motion.div key={b.title} custom={i} variants={fadeUp} whileHover={{ y: -4 }}
              className="group bg-[#fafaf8] rounded-2xl p-6 border border-slate-100 hover:border-[#1a3a5c]/20 hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#1a3a5c]/8 flex items-center justify-center mb-4 group-hover:bg-[#1a3a5c] transition-colors">
                <b.icon size={20} className="text-[#1a3a5c] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#1a3a5c] mb-2">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OnlineUnterricht() {
  const { ref, inView } = useFadeUpInView();
  const features = [
    { icon: BookOpen, label: "Alle Faecher", desc: "Jedes Fach – auch online verfuegbar." },
    { icon: Calendar, label: "Flexibel", desc: "Termine, die zu deinem Alltag passen." },
    { icon: Infinity, label: "Keine Mindestlaufzeit", desc: "Anfangen und aufhoeren wann du willst." },
    { icon: Monitor, label: "Microsoft Teams", desc: "Einfacher Einstieg per Link." },
  ];
  return (
    <section id="online" className="py-24 bg-[#1a3a5c] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#f5b731]/10" />
      </div>
      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Online Unterricht</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">Lernen – egal wo du bist</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 leading-relaxed mb-8">
              Dir ist es nicht moeglich uns vor Ort zu besuchen? Kein Problem! Unser Online-Unterricht
              ueber Microsoft Teams ist genauso effektiv – mit denselben erfahrenen Lehrkraeften.
            </motion.p>
            <motion.a variants={fadeUp} href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f5b731] text-[#1a3a5c] font-bold px-6 py-3.5 rounded-xl hover:bg-[#e5a720] transition-colors text-sm">
              Online-Unterricht anfragen <ArrowRight size={16} />
            </motion.a>
          </motion.div>
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div key={f.label} custom={i} variants={fadeUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#f5b731]/20 flex items-center justify-center mb-3">
                  <f.icon size={16} className="text-[#f5b731]" />
                </div>
                <p className="font-semibold text-white text-sm mb-1">{f.label}</p>
                <p className="text-white/60 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { ref, inView } = useFadeUpInView();
  return (
    <section id="bewertungen" className="py-24 bg-[#fafaf8]" ref={ref}>
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Was unsere Schueler sagen</motion.p>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mt-8">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-[#f5b731] text-[#f5b731]" />)}
          </div>
          <blockquote className="text-slate-700 text-lg md:text-xl leading-relaxed mb-6 font-medium">
            "Ich besuche das Lernzentrum schon seit mehreren Jahren und bin immer wieder sehr zufrieden.
            Die Lehrer sind aeuszerst kompetent und schaffen es, den Stoff verstaendlich und anschaulich
            zu vermitteln. Die angenehme Lernathosphare motiviert mich jedes Mal aufs Neue.
            Ich kann das Lernzentrum nur weiterempfehlen!"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white font-bold text-sm">JP</div>
            <div className="text-left">
              <p className="font-semibold text-[#1a3a5c] text-sm">Jan Pink</p>
              <p className="text-slate-400 text-xs">Langjaehriger Schueler</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PreiseCTA() {
  const { ref, inView } = useFadeUpInView();
  return (
    <section id="preise" className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
          className="bg-gradient-to-br from-[#fafaf8] to-[#eef2f7] rounded-3xl border border-slate-200 p-10 md:p-14 text-center">
          <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Preise</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">Transparent und fair</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Einzelstunden ab 35 € und Monatsabos ab 100 €.<br />
            Keine versteckten Kosten. Keine Vertragslaufzeit.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/preise"
              className="inline-flex items-center justify-center gap-2 bg-[#1a3a5c] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#0f2a4a] transition-colors text-sm">
              Alle Preise ansehen <ArrowRight size={16} />
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-medium px-7 py-3.5 rounded-xl hover:border-slate-300 bg-white transition-colors text-sm">
              <MessageCircle size={15} />Probestunde anfragen
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Kontakt() {
  const { ref, inView } = useFadeUpInView();
  return (
    <section id="kontakt" className="py-24 bg-[#fafaf8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Standort und Kontakt</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Wir freuen uns auf dich!</motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
            {[
              { icon: MapPin, label: "Adresse", content: <p className="text-slate-600 text-sm">Bahnhofstrase 28<br />65520 Bad Camberg</p> },
              { icon: Clock, label: "Oeffnungszeiten", content: <p className="text-slate-600 text-sm">Mo-Fr: 14:00-19:00 Uhr<br />Samstag: 10:00-15:00 Uhr</p> },
              { icon: Phone, label: "Telefon (taeglich)", content: <><a href="tel:0643437417" className="block text-[#1a3a5c] font-medium text-sm hover:underline">06434 37417</a><a href="tel:01737387505" className="block text-[#1a3a5c] font-medium text-sm hover:underline">0173 7387505</a></> },
              { icon: Mail, label: "E-Mail", content: <p className="text-slate-600 text-sm">info@badcamberger-lernzentrum.de</p> },
            ].map(({ icon: Icon, label, content }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={16} className="text-[#1a3a5c] mt-0.5 shrink-0" />
                <div><p className="font-semibold text-[#1a3a5c] mb-1">{label}</p>{content}</div>
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors">
                <MessageCircle size={16} />WhatsApp schreiben
              </a>
              <a href="tel:0643437417"
                className="flex items-center justify-center gap-2 bg-[#1a3a5c] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#0f2a4a] transition-colors">
                <Phone size={16} />Jetzt anrufen
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px] bg-slate-100">
            <iframe title="Standort Bad Camberger Lernzentrum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.0!2d8.2677!3d50.2989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc4e7e6b1a0001%3A0x0!2sBahnhofstra%C3%9Fe+28%2C+65520+Bad+Camberg!5e0!3m2!1sde!2sde!4v1"
              className="w-full h-full min-h-[380px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps Bad Camberger Lernzentrum" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { ref, inView } = useFadeUpInView();
  return (
    <section className="py-24 bg-[#1a3a5c] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-white/4 -translate-y-1/2" />
      </div>
      <div className="relative max-w-2xl mx-auto px-5 text-center">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}>
          <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-4">Jetzt starten</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Vereinbare jetzt deine kostenlose Probestunde
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-lg mb-10 leading-relaxed">
            Lerne uns kennen – unverbindlich, kostenlos und ohne Vertragsbindung.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-8 py-4 rounded-2xl hover:bg-[#e5a720] transition-colors text-sm">
              <MessageCircle size={18} />Kostenlose Probestunde vereinbaren
            </motion.a>
            <a href="tel:0643437417"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-4 rounded-2xl hover:bg-white/10 transition-colors text-sm">
              <Phone size={16} />06434 37417
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a1520] py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1a3a5c] flex items-center justify-center">
              <GraduationCap size={14} className="text-[#f5b731]" />
            </div>
            <span className="text-white font-semibold text-sm">Bad Camberger Lernzentrum</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            {[
              { label: "Start", href: "/" }, { label: "Preise", href: "/preise" },
              { label: "Bewerben", href: "/bewerben" },
              { label: "Kontakt", href: WA_LINK, ext: true },
              { label: "Impressum", href: "/impressum" }, { label: "Datenschutz", href: "/datenschutz" },
            ].map((l) => (
              <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined}
                rel={l.ext ? "noopener noreferrer" : undefined}
                className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Bad Camberger Lernzentrum</p>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <UeberUns />
        <PhotoSlider />
        <Subjects />
        <Benefits />
        <OnlineUnterricht />
        <Testimonials />
        <PreiseCTA />
        <Kontakt />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

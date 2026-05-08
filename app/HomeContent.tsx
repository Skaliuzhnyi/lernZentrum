"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  BookOpen, Calculator, FlaskConical, Globe, Music, Leaf, Landmark,
  Cpu, MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2,
  GraduationCap, Users, Calendar, Zap, Monitor, Star,
  ArrowRight, Shield, Award, Infinity, ChevronLeft, ChevronRight,
} from "lucide-react";

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";

const HERO_IMG = "https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/53410061-50d5-4213-864e-9e2a55be07e3/_COW6732.jpeg";

const PHOTOS = [
  { src: "https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/51dae67a-b447-47f9-986e-582af0fd93e7/Aussen+2.jpg", alt: "Aussenansicht Bad Camberger Lernzentrum", caption: "Unser Lernzentrum in Bad Camberg" },
  { src: "https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/53410061-50d5-4213-864e-9e2a55be07e3/_COW6732.jpeg", alt: "Schuelerinnen beim Lernen", caption: "Individuell und persoenlich" },
  { src: "https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/3b56f9d7-fe41-457a-ad86-489d535b239f/_COW6734.jpeg", alt: "Jugendliche beim Lernen", caption: "Kleine Gruppen – grosser Lernerfolg" },
];

const SUBJECTS = [
  { icon: Calculator, label: "Mathematik",   color: "#1a3a5c" },
  { icon: BookOpen,   label: "Deutsch",       color: "#0f6e5c" },
  { icon: Globe,      label: "Englisch",      color: "#7c3aed" },
  { icon: FlaskConical,label:"Chemie",        color: "#c2410c" },
  { icon: Leaf,       label: "Biologie",      color: "#15803d" },
  { icon: Zap,        label: "Physik",        color: "#b45309" },
  { icon: Landmark,   label: "Geschichte",    color: "#9333ea" },
  { icon: Globe,      label: "Franzoesisch",  color: "#be185d" },
  { icon: Globe,      label: "Spanisch",      color: "#dc2626" },
  { icon: BookOpen,   label: "Latein",        color: "#475569" },
  { icon: Globe,      label: "Russisch",      color: "#1e40af" },
  { icon: Cpu,        label: "Informatik",    color: "#0369a1" },
  { icon: MapPin,     label: "Erdkunde",      color: "#166534" },
  { icon: Music,      label: "Musik",         color: "#7c3aed" },
  { icon: BookOpen,   label: "Wirtschaft",    color: "#0f4c5c" },
  { icon: FlaskConical,label:"Ernaehrung",    color: "#065f46" },
];

const BENEFITS = [
  { icon: GraduationCap, title: "Klausurvorbereitung",       desc: "Gezielt auf die naechste Pruefung vorbereiten – mit individuell abgestimmtem Lernplan." },
  { icon: Star,          title: "Abiturvorbereitung",         desc: "Strukturierte Vorbereitung auf das Abitur mit erfahrenen Lehrkraeften." },
  { icon: Calendar,      title: "Schnupperstunde kostenlos",  desc: "Lerne uns unverbindlich kennen. Keine Kosten, kein Risiko." },
  { icon: Infinity,      title: "Keine Vertragslaufzeit",     desc: "Du entscheidest, wann du anfaengst und aufhoerst. Voellig flexibel." },
  { icon: Users,         title: "Einzel- & Kleingruppen",     desc: "Individueller Fokus auf deine Staerken und Schwaechen." },
  { icon: BookOpen,      title: "Nachpruefung & Ferienkurse", desc: "Spezielle Angebote fuer Nachpruefungen sowie intensive Ferienkurse." },
];

const TESTIMONIALS = [
  { initials: "JP", name: "Jan Pink",        role: "Langjaehriger Schueler",    stars: 5, text: "Ich besuche das Lernzentrum schon seit mehreren Jahren und bin immer wieder sehr zufrieden. Die Lehrer sind aeuszerst kompetent und schaffen es, den Stoff verstaendlich zu vermitteln. Ich kann das Lernzentrum nur weiterempfehlen!" },
  { initials: "AM", name: "Anna M.",          role: "Schuelerin, Klasse 9",      stars: 5, text: "In Mathe hatte ich eine 5, jetzt nach drei Monaten eine 2! Die Lehrerin erklaert alles so geduldig. Ich gehe jetzt sogar gerne in die Nachhilfe – das haette ich mir vorher nie gedacht." },
  { initials: "FM", name: "Familie Mueller", role: "Eltern eines Schülers",     stars: 5, text: "Unser Sohn ist seit einem halben Jahr hier und wir sind begeistert. Er ist viel selbstbewusster geworden und hat endlich wieder Spass am Lernen. Tolle Atmosphaere und sehr engagierte Lehrkraefte!" },
  { initials: "LK", name: "Lena K.",          role: "Abiturientin",              stars: 5, text: "Ohne das Lernzentrum haette ich mein Abitur nie so gut bestanden. Die gezielte Pruefungsvorbereitung und die individuelle Betreuung haben den entscheidenden Unterschied gemacht. Vielen Dank!" },
  { initials: "TR", name: "Tom R.",           role: "Online-Schueler",           stars: 5, text: "Der Online-Unterricht ueber Teams funktioniert wirklich super! Genauso effektiv wie vor Ort, aber ohne den Weg. Flexibel, professionell und ohne Vertragszwang – genau das hat mir gefehlt." },
];

/* ── helpers ─────────────────────────────────────────────────── */
function useFadeUp() {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return { ref, inView };
}

const fUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};
const stg = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ── Sticky mobile CTA ───────────────────────────────────────── */
function StickyMobileCTA() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <AnimatePresence>
      {vis && (
        <motion.div
          initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }} transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="md:hidden fixed bottom-5 inset-x-4 z-40"
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-[#1a3a5c] text-white font-semibold py-4 rounded-2xl shadow-2xl shadow-[#1a3a5c]/45 text-sm">
            <MessageCircle size={18} />Kostenlose Probestunde
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── HERO ────────────────────────────────────────────────────── */
function Hero() {
  const scrollToContact = () =>
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Schuelerinnen beim Lernen"
          className="w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071724]/90 via-[#0d2035]/80 to-[#1a3a5c]/60" />
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(245,183,49,0.06) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#f5f5f5 1px,transparent 1px),linear-gradient(90deg,#f5f5f5 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-5 pt-24 pb-20 md:min-h-screen md:flex md:items-center">
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 w-full">

          {/* ── Left column ── */}
          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/12 backdrop-blur border border-white/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Staatlich anerkannt · Seit 1992
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22,1,0.36,1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
              Hier macht Dir{" "}
              <span className="relative inline-block">
                Lernen
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: 0.55, delay: 0.85, ease: [0.22,1,0.36,1] }}
                  className="absolute bottom-0.5 left-0 right-0 h-3 bg-[#f5b731]/45 -z-10 origin-left rounded" />
              </span>{" "}
              Spaß!
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              Professionelle Nachhilfe in Bad Camberg – Einzelunterricht oder Kleingruppen,
              vor Ort oder online. Über 30 Jahre Erfahrung.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 mb-8">
              <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(245,183,49,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-6 py-3.5 rounded-xl text-sm cursor-pointer">
                <MessageCircle size={17} />Kostenlose Probestunde<ArrowRight size={15} />
              </motion.a>
              <motion.button onClick={scrollToContact}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.22)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/14 backdrop-blur border border-white/28 text-white font-medium px-6 py-3.5 rounded-xl text-sm cursor-pointer">
                Kontakt aufnehmen
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-5">
              {[{ icon: Award, text: "Seit 1992" }, { icon: Shield, text: "Staatlich anerkannt" }, { icon: Infinity, text: "Keine Vertragslaufzeit" }]
                .map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-white/70">
                    <Icon size={14} className="text-[#f5b731]" />{text}
                  </div>
                ))}
            </motion.div>
          </div>

          {/* ── Right column – floating cards ── */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="relative w-full max-w-[320px]">

              {/* Star card */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                style={{ animation: "floatA 4s ease-in-out infinite" }}
                className="absolute -top-8 -left-10 bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-4 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-[#f5b731]/15 flex items-center justify-center">
                  <Star size={18} className="text-[#f5b731] fill-[#f5b731]" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 mb-0.5">Kundenbewertung</p>
                  <p className="font-bold text-[#1a3a5c] text-sm tracking-wide">★★★★★</p>
                </div>
              </motion.div>

              {/* Availability card */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                style={{ animation: "floatB 3.5s ease-in-out infinite" }}
                className="absolute -bottom-8 -right-10 bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-4 z-10">
                <p className="text-[10px] text-slate-400 mb-1">Naechste freie Stunde</p>
                <p className="font-bold text-[#1a3a5c] text-sm">Heute verfuegbar</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-600 font-medium">Probestunde kostenlos</span>
                </div>
              </motion.div>

              {/* Main dark card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.4, ease: [0.22,1,0.36,1] }}
                className="bg-gradient-to-br from-[#1a3a5c]/90 to-[#0f2a4a]/90 backdrop-blur-md rounded-3xl p-7 shadow-2xl border border-white/10">
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {SUBJECTS.slice(0, 9).map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-xl p-2.5 text-center hover:bg-white/18 transition-colors">
                      <s.icon size={15} className="mx-auto mb-1 text-[#f5b731]" />
                      <p className="text-[8px] font-medium text-white/80 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/15 pt-4">
                  <p className="text-white/50 text-[10px] mb-0.5">Fächer verfuegbar</p>
                  <p className="font-bold text-white text-lg">16+ Fächer</p>
                  <p className="text-white/50 text-[10px] mt-0.5">Einzelunterricht & Kleingruppen</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center">
        <ChevronRight size={22} className="rotate-90" />
      </motion.div>

      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
      `}</style>
    </section>
  );
}

/* ── Photo Slider ────────────────────────────────────────────── */
function PhotoSlider() {
  const [cur, setCur] = useState(0);
  const [busy, setBusy] = useState(false);
  const { ref, inView } = useFadeUp();

  const go = useCallback((d: number) => {
    if (busy) return;
    setBusy(true);
    setCur((p) => (p + d + PHOTOS.length) % PHOTOS.length);
    setTimeout(() => setBusy(false), 520);
  }, [busy]);

  useEffect(() => { const t = setInterval(() => go(1), 5500); return () => clearInterval(t); }, [go]);

  return (
    <section className="py-20 bg-[#0d1f2d]" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="text-center mb-10">
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Einblick</motion.p>
          <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-white">Lernzentrum hautnah</motion.h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden group bg-slate-800"
          style={{ aspectRatio: "21/9" }}>
          <AnimatePresence mode="wait">
            <motion.img key={cur} src={PHOTOS[cur].src} alt={PHOTOS[cur].alt}
              initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.52, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 right-16">
            <AnimatePresence mode="wait">
              <motion.p key={cur} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} className="text-white font-medium text-sm drop-shadow">
                {PHOTOS[cur].caption}
              </motion.p>
            </AnimatePresence>
          </div>
          {/* Arrows */}
          {["left","right"].map((dir) => (
            <button key={dir} onClick={() => go(dir === "left" ? -1 : 1)}
              aria-label={dir === "left" ? "Vorheriges" : "Naechstes"}
              className={`absolute ${dir === "left" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/38 hover:scale-110`}>
              {dir === "left" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          ))}
          {/* Dots */}
          <div className="absolute bottom-5 right-5 flex gap-1.5">
            {PHOTOS.map((_, i) => (
              <button key={i} onClick={() => setCur(i)} aria-label={`Bild ${i+1}`}
                className={`rounded-full transition-all duration-300 ${i === cur ? "w-5 h-1.5 bg-[#f5b731]" : "w-1.5 h-1.5 bg-white/45 hover:bg-white/70"}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Über uns ────────────────────────────────────────────────── */
function UeberUns() {
  const { ref, inView } = useFadeUp();
  return (
    <section id="ueber-uns" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fUp}
            className="order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
              <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[10px] text-slate-400 mb-0.5">Gegruendet</p>
                <p className="font-extrabold text-[#1a3a5c] text-2xl">1992</p>
                <p className="text-[10px] text-slate-400">Staatlich anerkannt</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg}
            className="order-1 md:order-2">
            <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Ueber uns</motion.p>
            <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c] leading-tight mb-5">
              Dein Lernzentrum mit ueber 30 Jahren Erfahrung
            </motion.h2>
            <motion.p variants={fUp} className="text-slate-600 leading-relaxed mb-4">
              Das Bad Camberger Lernzentrum wurde 1992 gegruendet und ist ein staatlich anerkanntes
              Nachhilfeinstitut. Wir unterstuetzen bei Klassenarbeiten, Abschlusspruefungen,
              Nachpruefungen und dem Abitur.
            </motion.p>
            <motion.p variants={fUp} className="text-slate-600 leading-relaxed mb-6">
              Wir sind ein sehr erfahrenes, engagiertes Team – wir haben die Zeit und Geduld, die
              Lehrerinnen und Lehrer in der Schule oft nicht haben.
            </motion.p>
            <motion.div variants={stg} className="space-y-2.5 mb-8">
              {["Einzelunterricht & Kleingruppen – individuelle Betreuung",
                "Stoff nachholen, vertiefen & Pruefungsvorbereitung",
                "Vor Ort in Bad Camberg oder bequem online",
                "Ferienkurse & Nachpruefungsvorbereitung verfuegbar",
              ].map((p) => (
                <motion.div key={p} variants={fUp} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#1a3a5c] mt-0.5 shrink-0" />
                  <p className="text-slate-600 text-sm">{p}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.a variants={fUp} href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(26,58,92,0.28)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-[#1a3a5c] text-white font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer">
                <MessageCircle size={15} />Jetzt kennenlernen<ArrowRight size={14} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Subjects ────────────────────────────────────────────────── */
function Subjects() {
  const { ref, inView } = useFadeUp();
  return (
    <section id="faecher" className="py-24 bg-[#fafaf8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="text-center mb-12">
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Unsere Fächer</motion.p>
          <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Nachhilfe in allen Schulfächern</motion.h2>
          <motion.p variants={fUp} className="text-slate-500 mt-3 max-w-xl mx-auto">Von Mathematik bis Russisch – wir decken alle Fächer ab, die du brauchst.</motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {SUBJECTS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 180, damping: 18, delay: i * 0.055 }}
              whileHover={{
                y: -7, scale: 1.06,
                boxShadow: `0 18px 40px ${s.color}35`,
                borderColor: s.color + "55",
              }}
              className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2.5 text-center border border-slate-100 shadow-sm cursor-default transition-colors"
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${s.color}14` }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </motion.div>
              <p className="font-medium text-slate-700 text-sm">{s.label}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 24 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: SUBJECTS.length * 0.055 }}
            whileHover={{ y: -7, scale: 1.06, boxShadow: "0 18px 40px rgba(26,58,92,0.35)" }}
            className="bg-[#1a3a5c] rounded-2xl p-4 flex flex-col items-center justify-center gap-1 cursor-default"
          >
            <p className="text-white font-bold text-sm">+ Mehr</p>
            <p className="text-white/55 text-[11px]">Alle Fächer</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Benefits ────────────────────────────────────────────────── */
function Benefits() {
  const { ref, inView } = useFadeUp();
  return (
    <section id="vorteile" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="text-center mb-12">
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Aktuelles & Vorteile</motion.p>
          <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Warum das Bad Camberger Lernzentrum?</motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <motion.div key={b.title} custom={i} variants={fUp}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(26,58,92,0.12)", borderColor: "#1a3a5c30" }}
              className="group bg-[#fafaf8] rounded-2xl p-6 border border-slate-100 transition-all cursor-default">
              <motion.div whileHover={{ scale: 1.12, rotate: -5 }}
                className="w-11 h-11 rounded-xl bg-[#1a3a5c]/8 flex items-center justify-center mb-4 group-hover:bg-[#1a3a5c] transition-colors duration-300">
                <b.icon size={20} className="text-[#1a3a5c] group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <h3 className="font-bold text-[#1a3a5c] mb-2 text-sm">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Online ──────────────────────────────────────────────────── */
function OnlineUnterricht() {
  const { ref, inView } = useFadeUp();
  const features = [
    { icon: BookOpen, label: "Alle Fächer",          desc: "Jedes Fach – auch online." },
    { icon: Calendar, label: "Flexibel",              desc: "Termine, die zu dir passen." },
    { icon: Infinity, label: "Keine Mindestlaufzeit", desc: "Kündbar wann du willst." },
    { icon: Monitor,  label: "Microsoft Teams",       desc: "Einstieg per Link – sofort." },
  ];
  return (
    <section id="online" className="py-24 bg-[#1a3a5c] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[#f5b731]/8" />
      </div>
      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg}>
            <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Online Unterricht</motion.p>
            <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">Lernen – egal wo du bist</motion.h2>
            <motion.p variants={fUp} className="text-white/70 leading-relaxed mb-8">
              Nicht moeglich, uns vor Ort zu besuchen? Kein Problem! Unser Online-Unterricht ueber
              Microsoft Teams ist genauso effektiv – mit denselben erfahrenen Lehrkraeften.
            </motion.p>
            <motion.a variants={fUp} href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(245,183,49,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#f5b731] text-[#1a3a5c] font-bold px-6 py-3.5 rounded-xl text-sm cursor-pointer">
                Online-Unterricht anfragen <ArrowRight size={16} />
              </motion.span>
            </motion.a>
          </motion.div>
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div key={f.label} custom={i} variants={fUp}
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#f5b731]/20 flex items-center justify-center mb-3">
                  <f.icon size={16} className="text-[#f5b731]" />
                </div>
                <p className="font-semibold text-white text-sm mb-1">{f.label}</p>
                <p className="text-white/55 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials Slider ─────────────────────────────────────── */
function Testimonials() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  const { ref, inView } = useFadeUp();

  const go = useCallback((d: number) => {
    setDir(d);
    setCur((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => { const t = setInterval(() => go(1), 6000); return () => clearInterval(t); }, [go]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22,1,0.36,1] as [number,number,number,number] } },
    exit:   (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.3 } }),
  };

  return (
    <section id="bewertungen" className="py-24 bg-[#fafaf8]" ref={ref}>
      <div className="max-w-3xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="text-center mb-10">
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Was unsere Schueler sagen</motion.p>
          <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Stimmen aus dem Lernzentrum</motion.h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 overflow-hidden min-h-[280px] flex flex-col">
          {/* Quote mark */}
          <div className="absolute top-6 right-8 text-[120px] leading-none text-[#1a3a5c]/5 font-serif select-none">"</div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div key={cur} custom={dir} variants={variants}
              initial="enter" animate="center" exit="exit"
              className="flex flex-col flex-1">
              <div className="flex gap-1 mb-5">
                {[...Array(TESTIMONIALS[cur].stars)].map((_, i) => (
                  <Star key={i} size={17} className="fill-[#f5b731] text-[#f5b731]" />
                ))}
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-7 font-medium flex-1 italic">
                "{TESTIMONIALS[cur].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1a3a5c] to-[#0f2a4a] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {TESTIMONIALS[cur].initials}
                </div>
                <div>
                  <p className="font-bold text-[#1a3a5c] text-sm">{TESTIMONIALS[cur].name}</p>
                  <p className="text-slate-400 text-xs">{TESTIMONIALS[cur].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-100">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                  aria-label={`Bewertung ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === cur ? "w-6 h-2 bg-[#1a3a5c]" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              {([-1, 1] as const).map((d) => (
                <motion.button key={d} onClick={() => go(d)}
                  whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }}
                  aria-label={d < 0 ? "Zurueck" : "Weiter"}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#1a3a5c] hover:text-[#1a3a5c] transition-colors">
                  {d < 0 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Preise CTA ──────────────────────────────────────────────── */
function PreiseCTA() {
  const { ref, inView } = useFadeUp();
  return (
    <section id="preise" className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg}
          className="rounded-3xl border border-slate-200 p-10 md:p-14 text-center bg-gradient-to-br from-[#fafaf8] to-[#eef2f7]">
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Preise</motion.p>
          <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">Transparent & fair</motion.h2>
          <motion.p variants={fUp} className="text-slate-500 text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Einzelstunden ab 35 € · Monatsabo ab 100 €<br />
            Keine versteckten Kosten. Keine Vertragslaufzeit.
          </motion.p>
          <motion.div variants={fUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a href="/preise"
              whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(26,58,92,0.32)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#1a3a5c] text-white font-bold px-8 py-3.5 rounded-xl text-sm">
              Alle Preise ansehen <ArrowRight size={16} />
            </motion.a>
            <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-medium px-7 py-3.5 rounded-xl bg-white text-sm">
              <MessageCircle size={15} />Probestunde anfragen
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Kontakt ─────────────────────────────────────────────────── */
function Kontakt() {
  const { ref, inView } = useFadeUp();
  return (
    <section id="kontakt" className="py-24 bg-[#fafaf8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-5">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="text-center mb-12">
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Standort & Kontakt</motion.p>
          <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Wir freuen uns auf dich!</motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg} className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fUp} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
            {[
              { icon: MapPin, label: "Adresse", content: <p className="text-slate-600 text-sm">Bahnhofstra&#223;e 28<br />65520 Bad Camberg</p> },
              { icon: Clock,  label: "Öffnungszeiten", content: <p className="text-slate-600 text-sm">Mo–Fr: 14:00–19:00 Uhr<br />Samstag: 10:00–15:00 Uhr</p> },
              { icon: Phone,  label: "Telefon (täglich)", content: <><a href="tel:0643437417" className="block text-[#1a3a5c] font-semibold text-sm hover:underline">06434 37417</a><a href="tel:01737387505" className="block text-[#1a3a5c] font-semibold text-sm hover:underline">0173 7387505</a></> },
              { icon: Mail,   label: "E-Mail", content: <p className="text-slate-600 text-sm">info@badcamberger-lernzentrum.de</p> },
            ].map(({ icon: Icon, label, content }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1a3a5c]/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={15} className="text-[#1a3a5c]" />
                </div>
                <div><p className="font-semibold text-[#1a3a5c] text-sm mb-1">{label}</p>{content}</div>
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              {[
                { href: WA_LINK, ext: true,  bg: "#25D366", hover: "#1da851", icon: MessageCircle, label: "WhatsApp schreiben" },
                { href: "tel:0643437417", bg: "#1a3a5c", hover: "#0f2a4a", icon: Phone, label: "Jetzt anrufen" },
              ].map(({ href, ext, bg, hover, icon: Icon, label }) => (
                <motion.a key={label} href={href}
                  target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, boxShadow: `0 10px 30px ${bg}45` }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: bg }}
                  className="flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = hover)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = bg)}>
                  <Icon size={16} />{label}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fUp} className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px] bg-slate-100">
            <iframe title="Standort Bad Camberger Lernzentrum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.0!2d8.2677!3d50.2989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc4e7e6b1a0001%3A0x0!2sBahnhofstra%C3%9Fe+28%2C+65520+Bad+Camberg!5e0!3m2!1sde!2sde!4v1"
              className="w-full h-full min-h-[380px] border-0" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps Bad Camberger Lernzentrum" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────────────── */
function FinalCTA() {
  const { ref, inView } = useFadeUp();
  return (
    <section className="py-24 bg-[#1a3a5c] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-white/4 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[#f5b731]/6" />
      </div>
      <div className="relative max-w-2xl mx-auto px-5 text-center">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stg}>
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-4">Jetzt starten</motion.p>
          <motion.h2 variants={fUp} className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Vereinbare jetzt deine kostenlose Probestunde
          </motion.h2>
          <motion.p variants={fUp} className="text-white/65 text-lg mb-10 leading-relaxed">
            Lerne uns kennen – unverbindlich, kostenlos und ohne Vertragsbindung.
          </motion.p>
          <motion.div variants={fUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 16px 50px rgba(245,183,49,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-8 py-4 rounded-2xl text-sm">
              <MessageCircle size={18} />Kostenlose Probestunde vereinbaren
            </motion.a>
            <motion.a href="tel:0643437417"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-4 rounded-2xl text-sm transition-colors">
              <Phone size={16} />06434 37417
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Export ──────────────────────────────────────────────────── */
export function HomeContent() {
  return (
    <>
      <main>
        <Hero />
        <PhotoSlider />
        <UeberUns />
        <Subjects />
        <Benefits />
        <OnlineUnterricht />
        <Testimonials />
        <PreiseCTA />
        <Kontakt />
        <FinalCTA />
      </main>
      <StickyMobileCTA />
    </>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap, MessageCircle, ArrowRight, Clock,
  Users, Laptop, CheckCircle2, Heart,
} from "lucide-react";

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";

function useFadeUpInView() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const BENEFITS = [
  {
    icon: Clock,
    title: "Flexible Arbeitszeiten",
    desc: "Passe deinen Unterricht an deinen Alltag an – ob nachmittags, abends oder am Wochenende.",
  },
  {
    icon: Laptop,
    title: "Vor Ort und Online",
    desc: "Unterrichte direkt im Lernzentrum oder bequem von zu Hause aus – du entscheidest.",
  },
  {
    icon: Users,
    title: "Motiviertes Team",
    desc: "Arbeite in einem angenehmen, unterstuetzenden Umfeld mit erfahrenen Kollegen.",
  },
  {
    icon: Heart,
    title: "Sinnvolle Arbeit",
    desc: "Mache wirklich einen Unterschied – helfe Schuelerinnen und Schuelern, ihr Potenzial zu entfalten.",
  },
];

export function BewerbePage() {
  const hero = useFadeUpInView();
  const benefits = useFadeUpInView();
  const cta = useFadeUpInView();

  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative bg-[#1a3a5c] overflow-hidden" ref={hero.ref}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#f5b731]/8" />
          </div>
          <div className="relative max-w-4xl mx-auto px-5 py-24 md:py-32 text-center">
            <motion.div initial="hidden" animate={hero.inView ? "visible" : "hidden"} variants={stagger}>
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/80 text-xs font-medium px-3.5 py-1.5 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f5b731]" />
                Wir suchen Verstaerkung
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
                Werde Teil unseres Teams
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Du hast Freude am Unterrichten und moechtest Schuelerinnen und Schueler
                individuell foerdern? Dann bist du bei uns genau richtig!
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-8 py-4 rounded-2xl hover:bg-[#e5a720] transition-colors">
                  <MessageCircle size={18} />Jetzt bewerben via WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What we offer */}
        <section className="py-24 bg-[#fafaf8] px-5" ref={benefits.ref}>
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" animate={benefits.inView ? "visible" : "hidden"} variants={stagger} className="text-center mb-14">
              <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Was wir bieten</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">
                Deine Vorteile bei uns
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" animate={benefits.inView ? "visible" : "hidden"} variants={stagger}
              className="grid sm:grid-cols-2 gap-6 mb-16">
              {BENEFITS.map((b, i) => (
                <motion.div key={b.title} custom={i} variants={fadeUp} whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#1a3a5c]/8 flex items-center justify-center mb-4">
                    <b.icon size={20} className="text-[#1a3a5c]" />
                  </div>
                  <h3 className="font-bold text-[#1a3a5c] text-base mb-2">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Who we're looking for */}
            <motion.div initial="hidden" animate={benefits.inView ? "visible" : "hidden"} variants={fadeUp}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-6">Wen wir suchen</h3>
              <div className="space-y-3">
                {[
                  "Erfahrene Lehrkraefte mit paedagogischem Hintergrund",
                  "Engagierte Quereinsteiger mit Leidenschaft fuers Unterrichten",
                  "Studierende, die Schuelern helfen moechten",
                  "Personen, die vor Ort in Bad Camberg oder online unterrichten moechten",
                  "Teamplayer mit Freude an der Arbeit mit Kindern und Jugendlichen",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#1a3a5c] mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white px-5" ref={cta.ref}>
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" animate={cta.inView ? "visible" : "hidden"} variants={stagger}
              className="text-center bg-gradient-to-br from-[#1a3a5c] to-[#0f2a4a] rounded-3xl p-10 md:p-16">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gemeinsam machen wir Bildung stark!
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/65 text-lg mb-10 leading-relaxed">
                Ob erfahrene Lehrkraft oder engagierte Quereinsteigerin –
                wir freuen uns auf deine Bewerbung! Melde dich jetzt und werde Teil unseres Teams.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-8 py-4 rounded-2xl hover:bg-[#e5a720] transition-colors text-sm">
                  <MessageCircle size={18} />Jetzt bewerben
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1520] py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="text-white font-semibold text-sm flex items-center gap-2">
            <ArrowRight size={14} className="rotate-180" />Zurueck zur Startseite
          </a>
          <div className="flex gap-5 text-slate-400 text-xs">
            <a href="/impressum" className="hover:text-white">Impressum</a>
            <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </footer>
    </>
  );
}

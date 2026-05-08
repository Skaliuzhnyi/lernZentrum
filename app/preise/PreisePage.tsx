"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2, MessageCircle, Phone, ArrowRight,
  GraduationCap, Infinity, Star, Shield,
} from "lucide-react";

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";

const PRICES = [
  {
    label: "Einzelstunde",
    price: "35",
    duration: "60 Minuten",
    note: "Oberstufenschueler: 40 Euro / Stunde",
    popular: false,
    features: ["Individueller Unterricht", "Alle Faecher", "Vor Ort und Online", "Flexible Terminwahl"],
  },
  {
    label: "Einzelstunde",
    price: "45",
    duration: "90 Minuten",
    note: "Empfohlen fuer nachhaltigen Lernerfolg",
    popular: true,
    features: ["Individueller Unterricht", "Alle Faecher", "Vor Ort und Online", "Mehr Lernzeit pro Einheit"],
  },
  {
    label: "Monatsabo",
    price: "100",
    duration: "90 Min. pro Woche",
    note: "Keine Mindestlaufzeit – jederzeit kuendbar",
    popular: false,
    features: ["1x pro Woche 90 Minuten", "Alle Faecher", "Vor Ort und Online", "Bestes Preis-Leistungs-Verhaeltnis"],
  },
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
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export function PreisePage() {
  const hero = useFadeUpInView();
  const cards = useFadeUpInView();
  const info = useFadeUpInView();

  return (
    <>
      <main className="bg-[#fafaf8] min-h-screen">
        {/* Hero */}
        <section className="pt-20 pb-16 px-5 text-center" ref={hero.ref}>
          <motion.div initial="hidden" animate={hero.inView ? "visible" : "hidden"} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Preise</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#1a3a5c] mb-4">
              Transparent und fair
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Keine versteckten Kosten, keine Mindestlaufzeit.<br />
              Nur guter Unterricht zu einem fairen Preis.
            </motion.p>
          </motion.div>
        </section>

        {/* Pricing cards */}
        <section className="pb-20 px-5" ref={cards.ref}>
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" animate={cards.inView ? "visible" : "hidden"} variants={stagger}
              className="grid md:grid-cols-3 gap-6">
              {PRICES.map((plan, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} whileHover={{ y: -5 }}
                  className={`relative rounded-3xl p-8 border transition-all ${
                    plan.popular
                      ? "bg-[#1a3a5c] border-[#1a3a5c] shadow-2xl shadow-[#1a3a5c]/30"
                      : "bg-white border-slate-200 hover:shadow-xl hover:border-slate-300"
                  }`}>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f5b731] text-[#1a3a5c] text-xs font-bold px-4 py-1 rounded-full">
                      Am beliebtesten
                    </div>
                  )}
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${plan.popular ? "text-white/50" : "text-slate-400"}`}>
                    {plan.label}
                  </p>
                  <div className="mb-1">
                    <span className={`text-6xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-[#1a3a5c]"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-2xl font-bold ${plan.popular ? "text-white/70" : "text-[#1a3a5c]/60"}`}> €</span>
                  </div>
                  <p className={`text-sm mb-2 ${plan.popular ? "text-white/60" : "text-slate-500"}`}>{plan.duration}</p>
                  <p className={`text-xs mb-8 font-medium ${plan.popular ? "text-[#f5b731]" : "text-emerald-600"}`}>{plan.note}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={15} className={plan.popular ? "text-[#f5b731] shrink-0" : "text-[#1a3a5c] shrink-0"} />
                        <span className={`text-sm ${plan.popular ? "text-white/80" : "text-slate-600"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className={`block text-center font-bold py-3.5 rounded-xl text-sm transition-colors ${
                      plan.popular
                        ? "bg-[#f5b731] text-[#1a3a5c] hover:bg-[#e5a720]"
                        : "bg-[#1a3a5c] text-white hover:bg-[#0f2a4a]"
                    }`}>
                    Jetzt anfragen
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Info blocks */}
        <section className="pb-20 px-5" ref={info.ref}>
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" animate={info.inView ? "visible" : "hidden"} variants={stagger}
              className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Infinity,
                  title: "Faire Konditionen",
                  text: "Wir haben uns vorgenommen, dass Lernen Spass machen soll. Deshalb gibt es bei uns keine vertragliche Mindestlaufzeit. Unser Ziel: beste Unterstuetzung zu einem fairen Preis.",
                },
                {
                  icon: Star,
                  title: "Kostenlose Probestunde",
                  text: "Du bist auf der Suche nach der besten Lernmoeglichkeit? Dann lerne uns doch einfach in einer kostenlosen Probestunde kennen. Wir freuen uns, dir unsere Lehrer zu zeigen.",
                },
                {
                  icon: Shield,
                  title: "Online Unterricht",
                  text: "Dir ist es nicht moeglich uns vor Ort zu besuchen? Kein Problem! Wir bieten dir auch Online-Unterricht. Egal wo du bist, wir werden dich bestmoeglich unterstuetzen.",
                },
              ].map((item, i) => (
                <motion.div key={item.title} custom={i} variants={fadeUp}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#1a3a5c]/8 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-[#1a3a5c]" />
                  </div>
                  <h3 className="font-bold text-[#1a3a5c] text-base mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA bottom */}
        <section className="pb-24 px-5">
          <div className="max-w-2xl mx-auto text-center bg-[#1a3a5c] rounded-3xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Jetzt kostenlos testen</h2>
            <p className="text-white/65 mb-8">Melde dich fuer eine kostenlose Probestunde an – unverbindlich und ohne Vertragsbindung.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f5b731] text-[#1a3a5c] font-bold px-7 py-3.5 rounded-xl hover:bg-[#e5a720] transition-colors text-sm">
                <MessageCircle size={16} />Probestunde vereinbaren
              </a>
              <a href="tel:0643437417"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm">
                <Phone size={15} />06434 37417
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimal */}
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

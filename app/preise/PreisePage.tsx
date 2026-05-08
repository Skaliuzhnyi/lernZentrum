"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, MessageCircle, Phone, ArrowRight, Infinity, Star, Shield } from "lucide-react";

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";

const PRICES = [
  { label: "Einzelstunde", price: "35", duration: "60 Minuten",   note: "Oberstufe: 40 \u20ac / Stunde", popular: false, features: ["Individueller Unterricht", "Alle F\u00e4cher", "Vor Ort & Online", "Flexible Terminwahl"] },
  { label: "Einzelstunde", price: "45", duration: "90 Minuten",   note: "Empfohlen f\u00fcr nachhaltigen Lernerfolg", popular: true,  features: ["Individueller Unterricht", "Alle F\u00e4cher", "Vor Ort & Online", "Mehr Lernzeit pro Einheit"] },
  { label: "Monatsabo",    price: "100",duration: "90 Min. / Woche", note: "Keine Mindestlaufzeit \u00b7 jederzeit k\u00fcndbar", popular: false, features: ["1\u00d7 pro Woche 90 Minuten", "Alle F\u00e4cher", "Vor Ort & Online", "Bestes Preis-Leistungs-Verh\u00e4ltnis"] },
];

function useFade() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return { ref, inView };
}
const fUp = { hidden:{ opacity:0, y:32 }, visible:(i:number=0)=>({ opacity:1, y:0, transition:{ duration:0.6, delay:i*0.1, ease:[0.22,1,0.36,1] as [number,number,number,number] } }) };
const stg  = { hidden:{}, visible:{ transition:{ staggerChildren:0.09 } } };

export function PreisePage() {
  const hero  = useFade();
  const cards = useFade();
  const info  = useFade();

  return (
    <main className="bg-[#fafaf8] min-h-screen pt-16">
      {/* Hero */}
      <section className="pt-16 pb-14 px-5 text-center" ref={hero.ref}>
        <motion.div initial="hidden" animate={hero.inView ? "visible" : "hidden"} variants={stg}>
          <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Preise</motion.p>
          <motion.h1 variants={fUp} className="text-4xl md:text-5xl font-extrabold text-[#1a3a5c] mb-4">Transparent & fair</motion.h1>
          <motion.p variants={fUp} className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Keine versteckten Kosten, keine Mindestlaufzeit.<br/>Nur guter Unterricht zu einem fairen Preis.
          </motion.p>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="pb-20 px-5" ref={cards.ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate={cards.inView ? "visible" : "hidden"} variants={stg}
            className="grid md:grid-cols-3 gap-6">
            {PRICES.map((plan, i) => (
              <motion.div key={i} custom={i} variants={fUp}
                whileHover={{ y: -6, boxShadow: plan.popular ? "0 24px 60px rgba(26,58,92,0.4)" : "0 16px 48px rgba(0,0,0,0.1)" }}
                className={`relative rounded-3xl p-8 border transition-all ${plan.popular ? "bg-[#1a3a5c] border-[#1a3a5c] shadow-2xl shadow-[#1a3a5c]/30" : "bg-white border-slate-200"}`}>
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f5b731] text-[#1a3a5c] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Am beliebtesten
                  </div>
                )}
                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${plan.popular ? "text-white/50" : "text-slate-400"}`}>{plan.label}</p>
                <div className="mb-1">
                  <span className={`text-6xl font-extrabold tracking-tight ${plan.popular ? "text-white" : "text-[#1a3a5c]"}`}>{plan.price}</span>
                  <span className={`text-2xl font-bold ml-1 ${plan.popular ? "text-white/60" : "text-[#1a3a5c]/50"}`}>€</span>
                </div>
                <p className={`text-sm mb-1.5 ${plan.popular ? "text-white/55" : "text-slate-500"}`}>{plan.duration}</p>
                <p className={`text-xs mb-8 font-medium ${plan.popular ? "text-[#f5b731]" : "text-emerald-600"}`}>{plan.note}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className={`shrink-0 ${plan.popular ? "text-[#f5b731]" : "text-[#1a3a5c]"}`} />
                      <span className={`text-sm ${plan.popular ? "text-white/80" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: plan.popular ? "0 8px 28px rgba(245,183,49,0.5)" : "0 8px 28px rgba(26,58,92,0.28)" }}
                  whileTap={{ scale: 0.97 }}
                  className={`block text-center font-bold py-3.5 rounded-xl text-sm transition-colors ${plan.popular ? "bg-[#f5b731] text-[#1a3a5c] hover:bg-[#e5a720]" : "bg-[#1a3a5c] text-white hover:bg-[#0f2a4a]"}`}>
                  Jetzt anfragen
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="pb-20 px-5" ref={info.ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate={info.inView ? "visible" : "hidden"} variants={stg} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Infinity, title: "Faire Konditionen",        text: "Wir haben uns vorgenommen, dass Lernen Spa\u00df machen soll. Deshalb gibt es bei uns keine vertragliche Mindestlaufzeit." },
              { icon: Star,     title: "Kostenlose Probestunde",   text: "Du bist auf der Suche nach der besten Lernm\u00f6glichkeit? Lerne uns in einer kostenlosen Probestunde kennen." },
              { icon: Shield,   title: "Online Unterricht",         text: "Dir ist es nicht m\u00f6glich uns vor Ort zu besuchen? Kein Problem! Wir bieten Online-Unterricht \u00fcber Microsoft Teams." },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fUp}
                whileHover={{ y: -4, boxShadow: "0 14px 36px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#1a3a5c]/8 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-[#1a3a5c]" />
                </div>
                <h3 className="font-bold text-[#1a3a5c] text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 px-5">
        <div className="max-w-2xl mx-auto text-center bg-[#1a3a5c] rounded-3xl p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Jetzt kostenlos testen</h2>
          <p className="text-white/60 mb-8">Melde dich f\u00fcr eine kostenlose Probestunde an – unverbindlich.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(245,183,49,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#f5b731] text-[#1a3a5c] font-bold px-7 py-3.5 rounded-xl text-sm">
              <MessageCircle size={16} />Probestunde vereinbaren
            </motion.a>
            <motion.a href="tel:0643437417"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-6 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-colors">
              <Phone size={15} />06434 37417
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}

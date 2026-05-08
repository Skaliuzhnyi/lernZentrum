"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Clock, Users, Laptop, Heart, CheckCircle2 } from "lucide-react";

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";

const BENEFITS = [
  { icon: Clock,   title: "Flexible Arbeitszeiten",  desc: "Passe deinen Unterricht an deinen Alltag an – ob nachmittags, abends oder am Wochenende." },
  { icon: Laptop,  title: "Vor Ort & Online",         desc: "Unterrichte direkt im Lernzentrum oder bequem von zu Hause – du entscheidest." },
  { icon: Users,   title: "Motiviertes Team",          desc: "Arbeite in einem angenehmen Umfeld mit erfahrenen Kollegen und flachen Hierarchien." },
  { icon: Heart,   title: "Sinnvolle Arbeit",          desc: "Mache wirklich einen Unterschied – hilf Schülerinnen und Schülern, ihr Potenzial zu entfalten." },
];

function useFade() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return { ref, inView };
}
const fUp = { hidden:{opacity:0,y:32}, visible:(i:number=0)=>({opacity:1,y:0,transition:{duration:0.6,delay:i*0.09,ease:[0.22,1,0.36,1] as [number,number,number,number]}}) };
const stg  = { hidden:{}, visible:{transition:{staggerChildren:0.09}} };

export function BewerbeContent() {
  const hero     = useFade();
  const benefits = useFade();
  const cta      = useFade();

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] overflow-hidden" ref={hero.ref}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#f5b731]/8" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 py-24 md:py-32 text-center">
          <motion.div initial="hidden" animate={hero.inView ? "visible" : "hidden"} variants={stg}>
            <motion.div variants={fUp}
              className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-white/80 text-xs font-medium px-3.5 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f5b731] animate-pulse" />
              Wir suchen Verstärkung
            </motion.div>
            <motion.h1 variants={fUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5">
              Werde Teil unseres Teams
            </motion.h1>
            <motion.p variants={fUp} className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Du hast Freude am Unterrichten und möchtest Schülerinnen und Schüler
              individuell fördern? Dann bist du bei uns genau richtig!
            </motion.p>
            <motion.a variants={fUp} href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: "0 14px 42px rgba(245,183,49,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-8 py-4 rounded-2xl text-sm cursor-pointer">
                <MessageCircle size={18} />Jetzt bewerben via WhatsApp
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#fafaf8] px-5" ref={benefits.ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate={benefits.inView ? "visible" : "hidden"} variants={stg} className="text-center mb-14">
            <motion.p variants={fUp} className="text-[#f5b731] font-semibold text-sm uppercase tracking-widest mb-3">Was wir bieten</motion.p>
            <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Deine Vorteile bei uns</motion.h2>
          </motion.div>

          <motion.div initial="hidden" animate={benefits.inView ? "visible" : "hidden"} variants={stg}
            className="grid sm:grid-cols-2 gap-6 mb-14">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title} custom={i} variants={fUp}
                whileHover={{ y: -5, boxShadow: "0 16px 44px rgba(0,0,0,0.09)", borderColor: "#1a3a5c22" }}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#1a3a5c]/8 flex items-center justify-center mb-4">
                  <b.icon size={20} className="text-[#1a3a5c]" />
                </div>
                <h3 className="font-bold text-[#1a3a5c] text-base mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Who we're looking for */}
          <motion.div initial="hidden" animate={benefits.inView ? "visible" : "hidden"} variants={fUp}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a3a5c] mb-6">Wen wir suchen</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Erfahrene Lehrkräfte mit pädagogischem Hintergrund",
                "Engagierte Quereinsteiger mit Leidenschaft fürs Unterrichten",
                "Studierende, die Schülern helfen möchten",
                "Personen, die vor Ort oder online unterrichten möchten",
                "Teamplayer mit Freude an der Arbeit mit Jugendlichen",
                "Menschen, für die Bildung mehr als ein Job ist",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#1a3a5c] mt-0.5 shrink-0" />
                  <p className="text-slate-600 text-sm">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white px-5" ref={cta.ref}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate={cta.inView ? "visible" : "hidden"} variants={stg}
            className="text-center bg-gradient-to-br from-[#1a3a5c] to-[#0f2a4a] rounded-3xl p-10 md:p-16">
            <motion.h2 variants={fUp} className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Gemeinsam machen wir Bildung stark!
            </motion.h2>
            <motion.p variants={fUp} className="text-white/60 text-lg mb-10 leading-relaxed">
              Ob erfahrene Lehrkraft oder engagierter Quereinsteiger – wir freuen uns auf deine Bewerbung!
            </motion.p>
            <motion.a variants={fUp} href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: "0 16px 48px rgba(245,183,49,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#f5b731] text-[#1a3a5c] font-bold px-8 py-4 rounded-2xl text-sm cursor-pointer">
                <MessageCircle size={18} />Jetzt bewerben
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

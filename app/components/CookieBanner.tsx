"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setShow(true), 800);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a3a5c]/8 flex items-center justify-center shrink-0">
                <Cookie size={20} className="text-[#1a3a5c]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1a3a5c] text-lg mb-2">
                  Cookies & Datenschutz
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Wir verwenden Cookies und ähnliche Technologien, um die Funktionalität unserer Website zu gewährleisten
                  und Ihr Nutzererlebnis zu verbessern. Einige Cookies sind technisch notwendig, andere helfen uns,
                  unser Angebot zu analysieren und zu optimieren. Weitere Informationen finden Sie in unserer{" "}
                  <a href="/datenschutz" className="text-[#1a3a5c] underline hover:no-underline">
                    Datenschutzerklärung
                  </a>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={accept}
                    className="px-6 py-2.5 bg-[#1a3a5c] text-white font-semibold rounded-xl text-sm hover:bg-[#0f2a4a] transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={decline}
                    className="px-6 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-xl text-sm hover:bg-slate-50 transition-colors"
                  >
                    Nur notwendige
                  </button>
                  <a
                    href="/datenschutz"
                    className="px-6 py-2.5 text-slate-600 font-medium rounded-xl text-sm hover:bg-slate-50 transition-colors text-center"
                  >
                    Mehr erfahren
                  </a>
                </div>
              </div>
              <button
                onClick={decline}
                aria-label="Schließen"
                className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

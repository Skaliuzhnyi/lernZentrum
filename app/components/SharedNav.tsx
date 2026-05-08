"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, MessageCircle, Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";


const NAV_LINKS = [
  { label: "Über uns",  href: "/#ueber-uns" },
  { label: "Fächer",   href: "/#faecher"   },
  { label: "Preise",   href: "/preise"     },
  { label: "Bewerben", href: "/bewerben"   },
  { label: "Kontakt",  href: "/#kontakt"   },
];

export function SharedNav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();
  const isHome                = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    const id = href.slice(2);
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
    // on other pages: browser navigates to /#id normally
  };

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent ? "bg-transparent" : "bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center">
            <GraduationCap size={18} className="text-[#f5b731]" />
          </div>
          <span className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
            transparent ? "text-white" : "text-[#1a3a5c]"
          }`}>
            Bad Camberger<br />
            <span className={`text-xs font-normal ${transparent ? "text-white/70" : "text-slate-500"}`}>
              Lernzentrum
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className={`transition-colors font-medium ${
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-slate-600 hover:text-[#1a3a5c]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(26,58,92,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 bg-[#1a3a5c] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
          >
            <MessageCircle size={14} />
            Probestunde
          </motion.a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menü"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              transparent ? "text-white" : "text-[#1a3a5c]"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => { handleClick(e, l.href); setOpen(false); }}
                  className="text-slate-700 font-medium py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 bg-[#1a3a5c] text-white font-semibold px-4 py-3.5 rounded-xl"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={16} />
                Kostenlose Probestunde
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

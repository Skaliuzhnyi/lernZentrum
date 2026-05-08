"use client";

import { useState } from 'react';
import { GraduationCap } from "lucide-react";

const WA_LINK = "https://wa.me/message/S2H5KUD4MELAH1";

const LINKS = [
  { label: "Impressum",  href: "/impressum"  },
  { label: "Datenschutz",href: "/datenschutz"},
];

export function SharedFooter() {
  const [open, setOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    const id = href.slice(2);
    if (window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a1520]">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center">
                <GraduationCap size={16} className="text-[#f5b731]" />
              </div>
              <span className="text-white font-semibold text-sm">Bad Camberger Lernzentrum</span>
            </div>
            <p className="text-slate-500 text-xs max-w-[200px] leading-relaxed">
              Staatlich anerkannt · Seit 1992
              <br />
              Bahnhofstraße 28, 65520 Bad Camberg
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  handleClick(e, l.href);
                  setOpen(false);
                }}
                className="text-slate-700 font-medium py-3 hover:underline transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Bad Camberger Lernzentrum
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5b731] text-xs font-medium hover:underline"
          >
            Kostenlose Probestunde anfragen →
          </a>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Bad Camberger Lernzentrum",
  description: "Impressum des Bad Camberger Lernzentrums mit Kontaktinformationen und rechtlichen Hinweisen.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-16 pb-24 bg-[#fafaf8]">
      <div className="max-w-3xl mx-auto px-5 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a3a5c] mb-8">Impressum</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed mb-6">
            Janina Plambeck<br />
            Bahnhofstraße 28<br />
            65520 Bad Camberg
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-10 mb-4">Kontakt</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Telefon: +49 (064)34–37-417<br />
            E-Mail: info@badcamberger-lernzentrum.de
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-10 mb-4">Redaktionell verantwortlich</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Janina Plambeck
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a5c] mt-10 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}

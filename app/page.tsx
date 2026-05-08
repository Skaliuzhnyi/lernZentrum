import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: "Bad Camberger Lernzentrum | Nachhilfe in Bad Camberg – Seit 1992",
  description:
    "Staatlich anerkanntes Nachhilfeinstitut in Bad Camberg. Einzelunterricht & Kleingruppen in allen Fächern – vor Ort & online. Kostenlose Probestunde vereinbaren!",
  keywords: "Nachhilfe Bad Camberg, Lernzentrum Bad Camberg, Nachhilfeunterricht Bad Camberg",
};

export default function Page() {
  return <HomeContent />;
}

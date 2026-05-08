import type { Metadata } from "next";
import { DatenschutzPage } from './DatenschutzPage';

export const metadata: Metadata = {
  title: "Preise | Bad Camberger Lernzentrum – Nachhilfe Bad Camberg",
  description:
    "Transparente Preise ohne Vertragslaufzeit. Einzelstunde ab 35 Euro, Monatsabo ab 100 Euro. Kostenlose Probestunde fuer jeden Neukunden.",
};

export default function Page() {
  return <DatenschutzPage />;
}

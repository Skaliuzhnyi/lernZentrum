import type { Metadata } from "next";
import { BewerbePage } from "./BewerbePage";

export const metadata: Metadata = {
  title: "Bewerben | Nachhilfelehrer werden – Bad Camberger Lernzentrum",
  description:
    "Werde Teil unseres Teams! Flexible Arbeitszeiten, vielfaeltige Einsatzmoeglichkeiten vor Ort und online. Jetzt als Nachhilfelehrer im Bad Camberger Lernzentrum bewerben.",
};

export default function Page() {
  return <BewerbePage />;
}

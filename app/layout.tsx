import type { Metadata } from "next";
import { SharedNav } from "./components/SharedNav";
import { SharedFooter } from "./components/SharedFooter";
import { CookieBanner } from "./components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bad Camberger Lernzentrum | Nachhilfe in Bad Camberg",
  description: "Staatlich anerkanntes Nachhilfeinstitut in Bad Camberg seit 1992.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased">
        <SharedNav />
        {children}
        <SharedFooter />
        <CookieBanner />
      </body>
    </html>
  );
}

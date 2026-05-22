import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SharedNav } from './components/SharedNav';
import { SharedFooter } from './components/SharedFooter';
import { CookieBanner } from './components/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bad Camberger Lernzentrum | Nachhilfe in Bad Camberg',
  description: 'Staatlich anerkanntes Nachhilfeinstitut in Bad Camberg seit 1992.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="https://images.squarespace-cdn.com/content/v1/66b4bb7921bbaa3fac69794e/53410061-50d5-4213-864e-9e2a55be07e3/_COW6732.jpeg"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased">
        <SharedNav />
        {children}
        <SharedFooter />
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}

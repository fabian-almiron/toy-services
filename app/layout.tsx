import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { businessInfo } from '@/lib/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${businessInfo.name} | ${businessInfo.tagline}`,
  description: businessInfo.description,
  keywords: 'boat upholstery, marine flooring, boat covers, bimini tops, West Jordan Utah, marine upholstery Utah',
  openGraph: {
    title: `${businessInfo.name} | ${businessInfo.tagline}`,
    description: businessInfo.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

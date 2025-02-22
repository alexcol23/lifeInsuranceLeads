import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LeadsBolt - Secure Your Family\'s Future',
  description: 'Get personalized life insurance recommendations tailored to your needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
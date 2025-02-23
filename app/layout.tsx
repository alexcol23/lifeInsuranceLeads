import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TuSeguroIdeal AI - Asegura el Futuro de tu Familia',
  description: 'Obtén recomendaciones personalizadas de seguros de vida adaptadas a tus necesidades.',
  keywords: 'seguro de vida, recomendaciones de seguros, IA, seguros personalizados, TuSeguroIdeal AI',
  openGraph: {
    title: 'TuSeguroIdeal AI - Asegura el Futuro de tu Familia',
    description: 'Obtén recomendaciones personalizadas de seguros de vida adaptadas a tus necesidades.',
    siteName: 'TuSeguroIdeal AI',
  },
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
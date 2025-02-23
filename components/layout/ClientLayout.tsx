'use client';

import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </LanguageProvider>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TuSeguroIdeal AI - Encuentra el Seguro de Vida Perfecto',
  description: 'Encuentra el seguro de vida perfecto para ti con ayuda de IA. Análisis personalizado gratuito en 2 minutos.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#7C3AED',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TuSeguroIdeal AI',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://tuseguroideal.ai',
    title: 'TuSeguroIdeal AI - Encuentra el Seguro de Vida Perfecto',
    description: 'Encuentra el seguro de vida perfecto para ti con ayuda de IA. Análisis personalizado gratuito en 2 minutos.',
    siteName: 'TuSeguroIdeal AI',
  },
};

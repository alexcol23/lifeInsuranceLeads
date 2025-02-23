import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { metadata } from './metadata';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <link
          rel="preload"
          href={inter.style.fontFamily}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
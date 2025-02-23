import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tuseguroideal.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Tu Seguro Ideal - Encuentra el seguro perfecto para ti',
  description: 'Encuentra el seguro perfecto para ti y tu familia con nuestro servicio de recomendación personalizada.',
  openGraph: {
    title: 'Tu Seguro Ideal - Encuentra el seguro perfecto para ti',
    description: 'Encuentra el seguro perfecto para ti y tu familia con nuestro servicio de recomendación personalizada.',
    url: baseUrl,
    siteName: 'Tu Seguro Ideal',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu Seguro Ideal - Encuentra el seguro perfecto para ti',
    description: 'Encuentra el seguro perfecto para ti y tu familia con nuestro servicio de recomendación personalizada.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

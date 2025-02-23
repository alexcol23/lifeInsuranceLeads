'use client';

import Link from 'next/link';
import Image from 'next/image';

interface FooterSection {
  id: string;
  title: string;
  items: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

const footerSections: FooterSection[] = [
  {
    id: 'company',
    title: 'Compañía',
    items: [
      { id: 'about', label: 'Acerca de', href: '/about' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'careers', label: 'Carreras', href: '/careers' },
      { id: 'press', label: 'Prensa', href: '/press' },
    ],
  },
  {
    id: 'support',
    title: 'Soporte',
    items: [
      { id: 'help', label: 'Centro de Ayuda', href: '/help' },
      { id: 'contact', label: 'Contacto', href: '/contact' },
      { id: 'faq', label: 'Preguntas Frecuentes', href: '/faq' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    items: [
      { id: 'privacy', label: 'Política de Privacidad', href: '/privacy' },
      { id: 'terms', label: 'Términos de Uso', href: '/terms' },
      { id: 'cookies', label: 'Política de Cookies', href: '/cookies' },
    ],
  },
  {
    id: 'social',
    title: 'Social',
    items: [
      { id: 'twitter', label: 'Twitter', href: 'https://twitter.com' },
      { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
      { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
      { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <div className="space-y-8 xl:col-span-1">
              <Image src="/logo.svg" width={32} height={32} alt="Tu Seguro Ideal" />
              <p className="text-sm leading-6 text-gray-600">
                Encuentra el seguro perfecto para ti y tu familia.
              </p>
            </div>
          </div>
        </nav>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {footerSections.slice(0, 2).map((section) => (
              <div key={section.id}>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {section.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {footerSections.slice(2).map((section) => (
              <div key={section.id}>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {section.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Tu Seguro Ideal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

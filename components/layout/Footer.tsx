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
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Logo y descripción */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" width={40} height={40} alt="TuSeguroIdeal AI" />
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                TuSeguroIdeal AI
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              Encuentra el seguro perfecto para ti y tu familia.
            </p>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerSections.map((section) => (
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

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-900/10 pt-8">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} TuSeguroIdeal AI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

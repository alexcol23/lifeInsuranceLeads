'use client';

import { useTranslations } from '@/hooks/useTranslations';
import Link from 'next/link';

const footerSections = [
  {
    id: 'company',
    items: ['about', 'careers', 'press']
  },
  {
    id: 'legal',
    items: ['privacy', 'terms', 'cookies']
  },
  {
    id: 'support',
    items: ['help', 'contact', 'faq']
  },
  {
    id: 'social',
    items: ['twitter', 'facebook', 'instagram']
  }
];

export function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Life Insurance Leads
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.id}>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    {t(`footer.${section.id}.title`)}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {t(`footer.${section.id}.${item}`)}
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
                    {t(`footer.${section.id}.title`)}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {t(`footer.${section.id}.${item}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

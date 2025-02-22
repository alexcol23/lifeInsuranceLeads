'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslations } from '@/hooks/useTranslations';
import { motion, AnimatePresence } from 'framer-motion';

type NavigationKey = 'navigation.about' | 'navigation.features' | 'navigation.pricing' | 'navigation.contact';

const navigation: Array<{
  id: string;
  href: string;
  key: NavigationKey;
}> = [
  { id: 'about', href: '#about', key: 'navigation.about' },
  { id: 'features', href: '#features', key: 'navigation.features' },
  { id: 'pricing', href: '#pricing', key: 'navigation.pricing' },
  { id: 'contact', href: '#contact', key: 'navigation.contact' }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              LeadsBolt
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t('header.menu')}</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors"
              >
                {t(item.key)}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <LanguageToggle />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
              {t('common.downloadApp')}
            </Button>
          </motion.div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    LeadsBolt
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">{t('header.closeMenu')}</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t(item.key)}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    <LanguageToggle />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                        {t('common.downloadApp')}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

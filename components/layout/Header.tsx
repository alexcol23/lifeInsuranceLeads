'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import type { TranslationKey } from '@/hooks/useTranslations';

type NavigationItem = {
  name: TranslationKey;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: 'navigation.about', href: '#about' },
  { name: 'navigation.benefits', href: '#benefits' },
  { name: 'navigation.howItWorks', href: '#how-it-works' },
  { name: 'navigation.blog', href: '#blog' },
  { name: 'navigation.faq', href: '#faq' },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              TuSeguroIdeal AI
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t('header.menu' as const)}</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors"
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <LanguageToggle />
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg transition-shadow"
          >
            <Link href="#get-started">
              {t('header.getRecommendations' as const)}
            </Link>
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    TuSeguroIdeal AI
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">{t('header.close' as const)}</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t(item.name)}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    <LanguageToggle />
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg transition-shadow"
                    >
                      <Link
                        href="#get-started"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t('header.getRecommendations' as const)}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

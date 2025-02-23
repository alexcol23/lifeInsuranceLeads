'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';

export function CTA() {
  const { t } = useTranslations();

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              {t('cta.title' as const)}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('cta.description' as const)}
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90"
              >
                {t('cta.button' as const)}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-white/80">
                {t('cta.secondary' as const)}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

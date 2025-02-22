'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import { ChevronDown } from 'lucide-react';
import type { TranslationKey } from '@/hooks/useTranslations';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslations();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      questionKey: 'faq.items.howWorks.question' as const,
      answerKey: 'faq.items.howWorks.answer' as const,
    },
    {
      questionKey: 'faq.items.accuracy.question' as const,
      answerKey: 'faq.items.accuracy.answer' as const,
    },
    {
      questionKey: 'faq.items.cost.question' as const,
      answerKey: 'faq.items.cost.answer' as const,
    },
    {
      questionKey: 'faq.items.support.question' as const,
      answerKey: 'faq.items.support.answer' as const,
    },
  ] as const;

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            {t('faq.title' as const)}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.description' as const)}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{t(faq.questionKey)}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 text-gray-600">
                      {t(faq.answerKey)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
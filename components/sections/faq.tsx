'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from '@/hooks/useTranslations';
import type { TranslationKey } from '@/hooks/useTranslations';

const FAQ_DATA = [
  {
    id: 'howWorks',
    questionKey: 'faq.items.howWorks.question' as const,
    answerKey: 'faq.items.howWorks.answer' as const,
  },
  {
    id: 'accuracy',
    questionKey: 'faq.items.accuracy.question' as const,
    answerKey: 'faq.items.accuracy.answer' as const,
  },
  {
    id: 'cost',
    questionKey: 'faq.items.cost.question' as const,
    answerKey: 'faq.items.cost.answer' as const,
  },
  {
    id: 'support',
    questionKey: 'faq.items.support.question' as const,
    answerKey: 'faq.items.support.answer' as const,
  },
] as const;

export function FAQSection() {
  const { t } = useTranslations();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            {t('faq.title' as const)}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('faq.description' as const)}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_DATA.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={faq.id}>
                  <AccordionTrigger className="text-left">
                    {t(faq.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t(faq.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
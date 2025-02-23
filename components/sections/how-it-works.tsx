'use client';

import { ClipboardEdit, Brain, ListChecks, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import type { TranslationKey } from '@/hooks/useTranslations';

const STEPS_DATA = [
  {
    icon: ClipboardEdit,
    id: 'fillForm',
    titleKey: 'howItWorks.steps.fillForm.title' as const,
    descriptionKey: 'howItWorks.steps.fillForm.description' as const,
  },
  {
    icon: Brain,
    id: 'aiRecommendations',
    titleKey: 'howItWorks.steps.aiRecommendations.title' as const,
    descriptionKey: 'howItWorks.steps.aiRecommendations.description' as const,
  },
  {
    icon: ListChecks,
    id: 'reviewOptions',
    titleKey: 'howItWorks.steps.reviewOptions.title' as const,
    descriptionKey: 'howItWorks.steps.reviewOptions.description' as const,
  },
  {
    icon: Headphones,
    id: 'connectAdvisor',
    titleKey: 'howItWorks.steps.connectAdvisor.title' as const,
    descriptionKey: 'howItWorks.steps.connectAdvisor.description' as const,
  }
] as const;

interface StepCardProps {
  icon: typeof ClipboardEdit;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  index: number;
}

const StepCard = ({ icon: Icon, titleKey, descriptionKey, index }: StepCardProps) => {
  const { t } = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
      data-testid="step-card"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative z-10 h-full hover:shadow-xl transition-shadow duration-300">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 mx-auto">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center">
          {t(titleKey)}
        </h3>
        <p className="text-muted-foreground text-center">
          {t(descriptionKey)}
        </p>
      </div>
    </motion.div>
  );
};

export function HowItWorks() {
  const { t } = useTranslations();

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            {t('howItWorks.title' as const)}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorks.description' as const)}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {STEPS_DATA.map((step, index) => (
              <StepCard
                key={step.id}
                icon={step.icon}
                titleKey={step.titleKey}
                descriptionKey={step.descriptionKey}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { motion } from 'framer-motion';
import { Brain, Scale, Sparkles } from 'lucide-react';

const features = [
  {
    id: 'analysis',
    icon: Brain,
    titleKey: 'features.items.analysis.title' as const,
    descriptionKey: 'features.items.analysis.description' as const,
  },
  {
    id: 'comparison',
    icon: Scale,
    titleKey: 'features.items.comparison.title' as const,
    descriptionKey: 'features.items.comparison.description' as const,
  },
  {
    id: 'recommendation',
    icon: Sparkles,
    titleKey: 'features.items.recommendation.title' as const,
    descriptionKey: 'features.items.recommendation.description' as const,
  },
] as const;

export function FeaturesSection() {
  const { t } = useTranslations();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {t('features.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            {t('features.description')}
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {t(feature.titleKey)}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      {t(feature.descriptionKey)}
                    </p>
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Brain, Shield, DollarSign, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import type { TranslationKey } from '@/hooks/useTranslations';

// Extraer los datos de beneficios a un objeto constante
const BENEFITS_DATA = [
  {
    id: 'aiAnalysis',
    icon: Brain,
    titleKey: 'benefits.items.aiAnalysis.title' as TranslationKey,
    descriptionKey: 'benefits.items.aiAnalysis.description' as TranslationKey,
  },
  {
    id: 'smartRecommendations',
    icon: Shield,
    titleKey: 'benefits.items.smartRecommendations.title' as TranslationKey,
    descriptionKey: 'benefits.items.smartRecommendations.description' as TranslationKey,
  },
  {
    id: 'expertSupport',
    icon: Users,
    titleKey: 'benefits.items.expertSupport.title' as TranslationKey,
    descriptionKey: 'benefits.items.expertSupport.description' as TranslationKey,
  },
  {
    id: 'costEffective',
    icon: DollarSign,
    titleKey: 'benefits.items.costEffective.title' as TranslationKey,
    descriptionKey: 'benefits.items.costEffective.description' as TranslationKey,
  },
] as const;

// Componente para la tarjeta de beneficio individual
interface BenefitCardProps {
  icon: typeof Shield;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

function BenefitCard({ icon: Icon, titleKey, descriptionKey }: BenefitCardProps) {
  const { t } = useTranslations();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="border border-gray-100 shadow-lg shadow-gray-200/50 bg-white hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <motion.div 
            className="h-12 w-12 rounded-lg bg-[#F3EEFF] flex items-center justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon className="h-6 w-6 text-[#8B5CF6]" />
          </motion.div>
          <CardTitle className="text-xl mb-2 text-gray-900">{t(titleKey)}</CardTitle>
          <CardDescription className="text-base text-gray-600">
            {t(descriptionKey)}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export function Benefits() {
  const { t } = useTranslations();

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-gray-900"
          >
            {t('benefits.title' as TranslationKey)}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('benefits.description' as TranslationKey)}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BenefitCard
                icon={benefit.icon}
                titleKey={benefit.titleKey}
                descriptionKey={benefit.descriptionKey}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
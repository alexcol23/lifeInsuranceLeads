'use client';

import { Brain, Shield, DollarSign, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import type { TranslationKey } from '@/hooks/useTranslations';

// Extraer los datos de beneficios a un objeto constante
const BENEFITS_DATA = [
  {
    icon: Brain,
    id: 'aiAnalysis',
    titleKey: 'benefits.items.aiAnalysis.title' as const,
    descriptionKey: 'benefits.items.aiAnalysis.description' as const
  },
  {
    icon: Shield,
    id: 'smartRecommendations',
    titleKey: 'benefits.items.smartRecommendations.title' as const,
    descriptionKey: 'benefits.items.smartRecommendations.description' as const
  },
  {
    icon: Users,
    id: 'expertSupport',
    titleKey: 'benefits.items.expertSupport.title' as const,
    descriptionKey: 'benefits.items.expertSupport.description' as const
  },
  {
    icon: DollarSign,
    id: 'costEffective',
    titleKey: 'benefits.items.costEffective.title' as const,
    descriptionKey: 'benefits.items.costEffective.description' as const
  }
] as const;

// Componente para la tarjeta de beneficio individual
interface BenefitCardProps {
  icon: typeof Shield;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

const BenefitCard = ({ icon: Icon, titleKey, descriptionKey }: BenefitCardProps) => {
  const { t } = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-testid="benefit-card"
    >
      <Card className="group hover:scale-105 transition-transform duration-300 h-full">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
            <Icon className="w-6 h-6 text-purple-600" />
          </div>
          <CardTitle className="text-xl mb-3 group-hover:text-purple-600 transition-colors duration-300">
            {t(titleKey)}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {t(descriptionKey)}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export function BenefitsSection() {
  const { t } = useTranslations();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t('benefits.title' as const)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.description' as const)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              icon={benefit.icon}
              titleKey={benefit.titleKey}
              descriptionKey={benefit.descriptionKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import type { TranslationKey } from '@/hooks/useTranslations';

const TESTIMONIALS_DATA = [
  {
    id: 'sarah',
    image: '/testimonials/sarah.jpg',
    nameKey: 'testimonials.items.sarah.name' as const,
    roleKey: 'testimonials.items.sarah.role' as const,
    contentKey: 'testimonials.items.sarah.content' as const,
  },
  {
    id: 'michael',
    image: '/testimonials/michael.jpg',
    nameKey: 'testimonials.items.michael.name' as const,
    roleKey: 'testimonials.items.michael.role' as const,
    contentKey: 'testimonials.items.michael.content' as const,
  },
  {
    id: 'emily',
    image: '/testimonials/emily.jpg',
    nameKey: 'testimonials.items.emily.name' as const,
    roleKey: 'testimonials.items.emily.role' as const,
    contentKey: 'testimonials.items.emily.content' as const,
  },
] as const;

interface TestimonialCardProps {
  image: string;
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  contentKey: TranslationKey;
  index: number;
}

const TestimonialCard = ({ image, nameKey, roleKey, contentKey, index }: TestimonialCardProps) => {
  const { t } = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              data-testid="star-icon"
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          ))}
        </div>
        <blockquote className="text-lg text-gray-700 mb-6">
          "{t(contentKey)}"
        </blockquote>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
              {t(nameKey)[0]}
            </div>
          </div>
          <div>
            <div className="font-semibold">{t(nameKey)}</div>
            <div className="text-sm text-muted-foreground">
              {t(roleKey)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function TestimonialsSection() {
  const { t } = useTranslations();

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            {t('testimonials.title' as const)}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.description' as const)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              nameKey={testimonial.nameKey}
              roleKey={testimonial.roleKey}
              contentKey={testimonial.contentKey}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
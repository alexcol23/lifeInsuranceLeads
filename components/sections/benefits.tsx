'use client';

import { Shield, Heart, DollarSign, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Extraer los datos de beneficios a un objeto constante
const BENEFITS_DATA = [
  {
    icon: Shield,
    title: 'Comprehensive Coverage',
    description: 'Get complete protection for you and your loved ones with our comprehensive life insurance plans.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Plans',
    description: 'Find budget-friendly insurance options that provide excellent value for your investment.'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Receive personalized advice from our experienced insurance professionals.'
  },
  {
    icon: Heart,
    title: 'Fast & Easy Process',
    description: 'Quick and simple application process with minimal paperwork required.'
  }
];

// Componente para la tarjeta de beneficio individual
const BenefitCard = ({ icon: Icon, title, description }: {
  icon: typeof Shield;
  title: string;
  description: string;
}) => (
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
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  </motion.div>
);

export const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Insurance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of securing your family's future with our comprehensive life insurance solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_DATA.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
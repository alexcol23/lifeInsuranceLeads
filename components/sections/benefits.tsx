'use client';

import { Shield, Heart, DollarSign, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Financial Security",
    description: "Ensure your family's financial stability with comprehensive coverage.",
    icon: DollarSign,
  },
  {
    title: "Family Protection",
    description: "Protect your loved ones and guarantee their future well-being.",
    icon: Users,
  },
  {
    title: "Flexible Coverage",
    description: "Choose from various options tailored to your specific needs.",
    icon: Shield,
  },
  {
    title: "Lifetime Benefits",
    description: "Access living benefits and build long-term cash value.",
    icon: Heart,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose Our Life Insurance?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of securing your future with our comprehensive life insurance solutions.
          </p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 transform group-hover:scale-105 transition-transform duration-300" />
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ClipboardEdit, Brain, ListChecks, Headphones } from 'lucide-react';

const steps = [
  {
    icon: ClipboardEdit,
    title: 'Fill Out the Form',
    description: 'Tell us about yourself to help our AI understand your needs and preferences.',
  },
  {
    icon: Brain,
    title: 'Get AI Recommendations',
    description: 'Our advanced AI agent analyzes your profile and selects the best insurance options tailored for you.',
  },
  {
    icon: ListChecks,
    title: 'Review Your Options',
    description: 'Receive a personalized list of insurance plans that perfectly match your needs and budget.',
  },
  {
    icon: Headphones,
    title: 'Connect with an Advisor',
    description: 'Optionally schedule a call with a licensed expert to discuss your AI-recommended options.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            How Our AI Finds Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, intelligent process to match you with the right insurance coverage
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative z-10 h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ClipboardEdit, Brain } from 'lucide-react';

interface FormStepperProps {
  currentStep: number;
  steps: {
    title: string;
    icon: typeof ClipboardEdit;
  }[];
}

export function FormStepper({ currentStep, steps }: FormStepperProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index + 1 === currentStep;
          const isCompleted = index + 1 < currentStep;

          return (
            <div key={index} className="flex items-center">
              {/* Línea conectora */}
              {index > 0 && (
                <div className="w-20 h-[2px] bg-gradient-to-r from-gray-200 to-gray-300 mx-2">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isCompleted ? "100%" : "0%" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}

              {/* Círculo con ícono */}
              <motion.div
                className={`relative flex items-center justify-center w-12 h-12 rounded-full ${
                  isActive || isCompleted
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'bg-gray-200'
                }`}
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  boxShadow: isActive
                    ? '0 0 0 4px rgba(139, 92, 246, 0.2)'
                    : '0 0 0 0px rgba(139, 92, 246, 0)',
                }}
                transition={{ duration: 0.2 }}
              >
                <Icon className={`w-5 h-5 ${isActive || isCompleted ? 'text-white' : 'text-gray-500'}`} />
                
                {/* Etiqueta del paso */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className={`text-xs font-medium ${
                    isActive ? 'text-purple-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

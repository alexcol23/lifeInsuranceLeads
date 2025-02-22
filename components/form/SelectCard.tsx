'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SelectCardProps {
  icon?: string | React.ReactNode;
  title: string;
  description?: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

export function SelectCard({
  icon,
  title,
  description,
  isSelected,
  onClick,
  className = '',
}: SelectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
        isSelected
          ? 'border-purple-600 bg-purple-50/50 shadow-lg'
          : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50/50'
      } ${className}`}
    >
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center"
        >
          <Check className="w-4 h-4 text-white" />
        </motion.div>
      )}

      <div className="flex flex-col items-center text-center">
        {typeof icon === 'string' ? (
          <div className="text-3xl mb-3">{icon}</div>
        ) : (
          <div className="mb-3">{icon}</div>
        )}
        <h3 className={`font-medium mb-1 ${isSelected ? 'text-purple-900' : 'text-gray-900'}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-sm ${isSelected ? 'text-purple-600' : 'text-gray-500'}`}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

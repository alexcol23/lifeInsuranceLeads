'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface SelectCardProps {
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  size?: 'default' | 'compact';
  className?: string;
  children?: ReactNode;
}

export function SelectCard({
  title,
  description,
  selected = false,
  onClick,
  icon,
  size = 'default',
  className,
  children
}: SelectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'relative flex flex-col rounded-xl border-2 p-6 cursor-pointer transition-colors',
        selected
          ? 'border-purple-600 bg-purple-50'
          : 'border-gray-200 bg-white hover:border-purple-600/50 hover:bg-purple-50/50',
        size === 'compact' ? 'p-4' : 'p-6',
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex-shrink-0 mt-1">
              {icon}
            </div>
          )}
          <div>
            <h3 className={cn(
              'font-semibold text-gray-900',
              size === 'compact' ? 'text-base' : 'text-lg'
            )}>
              {title}
            </h3>
            <p className={cn(
              'mt-1 text-gray-500',
              size === 'compact' ? 'text-sm' : 'text-base'
            )}>
              {description}
            </p>
          </div>
        </div>
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
}

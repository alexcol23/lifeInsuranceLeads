'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </motion.button>
  );
}

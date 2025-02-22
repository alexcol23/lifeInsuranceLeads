'use client';

import { useTranslations } from '@/hooks/useTranslations';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Shield, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useTranslations();
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/get-recommendations');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background Image with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Happy family"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold mb-8 border border-white/10"
            >
              <Sparkles className="w-4 h-4 mr-2" /> 
              <span>{t('hero.tagline')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              {t('hero.title')}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl font-medium text-white/90 mb-12 leading-relaxed max-w-xl"
            >
              {t('hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-14 px-8 text-lg font-semibold transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg"
              >
                {t('hero.cta')}
              </Button>
              <p className="text-sm text-white/70 mt-4">
                {t('hero.ctaDescription')}
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative flex items-center justify-center">
                <Shield className="w-96 h-96 text-white" />
                <Sparkles className="w-24 h-24 text-blue-400 absolute top-1/4 right-1/4 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
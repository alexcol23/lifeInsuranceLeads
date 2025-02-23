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
    <section className="hero-section relative flex items-center py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            srcSet="/images/hero-bg.webp"
            type="image/webp"
            media="(min-width: 640px)"
          />
          <source
            srcSet="/images/hero-bg-mobile.webp"
            type="image/webp"
            media="(max-width: 639px)"
          />
          <Image
            src="/images/hero-bg.jpg"
            alt="Happy family"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-xl mx-auto lg:mx-0"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-sm font-semibold mb-6 sm:mb-8 border border-white/10"
            >
              <Sparkles className="w-4 h-4 mr-2" /> 
              <span>{t('hero.tagline')}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 min-h-[48px]"
              >
                <Shield className="w-5 h-5 mr-2" />
                {t('hero.cta')}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            {/* Contenido adicional para pantallas grandes si es necesario */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Exportar también como Hero para mantener compatibilidad
export { HeroSection as Hero };
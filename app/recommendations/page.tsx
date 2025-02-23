'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getRecommendations } from '@/services/recommendations';
import { ProgressiveImage } from '@/components/ui/ProgressiveImage';
import type { RecommendationsResponse } from '@/types/recommendations';
import type { z } from 'zod';
import { formSchema } from '@/types/form';

type FormValues = z.infer<typeof formSchema>;

// Lazy load componentes no críticos
const BenefitsList = dynamic(() => import('@/components/insurance/BenefitsList'), {
  loading: () => <div className="h-20 animate-pulse bg-gray-100 rounded" />
});

const AdditionalBenefits = dynamic(() => import('@/components/insurance/AdditionalBenefits'), {
  loading: () => <div className="h-16 animate-pulse bg-gray-100 rounded" />
});

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const buttonVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const logoVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export default function RecommendationsPage() {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState<RecommendationsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const savedFormData = localStorage.getItem('insuranceFormData');
        
        if (!savedFormData) {
          console.log('No form data found, redirecting to form...');
          router.push('/get-recommendations');
          return;
        }

        const formData: FormValues = JSON.parse(savedFormData);
        const validationResult = formSchema.safeParse(formData);
        
        if (!validationResult.success) {
          console.error('Invalid form data:', validationResult.error);
          router.push('/get-recommendations');
          return;
        }

        const data = await getRecommendations(formData);
        setRecommendations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al obtener recomendaciones');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [router]);

  if (loading) {
    return (
      <div className="container py-8 min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-lg font-medium">Analizando las mejores opciones para ti...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8 min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-red-600 text-lg font-medium">{error}</p>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="main-cta bg-primary text-white rounded-full shadow-lg"
            onClick={() => router.push('/get-recommendations')}
          >
            Intentar nuevamente
          </motion.button>
        </div>
      </div>
    );
  }

  if (!recommendations) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="main-content"
    >
      <div className="container py-8 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-content bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Tus Recomendaciones Personalizadas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-content">
            Basado en tu perfil, estas son las mejores opciones de seguro de vida para ti
          </p>
        </motion.div>

        <div className="cards-grid">
          {recommendations.recommendations.map((recommendation, index) => (
            <motion.div
              key={recommendation.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              className="card bg-white p-6 relative rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {recommendation.recommended && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="absolute -top-3 left-4 bg-[#7C3AED] text-white px-4 py-1.5 rounded-2xl text-xs font-medium shadow-md flex items-center gap-1.5"
                  style={{
                    background: 'linear-gradient(90deg, #8B5CF6 0%, #6366F1 100%)'
                  }}
                >
                  <span className="text-[#FFD700] text-sm">⭐</span>
                  <span>Recomendado</span>
                </motion.div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6 mt-6">
                  <motion.div 
                    className="insurance-logo-wrapper w-32 h-16 relative"
                    whileHover="hover"
                    variants={logoVariants}
                  >
                    <ProgressiveImage
                      src={recommendation.company.logo}
                      alt={recommendation.company.name}
                      className="insurance-logo"
                      width={128}
                      height={64}
                      priority={index < 2}
                    />
                  </motion.div>
                  <div className="text-right">
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      ${recommendation.monthlyPrice.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">por mes</p>
                  </div>
                </div>

                <div className="flex-grow space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{recommendation.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">Score:</span>
                      <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${recommendation.score}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">{recommendation.score}%</span>
                    </div>
                  </div>
                  
                  <BenefitsList benefits={recommendation.benefits} />
                  <AdditionalBenefits benefits={recommendation.additionalBenefits} />
                </div>

                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="main-cta mt-6 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg w-full transform transition-all duration-300 hover:shadow-xl"
                  onClick={() => {
                    if (recommendation.applicationUrl) {
                      window.open(recommendation.applicationUrl, '_blank');
                    } else {
                      alert('Por favor, contacta con un asesor para aplicar a este plan.');
                    }
                  }}
                >
                  {recommendation.applicationUrl ? 'Solicitar Ahora' : 'Contactar Asesor'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

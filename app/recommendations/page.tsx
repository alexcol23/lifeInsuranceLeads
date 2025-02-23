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
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const buttonVariants = {
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

export default function RecommendationsPage() {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState<RecommendationsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        // Recuperar datos del formulario del localStorage
        const savedFormData = localStorage.getItem('insuranceFormData');
        
        if (!savedFormData) {
          console.log('No form data found, redirecting to form...');
          router.push('/get-recommendations');
          return;
        }

        const formData: FormValues = JSON.parse(savedFormData);
        
        // Validar los datos del formulario
        const validationResult = formSchema.safeParse(formData);
        if (!validationResult.success) {
          console.error('Invalid form data:', validationResult.error);
          router.push('/get-recommendations');
          return;
        }

        // Obtener recomendaciones usando los datos validados
        const data = await getRecommendations(formData);
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setError('Error al obtener las recomendaciones. Por favor, intente nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [router]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Cargando recomendaciones...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => router.push('/get-recommendations')}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Volver al formulario
          </button>
        </div>
      </div>
    );
  }

  if (!recommendations) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600">No se encontraron recomendaciones.</p>
          <button
            onClick={() => router.push('/get-recommendations')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al formulario
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-gray-900">Encuentra tu</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]">
              Plan Perfecto
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Deja que nuestra IA analice tu perfil y recomiende los mejores planes de seguro de vida adaptados a tus necesidades únicas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {recommendations.recommendations.map((plan, index) => (
            <motion.article
              key={plan.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {index === 0 && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="absolute top-0 right-0 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white px-4 py-1 rounded-bl-lg z-10"
                >
                  Recomendado
                </motion.div>
              )}
              
              <div className="p-6 flex-1 space-y-6">
                <div className="flex items-center justify-between">
                  <motion.div 
                    className="flex flex-col space-y-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-32 h-16 relative bg-white rounded-lg">
                      <ProgressiveImage
                        src={plan.company.logo}
                        alt={plan.company.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        quality={75}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{plan.company.name}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-purple-50 px-3 py-1 rounded-full"
                  >
                    <span className="text-sm font-medium text-purple-800">Rating:</span>
                    <span className="ml-2 text-lg font-bold text-purple-600">{plan.company.rating}</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-base text-gray-600 line-clamp-2">{plan.company.description}</p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-center">
                    <span className="block text-sm font-medium text-gray-600">Cobertura</span>
                    <span className="mt-1 text-xl font-bold text-gray-900">
                      ${plan.coverage.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-medium text-gray-600">Mensual</span>
                    <span className="mt-1 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]">
                      ${plan.monthlyPrice.amount}
                    </span>
                  </div>
                </motion.div>

                <BenefitsList benefits={plan.benefits} />
                <AdditionalBenefits benefits={plan.additionalBenefits} />
              </div>

              <div className="p-6 bg-gray-50">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-sm"
                  onClick={() => {/* Implementar acción */}}
                >
                  <span>Obtener Recomendaciones</span>
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

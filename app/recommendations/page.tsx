'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, MessageCircle, ChevronRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslations } from '@/hooks/useTranslations';
import { Header } from '@/components/layout/Header';
import { useRouter } from 'next/navigation';
import type { RecommendationsResponse, InsurancePlan } from '@/types/recommendations';
import Image from 'next/image';

export default function RecommendationsPage() {
  const { t } = useTranslations();
  const router = useRouter();
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<RecommendationsResponse | null>(null);

  useEffect(() => {
    // Recuperar las recomendaciones del localStorage
    const savedRecommendations = localStorage.getItem('recommendations');
    if (!savedRecommendations) {
      // Si no hay recomendaciones, redirigir al formulario
      router.push('/get-recommendations');
      return;
    }

    try {
      const parsedRecommendations = JSON.parse(savedRecommendations);
      setRecommendations(parsedRecommendations);
    } catch (error) {
      console.error('Error parsing recommendations:', error);
      router.push('/get-recommendations');
    }
  }, [router]);

  const handlePlanSelection = (planId: string) => {
    setSelectedPlans(prev => {
      if (prev.includes(planId)) {
        return prev.filter(id => id !== planId);
      }
      if (prev.length < 2) {
        return [...prev, planId];
      }
      return prev;
    });
  };

  if (!recommendations) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      
      {/* Introduction Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex justify-center mb-6">
              <Shield className="h-12 w-12 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('recommendations.results.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              {t('recommendations.results.description')}
            </p>
            <p className="text-sm text-gray-500 italic">
              {t('recommendations.results.disclaimer')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insurance Cards Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.recommendations.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm ${plan.recommended ? 'border-purple-500' : 'hover:border-purple-500/20'}`}>
                  <CardHeader className="space-y-1 text-center">
                    {plan.recommended && (
                      <div className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-2">
                        Recomendado
                      </div>
                    )}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-32 h-16 relative bg-white rounded-lg p-2">
                        <Image
                          src={plan.company.logo}
                          alt={plan.company.name}
                          fill
                          className="object-contain"
                          priority
                          unoptimized
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{plan.company.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-600">{plan.company.rating}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                    <p className="text-3xl font-bold text-purple-600">
                      ${plan.monthlyPrice.amount}/mes
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium text-gray-900">
                      Hasta ${plan.coverage.amount.toLocaleString()} {plan.coverage.currency}
                    </p>
                    <ul className="space-y-2">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit.id} className="flex items-center gap-2 text-gray-600">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <div>
                            <p className="font-medium">{benefit.title}</p>
                            <p className="text-sm text-gray-500">{benefit.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600"
                      onClick={() => {}}
                    >
                      {t('recommendations.results.cards.viewDetails')}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            {t('recommendations.results.comparison.title')}
          </h2>
          
          <div className="mb-6 flex items-center justify-end gap-4">
            <p className="text-sm text-gray-600">
              {t('recommendations.results.comparison.selectPlans')}
            </p>
            <div className="flex gap-4">
              {recommendations.recommendations.map(plan => (
                <div key={plan.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`compare-${plan.id}`}
                    checked={selectedPlans.includes(plan.id)}
                    onCheckedChange={() => handlePlanSelection(plan.id)}
                    disabled={selectedPlans.length >= 2 && !selectedPlans.includes(plan.id)}
                  />
                  <label htmlFor={`compare-${plan.id}`} className="text-sm">
                    {plan.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-white/80 backdrop-blur-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">
                    {t('recommendations.results.comparison.features.feature')}
                  </TableHead>
                  {recommendations.recommendations
                    .filter(plan => selectedPlans.length === 0 || selectedPlans.includes(plan.id))
                    .map(plan => (
                      <TableHead key={plan.id}>{plan.name}</TableHead>
                    ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    {t('recommendations.results.comparison.features.price')}
                  </TableCell>
                  {recommendations.recommendations
                    .filter(plan => selectedPlans.length === 0 || selectedPlans.includes(plan.id))
                    .map(plan => (
                      <TableCell key={plan.id}>
                        ${plan.monthlyPrice.amount}/mes
                      </TableCell>
                    ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    {t('recommendations.results.comparison.features.coverage')}
                  </TableCell>
                  {recommendations.recommendations
                    .filter(plan => selectedPlans.length === 0 || selectedPlans.includes(plan.id))
                    .map(plan => (
                      <TableCell key={plan.id}>
                        ${plan.coverage.amount.toLocaleString()} {plan.coverage.currency}
                      </TableCell>
                    ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    {t('recommendations.results.comparison.features.policyType')}
                  </TableCell>
                  {recommendations.recommendations
                    .filter(plan => selectedPlans.length === 0 || selectedPlans.includes(plan.id))
                    .map(plan => (
                      <TableCell key={plan.id}>{plan.type}</TableCell>
                    ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    {t('recommendations.results.comparison.features.additionalBenefits')}
                  </TableCell>
                  {recommendations.recommendations
                    .filter(plan => selectedPlans.length === 0 || selectedPlans.includes(plan.id))
                    .map(plan => (
                      <TableCell key={plan.id}>
                        <ul className="list-disc list-inside space-y-1">
                          {plan.additionalBenefits.map(benefit => (
                            <li key={benefit.id} className="text-sm">
                              {benefit.title}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {t('recommendations.results.cta.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('recommendations.results.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t('recommendations.results.cta.scheduleCall')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-200 hover:bg-purple-50"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('recommendations.results.cta.chatExpert')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

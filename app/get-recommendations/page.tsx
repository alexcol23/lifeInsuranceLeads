'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from '@/hooks/useTranslations';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ClipboardEdit, Brain, User2, Building2 } from 'lucide-react';
import { formSchema, FormValues, incomeRanges, insurancePurposes } from '@/types/form';
import { FormStepper } from '@/components/form/FormStepper';
import { SelectCard } from '@/components/form/SelectCard';

const employeeRanges = [
  { value: '1-20', label: '1-20', icon: '👥' },
  { value: '21-49', label: '21-49', icon: '👥👥' },
  { value: '50+', label: '50+', icon: '👥👥👥' },
];

export default function GetRecommendations() {
  const { t } = useTranslations();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const stepKeys = {
    personalInfo: 'recommendations.steps.personalInfo',
    coverageNeeds: 'recommendations.steps.coverageNeeds'
  } as const;

  const steps = [
    { title: t(stepKeys.personalInfo), icon: User2 },
    { title: t(stepKeys.coverageNeeds), icon: Building2 },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasDependents: false,
      isSmoker: false,
      hasPreexistingCondition: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t('common.success'),
        description: t('common.tryAgain'),
      });
      
    } catch (error) {
      toast({
        title: t('common.error'),
        description: t('common.tryAgain'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    const currentFields = step === 1 
      ? ['age', 'maritalStatus', 'income']
      : ['insurancePurpose'];

    const isValid = currentFields.every(field => {
      const value = form.getValues(field as keyof FormValues);
      return value !== undefined && value !== '';
    });

    if (isValid) {
      setStep(2);
    } else {
      form.trigger(currentFields as (keyof FormValues)[]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <FormStepper currentStep={step} steps={steps} />

          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('recommendations.title')}
              </CardTitle>
              <CardDescription className="text-center text-gray-500">
                {t('recommendations.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-4"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('recommendations.cards.age.title')}</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="number" 
                                    placeholder={t('recommendations.cards.age.description')} 
                                    className="bg-white/50 border-gray-200 focus:border-purple-500 transition-colors"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="maritalStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('recommendations.cards.maritalStatus.title')}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-white/50 border-gray-200 focus:border-purple-500 transition-colors">
                                      <SelectValue placeholder={t('recommendations.cards.maritalStatus.description')} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="single">{t('recommendations.cards.maritalStatus.options.single')}</SelectItem>
                                    <SelectItem value="married">{t('recommendations.cards.maritalStatus.options.married')}</SelectItem>
                                    <SelectItem value="divorced">{t('recommendations.cards.maritalStatus.options.divorced')}</SelectItem>
                                    <SelectItem value="widowed">{t('recommendations.cards.maritalStatus.options.widowed')}</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('recommendations.cards.gender.title')}</FormLabel>
                              <div className="grid grid-cols-2 gap-3">
                                <SelectCard
                                  key="male"
                                  icon="👨"
                                  title={t('recommendations.cards.gender.options.male')}
                                  selected={field.value === 'male'}
                                  onClick={() => field.onChange('male')}
                                  description=""
                                />
                                <SelectCard
                                  key="female"
                                  icon="👩"
                                  title={t('recommendations.cards.gender.options.female')}
                                  selected={field.value === 'female'}
                                  onClick={() => field.onChange('female')}
                                  description=""
                                />
                              </div>
                              <p className="text-sm text-gray-500 mt-2">
                                {t('recommendations.cards.gender.description')}
                              </p>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="income"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('recommendations.cards.income.title')}</FormLabel>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {incomeRanges.map((range) => (
                                  <SelectCard
                                    key={range.value}
                                    icon={<Building2 className="w-8 h-8 text-purple-600" />}
                                    title={t(`recommendations.cards.income.options.${range.value}`)}
                                    selected={field.value === range.value}
                                    onClick={() => field.onChange(range.value)}
                                    description=""
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="hasDependents"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white/50">
                              <div>
                                <FormLabel className="text-base">{t('recommendations.cards.dependents.title')}</FormLabel>
                                <p className="text-sm text-gray-500">{t('recommendations.cards.dependents.description')}</p>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="isSmoker"
                            render={({ field }) => (
                              <FormItem className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white/50">
                                <div>
                                  <FormLabel className="text-base">{t('recommendations.cards.smoker.title')}</FormLabel>
                                  <p className="text-sm text-gray-500">{t('recommendations.cards.smoker.description')}</p>
                                </div>
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="hasPreexistingCondition"
                            render={({ field }) => (
                              <FormItem className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white/50">
                                <div>
                                  <FormLabel className="text-base">{t('recommendations.cards.preexistingCondition.title')}</FormLabel>
                                  <p className="text-sm text-gray-500">{t('recommendations.cards.preexistingCondition.description')}</p>
                                </div>
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />

                          {form.watch('hasPreexistingCondition') && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              <FormField
                                control={form.control}
                                name="preexistingConditionDetails"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>{t('recommendations.cards.preexistingCondition.placeholder')}</FormLabel>
                                    <FormControl>
                                      <Input 
                                        {...field} 
                                        placeholder={t('recommendations.cards.preexistingCondition.placeholder')}
                                        className="bg-white/50 border-gray-200 focus:border-purple-500 transition-colors"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </motion.div>
                          )}
                        </div>

                        <FormField
                          control={form.control}
                          name="insurancePurpose"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>{t('recommendations.cards.insurancePurpose.title')}</FormLabel>
                              <p className="text-sm text-gray-500">
                                {t('recommendations.cards.insurancePurpose.description')}
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                {insurancePurposes.map((purpose) => (
                                  <SelectCard
                                    key={purpose.value}
                                    icon={purpose.icon}
                                    title={t(`recommendations.cards.insurancePurpose.options.${purpose.value}.title`)}
                                    description={t(`recommendations.cards.insurancePurpose.options.${purpose.value}.description`)}
                                    selected={field.value === purpose.value}
                                    onClick={() => field.onChange(purpose.value)}
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between pt-6">
                    {step === 2 ? (
                      <>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="border-gray-200 hover:bg-gray-50"
                        >
                          {t('recommendations.navigation.previous')}
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              {t('common.processing')}
                            </>
                          ) : (
                            t('recommendations.navigation.submit')
                          )}
                        </Button>
                      </>
                    ) : (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        {t('recommendations.navigation.next')}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

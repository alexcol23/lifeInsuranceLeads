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
  FormDescription,
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
import { Loader2, ClipboardEdit, Brain, User2, Building2, UserCircle2 } from 'lucide-react';
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
    contactInfo: 'recommendations.steps.contactInfo',
    personalInfo: 'recommendations.steps.personalInfo',
    coverageNeeds: 'recommendations.steps.coverageNeeds'
  } as const;

  const steps = [
    { title: t(stepKeys.contactInfo), icon: UserCircle2 },
    { title: t(stepKeys.personalInfo), icon: User2 },
    { title: t(stepKeys.coverageNeeds), icon: Building2 },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasDependents: false,
      isSmoker: false,
      hasPreexistingCondition: false,
      fullName: '',
      phone: '',
      email: '',
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
    const fieldsPerStep = {
      1: ['fullName', 'phone', 'email'],
      2: ['age', 'maritalStatus', 'income'],
      3: ['insurancePurpose']
    };

    const currentFields = fieldsPerStep[step as keyof typeof fieldsPerStep];

    const isValid = currentFields.every(field => {
      const value = form.getValues(field as keyof FormValues);
      return value !== undefined && value !== '';
    });

    if (isValid) {
      setStep(prev => Math.min(prev + 1, 3));
    } else {
      form.trigger(currentFields as (keyof FormValues)[]);
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
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
          <div className="text-center">
            <FormStepper currentStep={step} steps={steps} />
            <CardDescription className="mt-4 text-gray-500 max-w-xl mx-auto">
              {t('recommendations.description')}
            </CardDescription>
          </div>

          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('recommendations.title')}
              </CardTitle>
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
                        <div className="grid gap-4">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('recommendations.cards.fullName.title')}</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder={t('recommendations.cards.fullName.description')}
                                    className="border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors bg-white/50 backdrop-blur-sm"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('recommendations.cards.phone.title')}</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="tel"
                                    placeholder={t('recommendations.cards.phone.description')}
                                    className="border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors bg-white/50 backdrop-blur-sm"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('recommendations.cards.email.title')}</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email"
                                    placeholder={t('recommendations.cards.email.description')}
                                    className="border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors bg-white/50 backdrop-blur-sm"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
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
                                    className="border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors bg-white/50 backdrop-blur-sm"
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
                                    <SelectTrigger>
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
                          name="hasDependents"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {t('recommendations.cards.hasDependents.title')}
                                </FormLabel>
                                <FormDescription>
                                  {t('recommendations.cards.hasDependents.description')}
                                </FormDescription>
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
                          name="income"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('recommendations.cards.income.title')}</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="grid grid-cols-2 gap-4"
                                >
                                  {incomeRanges.map((range) => (
                                    <FormItem key={range.value}>
                                      <FormControl>
                                        <RadioGroupItem
                                          value={range.value}
                                          className="peer sr-only"
                                        />
                                      </FormControl>
                                      <FormLabel className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                        <span className="text-sm font-medium leading-none">
                                          {range.label}
                                        </span>
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-4"
                      >
                        <div className="grid gap-4">
                          <FormField
                            control={form.control}
                            name="isSmoker"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                  <FormLabel className="text-base">
                                    {t('recommendations.cards.isSmoker.title')}
                                  </FormLabel>
                                  <FormDescription>
                                    {t('recommendations.cards.isSmoker.description')}
                                  </FormDescription>
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
                              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                  <FormLabel className="text-base">
                                    {t('recommendations.cards.hasPreexistingCondition.title')}
                                  </FormLabel>
                                  <FormDescription>
                                    {t('recommendations.cards.hasPreexistingCondition.description')}
                                  </FormDescription>
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
                            <FormField
                              control={form.control}
                              name="preexistingConditionDetails"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{t('recommendations.cards.preexistingConditionDetails.title')}</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder={t('recommendations.cards.preexistingConditionDetails.description')}
                                      className="border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors bg-white/50 backdrop-blur-sm"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}

                          <FormField
                            control={form.control}
                            name="insurancePurpose"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('recommendations.cards.insurancePurpose.title')}</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-2 gap-4"
                                  >
                                    {insurancePurposes.map((purpose) => (
                                      <SelectCard
                                        key={purpose.value}
                                        title={purpose.label}
                                        description={purpose.description}
                                        icon={purpose.icon}
                                        selected={field.value === purpose.value}
                                        onClick={() => field.onChange(purpose.value)}
                                      />
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={step === 1}
                      className="border-gray-200 hover:bg-gray-50"
                    >
                      {t('common.previous')}
                    </Button>

                    {step < 3 ? (
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all"
                      >
                        {t('common.next')}
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all"
                      >
                        {isSubmitting && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {t('common.submit')}
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

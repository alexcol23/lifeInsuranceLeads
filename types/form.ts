import { z } from 'zod';

export const formSchema = z.object({
  // Paso 1
  age: z.string().min(1, 'Age is required'),
  gender: z.string().optional(),
  maritalStatus: z.string().min(1, 'Marital status is required'),
  hasDependents: z.boolean(),
  income: z.string().min(1, 'Income range is required'),
  
  // Paso 2
  isSmoker: z.boolean(),
  hasPreexistingCondition: z.boolean(),
  preexistingConditionDetails: z.string().optional(),
  insurancePurpose: z.string().min(1, 'Insurance purpose is required'),
});

export type FormValues = z.infer<typeof formSchema>;

export const incomeRanges = [
  { value: 'under-25k', label: 'Under $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-75k', label: '$50,000 - $75,000' },
  { value: '75k-100k', label: '$75,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
] as const;

export const insurancePurposes = [
  { value: 'family', icon: '👨‍👩‍👧‍👦', label: 'Family Protection' },
  { value: 'mortgage', icon: '🏠', label: 'Mortgage Coverage' },
  { value: 'business', icon: '💼', label: 'Business Protection' },
  { value: 'retirement', icon: '🌴', label: 'Retirement Planning' }
] as const;

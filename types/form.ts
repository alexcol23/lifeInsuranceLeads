import { z } from 'zod';

export const formSchema = z.object({
  // Paso 1: Información de contacto
  fullName: z.string().min(1, 'Full name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),

  // Paso 2: Información personal
  age: z.string().min(1, 'Age is required'),
  gender: z.string().optional(),
  maritalStatus: z.string().min(1, 'Marital status is required'),
  hasDependents: z.boolean(),
  income: z.string().min(1, 'Income range is required'),
  
  // Paso 3: Información de cobertura
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
  { 
    value: 'family', 
    icon: '👨‍👩‍👧‍👦', 
    label: 'Family Protection',
    description: 'Ensure your family\'s financial security and protect their future'
  },
  { 
    value: 'mortgage', 
    icon: '🏠', 
    label: 'Mortgage Coverage',
    description: 'Protect your home and ensure mortgage payments are covered'
  },
  { 
    value: 'business', 
    icon: '💼', 
    label: 'Business Protection',
    description: 'Safeguard your business interests and ensure business continuity'
  },
  { 
    value: 'retirement', 
    icon: '🌴', 
    label: 'Retirement Planning',
    description: 'Secure your retirement future and maintain your lifestyle'
  }
] as const;

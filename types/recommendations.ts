import { FormValues } from './form';

export interface InsuranceCompany {
  id: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
}

export interface InsuranceBenefit {
  id: string;
  title: string;
  description: string;
}

export interface InsurancePlan {
  id: string;
  company: InsuranceCompany;
  name: string;
  coverage: {
    amount: number;
    currency: 'USD' | 'EUR';
  };
  monthlyPrice: {
    amount: number;
    currency: 'USD' | 'EUR';
  };
  type: 'Temporal' | 'Permanente';
  benefits: InsuranceBenefit[];
  additionalBenefits: InsuranceBenefit[];
  score: number; // Score de compatibilidad con el perfil del usuario (0-100)
  recommended: boolean; // Si es uno de los planes más recomendados
}

export interface RecommendationsResponse {
  customerId: string;
  profileSummary: {
    age: number;
    riskLevel: 'low' | 'medium' | 'high';
    coverageNeeded: number;
    monthlyBudget: number;
  };
  recommendations: InsurancePlan[];
  timestamp: string;
}

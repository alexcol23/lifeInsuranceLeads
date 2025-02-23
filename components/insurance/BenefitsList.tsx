import { Check } from 'lucide-react';
import type { InsuranceBenefit } from '@/types/recommendations';

interface BenefitsListProps {
  benefits: InsuranceBenefit[];
}

export default function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Beneficios Principales</h3>
      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit.id} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-800">{benefit.title}</p>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

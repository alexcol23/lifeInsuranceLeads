import { Plus } from 'lucide-react';
import type { InsuranceBenefit } from '@/types/recommendations';

interface AdditionalBenefitsProps {
  benefits: InsuranceBenefit[];
}

export default function AdditionalBenefits({ benefits }: AdditionalBenefitsProps) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Beneficios Adicionales</h3>
      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit.id} className="flex items-start gap-2">
            <Plus className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
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

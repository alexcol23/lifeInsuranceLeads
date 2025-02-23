import { FormValues } from '@/types/form';
import { RecommendationsResponse } from '@/types/recommendations';

// Esta función será reemplazada por una llamada real al backend
export async function getRecommendations(formData: FormValues): Promise<RecommendationsResponse> {
  // Simulamos un delay para imitar una llamada al backend
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock de la respuesta
  const mockResponse: RecommendationsResponse = {
    customerId: 'mock-customer-id',
    profileSummary: {
      age: parseInt(formData.age),
      riskLevel: formData.hasPreexistingCondition ? 'high' : 'low',
      coverageNeeded: 500000, // Basado en income y dependientes
      monthlyBudget: 50, // Estimado basado en income
    },
    recommendations: [
      {
        id: '1',
        company: {
          id: 'metlife',
          name: 'MetLife',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/MetLife_logo.svg',
          rating: 4.8,
          description: 'Líder global en seguros de vida con más de 150 años de experiencia'
        },
        name: 'Vida Protegida Plus',
        coverage: {
          amount: 500000,
          currency: 'USD'
        },
        monthlyPrice: {
          amount: 145,
          currency: 'USD'
        },
        type: 'Permanente',
        benefits: [
          {
            id: 'death',
            title: 'Cobertura por fallecimiento',
            description: 'Protección financiera completa para tus beneficiarios'
          },
          {
            id: 'terminal',
            title: 'Pago anticipado por enfermedad terminal',
            description: 'Acceso a un porcentaje del beneficio en caso de diagnóstico terminal'
          },
          {
            id: 'savings',
            title: 'Opción de ahorro e inversión',
            description: 'Construye un fondo de ahorro mientras mantienes tu protección'
          }
        ],
        additionalBenefits: [
          {
            id: 'double',
            title: 'Doble indemnización',
            description: 'Pago doble en caso de muerte accidental'
          },
          {
            id: 'international',
            title: 'Cobertura internacional',
            description: 'Protección donde sea que estés'
          }
        ],
        score: 98,
        recommended: true
      },
      {
        id: '2',
        company: {
          id: 'prudential',
          name: 'Prudential',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Prudential_Financial_logo.svg/2560px-Prudential_Financial_logo.svg.png',
          rating: 4.7,
          description: 'Protección financiera confiable para ti y tu familia'
        },
        name: 'Seguro Vida Flexible',
        coverage: {
          amount: 400000,
          currency: 'USD'
        },
        monthlyPrice: {
          amount: 125,
          currency: 'USD'
        },
        type: 'Permanente',
        benefits: [
          {
            id: 'death',
            title: 'Cobertura por fallecimiento',
            description: 'Protección financiera completa para tus beneficiarios'
          },
          {
            id: 'disability',
            title: 'Cobertura por discapacidad',
            description: 'Protección en caso de discapacidad total y permanente'
          },
          {
            id: 'critical',
            title: 'Enfermedades críticas',
            description: 'Cobertura adicional para enfermedades graves'
          }
        ],
        additionalBenefits: [
          {
            id: 'waiver',
            title: 'Exención de primas',
            description: 'No pagas primas en caso de discapacidad'
          }
        ],
        score: 92,
        recommended: false
      },
      {
        id: '3',
        company: {
          id: 'axa',
          name: 'AXA',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/AXA_Logo.svg/2560px-AXA_Logo.svg.png',
          rating: 4.6,
          description: 'Innovación y excelencia en servicios de seguros'
        },
        name: 'Vida Temporal Premium',
        coverage: {
          amount: 300000,
          currency: 'USD'
        },
        monthlyPrice: {
          amount: 95,
          currency: 'USD'
        },
        type: 'Temporal',
        benefits: [
          {
            id: 'death',
            title: 'Cobertura por fallecimiento',
            description: 'Protección financiera completa para tus beneficiarios'
          },
          {
            id: 'conversion',
            title: 'Opción de conversión',
            description: 'Convierte tu seguro temporal a permanente sin exámenes médicos'
          }
        ],
        additionalBenefits: [
          {
            id: 'renewal',
            title: 'Renovación garantizada',
            description: 'Renueva tu cobertura sin necesidad de nuevas evaluaciones'
          }
        ],
        score: 88,
        recommended: false
      }
    ],
    timestamp: new Date().toISOString()
  };

  return mockResponse;
}

import { useState, FormEvent, ChangeEvent } from 'react';

interface LeadFormData {
  email: string;
  name?: string;
  phone?: string;
}

interface UseLeadFormReturn {
  formData: LeadFormData;
  isLoading: boolean;
  error: string | null;
  handleSubmit: (e: FormEvent) => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  captureLeadData: () => Promise<void>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const useLeadForm = (): UseLeadFormReturn => {
  const [formData, setFormData] = useState<LeadFormData>({
    email: '',
    name: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const captureLeadData = async () => {
    try {
      if (!formData.name || !formData.phone || !formData.email) {
        return;
      }

      // Enviar datos a n8n de forma asíncrona sin esperar la respuesta
      fetch('/api/captureLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      }).catch(console.error); // Manejar errores silenciosamente
    } catch (error) {
      // No hacer nada con el error para no interrumpir el flujo del usuario
      console.error('Error capturing lead:', error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Limpiar el formulario después de un envío exitoso
      resetForm();
    } catch (err) {
      setError('An error occurred while submitting the form');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      name: '',
      phone: '',
    });
    setError(null);
    setCurrentStep(1);
  };

  return {
    formData,
    isLoading,
    error,
    handleSubmit,
    handleChange,
    resetForm,
    captureLeadData,
    currentStep,
    setCurrentStep,
  };
};

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
}

export const useLeadForm = (): UseLeadFormReturn => {
  const [formData, setFormData] = useState<LeadFormData>({
    email: '',
    name: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
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
  };

  return {
    formData,
    isLoading,
    error,
    handleSubmit,
    handleChange,
    resetForm,
  };
};

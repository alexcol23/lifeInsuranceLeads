'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Find Your Perfect Insurance Plan?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let our AI analyze your profile and recommend the best insurance options tailored just for you.
        </p>
        <Button 
          size="lg"
          variant="secondary"
          onClick={scrollToTop}
          className="bg-white text-purple-600 hover:bg-white/90"
        >
          Get AI Recommendations <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
